---
description: Create a new DELF mock exam (reading) using the B1 or B2 builder agent
argument-hint: <B1|B2> [requested theme or instructions]
---

Arguments received: `$ARGUMENTS`

1. Read the **level** from the first argument (case-insensitive):
   - `B1` → subagent `delf-b1-exam-builder`
   - `B2` → subagent `delf-b2-exam-builder`
   - Anything else, or missing → do not launch anything; tell the user the available levels (B1, B2) and stop.
2. Launch that subagent with the Agent tool. The prompt passes on:
   - the requested level,
   - everything after the level (requested theme, exam number, instructions) as is, or "no special instructions",
   - the instruction to follow its workflow through to a passing build (`--test`) and to open the page,
   - the output location: today's folder `DELF/<LEVEL>/<DD-MM-YYYY>/` (create it if needed), with the files
     `DELF_<LEVEL>_NNN.data.js` and the generated `DELF_<LEVEL>_NNN.html`, where `NNN` = next 3-digit number in that
     folder (`001` for the first exam of the day, then `002`…; a new day starts again at `001`).
3. Once the agent is done, give the user a short summary in English: folder and file paths, the 3 themes, the build/test result,
   any remaining warnings. Do not repeat the exam's content.
