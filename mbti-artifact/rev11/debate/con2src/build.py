import json,sys
D='/tmp/claude-0/-home-user-Firstthread/e931de2c-f018-5589-abea-b2596fdb8974/scratchpad/r11/debate/'
pro=json.load(open(D+'r2_pro2.json'))
A={}  # id -> (why, proDes)
O={}  # id -> (why, proDes, counter, counterDes)
def a(i,why,d): A[i]=(why,d)
def o(i,why,d,c,cd): O[i]=(why,d,c,cd)
ab=lambda x,y:{"a":x,"b":y}
ei=lambda x,y:{"E":x,"I":y}

a("BNeSi1","Absolute removed; parallel small costs (miss vs no novelty); Ne/Si intact.",ab(3.4,3.4))
a("BNeSi7","Ne = imagining other uses, Si = comparing with past item; parallel, no ability words.",ab(3.4,3.3))
a("BNeSia0","Symmetric costs; 'วนฝึก...คุ้นมือ' still Si without sounding lazy.",ab(3.3,3.3))
o("BNeSif0","Ne side's cost 'ของจะรกเต็มห้อง' is a messiness/ไร้ระเบียบ label unrelated to Ne and assumes physical hobbies; it pulls side a below b.",ab(3.2,3.5),
  ab("ฉันชอบมีงานอดิเรกหลายอย่างหมุนเวียนกัน ให้แต่ละอย่างจุดไอเดียให้อีกอย่าง แม้บางอย่างจะห่างมือไปนาน","ฉันชอบมีงานอดิเรกหลักไม่กี่อย่าง แล้วทำซ้ำจนกลายเป็นกิจวัตร แม้บางช่วงจะรู้สึกซ้ำ ๆ"),ab(3.4,3.4))
a("BNeSih1","Absolute gone; both sides warm and parallel (new together vs familiar comfort).",ab(3.6,3.6))
a("BNeSim0","Only the absolute changed; still balanced.",ab(3.4,3.4))
a("BNeSiv0","Absolute removed, meaning preserved; balanced.",ab(3.5,3.5))
a("BNeSix1","Parallel 'ดูไกลตัว' vs 'ดูธรรมดา' costs; balanced. (Note: statement Nex3 duplicates side a — see Nex3.)",ab(3.5,3.4))
a("BNiSe5","Costs now symmetric (miss opportunity vs drift from plan); Ni/Se clear.",ab(3.4,3.4))
o("BNiSef1","Side b 'จดจ่อกับมือ ตา และเสียง' is unnatural Thai (one does not จดจ่อกับมือ) and now duplicates statement Sef2 (sensory absorption in the same context).",ab(3.4,3.4),
  ab("งานอดิเรกที่ใช่ คือสิ่งที่ฉันรู้สึกว่ามันกำลังพาไปสู่อะไรบางอย่างในชีวิตข้างหน้า","งานอดิเรกที่ใช่ คือสิ่งที่ทำแล้วได้เห็น ได้จับ ได้ยินผลของมันทันทีตรงหน้า"),ab(3.4,3.4))
a("BNiSem0","Se side no longer 'เพลิน' (mindless scrolling); both are observing habits.",ab(3.4,3.3))
a("BNiSeq1","Ni = sense of who I'm becoming (trajectory, not image management); Se = tactile try-on. Balanced.",ab(3.4,3.5))
a("BNiSex0","Se side is now perceptual (face, voice, posture) not 'helping now'; virtue gap closed.",ab(3.4,3.5))
a("BTeFi1","Symmetric costs, parallel stems; length fixed.",ab(3.4,3.4))
o("BTeFi2","Te side 'เสนอวิธีที่ลัดกว่า' is a helpful contribution to the group while Fi side 'ทำส่วนของฉันตามนั้น' reads as going one's own way inside a group (Egotism ↓). One-sided cost: neither side has a cost but only b carries the social risk implicitly.",ab(3.6,3.1),
  ab("เห็นวิธีทำงานในกลุ่มที่ฉันไม่โอเค ฉันมักดูว่ามันเสียเวลาตรงไหน แล้วเสนอขั้นตอนที่สั้นกว่า แม้บางคนจะยังชินกับแบบเดิม","เห็นวิธีทำงานในกลุ่มที่ฉันไม่โอเค ฉันมักดูว่ามันขัดกับสิ่งที่ฉันให้ค่าตรงไหน แล้วทำส่วนของฉันในแบบที่สบายใจ แม้จะดูไม่เข้าพวก"),ab(3.4,3.3))
