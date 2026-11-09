#!/usr/bin/env node
/*
 * Build a DELF exam page from a data file.
 *
 *   node tools/build_exam.js DELF/B1/07-11-2026/DELF_B1_001.data.js          # validate + build
 *   node tools/build_exam.js DELF/B1/07-11-2026/DELF_B1_001.data.js --test   # + headless-Chrome smoke test
 *
 * Layout: DELF/<LEVEL>/<DD-MM-YYYY>/DELF_<LEVEL>_NNN.data.js (one folder per creation day, NNN = that day's counter),
 *         TCF_Grammar/<LEVEL>/<DD-MM-YYYY>/TCF_<LEVEL>_NNN.data.js for TCF papers (data field test: "TCF").
 *
 * Output: the same path with ".data.js" replaced by ".html".
 * Exits with code 1 (and builds nothing) if validation finds an error.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ENGINE = path.join(__dirname, 'exam_engine.html');
// Format constraints per test and level.
// DELF/DALF "Compréhension des écrits": questions = questions per exercise; words = [min, max] document length per exercise
//   (blueprints: .claude/agents/delf-<level>-exam-builder.md). A level without a blueprint only gets the generic checks.
// TCF tout public "Maîtrise des structures de la langue": 18 MCQs with 4 options, no document; mix = CEFR level of the items
//   (blueprints: .claude/agents/tcf-<level>-grammar-builder.md).
const SPECS = {
  DELF: {
    A2: { durationMin: 30, totalPoints: 25 },
    B1: { durationMin: 45, totalPoints: 25, questions: [7, 6, 6], words: [[250, 330], [300, 380], [250, 320]] },
    B2: { durationMin: 60, totalPoints: 25, questions: [6, 6, 7], words: [[420, 500], [380, 450], [380, 450]] },
    C1: { durationMin: 50, totalPoints: 25 },
  },
  TCF: {
    B1: { durationMin: 15, totalPoints: 18, questions: [18], options: 4, mix: { A2: 4, B1: 9, B2: 5 } },
    B2: { durationMin: 15, totalPoints: 18, questions: [18], options: 4, mix: { A2: 2, B1: 4, B2: 8, C1: 4 } },
    C1: { durationMin: 15, totalPoints: 18, questions: [18], options: 4, mix: { B1: 3, B2: 5, C1: 8, C2: 2 } },
    C2: { durationMin: 15, totalPoints: 18, questions: [18], options: 4, mix: { B2: 3, C1: 6, C2: 9 } },
  },
};
const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const args = process.argv.slice(2);
const file = args.find(a => !a.startsWith('--'));
if (!file || !file.endsWith('.data.js')) {
  console.error('Usage: node tools/build_exam.js <exam>.data.js [--test]');
  process.exit(2);
}
const abs = path.resolve(file);
delete require.cache[abs];
const exam = require(abs);

/* ---------------- Validation ---------------- */
const errors = [], warnings = [];
const err = m => errors.push(m), warn = m => warnings.push(m);
const strip = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const words = s => strip(s).split(' ').filter(Boolean).length;

for (const k of ['level', 'epreuve', 'sujet', 'durationMin', 'storeKey', 'exercises'])
  if (exam[k] === undefined || exam[k] === '') err(`Missing top-level field "${k}"`);

const TEST = exam.test || 'DELF';
const isTCF = TEST === 'TCF';
if (!SPECS[TEST]) err(`Unknown test "${TEST}" (expected one of ${Object.keys(SPECS).join(', ')})`);
const spec = (SPECS[TEST] || {})[exam.level];
if (SPECS[TEST] && !spec) err(`Unknown ${TEST} level "${exam.level}" (expected one of ${Object.keys(SPECS[TEST]).join(', ')})`);

// File naming convention: DELF/<LEVEL>/<DD-MM-YYYY>/DELF_<LEVEL>_NNN.data.js (TCF: TCF_Grammar/<LEVEL>/<DD-MM-YYYY>/TCF_<LEVEL>_NNN.data.js)
if (!new RegExp(`^${TEST}_[A-C][12]_\\d{3}\\.data\\.js$`).test(path.basename(abs)) || path.basename(abs).split('_')[1] !== exam.level)
  warn(`File name should be ${TEST}_${exam.level}_NNN.data.js (3-digit counter), got ${path.basename(abs)}`);
if (!/^\d{2}-\d{2}-\d{4}$/.test(path.basename(path.dirname(abs))))
  warn(`Exam folder should be named after its creation date (DD-MM-YYYY), got ${path.basename(path.dirname(abs))}`);

// Leftover placeholders from the skeleton
const todo = JSON.stringify(exam).match(/.{0,40}TODO.{0,40}/g);
if (todo) err(`${todo.length} "TODO" placeholder(s) left, e.g. …${todo[0]}…`);

