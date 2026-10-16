# Round-2 work list part 2 (131 items)

### BNeSi1 · bip · ctx o · Ne-Si · rev10
current: {"a":"เวลาเลือกที่กินข้าว ฉันอยากลองร้านใหม่ที่ไม่เคยไป","b":"เวลาเลือกที่กินข้าว ฉันอยากไปร้านเดิมที่รู้ว่าอร่อยแน่"}
- LINT ["R4_absolute:ไม่เคย"]

### BNeSi7 · bip · ctx o · Ne-Si · rev10
current: {"a":"เมื่อเจอของใหม่ ฉันตื่นเต้นกับสิ่งที่มันอาจเป็นไปได้","b":"เมื่อเจอของใหม่ ฉันเทียบกับของเดิมที่เคยใช้ว่าดีกว่าหรือด้อยกว่าอย่างไร"}
- LINT R10 side length ratio 0.73

### BNeSia0 · bip · ctx a · Ne-Si · NEW
current: {"a":"เวลาฝึกศิลปะ ฉันชอบลองสไตล์ที่ไม่เคยทำ เพื่อดูว่าจะเกิดอะไรขึ้นบ้าง","b":"เวลาฝึกศิลปะ ฉันชอบฝึกสไตล์ที่ทำอยู่ให้ลึกขึ้น ตามแนวที่เคยได้ผล"}
- LINT ["R4_absolute:ไม่เคย"]

### BNeSif0 · bip · ctx f · Ne-Si · NEW
current: {"a":"ฉันชอบขยับไปลองงานอดิเรกใหม่ เมื่อเจออะไรที่น่าสนใจกว่า","b":"ฉันชอบอยู่กับงานอดิเรกเดิม แล้วทำให้แน่นขึ้นเรื่อย ๆ"}
- debate: con_flag; side_gap -0.65 | ratings BNeSif0|a pro 3.1 con 3.1, BNeSif0|b pro 3.6 con 3.9
- CON[desirability s2] A 'move on when something more interesting appears' = fickle (~3.1); B 'stay and deepen' = perseverance virtue (~3.9). Gap 0.8. → CON rewrite: {"a":"ฉันชอบมีงานอดิเรกหลายอย่างหมุนเวียนกัน เพราะแต่ละอย่างจุดไอเดียให้อีกอย่าง","b":"ฉันชอบมีงานอดิเรกหลักอย่างเดียว แล้วทำซ้ำจนกลายเป็นส่วนหนึ่งของกิจวัตร"}
- PRO[undefined desirability_imbalance s]  → PRO rewrite: "A: ฉันชอบมีงานอดิเรกหลายอย่างหมุนเวียน แล้วเอาของใหม่ที่เจอมาเติมอยู่เรื่อย ๆ ‖ B: ฉันชอบมีงานอดิเรกหลักไม่กี่อย่าง แล้วทำซ้ำจนคุ้นมือขึ้นเรื่อย ๆ"

### BNeSih1 · bip · ctx h · Ne-Si · rev10
current: {"a":"คนที่ใช่ คือคนที่ชวนฉันไปเจออะไรใหม่ ๆ เสมอ","b":"คนที่ใช่ คือคนที่อยู่ด้วยแล้วอุ่นใจเหมือนบ้าน"}
- LINT ["R4_absolute:เสมอ"]

### BNeSim0 · bip · ctx m · Ne-Si · NEW
current: {"a":"เวลาโพสต์ ฉันชอบลองรูปแบบใหม่ ๆ ที่ไม่เคยทำ เพื่อดูว่าจะออกมาเป็นอย่างไร","b":"เวลาโพสต์ ฉันชอบใช้รูปแบบเดิมที่ทำจนคุ้นมือ เพราะรู้ว่าจะออกมาเป็นอย่างไร"}
- LINT ["R4_absolute:ไม่เคย"]

### BNeSiv0 · bip · ctx v · Ne-Si · NEW
current: {"a":"เวลาดูซีรีส์ซ้ำ ฉันชอบหาการตีความใหม่ ๆ ที่ไม่เคยคิดตอนดูรอบแรก","b":"เวลาดูซีรีส์ซ้ำ ฉันชอบได้กลับไปเจอฉากและอารมณ์เดิมที่เคยประทับใจ"}
- LINT ["R4_absolute:ไม่เคย"]

### BNeSix1 · bip · ctx x · Ne-Si · NEW
current: {"a":"เวลาเพื่อนปรึกษา ฉันชอบช่วยคิดทางเลือกใหม่ ๆ ที่เขายังไม่เคยลอง","b":"เวลาเพื่อนปรึกษา ฉันชอบเล่าวิธีที่เคยเห็นว่าได้ผลจริงมาแล้ว"}
- LINT ["R4_absolute:ไม่เคย"]

### BNiSe5 · bip · ctx o · Ni-Se · rev10
current: {"a":"ฉันมักตัดสินใจโดยยึดภาพระยะยาวที่คิดไว้ แม้สถานการณ์ตรงหน้าจะเปลี่ยน","b":"ฉันมักตัดสินใจตามสถานการณ์ตรงหน้า และพร้อมเปลี่ยนแผนเมื่อสถานการณ์เปลี่ยน"}
- LINT ["R11_hierarchy:พระ"]

### BNiSef1 · bip · ctx f · Ni-Se · NEW
current: {"a":"งานอดิเรกที่ใช่ คือสิ่งที่ฉันรู้สึกว่ากำลังพาชีวิตไปในทางของมัน","b":"งานอดิเรกที่ใช่ คือสิ่งที่ทำแล้วรู้สึกถึงตัวเต็มที่ในตอนนั้น"}
- debate: con_flag | ratings BNiSef1|a pro 3.3 con 3.4, BNiSef1|b pro 3.4 con 3.4
- CON[unclear s2] A 'พาชีวิตไปในทางของมัน' is vague; B 'รู้สึกถึงตัวเต็มที่' is odd Thai. Readers will guess rather than recognise themselves. → CON rewrite: {"a":"งานอดิเรกที่ใช่ คือสิ่งที่ฉันรู้สึกว่ามันเชื่อมไปสู่อะไรบางอย่างในชีวิตข้างหน้า","b":"งานอดิเรกที่ใช่ คือสิ่งที่ทำแล้วได้จดจ่ออยู่กับมือและตาตรงหน้าเต็มที่"}
- PRO[undefined wording s] 

### BNiSem0 · bip · ctx m · Ni-Se · NEW
current: {"a":"เวลาเลื่อนดูวิดีโอสั้น ฉันมักคิดว่าคลิปเหล่านั้นสะท้อนแนวโน้มอะไรที่กำลังจะมา","b":"เวลาเลื่อนดูวิดีโอสั้น ฉันมักเพลินไปกับภาพ เสียง และจังหวะของคลิปตรงหน้า"}
- debate: con_flag; pro_fix; side_gap 0.60 | ratings BNiSem0|a pro 3.5 con 3.6, BNiSem0|b pro 3 con 2.9
- CON[desirability s2] Ni side = trend-spotter (3.6); Se side "เพลินไปกับภาพ เสียง จังหวะ" = mindless scrolling (2.9). Gap 0.7. → CON rewrite: {"a":"เวลาเลื่อนดูวิดีโอสั้น ฉันมักคิดเลยไปว่าคลิปเหล่านั้นสะท้อนอะไรเกี่ยวกับผู้คนตอนนี้","b":"เวลาเลื่อนดูวิดีโอสั้น ฉันมักสังเกตรายละเอียดในคลิป เช่น มุมกล้อง สี หรือจังหวะตัดต่อ"}
- PRO[fix desirability s2] B 'เพลินไปกับ' short videos implies mindless doom-scrolling (~3.0) while A sounds like trend foresight (~3.5). → PRO rewrite: "A: เวลาเลื่อนดูวิดีโอสั้น ฉันมักคิดว่าคลิปที่เห็นซ้ำ ๆ กำลังบอกอะไรเกี่ยวกับสิ่งที่ผู้คนรู้สึกกันอยู่ ‖ B: เวลาเลื่อนดูวิดีโอสั้น ฉันมักสังเกตภาพ เสียง และจังหวะตัดต่อของคลิปตรงหน้า"

### BNiSeq1 · bip · ctx q · Ni-Se · NEW
current: {"a":"ฉันเลือกเสื้อผ้าจากภาพลักษณ์ที่ฉันกำลังจะเป็นในระยะยาว","b":"ฉันเลือกเสื้อผ้าจากความรู้สึกตอนลองใส่จริงตรงหน้า"}
- debate: con_flag | ratings BNiSeq1|a pro 3.2 con 3.3, BNiSeq1|b pro 3.4 con 3.5
- CON[unclear s2] 'ภาพลักษณ์ที่ฉันกำลังจะเป็น' implies public image management (impression management), not Ni vision; wording awkward. → CON rewrite: {"a":"ฉันเลือกเสื้อผ้าจากภาพรวมสไตล์ที่ฉันค่อย ๆ มุ่งไปในระยะยาว","b":"ฉันเลือกเสื้อผ้าจากความรู้สึกตอนได้ลองใส่จริงตรงหน้า"}
- PRO[undefined wording s]  → PRO rewrite: "A: ฉันเลือกเสื้อผ้าจากภาพในใจว่าตัวเองกำลังเปลี่ยนไปเป็นคนแบบไหน ‖ B: ฉันเลือกเสื้อผ้าจากความรู้สึกตอนลองใส่จริงตรงหน้า"

### BNiSex0 · bip · ctx x · Ni-Se · NEW
current: {"a":"เวลาเพื่อนเล่าปัญหา ฉันมักนึกว่าเรื่องนี้กำลังพาเขาไปทางไหนในระยะยาว","b":"เวลาเพื่อนเล่าปัญหา ฉันมักนึกว่าตอนนี้ช่วยอะไรเขาได้บ้างทันที"}
- debate: con_flag | ratings BNiSex0|a pro 3.4 con 3.6, BNiSex0|b pro 3.7 con 4
- CON[desirability s2] B 'what can I do to help right now' (~4.0) beats A's abstract long-range musing (~3.6); both sides are 'helping', and B wins on virtue. → CON rewrite: {"a":"เวลาเพื่อนเล่าปัญหา ฉันมักนึกว่าเบื้องลึกแล้วเรื่องนี้กำลังพาเขาไปทางไหน","b":"เวลาเพื่อนเล่าปัญหา ฉันมักสังเกตสีหน้าท่าทางของเขาตอนเล่าว่าหนักแค่ไหน"}
- PRO[undefined desirability_imbalance s]  → PRO rewrite: "A: เวลาเพื่อนเล่าปัญหา ฉันมักนึกว่าเรื่องนี้กำลังพาชีวิตเขาไปทางไหนในระยะยาว ‖ B: เวลาเพื่อนเล่าปัญหา ฉันมักสนใจว่าตอนนี้ตรงหน้าเขาเจออะไรอยู่จริง ๆ บ้าง"