o("BTeFi8","Te cost 'ไม่ได้มีความหมายอะไรกับใจ' is not felt as a cost by most Thai shoppers; comparing specs/price stays the prudent (รอบคอบ/พอเพียง) answer, while 'เดินหาอยู่นาน' adds a picky (เรื่องมาก) tinge to Fi.",ab(3.6,3.3),
  ab("เวลาเลือกซื้อของ ฉันมักเลือกชิ้นที่สเปกและราคาคุ้มที่สุดตามที่เทียบไว้ แม้หน้าตาจะไม่ค่อยเป็นแบบที่ชอบ","เวลาเลือกซื้อของ ฉันมักเลือกชิ้นที่ใช้แล้วรู้สึกว่าใช่ตัวฉัน แม้สเปกจะไม่ใช่ตัวที่คุ้มที่สุด"),ab(3.4,3.4))
a("BTeFih0","Length fixed, parallel; both are reasonable ways to judge seriousness.",ab(3.5,3.5))
o("BTeFii1","Side b now explicitly breaks one's own stop-loss ('ถือต่อ...แม้จะเลยจุดนั้นไปแล้ว') = undisciplined investor; Te side is the textbook disciplined answer. Gap ~0.5. Re-selecting stocks by values would duplicate BTeFii0, so keep the stop-loss stem and make b reflective, not rule-breaking.",ab(3.6,3.1),
  ab("เวลาหุ้นที่ถือขาดทุนถึงจุดที่ตั้งไว้ ฉันมักขายตามกฎที่วางไว้ทันที แม้ใจจะยังเชื่อในสิ่งที่บริษัทนั้นทำ","เวลาหุ้นที่ถือขาดทุนถึงจุดที่ตั้งไว้ ฉันมักถามตัวเองก่อนว่าบริษัทยังทำสิ่งที่ฉันเชื่ออยู่ไหม แม้จะทำให้ตัดสินใจขายช้าลง"),ab(3.5,3.3))
a("BTeFin1","Te = numbers and actionable implications, Fi = what it touches in my values; parallel, no cost either side.",ab(3.4,3.4))
a("BTeFiu0","Symmetric mirrored costs; Te (music as tool) vs Fi (inner state) clear.",ab(3.4,3.4))
a("BTeFiy1","Ability word removed; pragmatic vs authentic both respectable.",ab(3.4,3.5))
a("BTeFiz1","Parallel stem added, length fixed.",ab(3.5,3.4))
a("BTiFe10","Both comply first (no face threat); Ti = inner itch for reasons, Fe = going with people around. Balanced.",ab(3.4,3.3))
a("BTiFe4","Labels gone; mirrored costs; clean Ti/Fe contrast.",ab(3.3,3.3))
a("BTiFe8","Symmetric costs (listener displeased vs not fully candid).",ab(3.3,3.2))
o("BTiFed0","'ไล่บอก' reads as listing faults at a friend — harsher than the behaviour needs; with b still the Thai polite default, gap stays ~0.3.",ab(3.2,3.5),
  ab("เวลาเพื่อนสนิทให้ชิมอาหารที่เขาทำ ฉันมักบอกว่ารสไหนยังไม่สมดุลและน่าจะเพราะอะไร แม้บรรยากาศจะเงียบไปพักหนึ่ง","เวลาเพื่อนสนิทให้ชิมอาหารที่เขาทำ ฉันมักชมส่วนที่อร่อยไว้ก่อน แม้จุดที่ควรปรับจะยังไม่ได้พูด"),ab(3.4,3.4))
o("BTiFef1","Fe cost 'ส่วนที่ฉันชอบจริง ๆ ไม่ได้เล่า' is self-sacrifice for the listener (เสียสละ ↑), while Ti cost 'ลงรายละเอียดเกิน' is annoying; cost on b is actually a virtue.",ab(3.2,3.6),
  ab("เพื่อนถามเรื่องงานอดิเรกของฉัน ฉันมักอธิบายว่ามันทำงานแบบนั้นเพราะอะไร จนบางทีลงรายละเอียดมากกว่าที่เขาถาม","เพื่อนถามเรื่องงานอดิเรกของฉัน ฉันมักเล่าเฉพาะมุมที่เขาน่าจะอิน จนบางทีเล่าไม่ครบอย่างที่มันเป็นจริง"),ab(3.3,3.3))
