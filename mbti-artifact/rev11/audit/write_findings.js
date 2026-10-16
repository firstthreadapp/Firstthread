const F=[];
const add=(sev,area,id,finding,fix)=>F.push({sev,area,id_or_location:id,finding,suggested_fix:fix});
// ---------- REPORT LOGIC / READABILITY ----------
add("blocker","readability/report-logic","explainType() gap bullet, mode 'mirror' (bulletHtml kind 'gap')",
"The #2/#3 card's reason for the mirror type is written as 'ที่ตามหลังเพราะในคำตอบของคุณ A (x) ต่ำกว่า B (y)' even when that fact argues FOR the mirror type. ESTP simulation: 'ISTP … ที่ตามหลังเพราะ Se (+1.2) ต่ำกว่า Ti (+1.3)'. Ti being higher favours ISTP (Ti dominant). The real reason is the E/I lean. In 400 simulated reports this inverted reason appeared in 109 (27%). The report promises reasons taken from the user's own answers, so a reason that points the wrong way is a false statement.",
"Branch on va>=vb. If va>=vb: '{code} ใช้หน้าที่ชุดเดียวกับ {top} แต่สลับลำดับ ในคำตอบของคุณ {a} ({va}) สูงกว่า {b} ({vb}) จึงเข้าทาง {top} มากกว่า'. Otherwise: '{code} ใช้หน้าที่ชุดเดียวกับ {top} แต่สลับลำดับ คะแนน {b} ({vb}) ของคุณสูงกว่า {a} ({va}) เล็กน้อย ซึ่งเข้าทาง {code} แต่ข้อถามตรงเรื่อง I/E เอียงไปทาง {L} ชัดกว่า ผลรวมจึงให้ {top} นำ สองแบบนี้ใกล้กันมาก ลองอ่านทั้งคู่'.");
add("major","readability/report-logic","explainType() E/I bullet for cards #2/#3 ('ตัว X จึงมาจากคะแนนฟังก์ชันเป็นหลัก')",
"When the I/E score is neutral, every card says 'ตัว {L} จึงมาจากคะแนนฟังก์ชันเป็นหลัก', including cards whose letter is the opposite of what the function scores show. INFJ simulation: the ENFJ card says the E comes from function scores, but the function-only letter is I (letterFn). A reader will believe their answers point to E.",
"For k>0, when L differs from V.ei.letterFn: 'ข้อถามตรงเรื่อง I/E ของคุณอยู่กลาง ๆ จึงไม่ได้ช่วยแยก {code} กับ {top} ตัวอักษร {L} ในการ์ดนี้เป็นของประเภทนี้เอง ไม่ใช่สิ่งที่คำตอบของคุณชี้'.");
add("major","report honesty/readability","renderResult statusTxt for V.status==='close'",
"'ยังไม่ผ่านเกณฑ์ยืนยัน … ผลจึงยังสรุปเป็นประเภทเดียวไม่ได้อย่างมั่นใจ' is shown even when the leader passed 12 of 12 challenge items (100%), as in the INFJ and ESTP simulations, and the text never says which criterion failed. In both cases the only failure was margin < 0.50 against the mirror type. In 400 simulations, 83 of 310 'close' results failed only on the margin, and 42 runs with ≥90% pass were not confirmed. The small print lists the criteria, but a newcomer sees '100%' next to 'not confirmed'.",
"Name the criterion that failed, e.g. 'ยังไม่ผ่านเกณฑ์ยืนยัน: INFJ ผ่านข้อหาจุดค้าน 12/12 ข้อ แต่คะแนนนำอันดับ 2 (ENFJ ซึ่งใช้หน้าที่ชุดเดียวกันสลับลำดับ) อยู่ 0.44 ยังไม่ถึง 0.50 ที่ตั้งไว้ จึงยังบอกไม่ได้ชัดว่าเป็น INFJ หรือ ENFJ'.");
add("major","report honesty","renderResult verifyHtml / CH_PREC=92 ('ยืนยันแล้ว … ตรงกับไทป์จริงราว 92%')",
"The 92% (and 95%) comes from tools/calib2.js. Its simulated respondents are built from the same dominant 1.2 / auxiliary 0.8 / inferior −0.5 structure that predW() uses to choose and score the challenge items. The number shows the code agrees with its own theory, not that it is accurate for people. 'ไทป์จริง' reads as 'your real type'. The page also never says that only about 8–10% of simulated respondents reach 'ยืนยันแล้ว' (calA 466/4800, my rerun 33/400). 'ยืนยันแล้ว' is a strong word for a lay reader.",
"Rename the status 'ผ่านการเช็กซ้ำ' and rewrite: '… ในผู้ตอบจำลองที่สร้างให้ตอบตามทฤษฎีเดียวกับที่หน้านี้ใช้คิดคะแนน ผลที่ผ่านเกณฑ์นี้ตรงกับไทป์ที่ตั้งไว้ให้ราว 92% และมีเพียงราว 1 ใน 10 คนที่ผ่าน ตัวเลขนี้บอกว่าโค้ดทำงานสอดคล้องกับทฤษฎี ไม่ได้บอกว่าแม่นกับคนจริง'.");
add("major","report honesty","RETEST table + stabHtml ('ความนิ่งของผล … ได้อันดับ 1 เดิมเมื่อทำชุดใหม่ซ้ำราว p%')",
"I reran tools/calib.js on r11 (n=640) and reproduced 43/69/78/91/97–100%. That script uses a mild respondent model: no desirability lean, less noise, and the identical person both times. I ran the same retest under the harsher calib2 model, which is the one behind the 92% claim (audit/retest_harsh.js, n=480). Same-top-1 rates were 37/63/63/88/92%, against the claimed 41/62/77/89/97%. The 'ปานกลาง' bin drops 14 points. So the page uses two different simulation models for its two headline numbers, and picks the optimistic one for stability.",
"Show a range, or the conservative value, and say what it is based on: 'ในผู้ตอบจำลอง คนที่ได้ส่วนต่างระดับนี้ได้อันดับ 1 เดิมเมื่อทำซ้ำราว 63–77% (ขึ้นกับว่าจำลองให้ตอบแกว่งมากน้อยแค่ไหน) คาดว่าคนจริงจะเปลี่ยนบ่อยกว่านี้'. Calibrate both numbers with one model.");
add("major","report honesty/item desirability","renderSetup lead text ('ไม่มีฝั่งไหนเป็นคำตอบของ “คนดี”')",
"The team's own desirability ratings contradict this. (1) Ti–Fe opposite items still used after the >0.6 filter: the Fe side is favoured by 0.29 on average, and by more than 0.3 in 15 of 31; no item favours Ti by more than 0.3. (2) Fe single statements average 3.52, with 29 of 124 above 3.75; other functions have 0–8 above 3.75. MFC matching hides most of this: the measured gap in built sets is about 0.02. (3) In the E/I 'ir' (initiating) facet every item favours E (gaps 0.35–1.09), and one ir item is in every set. This is the impression-management risk that research.md (Lalwani 2006) warns about for Thai users.",
"Soften the claim: 'เราพยายามเขียนสองฝั่งให้น่าเลือกใกล้เคียงกัน แต่บางคู่ (โดยเฉพาะฝั่งที่ใส่ใจความรู้สึกคนอื่น หรือฝั่งที่เป็นฝ่ายทักก่อน) อาจยังฟังดูดีกว่า ให้เลือกตามที่คุณทำจริงบ่อยกว่า ไม่ใช่ตามที่อยากเป็น'. Also rewrite the Ti–Fe and ir items listed below, or tighten the bipolar filter to 0.4.");
add("major","theory","renderResult stackSection (ROLE + stackOf) and its caption",
"The stack lists a fixed-attitude tertiary (e.g. INTJ 'ตติยภูมิ Fi'), which research.md says not to present as fact because the Myers & Briggs Foundation says the tertiary can be either attitude. The caption then says 'ตติยภูมิและด้อยขึ้นกับว่าแต่ละคนใช้ในทัศนคติแบบใด'. That is wrong for the inferior: in Myers's type dynamics the inferior is the opposite of the dominant in both function and attitude (INTJ: Se). It also contradicts the 'con' bullet, which states 'Se คือหน้าที่ด้อยของ INFJ'.",
"Show the tertiary as 'F (Fi หรือ Fe)'. Caption: 'หลักและรองตรงกับลำดับที่มูลนิธิ Myers & Briggs เผยแพร่ หน้าที่ด้อยคือหน้าที่ตรงข้ามกับหน้าที่หลักทั้งชนิดและทิศทาง (เช่น INTJ: Ni ↔ Se) ส่วนตติยภูมิ มูลนิธิระบุว่าเป็นแบบหันออกหรือหันเข้าก็ได้ จึงแสดงทั้งสองแบบและคิดคะแนนจากค่าเฉลี่ย'.");
add("minor","readability","explainType dom bullet on card #1 when dominant ranks below auxiliary",
"In the ESTP simulation the #1 card reads 'หน้าที่หลัก Se อยู่อันดับ 2 … หน้าที่รอง Ti อยู่อันดับ 1'. Nothing on that card explains why the result is ESTP and not ISTP. In 57 of 400 simulations (14%) the dominant was not even in the top 2 of the eight bars.",
"On card #1, when rank(dom) > rank(aux), add: '{aux} ของคุณสูงกว่า {dom} เล็กน้อย ซึ่งตามทฤษฎีจะเข้าทาง {mirror} แต่ข้อถามตรงเรื่อง I/E เอียงไปทาง {L} จึงได้ {code} ลองอ่านการ์ด {mirror} ด้วย'.");
add("minor","readability","bulletHtml kind 'ph1' ('ในข้อที่ INFJ ทำนายคำตอบได้ 44 ข้อ คุณตอบไปทางที่ INFJ คาด …')",
"'ไทป์ทำนายคำตอบได้' is jargon. A first-time reader will not see that the line compares their answers with the theory.",
"'ถ้าคุณเป็น {code} ตามทฤษฎี จะเลือกฝั่งได้ชัดใน {n} ข้อ คุณเลือกตรงตามนั้น {pass} ข้อ ตรงข้าม {fail} ข้อ ตอบพอ ๆ กัน {even} ข้อ'.");
add("minor","readability","quoteHtml (examples show only '(Ni)' / '(Se)')",
"Quoted examples label each side only with a code such as Ni or Se. They also repeat two full sentences, so each bullet runs to 3–4 lines on a phone. A newcomer cannot tell what (Se) means inside the quote.",
"Use the short Thai label: '(Se · อยู่กับปัจจุบัน)'. Quote only the chosen side in full and shorten the rejected side to its key clause.");
add("minor","readability","bulletHtml kind 'ei' when b.fit==='weak' but quote is on the type's side",
"ISTP card: 'หัวข้อหลัก I/E ของคุณเอียงไปทาง E (+0.9) ซึ่งไม่ตรงกับตัว I' is followed by 'เช่น คุณเลือก [I side]'. The 'เช่น' reads as an example of leaning E.",
"When the quote goes against the overall lean, lead with 'มีบางข้อที่เข้าทาง {L} เช่น'.");
add("minor","readability","explainType fit labels (rk<=3 fit, <=5 mid)",
"INTJ card: Te at rank 5 with score −0.3 and 3 picks against 10 is labelled 'เข้ากับ INTJ แค่ปานกลาง'. In the ambiguous simulation, Fe at +0.4 (6 picks against 4, 9 even) is labelled 'เข้ากับ ENFJ'. The labels use rank only, so they overstate fit when the profile is flat.",
"Also require the score sign or size: fit = rank≤3 and value≥0.3; weak = rank≥5 or value<0.");
add("minor","readability","eiLabel / I/E bullet rounding (−0.45 shown as −0.5 'กลาง ๆ')",
"fix() rounds −0.45 to −0.5, which is exactly the 0.5 cut-off, yet the label says 'กลาง ๆ'. This looks inconsistent.",
"Show two decimals for I/E, or add '(เกณฑ์ ±0.5)'.");
add("minor","readability","setup + result term 'หัวข้อหลัก I/E'",
"'หัวข้อหลัก I/E' is an internal translation of 'main E/I scale'. A newcomer cannot tell what it means.",
"'ข้อถามตรงเรื่อง I/E (หันเข้า/หันออก)'.");
add("minor","readability","result header 'ห่างจากประเภทอื่นพอสมควร' (as.borderline excludes the mirror type)",
"The header says the result is well clear of other types even when the mirror type is within 0.15 (7.5% of 400 simulations) or stability is 'ต่ำ/ค่อนข้างต่ำ' (9%). In the INFJ simulation the header says 'ห่างพอสมควร', stability says 'ค่อนข้างสูง 89%', and the check says 'สรุปไม่ได้อย่างมั่นใจ'. That is three mixed messages.",
"When the mirror type is close: 'ห่างจากประเภทอื่นพอสมควร ยกเว้น {mirror} ที่ใช้หน้าที่ชุดเดียวกัน'. Better still, merge stability and check status into one summary line.");
add("minor","report honesty","crit text ('ผ่านมากกว่าไทป์คู่แข่งที่ดีที่สุดอย่างน้อย 0 จุด')",
"CH_T.gap = 0 makes the text read 'more than the rival by at least 0 points', which contradicts itself. Ties pass.",
"'ผ่านไม่น้อยกว่าไทป์คู่แข่งที่ดีที่สุด'.");
add("minor","report honesty","renderSetup ('ถามช่วงที่ 2 ราว 16 ข้อเพื่อเช็กซ้ำ') vs result ('ช่วงที่ 2 ไม่ได้ถามซ้ำเพื่อยืนยัน')",
"The setup page and the result page describe phase 2 differently. Simulations also produced 13–15 phase-2 items, not 16.",
"Setup: 'แล้วถามช่วงที่ 2 อีกราว 13–16 ข้อ ที่จงใจหาจุดค้านของผลเบื้องต้น'.");
add("minor","report honesty","stabHtml ('คนจริงมักเปลี่ยนมากกว่านี้')",
"This is stated as fact, but no real-person data exists.",
"'คาดว่าคนจริงจะเปลี่ยนบ่อยกว่านี้'.");
add("minor","report honesty","top3Html consistency line ('ต่ำกว่าราว 65% แปลว่าคำตอบกระจาย')",
"The percentage compares answers with a ranking built from those same answers, so it is circular, and the 65% cut-off has no stated source.",
"Add '(เกณฑ์ตั้งเอง)' or drop the threshold.");
add("minor","report honesty","eiHtml ('แบ่งด้านย่อยตามที่ MBTI Step II เผยแพร่')",
"Step II has 5 E–I facets. The quiz has 6: 'พลังงาน (en)' is not a Step II facet. The REFS entry itself says 'ชื่อด้านย่อย 5 ด้านของ Step II'.",
"'5 ด้านอิงชื่อด้านย่อยของ MBTI Step II และอีก 1 ด้าน (พลังงาน) ที่เราเพิ่มเอง ข้อคำถามเขียนใหม่ทั้งหมด'.");
add("minor","references","REFS: McCrae & Costa (1989) listed twice",
"Two entries for the same paper (Duke and PubMed) with different wording.",
"Keep the PubMed entry, marked 'บทคัดย่อผ่าน PubMed'.");
add("minor","references","REFS: IPIP ฉบับภาษาไทย (digital.car.chula.ac.th/clmjournal …)",
"lv says 'ตรวจแล้ว', but research_thai.md D2 lists this source as [ABS] at a different URL (tci-thaijo).",
"lv: 'ตรวจแล้ว · บทคัดย่อเท่านั้น'. Use the URL that was actually checked.");
add("minor","references","REFS: Hays 2010, Havan & Kohút 2023, Cao & Drasgow (Gwern PDF), Stothart 2019 BAPT, 16Personalities, World Introvert Day",
"None of these appear in the r11 research files, and several have no check level or date ('ตรวจแล้ว' only). Cao & Drasgow is [ABS] in research.md but this entry has no abstract-only marker, and it links a third-party copy of a paywalled paper.",
"Re-verify these sources or mark them 'ตรวจในรุ่นก่อน ไม่ได้ตรวจซ้ำ'. For Cao & Drasgow, link the publisher or experts.illinois.edu record with '(บทคัดย่อ)'.");
add("minor","references","REFS summaries (Stein & Swan, Dickson & Kelly, Fischer, Greenberg, Kang, Harzing)",
"The summaries end with the team's design inference ('จึงควร …') as if the source said it. The Harzing entry says ranking removes response styles, but this quiz uses a 5-point graded scale with a midpoint, so a reader could assume it is immune when it is not.",
"Split each entry into 'ผลของงาน' and '→ เราจึง …'. For Harzing add: 'หน้านี้ใช้สเกล 5 ระดับที่มีตัวเลือกกลาง จึงยังมีการตอบกลาง ๆ ได้'.");
add("minor","theory/wording","captionOf share text ('จากแบบทดสอบ 8 ฟังก์ชันของยุง' / 'ไทป์ของฉันคือ X')",
"'ของยุง' suggests Jung made this test. Elsewhere the page says it is 'แบบสะท้อนตัวเอง ไม่ใช่แบบทดสอบ'. 'ไทป์ของฉันคือ' states an identity, which research.md (McCrae & Costa) advises against.",
"'ผลของฉันใกล้กับ {code} ที่สุด จากแบบสะท้อนตัวเองเรื่อง 8 ฟังก์ชันตามแนวคิดของยุง โดย FirstThread · ไม่ใช่ MBTI ทางการ'.");
add("minor","theory/wording","mbti101 box ('ทุกคนใช้ “หน้าที่ทางความคิด” ทั้ง 8 แบบ แต่มักถนัดอยู่ 2 แบบ')",
"A theory claim is stated as fact. The J/P line in this box is correct: for introverts J/P refers to the auxiliary, with the INFJ example.",
"'ตามทฤษฎีนี้ ทุกคนใช้ได้ทั้ง 8 แบบ แต่มักถนัดอยู่ 2 แบบ'.");
add("minor","theory/wording","TYPES descriptions (INFJ, ENFJ, ESFJ, ESTP, ISTP, ISTJ)",
"Several descriptions use ability words that the item brief bans ('สื่อสารเก่ง', 'ประสานคนเก่ง', 'จัดการเก่ง', 'จับสถานการณ์ได้เก่ง', 'สังเกตเก่ง', 'อ่าน…ได้ละเอียด', 'ทำตามที่รับปากเสมอ'). About half the types get no trade-off at all (INTJ, ENTJ, INFJ, ESTJ, ISTP, ISFP, ESTP, ESFP), while others do. This is the all-positive Barnum pattern research.md advises against, and it makes some types more flattering than others.",
"Replace 'เก่ง' with habits ('มักชวนคน…', 'มักสังเกต…'). Give every type one specific trade-off, e.g. INTJ 'อาจตัดสินเร็วจนคนอื่นตามไม่ทัน', ESTP 'อาจเบื่อเมื่อต้องวางแผนยาว'.");
add("minor","theory/wording","FNAME.Ni 'หยั่งรู้ทิศทาง'",
"'หยั่งรู้' implies foresight ability, which is a virtue word.",
"'มองภาพทิศทาง'.");
// ---------- ITEMS (sample) ----------
const it=(sev,id,finding,fix)=>add(sev,"item bank",id,finding,fix);
it("minor","Niq0 (Ni, q)","Hard to tell apart from Fiq0. 'One clear image of who I am when dressing' reads as Fi or Si consistency, not Ni.","เวลาเลือกเสื้อผ้า ฉันมักนึกก่อนว่าลุคนี้จะสื่อความหมายอะไร แล้วค่อยหาชิ้นที่พาไปถึงภาพนั้น แม้บางทีจะหาไม่เจอสักที");
it("minor","Nel1 (Ne, l)","States a liking for a topic (rule 2), not a habitual way of perceiving. Generic Openness, rated 3.5.","ดูหนังหรืออ่านนิยายจบ ฉันมักนึกต่อว่าถ้าเรื่องหักไปอีกทางจะออกมาได้กี่แบบ จนบางทีลืมตอนจบจริงไปแล้ว");
it("minor","Sex4 (Se, x)","Judging how serious a conflict is from a friend's facial expression is mainly Fe attunement.","ถ้ามีเรื่องไม่เข้าใจกันกับเพื่อน ฉันมักอยากนัดเจอแล้วคุยกันตรงหน้า ตามสิ่งที่เกิดขึ้นตอนนั้น มากกว่าเตรียมไว้ก่อนว่าจะพูดอะไร");
it("minor","Sex0 (Se, x)","Rated 3.9. 'ไม่เสียอารมณ์' is a virtue (emotional stability), and the item has no cost.","นัดกับเพื่อนแล้วแผนพัง เช่น ร้านปิด ฉันมักมองหาว่าแถวนั้นมีอะไรให้ทำต่อทันที จนบางทีเพื่อนที่อยากได้ร้านแบบเดิมต้องยอมตาม");
it("minor","Sey2 (Se, y)","'มากกว่าเรื่องชาติหน้า' implicitly judges a Buddhist belief (rule 6). Devout respondents may avoid this side for reasons other than Se.","เรื่องความเชื่อ ฉันอินกับสิ่งที่ได้สัมผัสตรงหน้า เช่น กลิ่นธูป เสียงสวด หรือบรรยากาศในวัด มากกว่าการนั่งฟังคำอธิบาย");
it("minor","Sep2 (Se, p)","This is sensation seeking or topic liking, not Se attention to the present. It also depends on access and age.","ระหว่างเล่นกีฬา ฉันมักตัดสินใจจากสิ่งที่เห็นในจังหวะนั้น เช่น ช่องว่างหรือท่าทางคู่แข่ง มากกว่าแผนที่คิดไว้ก่อนลงสนาม");
it("minor","Tel1 (Te, l)","Rated 3.85 with no cost. It is a virtue item and partly J.","ฉันชอบจัดบ้านหรือกิจวัตรให้เป็นระบบที่ใช้งานเร็ว แม้คนในบ้านจะบ่นว่าต้องทำตามระบบของฉัน");
it("minor","Tel2 (Te, l)","Rated 3.74. Self-improvement topic liking; Si or Se readers would also endorse it.","เวลาว่าง ฉันมักเลือกหนังสือหรือคอร์สจากว่าจะเอาไปใช้ได้จริงแค่ไหน จนบางทีข้ามเรื่องที่อ่านเพลิน ๆ ไป");
it("major","Fed0 (Fe, d)","Rated 4.11 with no cost. It is the 'good person' answer and can only pair with other high-desirability statements.","เวลาทำหรือเลือกอาหาร ฉันมักเลือกตามที่คิดว่าทุกคนในวงจะชอบ จนบางทีไม่ได้กินเมนูที่ตัวเองอยากกิน");
it("major","Fem2 (Fe, m)","Rated 4.06. The cost 'แม้จะไม่ได้สนิท' makes the item more virtuous, not less.","ถ้าเพื่อนโพสต์อะไรดูเศร้า ฉันมักรีบทักไปถาม แม้บางทีเขาแค่อยากระบาย ไม่ได้อยากให้ใครถามต่อ");
it("minor","Fex3 (Fe, x)","Rated 3.91. The cost is weak.","ถ้าเพื่อนในกลุ่มคนหนึ่งดูเงียบไปผิดปกติ ฉันมักไม่สบายใจจนต้องทักเขาแยก แม้บางทีเขาแค่อยากอยู่เงียบ ๆ แล้วรู้สึกเหมือนโดนจับตา");
it("minor","Feb0 (Fe, b)","Recommending books to people is an E behaviour (talking and sharing). Rated 3.7, no cost.","ก่อนจะเล่าถึงหนังสือที่อ่าน ฉันมักดูก่อนว่าคนตรงหน้าน่าจะอินกับเล่มไหน แล้วเลือกเล่าเล่มนั้น แม้จะไม่ใช่เล่มที่ฉันชอบที่สุด");
it("minor","Fiq4 / Fix4 (Fi, q/x)","Same cost clause 'แม้จะดูไม่เข้าพวกไปบ้าง' in both items. Repeated stems make the target easy to guess (Fuechtenhans & Brown 2026).","Fiq4: เทรนด์ที่ฉันรู้สึกว่าไม่ใช่ตัวเอง ต่อให้คนรอบตัวใส่กันหมด ฉันก็ไม่ค่อยอยากตาม แม้จะถูกแซวว่าตกยุค");
it("major","BNiSez0 (Ni–Se, z)","Side A 'มีภาพปลายทาง แล้วเดินเข้าหาทีละก้าว' is planned stepwise (Te/J). Side B 'ปล่อยให้ทางเปิดเอง' is P. The item mostly measures J vs P. Gap 0.49, and the item is in use.","A: ฉันมักรู้สึกถึงปลายทางหนึ่งภาพที่ชีวิตกำลังพาไป แม้ยังบอกไม่ได้ว่าจะไปถึงด้วยวิธีไหน | B: ฉันมักเห็นโอกาสที่โผล่มาตรงหน้าก่อน แล้วลองคว้าดู แม้ยังไม่รู้ว่าจะพาไปไหน");
it("minor","BNiSex1 (Ni–Se, x)","The Ni side ('มีความหมายกับมิตรภาพเรา') is relational meaning (F), not convergent insight.","A: ทริปกับเพื่อนที่ฉันชอบ คือทริปที่กลับมาแล้วเห็นภาพว่ามิตรภาพเรากำลังเปลี่ยนไปทางไหน | B: (เดิม)");
it("minor","BNiSej0 (Ni–Se, j)","The Se side 'ได้กิน ได้เที่ยว ได้ลอง' sounds shallow next to 'เข้าใจชีวิตตัวเอง'. Gap 0.36.","B: ทริปที่ดีคือทริปที่ได้ซึมซับทุกอย่างตรงหน้าเต็มที่ ทั้งรส กลิ่น เสียง และผู้คน");
it("minor","BNeSi5 (Ne–Si, o)","The Si side has a success outcome ('พางานไปถึงปลายทาง') and the Ne side a negative one. Gap −0.31.","A: ระหว่างทำงาน ฉันมักเห็นทางเลือกใหม่ผุดขึ้นมาแล้วอยากลอง แม้จะทำให้งานออกมาต่างจากที่ตั้งใจ | B: ระหว่างทำงาน ฉันมักนึกถึงวิธีที่เคยได้ผล แล้วใช้วิธีนั้นต่อ แม้จะมีทางใหม่ที่ยังไม่ได้ลอง");
it("major","BTiFe0 (Ti–Fe, o)","The Fe side is favoured by 0.49 and still in use: 'ทุกฝ่ายยังรู้สึกดีต่อกัน' has no cost.","B: เวลาเห็นต่างกัน สิ่งแรกที่ฉันอยากได้คือให้ทุกฝ่ายยังรู้สึกดีต่อกัน แม้ประเด็นที่เถียงกันจะยังไม่จบ");
it("minor","BTiFeu0 (Ti–Fe, u)","The Fe side is favoured by 0.45, and the item is in use. The Ti cost ('ไม่ค่อยมีคนอิน') is social, while the Fe cost is mild.","A: ฉันมักชอบเพลงเพราะได้แกะว่าโครงสร้างในนั้นทำงานยังไง แม้ฟังแล้วจะไม่ได้อินตามเนื้อเพลง | B: ฉันมักชอบเพลงเพราะมันทำให้คนฟังรู้สึกร่วมกัน แม้ฟังคนเดียวแล้วจะรู้สึกเฉย ๆ");
it("minor","BTiFeu1, BTiFey0, BTiFev0, BTiFe3 (Ti–Fe)","Fe is favoured by 0.69–1.0. bipPool already drops them (gap > 0.6), so they are dead items. They show the Ti–Fe drafting bias: in each the Ti side gets a socially awkward cost and the Fe side none.","u1 A: เปิดเพลงในวง ฉันมักเลือกตามเกณฑ์ของตัวเองว่าเพลงไหนลงตัว แม้วงอาจไม่ได้อินไปด้วย | B: …ฉันมักเลือกเพลงที่ทุกคนร้องตามได้ แม้จะเป็นเพลงที่ฉันฟังจนเบื่อแล้ว · y0 A cost → 'แม้จะคุยนานกว่าที่วงตั้งใจไว้' · v0 B cost → 'แม้จะไม่ได้บอกว่าตัวเองคิดยังไง' · 3 B cost → 'แม้จะตามเนื้อหาที่คุยไม่ทัน'");
it("minor","BTeFiq1 (Te–Fi, q)","Gift-giving is not 'รสนิยมส่วนตัว'. The Fi side 'สื่อใจของคนให้' is closer to Fe (expressing care to someone). Fi favoured by 0.4.","Move to context x. A: ของขวัญที่ดี คือของที่คนรับเอาไปใช้ได้จริง แม้จะดูธรรมดาไปหน่อย | B: ของขวัญที่ดี คือของที่ฉันรู้สึกว่าเลือกมาจากใจจริง แม้คนรับอาจไม่ได้ใช้บ่อย");
it("minor","BTeFi3 (Te–Fi, o)","Te is favoured by 0.57 and the item is in use. In Thai group work 'ตรงกับสิ่งที่ฉันเห็นว่ามีคุณค่า' sounds self-centred.","A: …ฉันให้น้ำหนักกับสิ่งที่ทำให้งานเดินหน้าและวัดผลได้ แม้บางคนในทีมจะไม่ได้อินกับงาน | B: …ฉันให้น้ำหนักกับว่างานนั้นตรงกับสิ่งที่ฉันให้ค่าไหม แม้จะทำให้งานเดินช้าลง");
it("minor","BTeFia0 (Te–Fi, a)","The Te side has 'มีคนรอใช้งาน', which adds responsibility (desirable) and others' needs. Gap 0.6. The filter drops it only by floating-point margin.","A: เวลาเลือกว่าจะทำงานศิลปะชิ้นไหนต่อ ฉันเลือกชิ้นที่มีกำหนดส่งหรือวัดผลได้ก่อน แม้จะไม่ใช่ชิ้นที่อยากทำที่สุด");
it("major","EIir5 (E/I ir)","The E side is favoured by 1.09 (3.94 vs 2.85). The I side 'รอให้เขาทักมาก่อน' reads as a passive, worse friend. All ir items favour E (0.35–1.09), and one ir item is in every set.","E: กับเพื่อนที่ห่างกันไปนาน ฉันมักทักไปก่อนเมื่อนึกถึง แม้จะเป็นแค่เรื่องเล็ก ๆ ไม่มีอะไร | I: กับเพื่อนที่ห่างกันไปนาน ฉันมักรอจังหวะที่มีเรื่องอยากคุยจริง ๆ แล้วพอได้คุยก็ต่อกันได้เหมือนเพิ่งเจอ");
it("major","EIir0 (E/I ir)","Gap 0.80. The I-side cost 'คนที่อยากรู้จักจะไม่ได้คุยด้วย' signals shyness or regret. The page says I/E is not shyness.","E: ไปงานที่ไม่รู้จักใคร ฉันมักเดินไปทักคนใกล้ ๆ ก่อน แม้บางวงจะคุยกันแค่ผิว ๆ | I: ไปงานที่ไม่รู้จักใคร ฉันมักดูบรรยากาศสักพัก แล้วคุยกับคนที่เข้ามาทักหรือนั่งข้าง ๆ แม้จะได้รู้จักคนไม่กี่คน");
it("minor","EIeq1 (E/I eq)","'ชวนเล่นชวนหัวเราะ ทำให้วงคึก' is charm or social skill (gap 0.37), and it overlaps the ec facet.","E: ในวงคุย ฉันมักพูดเร็ว เสียงดัง และขยับตัวเยอะเวลาสนุก | I: ในวงคุย ฉันมักสนุกแบบเงียบ ๆ ยิ้มและฟังเป็นส่วนใหญ่");
it("minor","EIen3 (E/I en)","Restates the definition word for word, so it is fully transparent about what it measures (Fuechtenhans & Brown 2026).","E: นั่งรถไปไหนนาน ๆ ฉันมักมองคนและสิ่งที่เกิดขึ้นนอกหน้าต่าง | I: นั่งรถไปไหนนาน ๆ ฉันมักจมอยู่กับความคิดของตัวเองจนลืมดูข้างนอก");
require('fs').writeFileSync(__dirname+'/content_audit.json',JSON.stringify(F,null,1));
const c={};F.forEach(x=>c[x.sev]=(c[x.sev]||0)+1);console.log(F.length,JSON.stringify(c));