### BTeFi1 · bip · ctx o · Te-Fi · rev10
current: {"a":"ฉันอยากให้งานเสร็จเรียบร้อยตามแผนและเกณฑ์ที่ตั้งไว้","b":"ฉันอยากให้งานสะท้อนตัวตนและความเชื่อของฉันจริง ๆ แม้จะไม่เป็นไปตามแผนทั้งหมด"}
- LINT R10 side length ratio 0.67

### BTeFi2 · bip · ctx o · Te-Fi · rev10
current: {"a":"เมื่อเห็นสิ่งที่ไม่มีประสิทธิภาพ ฉันอยากปรับระบบให้ดีขึ้น","b":"เมื่อเห็นสิ่งที่ขัดกับคุณค่าของฉัน ฉันอยากทำให้มันถูกต้องตามที่เชื่อ"}
- LINT ["R7_outcome:มีประสิทธิภาพ","R7_outcome:ถูกต้อง"]

### BTeFi8 · bip · ctx o · Te-Fi · NEW
current: {"a":"เวลาเลือกซื้อของ ฉันดูสเปก ราคา และรีวิวเทียบกันให้ชัดก่อนตัดสินใจ","b":"เวลาเลือกซื้อของ ฉันดูว่ามันใช่ตัวฉันและรู้สึกผูกพันกับมันไหมก่อนตัดสินใจ"}
- debate: pro_fix | ratings BTeFi8|a pro 3.6 con 3.6, BTeFi8|b pro 3.2 con 3.2
- CON[desirability s1] Comparing specs/price/reviews is the prudent shopper (3.6) vs emotional buying (3.2).
- PRO[fix desirability s2] A (specs, price, reviews) is the smart-consumer answer (~3.6); B 'รู้สึกผูกพันกับมัน' before buying is odd (~3.2). → PRO rewrite: "A: เวลาเลือกซื้อของ ฉันดูสเปก ราคา และรีวิวเทียบกันให้ชัดก่อน แม้จะใช้เวลานาน ‖ B: เวลาเลือกซื้อของ ฉันดูว่ามันเข้ากับตัวฉันและสิ่งที่ฉันชอบจริง ๆ ไหมก่อนตัดสินใจ"

### BTeFih0 · bip · ctx h · Te-Fi · rev10
current: {"a":"ฉันดูความจริงจังของอีกฝ่ายจากแผนและการกระทำที่ชัดเจน","b":"ฉันดูความจริงจังของอีกฝ่ายจากว่าเขาให้ค่ากับสิ่งเดียวกับที่ใจฉันให้ค่าไหม"}
- LINT R10 side length ratio 0.71

### BTeFii1 · bip · ctx i · Te-Fi · rev10
current: {"a":"ขาดทุนถึงจุดที่ตั้งไว้ ฉันมักขายตามกฎที่วางไว้","b":"ขาดทุนถึงจุดที่ตั้งไว้ ฉันถามตัวเองก่อนว่าบริษัทนี้ยังทำในสิ่งที่ฉันเห็นว่าดีอยู่ไหม"}
- LINT R10 side length ratio 0.55

### BTeFin1 · bip · ctx n · Te-Fi · rev10
current: {"a":"อ่านข่าว ฉันโฟกัสที่ข้อมูลว่าเกิดอะไรขึ้นจริง","b":"อ่านข่าว ฉันโฟกัสว่าเรื่องนี้แตะคุณค่าที่ฉันให้ความสำคัญยังไง"}
- LINT R10 side length ratio 0.74

### BTeFiu0 · bip · ctx u · Te-Fi · rev10
current: {"a":"ฉันใช้เพลงเป็นตัวช่วยให้ทำงานหรือออกกำลังได้ดีขึ้น","b":"ฉันใช้เพลงเป็นที่พักใจและบอกความรู้สึกตัวเอง"}
- LINT ["R1_ability:ได้ดี"]

### BTeFiy1 · bip · ctx y · Te-Fi · rev10
current: {"a":"ความเชื่อที่มีค่าคือสิ่งที่ช่วยให้จัดการชีวิตได้ดีขึ้น","b":"ความเชื่อที่มีค่าคือสิ่งที่ตรงกับตัวตนลึก ๆ ของฉัน"}
- LINT ["R1_ability:ได้ดี"]

### BTeFiz1 · bip · ctx z · Te-Fi · rev10
current: {"a":"ฉันแตกความฝันเป็นแผนงานที่มีเดดไลน์","b":"ฉันเช็กว่าความฝันยังตรงกับสิ่งที่ใจให้ค่าอยู่ไหม มากกว่าดูเดดไลน์"}
- LINT R10 side length ratio 0.54

### BTiFe10 · bip · ctx o · Ti-Fe · NEW
current: {"a":"เวลาเจอกฎที่ฉันไม่เข้าใจ ฉันอยากรู้ก่อนว่ามันมีเหตุผลอะไร ถึงจะยอมทำตามเต็มใจ","b":"เวลาเจอกฎที่ฉันไม่เข้าใจ ฉันมักทำตามไปก่อน เพราะเห็นว่ามันช่วยให้คนอยู่ร่วมกันราบรื่น"}
- debate: con_flag | ratings BTiFe10|a pro 3.3 con 3.3, BTiFe10|b pro 3.5 con 3.6
- CON[culture s2] Demanding reasons before obeying a rule is face-threatening in Thai hierarchy; following for harmony is the good-citizen answer. Side b is also Si/conformity rather than Fe attunement. → CON rewrite: {"a":"เวลาเจอกฎที่ฉันไม่เข้าใจ ฉันทำตามได้ แต่ในใจจะค้างจนกว่าจะเข้าใจเหตุผลของมัน","b":"เวลาเจอกฎที่ฉันไม่เข้าใจ ฉันทำตามได้สบายใจ ถ้าเห็นว่าคนรอบตัวยอมรับและอยู่ร่วมกันได้ราบรื่น"}
- LINT ["R2_virtue:มีเหตุผล"]

### BTiFe4 · bip · ctx o · Ti-Fe · rev10
current: {"a":"ฉันมักไล่ดูว่าคำพูดมีข้อบกพร่องทางตรรกะไหม","b":"ฉันมักใส่ใจความรู้สึกที่ซ่อนอยู่ในคำพูดของคน"}
- LINT ["R6_label:ตรรกะ","R2_virtue:ใส่ใจ"]

### BTiFe8 · bip · ctx o · Ti-Fe · NEW
current: {"a":"เวลาถูกถามความเห็น ฉันตอบตามที่คิดว่าถูกต้องตามเหตุผล แม้คำตอบอาจฟังห้วนไปบ้าง","b":"เวลาถูกถามความเห็น ฉันตอบโดยคิดถึงความรู้สึกของคนฟังด้วย แม้คำตอบอาจอ้อมไปบ้าง"}
- debate: con_flag | ratings BTiFe8|a pro 3.2 con 3.2, BTiFe8|b pro 3.5 con 3.6
- CON[desirability s2] Ti side "ห้วน" vs Fe side "คิดถึงความรู้สึกคนฟัง" — in Thai culture the Fe side is the polite answer (3.2 vs 3.6). → CON rewrite: {"a":"เวลาถูกถามความเห็น ฉันให้น้ำหนักกับการตอบให้ตรงตามเหตุผลที่คิดไว้ แม้คนฟังอาจไม่ชอบใจ","b":"เวลาถูกถามความเห็น ฉันให้น้ำหนักกับการตอบให้คนฟังรับได้ แม้จะต้องพูดไม่ตรงกับที่คิดทั้งหมด"}
- PRO[strong  s] Both sides carry a symmetric cost (ห้วน vs อ้อม) — the ideal way to equalise desirability in a Ti–Fe item.
- LINT ["R7_outcome:ถูกต้อง"]

### BTiFed0 · bip · ctx d · Ti-Fe · NEW
current: {"a":"เวลาเพื่อนถามความเห็นเรื่องอาหารที่เขาทำ ฉันบอกตามที่วิเคราะห์ว่ารสไหนยังไม่สมดุล","b":"เวลาเพื่อนถามความเห็นเรื่องอาหารที่เขาทำ ฉันเลือกคำที่ทำให้เขามีกำลังใจทำต่อ"}
- debate: con_flag; pro_fix; side_gap -0.55 | ratings BTiFed0|a pro 3.2 con 3.2, BTiFed0|b pro 3.7 con 3.8
- CON[desirability s2] Critiquing a friend's cooking (a, 3.2) vs encouraging words (b, 3.8) — b is the Thai polite default for nearly everyone. → CON rewrite: {"a":"เวลาเพื่อนถามความเห็นเรื่องอาหารที่เขาทำ ฉันบอกตามที่วิเคราะห์ว่ารสไหนยังไม่สมดุล เพราะคิดว่าเขาอยากรู้จริง","b":"เวลาเพื่อนถามความเห็นเรื่องอาหารที่เขาทำ ฉันเลือกพูดสิ่งที่ทำให้เขาสบายใจไว้ก่อน แม้ยังไม่ได้บอกจุดที่ควรปรับ"}
- PRO[fix desirability s2] A 'analyse what's unbalanced' (~3.2) vs B 'words that encourage' (~3.7) — gap 0.5. Give A a caring motive and B an honesty cost. → PRO rewrite: "A: เวลาเพื่อนถามความเห็นเรื่องอาหารที่เขาทำ ฉันบอกตามที่วิเคราะห์ว่ารสไหนยังไม่สมดุล เพราะคิดว่าแบบนั้นช่วยเขาได้จริง ‖ B: เวลาเพื่อนถามความเห็นเรื่องอาหารที่เขาทำ ฉันเน้นพูดส่วนที่ดีก่อน แม้จะมีจุดที่อยากติอยู่บ้าง"

### BTiFef1 · bip · ctx f · Ti-Fe · NEW
current: {"a":"เพื่อนถามเรื่องงานอดิเรกของฉัน ฉันอธิบายหลักเบื้องหลังให้เขาเข้าใจ","b":"เพื่อนถามเรื่องงานอดิเรกของฉัน ฉันดูก่อนว่าเขาอยากรู้ลึกแค่ไหน"}
- debate: con_flag | ratings BTiFef1|a pro 3.3 con 3.2, BTiFef1|b pro 3.6 con 3.9
- CON[desirability s2] A 'explain the principle so they understand' can read as lecturing (~3.2); B 'check how deep they want' is considerate (~3.9). → CON rewrite: {"a":"เพื่อนถามเรื่องงานอดิเรกของฉัน ฉันมักอธิบายว่าทำไมมันถึงทำงานแบบนั้น","b":"เพื่อนถามเรื่องงานอดิเรกของฉัน ฉันมักเล่าในมุมที่เขาน่าจะอินด้วย"}
- PRO[undefined desirability_imbalance s] 