a("BTiFeh1","Fe side no longer the textbook 'listen first'; both carry a relational cost.",ab(3.2,3.3))
a("BTiFej1","Mirrored costs; Fe still slightly favoured on trips but within 0.2.",ab(3.3,3.5))
a("BTiFep0","'เถียง' removed; symmetric costs.",ab(3.4,3.4))
o("BTiFeq1","Fe side = dressing/choosing to suit the occasion, i.e. รู้กาลเทศะ, a strong Thai virtue; Ti side has no counterweight. 'คนในงานนั้น' is also clumsy.",ab(3.3,3.7),
  ab("ฉันมองว่ารสนิยมดีคือสิ่งที่อธิบายได้ว่าแต่ละส่วนลงตัวกันเพราะอะไร แม้คนรอบตัวจะไม่ได้ชอบไปด้วย","ฉันมองว่ารสนิยมดีคือสิ่งที่คนรอบตัวเห็นแล้วชอบไปด้วย แม้จะอธิบายไม่ได้ว่าลงตัวเพราะอะไร"),ab(3.4,3.4))
o("BTiFex0","Fe cost 'ยังไม่ได้ข้อสรุปว่าใครถูก' is not a cost in Thai culture — not needing a verdict is itself the harmony virtue; b remains the ideal (~3.8).",ab(3.3,3.8),
  ab("เพื่อนสองคนทะเลาะกัน ฉันอยากรู้ก่อนว่าเหตุผลของแต่ละฝั่งฟังขึ้นแค่ไหน แม้อาจถูกมองว่าเข้าข้างใคร","เพื่อนสองคนทะเลาะกัน ฉันอยากให้ทั้งคู่ดีกันไว้ก่อน แม้เรื่องเดิมอาจวนกลับมาอีก"),ab(3.4,3.5))
o("BTiFez1","Fe side 'ได้ทำอะไรร่วมกับคนรอบตัว' is gregariousness (E confound), not Fe's shared values/attunement; its cost (not my top interest) reads as accommodating virtue.",ab(3.4,3.6),
  ab("ความฝันของฉันมักผูกกับการได้เข้าใจเรื่องที่สนใจจนต่อกันครบ แม้คนรอบตัวจะไม่ได้สนใจด้วย","ความฝันของฉันมักผูกกับสิ่งที่คนรอบตัวเห็นว่ามีค่าร่วมกัน แม้จะไม่ใช่เรื่องที่ฉันสนใจที่สุด"),ab(3.4,3.4))
a("EIeq3","'พูดเยอะ' vs good-listener virtue removed; now pure atmosphere preference, both attractive.",ei(3.5,3.4))
o("EIir0","Now double-barrelled across facets: E = initiate + many circles (gi), I = wait + one long talk (gi). Someone who initiates then sticks with one person cannot answer.",ei(3.4,3.3),
  ei("ไปงานที่ไม่รู้จักใคร ฉันมักเดินไปทักคนที่ยืนอยู่ใกล้ ๆ ก่อน แล้วค่อยคุยต่อ","ไปงานที่ไม่รู้จักใคร ฉันมักรอให้มีคนเดินมาทักก่อน แล้วค่อยคุยต่อ"),ei(3.4,3.3))
a("EIir3","Length fixed with parallel tails; clean ir facet.",ei(3.4,3.4))
o("EIir5","I side 'รอให้เขาทักมาก่อน' with no counterweight reads as not valuing the friendship (Thais see reaching out as มีน้ำใจ). Gap ~0.4. Give E a cost and I its warm continuation.",ei(3.6,3.2),
  ei("กับเพื่อนที่ห่างกันไปนาน ฉันมักเป็นคนทักไปก่อน แม้บางทีอีกฝ่ายจะตอบกลับช้า","กับเพื่อนที่ห่างกันไปนาน ฉันมักรอให้เขาทักมาก่อน แล้วก็คุยต่อได้เหมือนเพิ่งเจอกัน"),ei(3.4,3.4))
a("Fef1","Fe as following group norms/manners with a mild cost; not เสียสละ any more.",3.5)
o("Fef3","Overshoots: 'จนความเห็นของตัวเองหายไป' = ไม่มีจุดยืน/โลเล, the ↓ side of Fe; Fe users will not pick it.",3.0,
  "ถ้าคนในกลุ่มเห็นไม่ตรงกันเรื่องวิธีเล่น ฉันมักเอนตามแบบที่คนส่วนใหญ่ในกลุ่มสบายใจ แม้จะชอบอีกแบบมากกว่า",3.4)
