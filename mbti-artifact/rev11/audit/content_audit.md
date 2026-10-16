# Rev11 content, theory and report audit

Independent pre-release audit. I did not edit any artifact files. The full list of 55 findings is in `content_audit.json`: **1 blocker, 12 major, 42 minor**.

Scripts are in this folder:
- `sample.js` / `sample.json`: the item sample.
- `des_stats.js`: desirability balance.
- `reports.js` / `reports.txt`: three simulated result reports.
- `retest_harsh.js`: stability retest.
- `mixed_msgs.js`: frequency of contradictory signals in reports.

## 1. Theory
**Correct:**
- STACKS for all 16 types.
- Inferior and tertiary by function (partner).
- Keirsey SP/SJ/NF/NT.
- Berens groupings. INTP is BS and INFJ is CC, which matches Berens.
- J/P decoding. For introverts, J/P refers to the auxiliary function. Both the mbti101 box and `explainType` get this right.

**Wrong or overclaimed:**
- The stack section shows the tertiary with a fixed attitude (e.g. INTJ "ตติยภูมิ Fi"). The Myers & Briggs Foundation says the tertiary can be either attitude, and research.md says not to present it as fact.
- The caption says the inferior's attitude "depends on the person". In Myers's model the inferior is the opposite of the dominant in both function and attitude.
- TYPES descriptions use ability words such as "เก่ง", and about half the types get no trade-off.
- The page says its E/I facets follow MBTI Step II. Step II has 5 facets; the quiz has 6.

## 2. Item sample (120 statements, 15 per function with 6 from x/f/q; 40 bipolar items; 12 E/I items)
| Item type | Flagged | Rate |
|---|---|---|
| Statements | 13 / 120 | 10.8% |
| Bipolar items | 13 / 40 | 32.5% (4 of them are already filtered out at runtime) |
| E/I items | 4 / 12 | 33% |
| **Overall** | 30 / 172 | **17.4%** |

Thai wording is natural throughout. No item exceeds 130 characters, and none uses a banned ability word.

**Systematic issues in the bank:**
- **Ti–Fe opposite items favour Fe.** Among the items still in use after the >0.6 filter, the Fe side is favoured by 0.29 on average, and by more than 0.3 in 15 of 31. No item favours Ti by more than 0.3.
- **Fe single statements rate high.** They average 3.52, with 29 of 124 above 3.75. MFC matching hides most of this: the measured gap in built sets is about 0.02.
- **The E/I "ir" (initiating) facet favours E in every item**, by 0.35 to 1.09. One ir item appears in every set.

## 3. Report honesty
"Not official MBTI", the ipsative caveat and the "simulation only" labels are all present. The problems are in the numbers and wording:
- **"ยืนยันแล้ว ~92%" is circular.** The simulated respondents are built from the same dominant 1.2 / auxiliary 0.8 / inferior −0.5 model that predicts and scores the phase-2 items. The text says "ตรงกับไทป์จริง". It also omits that only about 8–10% of simulated respondents ever reach "confirmed".
- **The stability percentages come from the milder simulation model.** Under the harsher model behind the 92% claim, same-type-on-retest rates are 37/63/63/88/92%. The page claims 41/62/77/89/97%; the moderate bin drops 14 points.
- **The setup page claims "ไม่มีฝั่งไหนเป็นคำตอบของคนดี".** The team's own desirability ratings contradict this (see the systematic issues above).
- **References:**
  - McCrae & Costa (1989) is listed twice.
  - The IPIP-Thai entry is marked "checked" although the research file lists it as abstract-only.
  - Six entries do not appear in the r11 research files.
  - Several summaries present the team's own design conclusions as if the source said them.

## 4. Lay readability (simulated INFJ-like, ESTP-like and ambiguous respondents)
The bullets are concrete and anchored in the respondent's answers. A newcomer mostly can follow why each type appears. Problems:
- **Blocker: the mirror-type reason points the wrong way.** In 27% of 400 simulations the #2/#3 card explains the gap with a fact that actually favours the mirror type. Example: "ISTP ตามหลังเพราะ Se (+1.2) ต่ำกว่า Ti (+1.3)".
- **Wrong E/I claim on cards #2/#3.** These cards say "ตัว E มาจากคะแนนฟังก์ชัน" even when the function scores point to I.
- **"Not confirmed" without a reason.** Both clean simulations passed 100% of the phase-2 items but were shown "ยังไม่ผ่านเกณฑ์ยืนยัน", with no reason given. The only criterion they failed was the 0.5 margin over the mirror type.
- **Contradictory signals in one result.** The header says "ห่างพอสมควร", stability says high, and the check says "สรุปไม่ได้".
- **Jargon.** "ไทป์ทำนายคำตอบได้" and "หัวข้อหลัก I/E" will not mean anything to a first-time user. Function codes appear without their Thai names inside quotes.

Clearer Thai text for each of these is in the JSON `suggested_fix` fields.