### BTiFeh1 · bip · ctx h · Ti-Fe · rev10
current: {"a":"เวลาคนที่รักเล่าปัญหา ฉันช่วยวิเคราะห์ว่าต้นเหตุคืออะไร","b":"เวลาคนที่รักเล่าปัญหา ฉันรับฟังความรู้สึกเขาก่อน"}
- CON audit of rev10 item [desirability s3] 'รับฟังความรู้สึกเขาก่อน' is the universally taught right answer (~4.3) vs 'analyse the cause' (~3.4). → CON rewrite: {"a":"เวลาคนที่รักเล่าปัญหา ฉันมักช่วยไล่ดูว่าต้นเหตุจริง ๆ อยู่ตรงไหน","b":"เวลาคนที่รักเล่าปัญหา ฉันมักพูดเห็นด้วยไปก่อนให้เขาสบายใจ แม้ในใจจะคิดอีกแบบ"}

### BTiFej1 · bip · ctx j · Ti-Fe · rev10
current: {"a":"ทริปมีปัญหา ฉันไล่หาว่าพลาดตรงไหนจะได้แก้ถูก","b":"ทริปมีปัญหา ฉันช่วยให้ทุกคนอารมณ์ดีขึ้นก่อน"}
- CON audit of rev10 item [desirability s2] A 'ไล่หาว่าพลาดตรงไหน' sounds like blaming (~3.2); B cheering everyone up (~3.9). → CON rewrite: {"a":"ทริปมีปัญหา ฉันอยากเข้าใจก่อนว่ามันเกิดจากอะไร","b":"ทริปมีปัญหา ฉันอยากให้บรรยากาศในกลุ่มกลับมาก่อน"}

### BTiFep0 · bip · ctx p · Ti-Fe · NEW
current: {"a":"เวลาทีมเถียงกันเรื่องแผน ฉันอยากได้แผนที่เหตุผลแน่นที่สุด แม้ต้องเถียงกันต่ออีกพัก","b":"เวลาทีมเถียงกันเรื่องแผน ฉันอยากได้แผนที่ทุกคนยอมรับร่วมกัน แม้จะไม่สมบูรณ์ที่สุด"}
- debate: con_flag | ratings BTiFep0|a pro 3.3 con 3.1, BTiFep0|b pro 3.5 con 3.7
- CON[culture s2] Ti side "เถียงกันต่อ" vs Fe side consensus — Thai group-harmony norm makes b the obvious answer (3.1 vs 3.7). → CON rewrite: {"a":"เวลาทีมเถียงกันเรื่องแผน ฉันอยากได้แผนที่เหตุผลแน่นที่สุด แม้ต้องใช้เวลาคุยกันนานขึ้น","b":"เวลาทีมเถียงกันเรื่องแผน ฉันอยากได้แผนที่ทุกคนยอมรับร่วมกัน แม้บางจุดจะยังไม่สมเหตุสมผลนัก"}
- PRO[strong  s] Both sides carry a symmetric cost (more arguing vs imperfect plan) — model Ti–Fe bipolar.

### BTiFeq1 · bip · ctx q · Ti-Fe · NEW
current: {"a":"ฉันว่ารสนิยมดีต้องอธิบายได้ว่าทำไมถึงลงตัว","b":"ฉันว่ารสนิยมดีคือทำให้คนรอบข้างรู้สึกสบายไปด้วย"}
- debate: con_flag | ratings BTiFeq1|a pro 3.4 con 3.3, BTiFeq1|b pro 3.4 con 3.9
- CON[desirability s2] B defines good taste as making others comfortable (~3.9) — a virtue definition; A (~3.3) sounds snobbish. → CON rewrite: {"a":"ฉันว่ารสนิยมดีคือมีหลักที่อธิบายได้ว่าทำไมถึงลงตัว","b":"ฉันว่ารสนิยมดีคือรู้ว่าแต่ละงานคนส่วนใหญ่มองว่าอะไรเหมาะ"}

### BTiFex0 · bip · ctx x · Ti-Fe · NEW
current: {"a":"เพื่อนสองคนทะเลาะกัน ฉันอยากรู้ก่อนว่าเหตุผลของแต่ละฝั่งฟังขึ้นแค่ไหน","b":"เพื่อนสองคนทะเลาะกัน ฉันอยากให้ทั้งคู่กลับมาคุยกันได้ดีก่อน"}
- debate: con_flag; side_gap -0.55 | ratings BTiFex0|a pro 3.3 con 3.4, BTiFex0|b pro 3.7 con 4.1
- CON[desirability s2] B (want both to reconcile, ~4.1) is the Thai harmony ideal; A (judge whose reasoning holds, ~3.4) sounds like taking sides. 0.7 gap. → CON rewrite: {"a":"เพื่อนสองคนทะเลาะกัน ฉันอยากรู้ก่อนว่าเหตุผลฝั่งไหนฟังขึ้นกว่า แม้จะเสี่ยงโดนมองว่าเข้าข้าง","b":"เพื่อนสองคนทะเลาะกัน ฉันอยากให้ทั้งคู่ดีกันก่อน แม้ต้นเรื่องจะยังไม่ได้เคลียร์"}
- PRO[undefined desirability_imbalance s]  → PRO rewrite: "A: เพื่อนสองคนทะเลาะกัน ฉันอยากรู้ก่อนว่าเหตุผลของแต่ละฝั่งฟังขึ้นแค่ไหน แม้เรื่องจะจบช้าลง ‖ B: เพื่อนสองคนทะเลาะกัน ฉันอยากให้ทั้งคู่กลับมาคุยกันได้ก่อน แม้ยังไม่ได้ข้อสรุปว่าใครถูก"
- LINT ["R1_ability:ได้ดี"]

### BTiFez1 · bip · ctx z · Ti-Fe · rev10
current: {"a":"ฉันอยากมีเวลาไล่ทำความเข้าใจเรื่องที่สนใจจนครบทุกส่วน","b":"ฉันอยากเป็นคนที่ทำให้คนรอบตัวรู้สึกอุ่นใจ"}
- CON audit of rev10 item [desirability s3] B 'อยากเป็นคนที่ทำให้คนรอบตัวอุ่นใจ' is pure virtue (~4.4) vs A esoteric study (~3.3); also sides are not parallel. → CON rewrite: {"a":"ความฝันของฉันคือได้ไล่ทำความเข้าใจเรื่องที่สนใจจนครบทุกส่วน","b":"ความฝันของฉันคือได้ทำสิ่งที่คนรอบตัวเห็นคุณค่าร่วมกัน"}
- LINT ["R12_modal:อยากเป็นคนที่"]

### EIeq3 · ei · ctx eq · E-I · rev10
current: {"E":"ในวงคุยกับเพื่อน ฉันมักพูดเยอะ เล่าเรื่องสนุก ๆ ให้วงคึกคัก","I":"ในวงคุยกับเพื่อน ฉันมักพูดน้อย ฟังมากกว่า แต่ก็สนุกอยู่"}
- CON audit of rev10 item [desirability s2] I side 'พูดน้อย ฟังมากกว่า' = good-listener virtue in Thai; E side 'พูดเยอะ' reads พูดมาก (negative). → CON rewrite: {"E":"ในวงคุยกับเพื่อน ฉันมักเป็นคนเล่าเรื่องและชวนคุยให้วงคึกคัก","I":"ในวงคุยกับเพื่อน ฉันมักพูดน้อยและสนุกอยู่เงียบ ๆ ให้วงสบาย ๆ"}

### EIir0 · ei · ctx ir · E-I · rev10
current: {"E":"ไปงานที่ไม่รู้จักใคร ฉันมักเดินไปทักคนอื่นก่อน","I":"ไปงานที่ไม่รู้จักใคร ฉันมักรอให้มีคนมาทัก แล้วคุยกับคนนั้นยาว ๆ จนสนิทกัน"}
- LINT R10 side length ratio 0.63

### EIir3 · ei · ctx ir · E-I · rev10
current: {"E":"ในวงที่มีคนใหม่ ๆ ฉันมักเป็นคนเปิดเรื่องคุยก่อน","I":"ในวงที่มีคนใหม่ ๆ ฉันมักปล่อยให้คนอื่นเปิดเรื่อง แล้วค่อยเข้าไปคุยตอนที่รู้สึกสบายใจ"}
- LINT R10 side length ratio 0.56

### EIir5 · ei · ctx ir · E-I · NEW
current: {"E":"กับเพื่อนที่ห่างกันไปนาน ฉันมักเป็นคนทักไปชวนนัดเจอกันก่อน ไม่รอให้ใครเริ่ม","I":"กับเพื่อนที่ห่างกันไปนาน ฉันดีใจเมื่อเขาทักมา แล้วคุยต่อได้เหมือนไม่เคยห่าง"}
- LINT ["R4_absolute:ไม่เคย"]

### Fef1 · st · ctx f · Fe · NEW
current: ในกลุ่มงานอดิเรก ฉันคอยดูให้มือใหม่รู้สึกเป็นส่วนหนึ่ง แม้จะต้องเลื่อนการฝึกของตัวเองออกไป
- debate: con_flag; des_out_of_range 3.95 | ratings Fef1 pro 3.8 con 4.1
- CON[desirability s2] Making newcomers feel included even at the cost of own practice is exemplary เสียสละ (~4.1); the cost clause reads as virtue in Thai culture. → CON rewrite: "ในกลุ่มงานอดิเรก ฉันมักทำตามธรรมเนียมของกลุ่ม เช่น วิธีทักทายหรือมารยาทในวง แม้บางข้อจะดูไม่จำเป็นสำหรับฉัน"
- PRO[undefined desirability_high s] 

### Fef3 · st · ctx f · Fe · NEW
current: ถ้าคนในกลุ่มเห็นไม่ตรงกันเรื่องวิธีเล่น ฉันมักเป็นคนหาทางให้ทุกคนกลับมาสนุกด้วยกันได้
- debate: con_flag | ratings Fef3 pro 3.7 con 4
- CON[desirability s2] Being the peacemaker who gets everyone having fun again (~4.0); mediator idea already in v10 Few3/Fek2 and new Fej5. → CON rewrite: "ถ้าคนในกลุ่มเห็นไม่ตรงกันเรื่องวิธีเล่น ฉันมักเอนตามแบบที่คนส่วนใหญ่ในกลุ่มสบายใจ แม้จะชอบอีกแบบมากกว่า"