a("Feg0","Virtue word gone; joking to lower tension with conflict left unresolved = realistic Fe cost.",3.5)
a("Feh3","Ability word gone; awkwardness cost keeps it near band.",3.6)
a("Feh5","Fe (others' view of the couple) with a real relational cost.",3.3)
o("Fei5","Fe and balance fine, but 'ตัวเลขที่ฉันคิดไว้จะไม่ได้ถูกพูดถึง' is unnatural Thai and unclear.",3.4,
  "เวลาต้องตัดสินใจเรื่องเงินร่วมกับคนอื่น ฉันมักเลือกทางที่ทุกฝ่ายสบายใจ แม้จะไม่ใช่ทางที่ฉันคิดว่าคุ้มที่สุด",3.4)
a("Fej5","Peacemaker ideal replaced by mood contagion (Fe attunement) with a real cost.",3.2)
a("Fek8","Fe adapting to the person in front, cost = not saying what I think.",3.2)
o("Fel5","Fe fine but the item is a friendship scene (context x) with 'เวลาว่าง' tacked on; checking on a friend also reads caring (~3.6).",3.6,
  "เวลาว่างที่อยู่บ้านกับคนอื่น ฉันมักดูว่าแต่ละคนอยากพักแบบไหนแล้วปรับตาม จนบางทีไม่ได้พักแบบที่ตัวเองชอบ",3.4)
o("Fen1","Cost 'หนักใจตามไปอีกนาน' is compassion — a virtue in Thai eyes — so the item stays ~3.7. Use a cognitive cost instead.",3.7,
  "เวลาอ่านข่าว ฉันมักนึกถึงความรู้สึกของคนในเหตุการณ์ก่อน จนบางทีข้ามรายละเอียดว่าเกิดอะไรขึ้นจริงไป",3.5)
a("Fep1","Heroic cost removed; over-cheering someone who wanted quiet is a recognisable Fe overreach.",3.4)
a("Feq0","Fe blending with the occasion with a visible self cost.",3.4)
o("Feq2","Choosing what the recipient will like is simply the correct way to buy a gift; 'ไม่มีความเป็นฉัน' is not felt as a cost, so ~3.8 and low discrimination.",3.8,
  "เลือกของใช้ส่วนตัว ฉันมักนึกว่าคนรอบตัวจะมองว่ามันเหมาะกับฉันไหม จนบางทีไม่ได้เลือกชิ้นที่ชอบที่สุด",3.3)
a("Feq5","Virtue word removed; trend-following for shared talk with a mild cost.",3.3)
a("Fer3","Virtue word removed; unspoken grievance is a real cost.",3.5)
a("Fes2","Inclusive-teamwork virtue softened by meeting-drags cost.",3.5)
a("Fet3","Mood contagion, cost 'สลัดออกยาก'; slightly kind-hearted but in band.",3.6)
a("Few5","'Not my job' humblebrag gone; over-bridging is a real Fe cost.",3.5)
a("Fex1","New group-chat item avoids the Fel0 duplicate; Fe tuning with self-censor cost.",3.3)
a("Fey3","Hierarchy word removed; going along with a reading you don't believe is a real cost.",3.4)
a("Fey5","Courtesy ideal replaced by attending to the host's face at the expense of the rite.",3.3)
a("Fez2","Civic-virtue removed; tailoring a dream to the audience = Fe with cost.",3.2)
a("Fez5","กตัญญู framing removed (partner/close friend, not family); real cost.",3.3)
a("Fia2","Virtue word removed; Fi with the 'majority likes another' cost.",3.5)
a("Fif2","Anti-vanity ideal removed; cost about not knowing actual skill level.",3.3)
a("Fig1","Honesty item replaced with personal-style choice; Fi and in band.",3.5)
a("Fii4","'ถูกต้อง' replaced by 'ใช่'; unchanged otherwise.",3.4)
o("Fik7","Content fine, but 'ฉันมักพูดคำตามมารยาทที่ไม่ได้รู้สึกจริงไม่ค่อยออก' is clumsy (long object split from ไม่ค่อยออก, มัก + ไม่ค่อย).",3.4,
  "คำพูดตามมารยาทที่ใจไม่ได้รู้สึกจริง ฉันมักพูดไม่ค่อยออก เพราะอยากให้คำพูดตรงกับข้างใน",3.4)
