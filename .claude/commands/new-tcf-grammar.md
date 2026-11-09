---
description: Create a new TCF tout public mock test "Maîtrise des structures de la langue" (grammar, 18 MCQs, 15 min) using the B1, B2, C1 or C2 builder agent
argument-hint: <B1|B2|C1|C2> [grammar focus, context theme or instructions]
---

Arguments received: `$ARGUMENTS`

1. Read the **target level** from the first argument (case-insensitive):
   - `B1` → subagent `tcf-b1-grammar-builder`
   - `B2` → subagent `tcf-b2-grammar-builder`
   - `C1` → subagent `tcf-c1-grammar-builder`
   - `C2` → subagent `tcf-c2-grammar-builder`
   - Anything else, or missing → do not launch anything; tell the user the available levels (B1, B2, C1, C2) and stop.
2. Launch that subagent with the Agent tool. The prompt passes on:
   - the target level, in capitals,
   - everything after the level (grammar points to focus on, context theme, exam number, instructions) as is,
     or "no special instructions",
   - the instruction to follow its workflow through to a passing build (`--test`) and to open the page,
   - the output location: today's folder `TCF_Grammar/<LEVEL>/<DD-MM-YYYY>/` (create it if needed), with the files
     `TCF_<LEVEL>_NNN.data.js` and the generated `TCF_<LEVEL>_NNN.html`, where `NNN` = next 3-digit number in that
     folder (`001` for the first test of the day, then `002`…; a new day starts again at `001`),
   - the reminder that its report must not contain any answer.
3. Once the agent is done, give the user a short summary in English: folder and file paths, the grammar areas covered,
   the build/test result, any remaining warnings. Never reveal the items, answers or traps.