### Feg0 · st · ctx g · Fe · rev10
current: ในเกมทีม ถ้าเพื่อนเริ่มด่ากัน ฉันหันไปพูดให้ทุกคนใจเย็นก่อน แม้จะเสียจังหวะเล่นของตัวเอง
- LINT ["R2_virtue:ใจเย็น"]

### Feh3 · st · ctx h · Fe · rev10
current: ในความรัก ฉันแสดงความรักตามแบบที่อีกฝ่ายชอบ แม้มันจะไม่ใช่แบบที่ฉันถนัด
- LINT ["R1_ability:ถนัด"]

### Feh5 · st · ctx h · Fe · NEW
current: ฉันใส่ใจว่าคนรอบตัวจะรู้สึกยังไงกับความสัมพันธ์ของเรา เลยระวังไม่แสดงออกจนคนอื่นอึดอัด
- LINT ["R2_virtue:ใส่ใจ"]

### Fei5 · st · ctx i · Fe · NEW
current: ถ้าคนในบ้านหรือเพื่อนสนิทลงทุนอะไรอยู่ ฉันมักอยากลงด้วยบ้าง เพราะรู้สึกได้ร่วมเรื่องเดียวกัน
- debate: con_flag; des_out_of_range 2.75 | ratings Fei5 pro 2.8 con 2.7
- CON[theory s2] Investing because family/friends do is herding/social proof (FOMO), not Fe's attunement; low desirability (~2.7). → CON rewrite: "ถ้าคนในบ้านกำลังตัดสินใจเรื่องเงินก้อนใหญ่ ฉันมักเลือกทางที่ทุกคนในบ้านสบายใจร่วมกัน แม้จะไม่ใช่ทางที่ได้ผลตอบแทนดีที่สุด"
- PRO[undefined function_contamination s]  → PRO rewrite: "ถ้าคนในบ้านลงทุนอะไรด้วยกัน ฉันมักเข้าร่วมด้วยเพราะอยากให้ทุกคนรู้สึกว่าเป็นทีมเดียวกัน แม้จะไม่ใช่ทางที่ฉันเลือกเอง"

### Fej5 · st · ctx j · Fe · NEW
current: ถ้าในทริปเริ่มมีคนไม่พอใจกัน ฉันมักหาทางคลี่คลาย เช่น เปลี่ยนเรื่องหรือเสนอทางกลาง ให้ทริปไปต่อได้
- debate: con_flag | ratings Fej5 pro 3.8 con 4
- CON[desirability s2] Smoothing conflict so the trip continues = peacemaker ideal (~4.0); mediator idea is already heavily represented. → CON rewrite: "ถ้าในทริปเริ่มมีคนไม่พอใจกัน ฉันจะรู้สึกตึงไปด้วยจนเที่ยวไม่ค่อยสนุก แม้เรื่องนั้นจะไม่เกี่ยวกับฉัน"
- PRO[undefined desirability_high s]  → PRO rewrite: "ถ้าในทริปเริ่มมีคนไม่พอใจกัน ฉันมักรีบเปลี่ยนเรื่องหรือเสนอทางกลาง แม้ตัวเองจะต้องยอมไปในแบบที่ไม่ได้อยากนัก"

### Fek8 · st · ctx k · Fe · NEW
current: ฉันมักทำตามมารยาทหรือธรรมเนียมที่คนส่วนใหญ่ถือ เพราะไม่อยากให้ใครรู้สึกไม่ดี
- debate: con_flag | ratings Fek8 pro 3.6 con 3.7
- CON[culture s2] Following customs most people hold = Thai normative virtue (~3.7) and traditionalism, which is also Si territory. High base rate, double-loaded. → CON rewrite: "ในวงที่มีคนหลายแบบ ฉันมักปรับมารยาทและคำพูดให้เข้ากับคนตรงหน้า แม้ต้องเก็บความเป็นตัวเองไว้บ้าง"

### Fel5 · st · ctx l · Fe · NEW
current: ฉันชอบอ่านความเห็นของคนอื่นต่อหนังที่เพิ่งดู เพื่อรู้ว่าคนส่วนใหญ่รู้สึกกับมันอย่างไร
- debate: con_flag | ratings Fel5 pro 3 con 3.1
- CON[theory s2] Reading public comments to see what most people felt is curiosity/conformity, endorsed by almost everyone; weak Fe (no attunement to specific others) and yet another film item in l (overlaps v). → CON rewrite: "เวลาว่างที่อยู่กับคนอื่น ฉันมักเลือกทำสิ่งที่คนส่วนใหญ่ในกลุ่มอยากทำ จนบางทีไม่ได้ทำสิ่งที่ตัวเองอยากเอง"

### Fen1 · st · ctx n · Fe · rev10
current: เวลาอ่านข่าว ฉันนึกถึงความรู้สึกของคนที่อยู่ในเหตุการณ์และครอบครัวเขา
- CON audit of rev10 item [desirability s2] Empathising with victims' families is universal compassion (~4.3). → CON rewrite: "เวลาอ่านข่าวเศร้า ฉันมักรู้สึกหนักตามคนในเหตุการณ์ไปทั้งวัน จนทำเรื่องอื่นไม่ค่อยลง"

### Fep1 · st · ctx p · Fe · rev10
current: ถ้าเพื่อนร่วมทีมดูหมดกำลังใจ ฉันจะเข้าไปปลุกใจก่อน แม้ตัวเองจะเหนื่อยอยู่
- LINT ["heroic_cost:แม้ตัวเองจะเหนื่อย"]

### Feq0 · st · ctx q · Fe · NEW
current: ไปงานไหน ฉันแต่งตัวให้เข้ากับธีมหรือบรรยากาศที่เจ้าภาพตั้งใจไว้ แม้จะไม่ใช่สไตล์ที่ฉันใส่ปกติ
- debate: con_flag | ratings Feq0 pro 3.6 con 3.9
- CON[culture s2] Dressing appropriately for the host's event is a strong Thai social obligation (แต่งกายให้เหมาะกับงาน) almost everyone endorses (~3.9); low Fe discrimination. → CON rewrite: "ไปงานไหน ฉันแต่งตัวตามธีมที่เจ้าภาพตั้งไว้เป๊ะ ๆ แม้ทั้งงานจะรู้สึกไม่ค่อยเป็นตัวเองเลย"

### Feq2 · st · ctx q · Fe · NEW
current: เลือกของขวัญ ฉันนึกถึงสีหน้าของคนรับตอนแกะ และอยากให้เขารู้สึกว่ามีคนเข้าใจเขา
- debate: con_flag | ratings Feq2 pro 3.7 con 4.1
- CON[desirability s2] Imagining the recipient's face and wanting them to feel understood (~4.1); gift context drift. → CON rewrite: "เลือกของใช้ส่วนตัว ฉันมักนึกว่าคนรอบตัวจะมองว่ามันเหมาะกับฉันไหม จนบางทีไม่ได้เลือกชิ้นที่ชอบที่สุด"

### Feq5 · st · ctx q · Fe · NEW
current: เทรนด์ที่คนรอบตัวกำลังชอบ ฉันมักเปิดใจลองตามบ้าง เพราะมันทำให้มีเรื่องคุยและสนุกไปด้วยกัน
- LINT ["R2_virtue:เปิดใจ"]

### Fer3 · st · ctx r · Fe · rev10
current: ฉันยอมถอยในเรื่องเล็ก ๆ เพื่อรักษาน้ำใจและบรรยากาศของกลุ่ม
- LINT ["R2_virtue:น้ำใจ"]

### Fes2 · st · ctx s · Fe · rev10
current: ในงานกลุ่มที่โรงเรียนหรือมหาวิทยาลัย ฉันให้ความสำคัญกับการที่ทุกคนรู้สึกว่าได้มีส่วนร่วม ไม่น้อยกว่าคุณภาพของงาน
- CON audit of rev10 item [desirability s2] 112 chars; 'ทุกคนมีส่วนร่วม ไม่น้อยกว่าคุณภาพงาน' is an inclusive-teamwork virtue. → CON rewrite: "ในงานกลุ่มที่เรียน ฉันห่วงว่าทุกคนรู้สึกได้มีส่วนร่วมไหม จนบางทีงานเสร็จช้าลง"

### Fet3 · st · ctx t · Fe · NEW
current: เวลาเพื่อนเล่าว่าสัตว์เลี้ยงของเขาป่วย ฉันรู้สึกตามและหาทางให้เขาสบายใจ จนบางทีลืมเรื่องของตัวเอง
- debate: con_flag | ratings Fet3 pro 3.7 con 3.8
- CON[desirability s2] Empathy + "จนบางทีลืมเรื่องของตัวเอง" is a self-sacrifice humblebrag (~3.8). → CON rewrite: "เวลาเพื่อนเล่าว่าสัตว์เลี้ยงของเขาป่วย ฉันหนักใจตามไปด้วยจนสลัดออกยาก แม้จะเป็นสัตว์ที่ฉันไม่เคยเจอ"

### Few5 · st · ctx w · Fe · NEW
current: เวลามีคนใหม่เข้าทีม ฉันมักคอยดูว่าเขาเข้ากับทุกคนได้หรือยัง แม้ไม่ใช่หน้าที่ของฉัน
- debate: con_flag; pro_fix | ratings Few5 pro 3.9 con 3.9
- CON[desirability s2] "แม้ไม่ใช่หน้าที่ของฉัน" is a humblebrag cost — going beyond duty to include a newcomer is the textbook มีน้ำใจ answer (~3.9). → CON rewrite: "เวลามีคนใหม่เข้าทีม ฉันมักคอยดูว่าเขาเข้ากับทุกคนได้หรือยัง จนบางทีงานของตัวเองเดินช้าลง"
- PRO[fix desirability s2] 'Looking after the newcomer even though it's not my job' is the good-colleague answer (~3.9). Add the cost of over-involvement so Fe users can pick it honestly and others are not shamed. → PRO rewrite: "เวลามีคนใหม่เข้าทีม ฉันคอยดูว่าเขาเข้ากับคนอื่นได้หรือยัง จนบางทีเข้าไปช่วยเชื่อมมากกว่าที่เขาต้องการ"