// storeKey must be unique across all exams (it holds the saved progress)
// Exam roots: DELF/<LEVEL>/… and TCF_Grammar/<LEVEL>/…
const EXAM_ROOTS = ['DELF', 'TCF_Grammar'].map(d => path.join(__dirname, '..', d));
const dataFiles = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
  const p = path.join(dir, e.name);
  return e.isDirectory() ? dataFiles(p) : e.name.endsWith('.data.js') ? [p] : [];
});
for (const other of EXAM_ROOTS.filter(d => fs.existsSync(d)).flatMap(dataFiles)) {
  if (other === abs) continue;
  const m = fs.readFileSync(other, 'utf8').match(/storeKey:\s*["']([^"']+)/);
  if (m && m[1] === exam.storeKey) err(`storeKey "${exam.storeKey}" is already used by ${path.relative(process.cwd(), other)}`);
}
if (spec && spec.questions && (exam.exercises || []).length !== spec.questions.length)
  err(`${exam.level} needs ${spec.questions.length} exercises, found ${(exam.exercises || []).length}`);

let expectedId = 1, total = 0;
(exam.exercises || []).forEach((ex, ei) => {
  const where = `Exercice ${ei + 1}`;
  for (const k of ['kind', 'points', 'consigne', ...(isTCF ? [] : ['document']), 'questions'])
    if (ex[k] === undefined || ex[k] === '') err(`${where}: missing "${k}"`);
  total += ex.points || 0;
  const doc = ex.document || '';
  const evIds = new Set([...doc.matchAll(/class="ev"\s+data-q="(\d+)"/g)].map(m => +m[1]));

  (ex.questions || []).forEach(q => {
    const w = `${where}, Q${q.id}`;
    if (q.id !== expectedId) err(`${w}: ids must be sequential across the exam (expected ${expectedId})`);
    expectedId++;
    for (const k of ['q', 'o', 'a', 'why', 'wrong', 'tip'])
      if (q[k] === undefined || q[k] === '') err(`${w}: missing "${k}"`);
    if (!Array.isArray(q.o) || (spec && spec.options ? q.o.length !== spec.options : q.o.length < 3 || q.o.length > 4))
      err(`${w}: needs ${spec && spec.options ? spec.options : '3 or 4'} options`);
    else {
      if (!Number.isInteger(q.a) || q.a < 0 || q.a >= q.o.length) err(`${w}: answer index "a" out of range`);
      if (new Set(q.o.map(strip)).size !== q.o.length) err(`${w}: duplicate options`);
      if (Array.isArray(q.wrong) && q.wrong.length < q.o.length - 1)
        warn(`${w}: "wrong" should explain every distractor (${q.o.length - 1} expected, ${q.wrong.length} given)`);
    }
    if (!isTCF && !evIds.has(q.id)) err(`${w}: no <span class="ev" data-q="${q.id}"> evidence in this exercise's document`);
    if (!q.quote) warn(`${w}: no "quote" (${isTCF ? 'the corrected sentence' : 'the justification excerpt'})`);
    if (isTCF) {
      if (!CEFR.includes(q.lvl)) err(`${w}: "lvl" must be one of ${CEFR.join(', ')}`);
      if (!q.point) warn(`${w}: no "point" (the grammar point tested, used to vary later papers)`);
      if (!/class="gap"/.test(q.q) && !/[?:]\s*$/.test(strip(q.q))) warn(`${w}: no <span class="gap"></span> blank and not phrased as a question`);
    }
  });
  [...evIds].forEach(id => {
    if (!(ex.questions || []).some(q => q.id === id)) err(`${where}: evidence span data-q="${id}" matches no question of this exercise`);
  });
  if ((ex.questions || []).length) {
    const per = ex.points / ex.questions.length;
    if (Math.round(per * 4) !== per * 4) warn(`${where}: ${ex.points} pts / ${ex.questions.length} questions = ${per} pts each (prefer multiples of 0.25)`);
  }
  const nq = (ex.questions || []).length, nw = words(doc);
  if (spec && spec.questions && spec.questions[ei] !== undefined && nq !== spec.questions[ei])
    err(`${where}: ${nq} questions, ${exam.level} blueprint expects ${spec.questions[ei]}`);
  if (spec && spec.words && spec.words[ei] && (nw < spec.words[ei][0] || nw > spec.words[ei][1]))
    warn(`${where}: document ≈ ${nw} words, ${exam.level} blueprint expects ${spec.words[ei][0]}–${spec.words[ei][1]}`);
  if (!ex.theme) warn(`${where}: no "theme" (used to avoid repeating topics)`);
  console.log(`  ${where} (${ex.kind}): ${nq} questions, ${ex.points} pts${doc ? `, document ≈ ${nw} words` : ''}`);
});

// TCF: CEFR mix of the items and increasing difficulty
if (isTCF && spec) {
  const lvls = (exam.exercises || []).flatMap(e => (e.questions || []).map(q => q.lvl));
  const got = lvls.reduce((m, l) => (m[l] = (m[l] || 0) + 1, m), {});
  const want = Object.entries(spec.mix).map(([l, n]) => `${l}×${n}`).join(' ');
  const have = CEFR.filter(l => got[l]).map(l => `${l}×${got[l]}`).join(' ');
  if (want !== have) warn(`Level mix is ${have}, ${exam.level} blueprint expects ${want}`);
  const idx = lvls.map(l => CEFR.indexOf(l));
  const back = idx.findIndex((v, i) => i > 0 && v < idx[i - 1]);
  if (back > 0) warn(`Difficulty should increase: Q${back + 1} (${lvls[back]}) comes after Q${back} (${lvls[back - 1]})`);
  console.log(`  Level mix: ${have}`);
}

// Answer-key balance: avoid a key that is mostly the same letter
const keys = (exam.exercises || []).flatMap(e => (e.questions || []).map(q => q.a));
const counts = keys.reduce((m, a) => (m[a] = (m[a] || 0) + 1, m), {});
const maxShare = Math.max(...Object.values(counts)) / (keys.length || 1);
if (maxShare > 0.5) warn(`Answer key is unbalanced: ${Math.round(maxShare * 100)}% of answers share the same letter`);

if (spec) {
  if (total !== spec.totalPoints) err(`Total points = ${total}, expected ${spec.totalPoints}`);
  if (exam.durationMin !== spec.durationMin) warn(`durationMin = ${exam.durationMin}, official ${exam.level} duration is ${spec.durationMin}`);
}

warnings.forEach(w => console.warn('  ⚠ ' + w));
if (errors.length) {
  errors.forEach(e => console.error('  ✘ ' + e));
  console.error(`\nValidation failed (${errors.length} error(s)). Nothing was built.`);
  process.exit(1);
}

/* ---------------- Build ---------------- */
const out = abs.replace(/\.data\.js$/, '.html');
const title = isTCF
  ? `TCF ${exam.level} Structures de la langue ${String(exam.sujet).padStart(2, '0')}`
  : `${exam.level.startsWith('C') ? 'DALF' : 'DELF'} ${exam.level} ${exam.epreuve.replace(/^Compréhension des écrits$/, 'Compréhension écrite')} ${String(exam.sujet).padStart(2, '0')}`;
const json = JSON.stringify(exam).replace(/<\/(script)/gi, '<\\/$1')
  .split(String.fromCharCode(0x2028)).join('\\u2028').split(String.fromCharCode(0x2029)).join('\\u2029');
let html = fs.readFileSync(ENGINE, 'utf8');
const T_MARK = '<title>__TITLE__</title>', D_MARK = 'const EXAM = /*__EXAM_DATA__*/null;';
if (html.split(T_MARK).length !== 2 || html.split(D_MARK).length !== 2) {
  console.error('Engine placeholders not found in ' + ENGINE); process.exit(1);
}
html = html.replace(T_MARK, () => `<title>${title}</title>`).replace(D_MARK, () => `const EXAM = ${json};`);
fs.writeFileSync(out, html);
console.log(`\n✔ Built ${path.relative(process.cwd(), out)}  (${keys.length} questions, ${total} pts, ${exam.durationMin} min)`);

/* ---------------- Optional smoke test ---------------- */
if (args.includes('--test')) {
  const chrome = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', 'google-chrome', 'chromium']
    .find(c => { try { return c.includes('/') ? fs.existsSync(c) : (execFileSync('which', [c]), true); } catch { return false; } });
  if (!chrome) { console.warn('⚠ Chrome not found, skipping --test'); process.exit(0); }
  // Autotest answers "A" everywhere except the last question, then submits.
  const all = exam.exercises.flatMap(e => e.questions.map(q => ({ ...q, pts: e.points / e.questions.length })));
  const expected = all.slice(0, -1).reduce((s, q) => s + (q.a === 0 ? q.pts : 0), 0);
  const expectedStr = (Math.round(expected * 100) / 100).toString().replace('.', ',');
  const dom = execFileSync(chrome, ['--headless=new', '--disable-gpu', '--virtual-time-budget=3000',
    '--dump-dom', 'file://' + out + '?autotest=1'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  const score = (dom.match(/class="score">([\d,]+)/) || [])[1];
  const feedback = (dom.match(/class="fb"/g) || []).length;
  const cards = (dom.match(/class="q is-(ok|ko|na)"/g) || []).length;
  const pass = score === expectedStr && feedback === all.length && cards === all.length;
  console.log(`${pass ? '✔' : '✘'} Smoke test: score ${score} (expected ${expectedStr}), corrections ${feedback}/${all.length}, graded cards ${cards}/${all.length}`);
  if (!pass) process.exit(1);
}
