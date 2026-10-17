# Rev12 content audit (changed items only)

**Scope.**
- 331 new items: 274 statements and 57 bipolar items.
- 53 rewrites.
- 1 retired item (BTiFey1).
- I read every changed item closely, which is 384 items, not a sample.
- Scripts ran over all 448 changed texts (each bipolar side counted separately) for these checks:
  - length;
  - bipolar length ratio;
  - desirability band and gap;
  - word lists from research_fc §3 and research_thai §3;
  - religion, hierarchy, conflict, blame, high-stakes, money, school and age/gender keywords;
  - spacing of ๆ and quote style;
  - cost-connector counts and function-marker counts;
  - near-duplicates (character 3-gram Jaccard) against the full rebuilt bank: bank_r11, plus fix, plus final.json items, giving 1,266 statements and 221 bipolar items, with the l+f pools merged.
- I also scanned untouched existing items for religion in y and school-only scenes in s.

**Result.** 66 findings: **2 blockers, 37 major, 27 minor**. Details are in `content_audit.json`; every finding carries a Thai fix, and every fix was checked to be 40–130 characters with bipolar sides within ±20% of each other.

## What passed
- **Length and format:**
  - all changed texts are 40–130 characters;
  - every bipolar pair is within ±20%;
  - spacing of ๆ and quote style match the bank;
  - no ability, virtue or outcome words, and no absolutes. The only absolutes are "ยังไม่เคย", which is not a frequency claim, and "ทุกอย่าง" in Siy2, which is flagged.
- **Brief rules held:**
  - no blame in mishap scenes;
  - no arguing or refusing scenes among the new items;
  - no family, elder, teacher or boss scenes;
  - no age or tech-savvy stereotypes in e;
  - no "how much do you spend" or saving items in i;
  - no school-only scenes left in s. The rewrites removed ครู, สอบ and ห้องเรียน.
- **Mishap and decision mix:** 139 mishap scenes, 145 decision scenes and 47 plain items.

## Blockers
1. **Fiy2** is an untouched y item: "ไม่อยากให้ใครมาบอกว่าฉันต้องเชื่ออะไร". This is religious-belief framing in the now-secular y context, and it also reads as a refusal.
2. **BTeFiy1** is an untouched y bipolar item. Both sides read "ความเชื่อที่มีค่าคือ…", which is belief framing with no cost on either side.

The CHANGELOG says every religious item was rewritten, but seven more untouched y items still use ความเชื่อ or เชื่อ. Four are major (Fiy0, Fiy5, Ney3, Tiy5) and three are minor (Ney2, Niy2, Tiy0).

## Major themes
- **Mishap scenes reward coping competence.** In new mishap bipolar items:
  - Se is rated more desirable than Ni in 8/8, by +0.28 on average;
  - Te beats Fi in 5/5, by +0.28;
  - Fe beats Ti in 4/4, by +0.25.

  New mishap statements show the same pattern: Se averages 3.30 against 2.91 for Ni. Because the engine only drops pairs with a gap above 0.5, these pairs will ship and push fakers toward S, T and Fe.
- **Bipolar gaps of 0.35–0.49.** Fifteen pairs, which all pass the engine's filter. Four of them are at 0.48–0.49: BTiFee1, BNiSep1, BNiSee1 and BTeFij2.
- **Two rewritten pairs are above the neutral band on both sides:** BTeFis0 at 3.84/3.74 and BNiSey1 at 3.74/3.61.
- **Good-person statements, des 3.51–3.64.**
  - Fe items: Fei7, Few6, Fey6, Feq6, Fen6, Fej6. Four of these (Feq6, Fen6, Fej6, plus Fec5 as a minor) use a self-sacrifice cost, which the rev12 debate rejected.
  - Competent-coping Se items: Sec3, Sew6, Set4.
  - The rewrite Fey0, at 3.61.
- **Lexical tells.** Each row is the share of new items for that function containing the marker words.

  | Function | Marker words | Share in that function | Share in other functions |
  |---|---|---|---|
  | Fi | ใจ… / เป็นตัวเอง | 61% | ≤6% |
  | Ne | หลายแบบ / หลายทาง | 61% | ≤2% |
  | Si | เดิม / เคย / คุ้น | 88% | — |
  | Ti | ไล่ / เพราะอะไร | 71% | — |
  | Se | ตรงหน้า / ของจริง | 62% | — |
  | Ni | ภาพ / แก่น | 56% | — |
  | Fe | ทุกคน / ห่วง | 47% | — |

  Fi and Ne are the worst, because one word gives away the function.
- **Duplicates.**
  - Seq6 is nearly identical to Sec4.
  - Sim4 repeats Sie2.
  - Siq6, Sii7 and BNeSia1.b are three versions of "the usual item was discontinued, so I hunt for the closest match".
  - Nil6 repeats Nif0 inside the merged l+f pool.

## Cost endings (new items)

**Connector used for the cost clause:**

| Function | "แม้" | "จน" / "จนบางที" | Other or none |
|---|---|---|---|
| Fi | 48 | 1 | — |
| Te | 46 | 4 | — |
| Ni | 36 | 7 | 5 |
| Si | 38 | 5 | 7 none |
| Se | 35 | 2 | 13 |
| Ne | 27 | 22 | — |
| Ti | 25 | 18 | 2 none |
| Fe | 23 | 23 | 1 |

**Most repeated stems:**
- "แม้จะยังไม่ได้…" appears in Se 10/50 and Ni 10/48.
- "…ที่ตั้งใจ" appears in Ne 7, Se 6 and Te 5.
- "แม้จะไม่ใช่…" appears in Te 7.
- "แม้บางคน…" appears in Fe 4.

Unlike rev11's "แม้จะอธิบายเหตุผลไม่ได้", no single ending is owned by one function. The connector split above is the remaining tell.

## Recommendation
- Fix the 2 blockers and the 7 residual y "ความเชื่อ" items before release.
- Rewrite the 15 bipolar pairs with gaps of 0.35 or more, the 2 out-of-band pairs, and the 10 statements at or above 3.5. Then re-rate them blind.
- Put the bipolar pairs with gaps of 0.26–0.34 into the fake-good pilot before relying on them.
