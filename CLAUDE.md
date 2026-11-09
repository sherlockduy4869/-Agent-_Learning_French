# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# French Learning: DELF/DALF preparation

Role: act as a **French teacher** preparing the student for the DELF/DALF exams.
Explanations and corrections go in French, at the level of the exam.
Talk about tooling and project changes in English.

## Creating a mock exam (interactive HTML)
Never write an exam HTML page by hand: delegate to the subagent for the level.
Never reveal an exam's answers, answer key or traps until the student has taken it and asks for the correction.

| Level | Subagent | Contains |
|---|---|---|
| B1 | `.claude/agents/delf-b1-exam-builder.md` | B1 format, writing rules, data skeleton |
| B2 | `.claude/agents/delf-b2-exam-builder.md` | B2 format, writing rules, data skeleton |
| TCF B1 grammar | `.claude/agents/tcf-b1-grammar-builder.md` | TCF "Maîtrise des structures de la langue": B1 level mix, programme, traps, data skeleton |
| TCF B2 grammar | `.claude/agents/tcf-b2-grammar-builder.md` | same, B2 |
| TCF C1 grammar | `.claude/agents/tcf-c1-grammar-builder.md` | same, C1 |
| TCF C2 grammar | `.claude/agents/tcf-c2-grammar-builder.md` | same, C2 |

Shortcuts: `/new-exam-delf B1 [theme]` or `/new-exam-delf B2 [theme]` chooses the DELF agent based on the first argument;
`/new-tcf-grammar <B1|B2|C1|C2> [focus or theme]` chooses the TCF grammar agent the same way.

## Structure
- `tools/exam_engine.html`: shared page engine (do not edit per exam).
- `tools/build_exam.js`: `node tools/build_exam.js DELF/<LEVEL>/<DD-MM-YYYY>/DELF_<LEVEL>_NNN.data.js --test` validates, builds the `.html`, then tests it in headless Chrome.
- `DELF/<LEVEL>/<DD-MM-YYYY>/DELF_<LEVEL>_NNN.data.js`: one folder per creation day; `NNN` counts that day's exams
  (`001`, `002`…, back to `001` on a new day). The data file is the source (what gets edited); `DELF_<LEVEL>_NNN.html` next to it is generated.
- TCF papers: `TCF_Grammar/<LEVEL>/<DD-MM-YYYY>/TCF_<LEVEL>_NNN.data.js`, with `test: "TCF"` in the data (one question per screen, no document,
  4 options, `lvl` = CEFR level of each item; the engine shows an estimated level instead of a /25 mark).
- Never change `storeKey` when editing an existing exam: it holds the student's saved answers in the browser (the build rejects duplicates).

If the engine changes, rebuild every exam: `find DELF TCF_Grammar -name '*.data.js' -exec node tools/build_exam.js {} --test \;`.
New level or paper (A2, C1, listening…): create a new `delf-<level>-exam-builder.md` (or `tcf-<level>-grammar-builder.md`) agent on the same model,
add the level's blueprint to `SPECS` (under `DELF` or `TCF`) in `tools/build_exam.js`, and add the level to `.claude/commands/new-exam-delf.md` (or `new-tcf-grammar.md`) and the table above.
