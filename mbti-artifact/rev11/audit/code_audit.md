# Rev11 pre-release audit (independent)

**Result: 0 blockers, 4 majors, 9 minors.** Full details are in `code_audit.json`. Every finding was reproduced with the scripts in this folder, except the last minor, which is checked in code only.

## Requirements
| # | Requirement | Verdict |
|---|---|---|
| 1 | Two-option only | **Pass.** 1,672 engine builds (all 4 lengths, 1–22 topics, often x/f/q) plus phase 2, 8.7k "ไม่เกี่ยวกับฉัน" replacements and topic drops: every item `bip`. UI runs (103 screens, including na, topic drop, resume) showed 0 single-statement screens. |
| 2 | Lengths/topics | **Pass.** Every build has exactly L items. 0 crashes, 0 duplicate ids or statements (including after replacement and phase 2), 0 adjacent same-function items in builds and phase 2. Adjacent pairs after replacement appear only when the item is appended at the end with no free slot. |
| 3 | Phase 2 / CH_T | **Pass.** Phase 2 has 13, 15 or 16 items. `status==='confirmed'` iff chOK, with 0 mismatches. "Confirmed" precision is 92.3% in calib2 (n=4,800), matching CH_PREC=92. Minor: confirmed can sit next to an I/E-conflict warning and an "ใกล้เคียง" share caption. |
| 4 | Result page | **Pass.** 3 cards with ph1, ph2 (quoted contradiction or pass), dom/aux, E/I, counter-evidence and gap bullets; MBTI-101 box; stability indicator. J/P decoding is correct for all 16 types (Myers rule). 120 injected results plus 3 full runs: no undefined, NaN, −0.0 or raw HTML; user seed escaped. Minor: "−0.00" on near-ties; "อย่างน้อย 0 จุด" wording. |
| 5 | Concurrency | **Partial.** Two tabs, duplicated tab, link opened twice, finishing in one tab while another continues, wipe in one tab, blocked storage, corrupted map: all OK. No server or shared state: only `window.claude.use("downloads")`, no fetch/XHR/WebSocket. **But a reload is treated as another live tab** (see majors). |
| 6 | Links | **Partial.** Resume and share round-trips OK; old v10 link shows a clean message; truncated link shows an error; checkpoint at 20; back one question (phase 1 and phase 2); pause at the phase-2 intro resumes to the intro. **But the #r1 hash is never cleared**, so a reload rewinds progress. |
| 7 | a11y / 390 px | **Pass.** Keyboard arrows, Enter and Space work on the 5-point scale; all controls labelled; no horizontal scroll on any screen. Minor: `<html>` has no lang. |
| 8 | JS errors | **Pass.** 0 pageerror or console errors across all flows (missing img/* files ignored). |

## Majors (all reproduced)
1. **Reload is treated as a fork.** The TAB id is regenerated on each load, so the tab's own run looks "live elsewhere". The user gets a misleading toast and a duplicate orphan run.
2. **Wiping after a reload does not delete the data.** "สุ่มชุดใหม่" / "ลบความคืบหน้า" leave the orphan. The old **finished result auto-opens for the next visitor** (shared-device privacy).
3. **Reload forks evict other saved runs.** About 6 reloads push a paused, closed run out of the 6-run cap.
4. **Resume-link hash persists.** Reloading the tab replays the link's tape and hides the answers given since.

Scripts: `struct.js`, `repclash.js` (engine); `ui.js`, `conc.js`, `conc2.js`, `results.js` (Playwright); `sim.js`, `calib2.js` (copies of tools/).