a("Fil3","Altruism signal removed; private attachment with outsider-judgement cost.",3.4)
a("Fip1","Sportsmanship virtue replaced by inner disconnect from team style; slightly low but in band.",3.2)
a("Fit0","Outcome word removed; Fi vs advice of people around (not elders).",3.4)
a("Fiw0","Integrity ideal tempered by a procrastination cost at work.",3.3)
a("Fiw5","Moral-concern humblebrag replaced by inner-principle friction with the team.",3.3)
a("Fix3","Now clearly Fi (answer from my values), with a self-centred cost; low-ish but in band.",3.1)
a("Fiy4","Elder confrontation removed; Fi kept private.",3.4)
a("Fiz4","Outcome word removed; Fi with missed-opportunity cost.",3.4)
a("Nek1","Speed claim removed; listener-can't-follow cost.",3.3)
a("Ner4","Absolute removed; mild cost.",3.4)
a("New1","Success clause removed; ideas-too-far cost.",3.4)
o("Nex3","Same scene and same Ne behaviour as bip BNeSix1 side a ('เวลาเพื่อนปรึกษา…ทางเลือกใหม่ ๆ'), and its cost copies Nex1 ('โยนไอเดียหลายแบบ จนกลุ่มตัดสินใจไม่ได้'). A respondent meets the same idea three times in context x.",3.3,
  "เวลาเพิ่งรู้จักเพื่อนใหม่ ฉันมักนึกต่อจากเรื่องเล็ก ๆ ที่เขาเล่าว่าเขาน่าจะชอบอะไรอีกหลายอย่าง จนบางทีเดาเขาไปไกลเกินตัวจริง",3.3)
a("Nez0","Absolute removed; indecision cost keeps it modest.",3.2)
a("Nid3","Food-as-window-on-a-way-of-life is a plausible Ni meaning read; less pretentious than 'แก่นเรื่อง'.",3.5)
a("Nig2","Accuracy claim removed (เดาผิดทั้งตา).",3.3)
a("Nip0","Foresight-accuracy removed; explicit miss cost.",3.3)
a("Niq2","Forecasting ability removed; Ni meaning-of-the-era with over-thinking cost.",3.4)
a("Nit3","Fi drift fixed: now long-range image of life with the pet; mild 'no detailed data' cost.",3.4)
a("Niv2","Absolute removed; Ni insight that lingers.",3.4)
a("Niy4","Superstition confound removed; incubated meaning arriving later = Ni.",3.5)
a("Niz5","Absolute removed; inexpressibility cost.",3.4)
a("Sef2","Duplicate of Sef0/Sef1 resolved; sensory absorption is Se. (Overlap with BNiSef1-b handled by that item's counter.)",3.5)
a("Sej0","Absolute removed; examples less risky.",3.6)
a("Sel5","E confound removed (inside/outside both options).",3.4)
a("Ses3","Impulsivity framing replaced by sensory attention.",3.4)
a("Seu2","Virtue word removed; lyric-miss cost.",3.4)
a("Sex1","Heroic tone reduced by 'ไปผิดจุด' cost; still helping, but in band.",3.5)
a("Sex4","E/confrontation removed; perceptual cue reading.",3.4)
a("Sif0","Absolute removed; repetitiveness cost.",3.4)
a("Sii0","Absolute removed; missed-timing cost balances prudence.",3.5)
a("Sij1","Absolute removed; tidy but not virtuous enough to leave band.",3.6)
a("Sip3","Absolute softened to แทบทุกรอบ; discomfort cost.",3.4)
a("Siq5","Gift drift fixed; room-layout habit is Si in context q.",3.3)
a("Siu0","Absolute removed; nostalgic recall = Si.",3.5)
a("Siw1","Absolute and outcome removed; mild cost.",3.2)
a("Six2","Perceptiveness ability removed; recall-based with rereading cost.",3.3)
a("Siy1","Absolute removed; near the length cap but fine.",3.5)
a("Siy5","Absolute removed; bodily-state recall = Si.",3.4)
a("Tef2","Negative label ใจร้อน replaced by 'เลิกเร็วไป'.",3.2)
a("Teg2","Outcome word removed; play-for-numbers cost.",3.3)
a("Tek1","Outcome word removed; others-are-fine cost.",3.4)
a("Tek7","Pejorative alternative removed; not-listening cost.",3.3)
a("Tem3","Leader halo reduced by 'บางคนยังอยากคุยต่อ'.",3.4)
a("Tep2","Outcome word removed; bossy-tinged cost.",3.3)
a("Teq1","Success outcome removed; companions-bored cost.",3.4)
a("Ter2","Universal expectation turned into direct chasing with atmosphere cost.",3.2)
o("Teu1","Idea is Te, but 'ทำงานให้จบหนึ่งชิ้นต่อหนึ่งอัลบั้ม' is idiosyncratic and the cost 'ต้องหยุดฟังกลางเพลงที่ชอบ' doesn't follow from an album timer; reads unnatural.",3.3,
  "ฉันมักใช้เพลงเป็นตัวจับเวลา เช่น ตั้งใจทำงานให้จบภายในหนึ่งเพลย์ลิสต์ จนบางทีฟังแทบไม่รู้เรื่องว่าเพลงอะไร",3.3)
