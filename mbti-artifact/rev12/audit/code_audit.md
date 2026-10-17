# rev12 code audit (r11 → r12 changes only)

**Counts:** blocker 0, major 1, minor 6. Details are in `code_audit.json`. The harness scripts are in `scratchpad/aud12/` (engine.js, tape.js, ui.js, and noret.js as a control).

## Major
- **Duplicate "เรื่องเวลาว่างและงานอดิเรก" heading in results.** `contextGaps` was not made CTX_FOLLOW-aware, and the skip test in `chosenByCtx` uses the raw `q.c`. This happens in about 5% of runs where l is chosen. There are 2 deterministic repro links in the JSON. Fix: use `topicOf()` in both places.

## Minor
1. The skip-the-whole-topic prompt is suppressed when only f items are left unanswered (`x.c === topic`).
2. The l chip alone unlocks 84/92 because ctxList counts f. The guard copy "เลือกอย่างน้อย 2 เรื่อง" is now inaccurate for l, and l-only users get one fewer surprise topic.
3. When l is drawn as a surprise topic, the f pool is not added.
4. rev11 saved runs (v:11) are discarded without a notice. Nothing breaks, and rev11 resume links correctly show the "old version" message.
5. The setup note and a disclaimer still say "หุ้นและการลงทุน" after i was renamed.
6. CH_PREC "90–95" does not match the footnote's 95/96/91%. The calibration values are 94.6/95.5/90.5.

## Verified OK
- **Builds:** 5,120 builds of every chip alone and in random 2–5 chip combinations (c and e forced into two thirds of the combinations) at 56/64/84/92 × 40 seeds. All had the exact length, with no empty pool, no duplicate item ids (including MFC halves), no undefined text and no items from unselected contexts. Single non-l chips at 84/92 are locked by design.
- **Full simulated runs:** 588 runs (na answers, replacements, about 566 topic drops, phase-2 probes, contextGaps/chosenByCtx, verify). There were no crashes and no NaN. After `Dl`, no l or f items remained unanswered, and no probe came from a dropped context.
- **RETIRED:** BTiFey1 never appeared. In a control copy with RETIRED emptied, it appeared 178 times, including phase-2 probes and replacements, so the filter is exercised and works.
- **Surprise topics:** pickSurprise never offered f and never repeated a chosen topic. `names()` showed no duplicates in the setup summary, the result footer or the dropped-topics line.
- **UI (Playwright, 390 px):** c sits in the main group and e in the more group, f has no chip, and the labels are correct. เลือกทั้งหมด (23/23) and ล้างที่เลือก (0, start disabled, guard shown) work. The drop prompt names the merged topic, and after the drop no l or f questions came up.
- **Resume:** a pause code containing `lcfe` and `Dl` resumed in a fresh context at the identical question. An r1 link with version b shows the old-version message.
- **Rendering:** no JS errors, scrollWidth is 390 on setup and result, and no undefined or NaN appeared in the results of runs with c, e and l.