### Fex1 · st · ctx x · Fe · NEW
current: เวลานัดเพื่อน ฉันมักเลือกร้านหรือวันที่ทุกคนสะดวกที่สุด จนบางทีไม่ได้ไปที่ที่ตัวเองอยากไปเลย
- debate: con_flag | ratings Fex1 pro 3.5 con 3.9
- CON[duplicate s3] Near-verbatim copy of v10 Fel0 (เวลานัดเพื่อน ฉันเลือกวันและที่ที่ทุกคนสะดวก แม้ไม่ใช่ที่ที่ฉันอยากไปที่สุด). Same respondent sees the same idea twice; also accommodating-host = Thai มีน้ำใจ virtue, ~3.9. → CON rewrite: "ในแชทกลุ่ม ฉันมักเลือกคำและสติกเกอร์ให้เข้ากับอารมณ์ของวงตอนนั้น จนบางทีไม่ได้พูดสิ่งที่อยากพูดจริง ๆ"

### Fey3 · st · ctx y · Fe · rev10
current: ถ้าเพื่อนกำลังไม่สบายใจ ฉันยอมไปไหว้พระหรือดูดวงเป็นเพื่อนเขา แม้ตัวเองจะไม่ค่อยอินก็ตาม
- LINT ["R11_hierarchy:พระ"]

### Fey5 · st · ctx y · Fe · NEW
current: ไปสถานที่ของคนที่เชื่อต่างจากฉัน ฉันทำตามธรรมเนียมของที่นั่นให้เจ้าบ้านสบายใจ แม้ยังไม่เข้าใจความหมายทั้งหมด
- debate: con_flag; des_out_of_range 4.00 | ratings Fey5 pro 3.8 con 4.2
- CON[desirability s2] Following the host's customs at another faith's place is courtesy everyone endorses (~4.2); overlaps v10 Fej3. → CON rewrite: "ไปงานของคนที่เชื่อต่างจากฉัน ฉันทำตามทุกขั้นตอนเหมือนคนอื่น ๆ ในงาน แม้ในใจจะรู้สึกแปลก ๆ อยู่บ้าง"
- PRO[undefined desirability_high s] 

### Fez2 · st · ctx z · Fe · rev10
current: ฉันได้แรงบันดาลใจจากเรื่องของคนที่ทำให้ชุมชนหรือคนรอบตัวดีขึ้น
- CON audit of rev10 item [desirability s2] Inspired by people who improve the community = civic virtue (~4.2). → CON rewrite: "ฉันมีแรงทำตามฝันมากขึ้นเมื่อมีคนรอบตัวอินไปด้วย พอไม่มีใครสนใจ ฉันก็มักแผ่วลง"

### Fez5 · st · ctx z · Fe · NEW
current: บางครั้งฉันพักความฝันของตัวเองไว้ก่อน เพื่อช่วยให้คนในครอบครัวหรือในทีมไปถึงเป้าของเขา
- debate: con_flag; des_out_of_range 3.95 | ratings Fez5 pro 3.8 con 4.1
- CON[culture s2] Pausing your own dream to help family = กตัญญู/เสียสละ, a top Thai virtue (~4.1). → CON rewrite: "บางครั้งฉันปรับความฝันของตัวเองให้เข้ากับที่ครอบครัวอยากเห็น แม้ใจจริงจะอยากไปอีกทาง"
- PRO[undefined desirability_high s] 

### Fia2 · st · ctx a · Fi · rev10
current: ฉันตัดสินว่างานศิลปะดีหรือไม่ จากว่ามันจริงใจและกระทบใจฉันหรือไม่
- LINT ["R2_virtue:จริงใจ"]

### Fif2 · st · ctx f · Fi · NEW
current: ฉันดูความก้าวหน้าในงานอดิเรกจากว่าตัวเองอิ่มใจกับมันแค่ไหน มากกว่ายอดไลก์หรือคำชม
- debate: con_flag | ratings Fif2 pro 3.7 con 4
- CON[desirability s2] Judging progress by inner fulfilment 'rather than likes' is the anti-vanity ideal (~4.0); also duplicates BTeFif0 side b. → CON rewrite: "ฉันดูความก้าวหน้าในงานอดิเรกจากความอิ่มใจของตัวเอง จนบางทีไม่รู้เลยว่าฝีมือจริง ๆ ขยับไปถึงไหน"

### Fig1 · st · ctx g · Fi · rev10
current: ฉันไม่โกงหรือเล่นสกปรกในเกม แม้จะชนะง่ายกว่า เพราะมันขัดกับตัวฉัน
- CON audit of rev10 item [desirability s3] 'ฉันไม่โกงหรือเล่นสกปรก' is honesty, not Fi; nearly everyone endorses (~4.6). → CON rewrite: "ในเกม ฉันเลือกเล่นแบบที่รู้สึกว่าเป็นตัวเอง แม้จะไม่ใช่วิธีที่ชนะง่ายที่สุด"

### Fii4 · st · ctx i · Fi · NEW
current: บางการตัดสินใจเรื่องเงิน ฉันต้องรอให้ใจนิ่งก่อนว่ามันรู้สึกถูกต้องจริงไหม แม้ตัวเลขจะดูโอเคแล้ว
- LINT ["R7_outcome:ถูกต้อง"]