o("Tev2","Truism: 'หนังตลกต้องตลก หนังระทึกต้องลุ้น' is endorsed by nearly everyone, so it barely discriminates Te; no cost.",3.6,
  "ฉันมักให้คะแนนหนังเป็นข้อ ๆ เช่น บท การแสดง จังหวะ แล้วรวมเป็นคะแนนเดียว จนบางทีเพื่อนว่าดูหนังเหมือนตรวจงาน",3.3)
a("Tex1","Exemplary-friend halo reduced by 'อยากได้แค่คนฟัง' cost.",3.5)
a("Tey5","กตัญญู framing removed (friends, not family); bossy cost.",3.4)
a("Tib0","Label removed; slow-reading cost.",3.4)
a("Tif1","Outcome word removed.",3.4)
a("Tih5","Virtue word removed.",3.4)
o("Tij4","Label removed but 'หลายแบบทริป' is ungrammatical (should be ทริปหลายแบบ).",3.4,
  "ฉันมีหลักเที่ยวของตัวเองไม่กี่ข้อที่ใช้คิดได้กับทริปหลายแบบ และคอยปรับให้มันไม่ขัดกันเอง",3.4)
a("Til1","Label removed; context prefix added; stuck-an-hour cost.",3.4)
a("Tim1","จับผิด replaced by 'จริงจังเกินไป'.",3.3)
a("Tin0","Label removed; few-articles cost.",3.4)
a("Tiq4","Virtue word replaced by 'ที่มาที่ไป'.",3.3)
a("Tir3","Quietness (E/I) confound removed.",3.3)
a("Tit3","Negative label ดื้อ removed.",3.3)
a("Tiv0","Labels removed; 'กติกาของเรื่องเอง' is good Ti.",3.3)
a("Tiw5","Boss removed (team agreed instead).",3.4)
o("Tix1","Desirability now fine, but the scene ('เพื่อนสองคนผิดใจกัน') duplicates bip BTiFex0 in the same context x, so a respondent sees the same Ti idea twice. Needs a new scene not already used by Tix0/2/3/4/5.",3.3,
  "เวลาเพื่อนเล่าเรื่องที่ได้ยินต่อมา ฉันมักไล่ในหัวว่าแต่ละช่วงของเรื่องต่อกันติดไหม จนบางทีเพื่อนว่าฉันฟังแบบไม่ค่อยอินด้วย",3.3)
a("Tix4","Perspective-taking virtue replaced by internal consistency with unwanted-analysis cost.",3.3)
a("Tiz0","Virtue word removed; slow-start cost.",3.4)
a("Tiz5","Success word removed.",3.5)

out=[]
for p in pro:
  i=p['id']
  if i in O:
    w,d,c,cd=O[i]
    # shape check
    if isinstance(p['text'],dict): assert isinstance(c,dict) and set(c)==set(p['text']),i
    else: assert isinstance(c,str),i
    out.append({"id":i,"verdict":"object","why":w,"proDes":d,"counter":c,"counterDes":cd})
  else:
    w,d=A[i]; out.append({"id":i,"verdict":"accept","why":w,"proDes":d})
  if isinstance(p['text'],dict): assert isinstance(out[-1]['proDes'],dict) and set(out[-1]['proDes'])==set(p['text']),i
assert len(set(A)|set(O))==len(pro)==131 and not (set(A)&set(O))
json.dump(out,open(D+'r2_con2.json','w'),ensure_ascii=False,indent=1)
print(len(out), sum(x['verdict']=='object' for x in out))