### Fik7 · st · ctx k · Fi · NEW
current: ฉันอยากให้สิ่งที่พูดและทำตรงกับที่รู้สึกข้างใน ถ้าไม่ตรง ฉันจะรู้สึกไม่เป็นตัวเอง
- debate: con_flag; pro_fix | ratings Fik7 pro 3.7 con 3.8
- CON[desirability s2] Authenticity with no cost (~3.8). In Thai self-presentation "เป็นตัวของตัวเอง/จริงใจ" is a prized trait. → CON rewrite: "ฉันพูดหรือทำในสิ่งที่ไม่ตรงกับใจได้ยากมาก จนบางทีเลือกเงียบแทนการพูดตามมารยาท"
- PRO[fix desirability s2] Authenticity without cost reads ~3.7. A Thai-specific cost (struggling with polite formulas one doesn't feel) makes it a real Fi-vs-Fe discriminator. → PRO rewrite: "ฉันอยากให้สิ่งที่พูดตรงกับที่รู้สึกข้างใน จนบางทีพูดคำตามมารยาทที่ไม่ได้รู้สึกจริงไม่ค่อยออก"

### Fil3 · st · ctx l · Fi · rev10
current: ฉันชอบกิจกรรมที่สอดคล้องกับสิ่งที่ฉันเชื่อ เช่น งานอาสาหรือเรื่องที่ฉันห่วงใย
- CON audit of rev10 item [desirability s2] 'งานอาสา…เรื่องที่ฉันห่วงใย' = altruism signal (~4.3), also Fe-flavoured helping. → CON rewrite: "เวลาว่าง ฉันชอบทำเรื่องที่ใจฉันผูกพันเป็นพิเศษ แม้คนอื่นจะมองว่าไม่เห็นได้อะไร"

### Fip1 · st · ctx p · Fi · rev10
current: ฉันไม่ยอมชนะด้วยวิธีที่ขัดกับหลักของตัวเอง เช่น เอาเปรียบคู่แข่ง
- CON audit of rev10 item [desirability s3] 'ไม่ยอมชนะด้วยวิธีเอาเปรียบคู่แข่ง' = sportsmanship virtue (~4.5), not Fi. → CON rewrite: "ถ้าวิธีเล่นที่ทีมใช้ทำให้ฉันรู้สึกไม่เป็นตัวเอง ฉันจะเล่นต่อแบบไม่เต็มใจ แม้มันจะได้ผลก็ตาม"

### Fit0 · st · ctx t · Fi · rev10
current: เรื่องสัตว์เลี้ยง ฉันตัดสินใจตามสิ่งที่ฉันเชื่อว่าถูกต้อง แม้คนอื่นเห็นต่าง
- LINT ["R7_outcome:ถูกต้อง"]

### Fiw0 · st · ctx w · Fi · rev10
current: ฉันรับงานที่ขัดกับค่านิยมของตัวเองไม่ได้ แม้ผลตอบแทนจะดี
- CON audit of rev10 item [desirability s2] Refusing value-violating work despite good pay = integrity ideal (~4.2). → CON rewrite: "ในงาน ถ้าต้องทำสิ่งที่ขัดกับค่านิยมของตัวเอง ฉันจะทำต่อได้ยากมาก แม้มันจะเป็นงานที่ดูดีในสายตาคนอื่น"

### Fiw5 · st · ctx w · Fi · NEW
current: เวลาเห็นเพื่อนร่วมงานถูกปฏิบัติอย่างไม่ยุติธรรม ฉันค้างใจลึก ๆ แม้คนอื่นจะมองว่าเป็นเรื่องปกติของที่ทำงาน
- debate: con_flag; pro_fix | ratings Fiw5 pro 3.8 con 3.9
- CON[desirability s2] Moral concern for an unfairly treated colleague is a plain virtue (~3.9); the "cost" (others think it normal) actually makes the respondent look more principled. → CON rewrite: "เวลาเห็นใครในที่ทำงานถูกปฏิบัติอย่างไม่ยุติธรรม ฉันค้างใจจนมองคนที่ทำแบบนั้นไม่เหมือนเดิมไปอีกนาน แม้คนอื่นจะลืมไปแล้ว"
- PRO[fix desirability s2] Moral outrage on a colleague's behalf is near-heroic (~3.8) and blends Fe empathy/Ti fairness. Make it about an inner principle vs the group norm, with a social cost. → PRO rewrite: "ถ้าวิธีทำงานที่ทุกคนถือเป็นเรื่องปกติขัดกับหลักในใจฉัน ฉันจะค้างใจอยู่นาน จนบางทีทำตัวกลมกลืนกับทีมได้ยาก"
- LINT ["R2_virtue:ยุติธรรม"]

### Fix3 · st · ctx x · Fi · NEW
current: เวลาเพื่อนมาปรึกษา ฉันมักถามว่าลึก ๆ แล้วใจเขาอยากได้อะไร มากกว่าบอกว่าคนส่วนใหญ่ทำกันยังไง
- debate: con_flag | ratings Fix3 pro 3.7 con 4
- CON[desirability s2] Asking what the friend truly wants deep down is good-counsellor behaviour (~4.0) and is about the friend's values, which Fe can claim too. → CON rewrite: "เวลาเพื่อนมาปรึกษา ฉันมักตอบจากสิ่งที่ใจฉันเองให้ค่า จนบางทีเพื่อนรู้สึกว่ามันเป็นทางของฉันมากกว่าของเขา"

### Fiy4 · st · ctx y · Fi · NEW
current: ถ้าธรรมเนียมไหนขัดกับสิ่งที่ฉันรู้สึกว่าถูก ฉันเลือกไม่ทำ แม้จะทำให้ผู้ใหญ่บางคนไม่พอใจ
- debate: con_flag; des_out_of_range 2.70 | ratings Fiy4 pro 2.8 con 2.6
- CON[culture s2] Refusing a tradition even when elders are displeased violates Thai respect for elders (~2.6); far below band and Fi users may hold the line privately instead. → CON rewrite: "ถ้าธรรมเนียมไหนขัดกับสิ่งที่ฉันรู้สึกว่าถูก ฉันอาจยังทำตาม แต่ในใจจะรู้ชัดว่ามันไม่ใช่ตัวฉัน"
- PRO[undefined desirability_low s]  → PRO rewrite: "ถ้าธรรมเนียมไหนขัดกับสิ่งที่ฉันรู้สึกว่าถูก ฉันจะร่วมเท่าที่ไม่ฝืนใจตัวเอง แม้ผู้ใหญ่บางคนจะมองว่าฉันทำไม่ครบ"
- LINT ["R11_hierarchy:ผู้ใหญ่"]

### Fiz4 · st · ctx z · Fi · NEW
current: เห็นคนอื่นประสบความสำเร็จ ฉันมักถามตัวเองก่อนว่านั่นใช่สิ่งที่ฉันอยากได้จริง ๆ ไหม ก่อนจะรู้สึกอยากตาม
- LINT ["R7_outcome:สำเร็จ"]

### Nek1 · st · ctx k · Ne · rev10
current: ความคิดของฉันกระโดดไปมาระหว่างเรื่องที่เชื่อมกันได้อย่างรวดเร็ว
- LINT ["R7_outcome:อย่างรวดเร็ว"]

### Ner4 · st · ctx r · Ne · NEW
current: ฉันชอบชวนคนในบ้านเปลี่ยนวิธีทำเรื่องเดิม ๆ ให้แปลกไป เช่น จัดวันเกิดแบบที่ไม่เคยทำมาก่อน
- LINT ["R4_absolute:ไม่เคย"]

### New1 · st · ctx w · Ne · rev10
current: ฉันมักเห็นความเชื่อมโยงของเรื่องที่ดูไม่เกี่ยวกัน แล้วนำมาต่อยอดงานได้
- CON audit of rev10 item [ability s2] 'แล้วนำมาต่อยอดงานได้' adds a success outcome. → CON rewrite: "ในงาน ฉันมักโยงเรื่องที่ดูไม่เกี่ยวกันเข้าหากัน จนบางทีไอเดียไปไกลกว่าที่งานต้องการ"

### Nex3 · st · ctx x · Ne · NEW
current: เวลาเพื่อนปรึกษา ฉันมักช่วยคิดทางออกหลายแบบ รวมถึงทางแปลก ๆ ที่เขาอาจไม่เคยนึกถึง
- debate: con_flag | ratings Nex3 pro 3.7 con 3.9
- CON[desirability s2] Helping a friend brainstorm solutions incl. ones they never thought of = resourceful helper (~3.9). → CON rewrite: "เวลาเพื่อนปรึกษา ฉันมักโยนทางออกแปลก ๆ มาหลายแบบ จนบางทีเพื่อนต้องบอกว่าขอแค่ทางเดียวที่ทำได้จริง"
- LINT ["R4_absolute:ไม่เคย"]

### Nez0 · st · ctx z · Ne · rev10
current: ฉันมีความฝันหลายอันพร้อมกัน และตื่นเต้นทุกครั้งที่นึกถึงทางใหม่ ๆ ที่ชีวิตเป็นไปได้
- LINT ["R4_absolute:ทุกครั้ง"]

### Nid3 · st · ctx d · Ni · NEW
current: เวลากินอาหารจานเด่น ฉันมักสนใจว่าเบื้องหลังมันมีแก่นเรื่องหรือความหมายอะไรซ่อนอยู่
- debate: con_flag; pro_fix | ratings Nid3 pro 3.2 con 2.9
- CON[unclear s2] "แก่นเรื่องหรือความหมายซ่อนอยู่" behind a dish is odd/pretentious for Thai eaters (~2.9) and not a recognisable Ni behaviour; few will endorse regardless of type. → CON rewrite: "พอได้กินอาหารแนวเดียวกันหลายร้าน ฉันมักรู้สึกได้ว่ามีหลักเดียวที่ทำให้ร้านที่อร่อยจริงต่างจากร้านอื่น"
- PRO[fix unclear s2] 'แก่นเรื่องหรือความหมายซ่อนอยู่' in a dish sounds pretentious/unnatural to Thai readers, so few will pick it regardless of type. Ground it in meaning about a way of life. → PRO rewrite: "เวลากินอาหารจากถิ่นอื่น ฉันมักรู้สึกว่ารสชาติของมันบอกอะไรลึก ๆ เกี่ยวกับวิถีชีวิตของคนที่นั่น"

### Nig2 · st · ctx g · Ni · rev10
current: ในเกม ฉันมักรู้สึกว่าเพื่อนร่วมทีมหรือคู่ต่อสู้กำลังจะทำอะไร โดยบอกไม่ได้ว่าทำไมถึงรู้
- CON audit of rev10 item [ability s2] '…โดยบอกไม่ได้ว่าทำไมถึงรู้' asserts the prediction is right. → CON rewrite: "ในเกม ฉันมักมีความรู้สึกว่าคู่ต่อสู้กำลังจะทำอะไร แล้วเล่นตามความรู้สึกนั้น แม้บอกเหตุผลไม่ได้"

### Nip0 · st · ctx p · Ni · rev10
current: เวลาเล่นกีฬา ฉันมักเห็นล่วงหน้าว่าเกมจะพลิกไปทางไหน ก่อนมันเกิดขึ้น
- CON audit of rev10 item [ability s2] 'เห็นล่วงหน้าว่าเกมจะพลิก ก่อนมันเกิดขึ้น' = accurate foresight. → CON rewrite: "เวลาเล่นกีฬา ฉันมักมีความรู้สึกว่าเกมกำลังจะพลิกไปทางไหน แล้วเล่นเผื่อทางนั้นไว้ก่อน"

### Niq2 · st · ctx q · Ni · NEW
current: เห็นเทรนด์ใหม่ ฉันมักรู้สึกว่ามันจะอยู่ยาวหรือแค่ผ่านมา แม้ยังบอกเหตุผลเป็นข้อ ๆ ไม่ได้
- debate: con_flag | ratings Niq2 pro 3.4 con 3.8
- CON[ability s2] Sensing whether a trend will last is trend-forecasting; endorsing it claims taste foresight (~3.8). → CON rewrite: "เห็นเทรนด์ใหม่ ฉันมักรู้สึกลึก ๆ ว่ามันกำลังสะท้อนอะไรบางอย่างของยุคนี้ จนบางทีคิดไปไกลเกินกว่าแค่เสื้อผ้า"

### Nit3 · st · ctx t · Ni · NEW
current: ก่อนรับสัตว์เลี้ยงสักตัว ฉันมักรู้สึกลึก ๆ ว่าตัวไหน “ใช่” สำหรับชีวิตเรา ก่อนจะเห็นข้อมูลครบ
- debate: con_flag; pro_fix | ratings Nit3 pro 3.4 con 3.2
- CON[theory s2] "รู้สึกลึก ๆ ว่าตัวไหน ใช่ สำหรับชีวิตเรา" is a value/gut-fit judgement (Fi), not pattern convergence. → CON rewrite: "จากพฤติกรรมเล็ก ๆ หลายอย่าง ฉันมักปะติดปะต่อได้ว่าสัตว์เลี้ยงกำลังจะเปลี่ยนไปทางไหน ก่อนจะมีอาการชัด ๆ ให้เห็น"
- PRO[fix theory s2] 'รู้สึกลึก ๆ ว่าตัวไหน “ใช่” สำหรับชีวิตเรา' is a values/heart verdict (Fi) as much as Ni. Make it the long-range image that guides the choice. → PRO rewrite: "ก่อนรับสัตว์เลี้ยงสักตัว ฉันมักเห็นภาพในหัวว่าอีกหลายปีข้างหน้าชีวิตกับมันจะเป็นอย่างไร แล้วใช้ภาพนั้นตัดสินใจ"

### Niv2 · st · ctx v · Ni · rev10
current: หนังที่ฝังใจฉันคือเรื่องที่ทำให้เห็นภาพรวมบางอย่างของชีวิตที่ไม่เคยเห็นมาก่อน
- LINT ["R4_absolute:ไม่เคย"]

### Niy4 · st · ctx y · Ni · NEW
current: เวลาฝันหรือเจอเรื่องบังเอิญแปลก ๆ ฉันมักรู้สึกว่ามันมีความหมายซ่อนอยู่ และเก็บไว้คิดต่อหลายวัน
- debate: con_flag | ratings Niy4 pro 3.2 con 3
- CON[culture s2] Dreams and odd coincidences having hidden meaning maps onto Thai folk belief (ฝันบอกเหตุ, ลาง); measures superstition/religiosity rather than Ni. → CON rewrite: "บางประโยคจากคำสอนหรือหนังสือติดอยู่ในใจฉันหลายวัน จนวันหนึ่งความหมายของมันก็ชัดขึ้นมาเองกับชีวิตตอนนั้น"
- PRO[undefined cultural_confound s]  → PRO rewrite: "เวลาหลายเรื่องเล็ก ๆ ในชีวิตเกิดขึ้นช่วงเดียวกัน ฉันมักรู้สึกว่ามันโยงไปที่ความหมายเดียว และเก็บไว้คิดต่อหลายวัน"

### Niz5 · st · ctx z · Ni · NEW
current: รายละเอียดความฝันของฉันเปลี่ยนได้เรื่อย ๆ แต่แก่นที่อยู่ข้างใต้ยังเป็นภาพเดียวที่ชัดอยู่เสมอ
- LINT ["R4_absolute:เสมอ"]

### Sef2 · st · ctx f · Se · NEW
current: ฉันพัฒนางานอดิเรกจากการลงมือจริงบ่อย ๆ แล้วปรับตามสิ่งที่เกิดขึ้นตอนนั้น มากกว่าการนั่งอ่านทฤษฎี
- debate: con_flag | ratings Sef2 pro 3.4 con 3.4
- CON[duplicate s2] Restates Sef0/Sef1 in the same context and v10 Sek2/Sew0 (learn by doing rather than theory). → CON rewrite: "ระหว่างทำงานอดิเรก ฉันจดจ่อกับเสียง กลิ่น และสัมผัสตรงหน้า จนลืมดูเวลาไปเลย"
- PRO[undefined redundancy s] 

### Sej0 · st · ctx j · Se · rev10
current: สิ่งที่ฉันชอบที่สุดตอนเที่ยวคือได้ลองจริง เช่น ดำน้ำ ปีนเขา หรือกินสตรีทฟู้ดที่ไม่เคยกิน
- LINT ["R4_absolute:ไม่เคย"]

### Sel5 · st · ctx l · Se · NEW
current: วันว่างที่ไม่มีแผน ฉันมักออกไปข้างนอกแล้วดูว่าเจออะไรตรงหน้าก็เอาตามนั้น
- debate: con_flag | ratings Sel5 pro 3.3 con 3.2
- CON[ei_confound s2] "ออกไปข้างนอก" ties Se to going out (E/activity); brief rule 5 says Se ≠ going out. → CON rewrite: "วันว่างที่ไม่มีแผน ฉันตัดสินใจจากสิ่งที่เห็นตรงหน้าตอนนั้น เช่น อากาศดีก็ออกไปเดิน ฝนตกก็หาอะไรทำในบ้าน"
- PRO[fix ei_confound s1] 'ออกไปข้างนอก' carries E energy; acceptable but don't pair against an I-loaded statement.

### Ses3 · st · ctx s · Se · NEW
current: เวลาฝึกปฏิบัติหรือทำแล็บ ฉันมักลงมือเลยแล้วปรับตามสิ่งที่เห็นตรงหน้า มากกว่าอ่านขั้นตอนให้ครบก่อน
- debate: con_flag | ratings Ses3 pro 3.1 con 2.9
- CON[theory s2] Another "act before reading the steps" Se item (also Sek8, Seb3, BNiSe9-B, BNiSeg0-B, EIar4-E): defines Se as impulsivity/P/E rather than sensory attention; in a lab it also sounds careless (~2.9). → CON rewrite: "เวลาทำแล็บหรือฝึกปฏิบัติ ความสนใจของฉันอยู่กับสิ่งที่เปลี่ยนไปตรงหน้า เช่น สี กลิ่น หรือเสียง แล้วปรับตามนั้นทันที"

### Seu2 · st · ctx u · Se · rev10
current: ฉันใส่ใจรายละเอียดของเสียง เช่น เบสแน่นไหม เสียงร้องใสไหม หูฟังเสียงดีหรือเปล่า
- LINT ["R2_virtue:ใส่ใจ"]

### Sex1 · st · ctx x · Se · NEW
current: ถ้าเพื่อนเจอเรื่องฉุกเฉิน ฉันมักลงมือช่วยตรงหน้าก่อน เช่น ไปรับหรือหาของที่ต้องใช้ แล้วค่อยถามรายละเอียดทีหลัง
- debate: con_flag; des_out_of_range 4.05 | ratings Sex1 pro 3.9 con 4.2
- CON[desirability s3] Rushing to physically help a friend in an emergency is heroic (~4.2) and would beat almost any partner in an MFC pair; helping-a-friend is also virtuous independent of Se. → CON rewrite: "ถ้าเพื่อนเจอเรื่องด่วน ฉันมักขยับลงมือตรงหน้าไปก่อน เช่น ขับรถไปหา แม้บางทีจะยังไม่ได้ถามว่าเขาอยากได้แบบนั้นไหม"
- PRO[undefined desirability_high s]  → PRO rewrite: "ถ้าเพื่อนเจอเรื่องฉุกเฉิน ฉันมักลงมือช่วยตรงหน้าก่อน เช่น ไปรับหรือหาของที่ต้องใช้ จนบางทีช่วยผิดจุดเพราะยังไม่ได้ถามรายละเอียด"

### Sex4 · st · ctx x · Se · NEW
current: ถ้ามีเรื่องไม่เข้าใจกันกับเพื่อน ฉันอยากเจอหน้าคุยกันตอนนั้นเลย มากกว่าพิมพ์ยาว ๆ หรือรอให้เรื่องเย็นลง
- debate: con_flag | ratings Sex4 pro 3.2 con 3.2
- CON[ei_confound s2] Wanting to meet face-to-face immediately rather than text or cool down is E (outer engagement) plus confrontation style; Se is about concrete sensory data, not urgency of social contact. → CON rewrite: "ถ้ามีเรื่องไม่เข้าใจกันกับเพื่อน ฉันดูจากสีหน้าท่าทางของเขาตอนเจอกันจริง มากกว่าตัวหนังสือในแชท ว่าเรื่องหนักแค่ไหน"

### Sif0 · st · ctx f · Si · NEW
current: ฉันฝึกงานอดิเรกเป็นกิจวัตร ช่วงเวลาเดิม มุมเดิม และรู้สึกได้ว่าความคุ้นมือค่อย ๆ สะสมขึ้นทุกครั้ง
- LINT ["R4_absolute:ทุกครั้ง"]

### Sii0 · st · ctx i · Si · rev10
current: ฉันลงทุนแบบเดิมสม่ำเสมอ เช่น ซื้อเท่า ๆ กันทุกเดือน ไม่ค่อยเปลี่ยนวิธี
- LINT ["R4_absolute:เสมอ"]

### Sij1 · st · ctx j · Si · rev10
current: เวลาจัดกระเป๋า ฉันมีลิสต์ของประจำที่ต้องพกทุกครั้ง และจัดแบบเดิมจนชิน
- LINT ["R4_absolute:ทุกครั้ง"]

### Sip3 · st · ctx p · Si · NEW
current: ก่อนลงเล่นกีฬา ฉันมีลำดับวอร์มและของใช้ประจำที่ทำเหมือนเดิมทุกครั้ง แล้วรู้สึกพร้อมขึ้น
- LINT ["R4_absolute:ทุกครั้ง"]

### Siq5 · st · ctx q · Si · NEW
current: เลือกของขวัญ ฉันนึกย้อนถึงรายละเอียดที่คนนั้นเคยพูดหรือเคยใช้ แล้วเลือกให้ตรงกับที่เขาชอบมาตลอด
- debate: con_flag | ratings Siq5 pro 3.7 con 4
- CON[desirability s2] Recalling exactly what the recipient said/used is the model thoughtful giver (~4.0) and Fe-adjacent attentiveness; also gift context drift. → CON rewrite: "เลือกของขวัญ ฉันมักเลือกแบบเดียวกับที่เคยให้แล้วคนรับชอบ จนบางทีของขวัญปีนี้หน้าตาคล้ายปีก่อน"

### Siu0 · st · ctx u · Si · rev10
current: เพลงเก่าที่ชอบ ฉันฟังวนเป็นปี ๆ และทุกครั้งยังให้ความรู้สึกดีเหมือนเดิม
- LINT ["R4_absolute:ทุกครั้ง"]

### Siw1 · st · ctx w · Si · rev10
current: ในงาน ฉันชอบมีขั้นตอนที่เคยใช้แล้วได้ผล และใช้ซ้ำเพื่อให้งานออกมาสม่ำเสมอ
- LINT ["R4_absolute:เสมอ"]

### Six2 · st · ctx x · Si · NEW
current: ฉันมักสังเกตได้ว่าเพื่อนดูต่างไปจากเดิม เพราะในหัวยังจำได้ว่าปกติเขาพูดหรือตอบแชทแบบไหน
- debate: con_flag | ratings Six2 pro 3.7 con 4
- CON[ability s2] 'มักสังเกตได้ว่าเพื่อนดูต่างไป' is perceptiveness (ability) and caring attentiveness (Fe-adjacent); ~4.0. → CON rewrite: "ฉันจำได้ว่าเพื่อนแต่ละคนปกติตอบแชทแบบไหน พอเขาเปลี่ยนไปนิดเดียว ฉันก็สะดุดและคิดวนอยู่หลายรอบ"
- PRO[undefined  s] 

### Siy1 · st · ctx y · Si · rev10
current: ความเชื่อของฉันหยั่งรากจากสิ่งที่เห็นและทำมาตั้งแต่เด็ก และยังมีความหมายกับฉันเสมอ
- LINT ["R4_absolute:เสมอ"]

### Siy5 · st · ctx y · Si · NEW
current: ฉันรู้ว่าการปฏิบัติแบบไหนเหมาะกับตัวเอง จากความรู้สึกในตัวที่เกิดขึ้นทุกครั้งที่ทำ เช่น ใจเบาลงแบบเดิม
- LINT ["R4_absolute:ทุกครั้ง"]

### Tef2 · st · ctx f · Te · NEW
current: ถ้าฝึกแล้วไม่เห็นความคืบหน้า ฉันจะเปลี่ยนวิธีหรือพักมันไว้เลย แม้บางคนจะมองว่าฉันใจร้อน
- LINT ["R9_neglabel:ใจร้อน"]

### Teg2 · st · ctx g · Te · rev10
current: ฉันดูสถิติของตัวเองเพื่อหาว่าต้องปรับอะไรให้เล่นมีประสิทธิภาพขึ้น
- LINT ["R7_outcome:มีประสิทธิภาพ"]

### Tek1 · st · ctx k · Te · rev10
current: เมื่อเห็นความไม่มีประสิทธิภาพ ฉันอยากรีบแก้ทันที
- LINT ["R7_outcome:มีประสิทธิภาพ"]

### Tek7 · st · ctx k · Te · NEW
current: เวลามีปัญหา ฉันมักถามก่อนว่า “แล้วจะทำอะไรต่อ” มากกว่านั่งหาว่าใครผิด
- debate: con_flag; pro_fix | ratings Tek7 pro 3.9 con 3.9
- CON[desirability s2] The rejected alternative is framed pejoratively ("นั่งหาว่าใครผิด"), so the item reads as the mature solution-focused person (~3.9). → CON rewrite: "เวลามีปัญหา ฉันข้ามไปที่ “แล้วจะทำอะไรต่อ” ทันที จนบางทีคนอื่นรู้สึกว่าฉันไม่ได้ฟังว่าเขารู้สึกอย่างไร"
- PRO[fix desirability s2] 'Solutions not blame' is the textbook virtuous answer (~3.9). Keep Te's action-orientation, add the cost that fits Te (skipping feelings). → PRO rewrite: "เวลามีปัญหา ฉันมักข้ามไปที่ “แล้วจะทำอะไรต่อ” ทันที จนบางทีคนอื่นรู้สึกว่าฉันไม่ได้ฟังว่าเขารู้สึกอย่างไร"

### Tem3 · st · ctx m · Te · NEW
current: เวลาในกลุ่มแชตออนไลน์คุยกันวนไปมา ฉันมักสรุปประเด็นแล้วเสนอให้ตัดสินใจว่าจะเอาอย่างไร
- debate: con_flag | ratings Tem3 pro 3.6 con 3.8
- CON[desirability s2] Summarising a looping chat and moving to decision = helpful leader (~3.8); also initiating in public chat adds E. → CON rewrite: "เวลาในกลุ่มแชตคุยกันวนไปมา ฉันอึดอัดจนต้องพิมพ์สรุปแล้วถามให้ตัดสินใจ แม้บางคนยังอยากคุยต่อ"
- PRO[fix ei_confound s1] Summarising and calling a decision in a group chat is also an E/leadership act; acceptable for Te but avoid pairing against an I-loaded Fi/Ni line.

### Tep2 · st · ctx p · Te · rev10
current: ในทีมกีฬา ฉันมักเป็นคนกำหนดแผนและตำแหน่ง เพื่อให้ทุกคนทำงานได้มีประสิทธิภาพ
- LINT ["R7_outcome:มีประสิทธิภาพ"]

### Teq1 · st · ctx q · Te · NEW
current: ก่อนซื้อของแต่งบ้าน ฉันวัดพื้นที่ เช็กรีวิว และเทียบตัวเลือกจนได้ชิ้นที่ทั้งสวยและใช้งานได้จริง
- debate: con_flag | ratings Teq1 pro 3.7 con 3.9
- CON[desirability s2] Outcome clause 'ได้ชิ้นที่ทั้งสวยและใช้งานได้จริง' makes it the smart-shopper success story (~3.9). → CON rewrite: "ก่อนซื้อของแต่งบ้าน ฉันวัดพื้นที่ เช็กรีวิว และเทียบตัวเลือกเป็นตาราง จนบางทีคนที่ไปด้วยเบื่อรอ"
- PRO[undefined desirability_high s] 

### Ter2 · st · ctx r · Te · rev10
current: ฉันคาดหวังให้คนรอบตัวทำตามที่ตกลงกันไว้
- CON audit of rev10 item [theory s2] Expecting people to keep agreements is universal (~4.0), not Te-specific. → CON rewrite: "ถ้าคนรอบตัวไม่ทำตามที่ตกลงกันไว้ ฉันจะทวงตรง ๆ ทันที แม้บรรยากาศจะเสียไปบ้าง"

### Teu1 · st · ctx u · Te · rev10
current: ฉันใช้เพลงเป็นเครื่องมือ เช่น เปิดเพลงที่ช่วยให้โฟกัสงานหรือออกกำลังได้มีประสิทธิภาพขึ้น
- LINT ["R7_outcome:มีประสิทธิภาพ"]

### Tev2 · st · ctx v · Te · rev10
current: ฉันตัดสินว่าหนังดีหรือไม่ จากว่ามันทำสำเร็จตามเป้าที่ตั้งไว้ เช่น ความตลกหรือความระทึก
- LINT ["R7_outcome:สำเร็จ"]

### Tex1 · st · ctx x · Te · NEW
current: เวลาเพื่อนเจอเรื่องใหญ่ เช่น ตกงาน ฉันมักช่วยหาข้อมูล คนที่ติดต่อได้ หรือลิสต์สิ่งที่ต้องทำให้เขา
- debate: con_flag; des_out_of_range 3.95 | ratings Tex1 pro 3.8 con 4.1
- CON[desirability s2] Researching contacts and making a to-do list for a friend who lost a job is exemplary friendship (~4.1). → CON rewrite: "เวลาเพื่อนเจอเรื่องใหญ่ เช่น ตกงาน ฉันมักรีบลิสต์สิ่งที่เขาต้องทำต่อให้ แม้เขาอาจยังไม่พร้อมคิดเรื่องนั้น"
- PRO[undefined desirability_high s]  → PRO rewrite: "เวลาเพื่อนเจอเรื่องใหญ่ เช่น ตกงาน ฉันมักรีบช่วยหาข้อมูลหรือลิสต์สิ่งที่ต้องทำให้เขา แม้บางทีเขาอยากได้แค่คนฟัง"

### Tey5 · st · ctx y · Te · NEW
current: เวลาครอบครัวเตรียมงานบุญหรือพิธี ฉันมักเป็นคนจัดลำดับงานและแบ่งหน้าที่ ให้ทุกอย่างเสร็จทันเวลา
- debate: con_flag | ratings Tey5 pro 3.8 con 3.9
- CON[desirability s2] Organising the family merit ceremony so all finishes on time = responsible, กตัญญู child (~3.9). → CON rewrite: "เวลาครอบครัวเตรียมงานบุญ ฉันมักเข้าไปจัดลำดับงานและแบ่งหน้าที่ จนบางทีผู้ใหญ่รู้สึกว่าฉันรวบรัดเกินไป"
- PRO[undefined desirability_high s] 

### Tib0 · st · ctx b · Ti · rev10
current: เวลาอ่านงานที่ให้เหตุผล ฉันตรวจทีละขั้นว่าตรรกะต่อกันได้จริงหรือไม่
- LINT ["R6_label:ตรรกะ"]

### Tif1 · st · ctx f · Ti · NEW
current: ฉันมักสร้างวิธีฝึกของตัวเองจากหลักที่เข้าใจ แทนที่จะทำตามคอร์สสำเร็จรูป แม้จะช้ากว่าก็ตาม
- LINT ["R7_outcome:สำเร็จ"]

### Tih5 · st · ctx h · Ti · NEW
current: ถ้ารู้สึกหึง ฉันจะถามตัวเองก่อนว่ามันมีเหตุผลตรงไหน แม้บางทีอีกฝ่ายจะมองว่าฉันคิดเยอะไป
- LINT ["R2_virtue:มีเหตุผล"]

### Tij4 · st · ctx j · Ti · NEW
current: ฉันมีหลักการเที่ยวของตัวเองไม่กี่ข้อที่ใช้คิดได้ทุกทริป และคอยปรับให้มันไม่ขัดกันเอง
- LINT ["R2_virtue:มีหลักการ"]

### Til1 · st · ctx l · Ti · rev10
current: ฉันชอบปริศนา ตรรกะ หรือเกมที่ต้องใช้การวิเคราะห์
- LINT ["R6_label:ตรรกะ"]

### Tim1 · st · ctx m · Ti · rev10
current: เวลาเห็นโพสต์ที่แชร์กันเยอะ ฉันมักไล่หาจุดที่เหตุผลไม่ต่อกัน จนบางคนรู้สึกว่าฉันจับผิด
- LINT ["R9_neglabel:จับผิด"]

### Tin0 · st · ctx n · Ti · rev10
current: อ่านข่าวแล้ว ฉันชอบไล่ตรรกะเองว่าข้อสรุปของคนเขียนสมเหตุสมผลไหม
- LINT ["R6_label:ตรรกะ"]

### Tiq4 · st · ctx q · Ti · NEW
current: เลือกของใช้ ฉันชอบดูว่าแต่ละส่วนของรูปทรงมีเหตุผลรองรับไหม ถ้ามีส่วนที่ใส่มาเฉย ๆ ฉันจะไม่ค่อยชอบ
- LINT ["R2_virtue:มีเหตุผล"]

### Tir3 · st · ctx r · Ti · rev10
current: ฉันมักเงียบ ขณะที่ในหัวกำลังชั่งเหตุผลหลายด้านอยู่
- CON audit of rev10 item [ei_confound s2] 'มักเงียบ' = quietness/introversion; Ti ≠ quiet (brief rule 5). → CON rewrite: "ระหว่างคุย ฉันมักไล่เช็กในหัวว่าเหตุผลของแต่ละคนต่อกันติดไหม จนบางทีหลุดจากอารมณ์ของวง"

### Tit3 · st · ctx t · Ti · NEW
current: เวลามีคนบอกว่าสัตว์ตัวไหน “ดื้อ” หรือ “ขี้อ้อน” ฉันอยากรู้ว่าเขาใช้คำนั้นหมายถึงพฤติกรรมอะไรแน่
- LINT ["R9_neglabel:ดื้อ"]

### Tiv0 · st · ctx v · Ti · rev10
current: เวลาดูหนัง ฉันจับผิดพล็อตที่ไม่สมเหตุสมผล หรือตัวละครที่ทำขัดกับตรรกะของเรื่อง
- LINT ["R6_label:ตรรกะ","R9_neglabel:จับผิด"]

### Tiw5 · st · ctx w · Ti · NEW
current: ฉันมักไล่เหตุผลของแผนงานเองตั้งแต่ต้นจนจบ แม้หัวหน้าจะอนุมัติไปแล้ว
- LINT ["R11_hierarchy:หัวหน้า"]

### Tix1 · st · ctx x · Ti · NEW
current: ถ้าเพื่อนสองคนผิดใจกัน ฉันอยากฟังให้ครบทั้งสองฝั่งแล้วไล่ดูว่าเรื่องเริ่มเพี้ยนตรงไหน ก่อนจะเข้าข้างใคร
- debate: con_flag; des_out_of_range 3.95 | ratings Tix1 pro 3.7 con 4.2
- CON[desirability s2] Hearing both sides fully before taking sides is the fairness ideal (~4.2); Fe/Fi users will endorse it too. → CON rewrite: "ถ้าเพื่อนสองคนผิดใจกัน ฉันมักไล่ลำดับเหตุการณ์ในหัวว่าเพี้ยนตรงไหน จนบางทีลืมไปว่าทั้งคู่แค่อยากให้มีคนฟัง"

### Tix4 · st · ctx x · Ti · NEW
current: เวลาเพื่อนทำอะไรที่ฉันไม่เข้าใจ ฉันมักพยายามหาเหตุผลว่าทำไมเขาคิดแบบนั้น แทนที่จะตัดสินไปก่อน
- debate: con_flag; des_out_of_range 4.00 | ratings Tix4 pro 3.8 con 4.2
- CON[theory s3] Trying to understand why a friend thinks that 'instead of judging first' is perspective-taking / non-judgment — a moral virtue (~4.2) with Fe/Ne flavour, not Ti's internal consistency. → CON rewrite: "เวลาเพื่อนทำอะไรที่ฉันไม่เข้าใจ ฉันมักไล่หาเหตุผลในหัวจนกว่ามันจะต่อกันติด แม้เพื่อนจะไม่ได้อยากให้วิเคราะห์"
- PRO[undefined desirability_high s]  → PRO rewrite: "เวลาเพื่อนทำอะไรที่ฉันไม่เข้าใจ ฉันอยากไล่ให้ได้ว่าตรรกะของเขาคืออะไร จนบางทีถามซักจนเพื่อนรู้สึกเหมือนถูกสอบสวน"

### Tiz0 · st · ctx z · Ti · rev10
current: ก่อนจะทุ่มให้ความฝันไหน ฉันต้องเข้าใจก่อนว่ามันทำงานยังไง และมีเหตุผลอะไรที่มันจะเป็นไปได้
- LINT ["R2_virtue:มีเหตุผล"]

### Tiz5 · st · ctx z · Ti · NEW
current: ฟังเรื่องเส้นทางสำเร็จของใคร ฉันชอบไล่หาว่าปัจจัยไหนเป็นเหตุจริง ส่วนไหนแค่เรื่องบังเอิญ
- LINT ["R7_outcome:สำเร็จ"]
