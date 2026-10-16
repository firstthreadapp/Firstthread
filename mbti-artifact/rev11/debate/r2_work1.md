# Round-2 work list part 1 (131 items)

### BNeSi0 · bip · ctx o · Ne-Si · rev10
current: {"a":"ฉันชอบเปิดทางเลือกใหม่ ๆ มากกว่าทำตามวิธีที่เคยใช้","b":"ฉันชอบใช้วิธีที่เคยได้ผลมาแล้ว มากกว่าลองวิธีที่ไม่เคยใช้"}
- LINT ["R4_absolute:ไม่เคย"]

### BNeSi6 · bip · ctx o · Ne-Si · rev10
current: {"a":"ฉันมักนึกถึงไอเดียที่เคยคิดไว้ มากกว่าว่าเรื่องนั้นเกิดเมื่อไร ที่ไหน","b":"ฉันมักนึกถึงว่าเรื่องหนึ่งเกิดเมื่อไร ที่ไหน มากกว่าไอเดียที่เคยคิดไว้"}
- CON audit of rev10 item [unclear s2] Mirror-worded 'ไอเดียที่เคยคิดไว้ vs เมื่อไร ที่ไหน' is confusing; readers must parse it twice. → CON rewrite: {"a":"เวลานึกย้อนเรื่องเก่า ฉันมักนึกถึงไอเดียที่ผุดขึ้นตอนนั้น มากกว่าว่าเกิดที่ไหน เมื่อไร","b":"เวลานึกย้อนเรื่องเก่า ฉันมักนึกถึงว่าเกิดที่ไหน เมื่อไร มากกว่าไอเดียที่ผุดขึ้นตอนนั้น"}

### BNeSi8 · bip · ctx o · Ne-Si · NEW
current: {"a":"เวลาจัดห้องหรือโต๊ะทำงาน ฉันชอบลองย้ายของไปไว้แบบใหม่เป็นระยะ เพื่อดูว่าจะออกมาเป็นยังไง","b":"เวลาจัดห้องหรือโต๊ะทำงาน ฉันชอบให้ของอยู่ที่เดิมเสมอ เพื่อหยิบใช้ได้โดยไม่ต้องคิด"}
- LINT ["R4_absolute:เสมอ"]

### BNeSib0 · bip · ctx b · Ne-Si · NEW
current: {"a":"เวลาเลือกหนังสือเล่มต่อไป ฉันมักหยิบแนวหรือผู้เขียนที่ไม่เคยอ่าน เพื่อดูว่าจะเจออะไรใหม่","b":"เวลาเลือกหนังสือเล่มต่อไป ฉันมักหยิบแนวหรือผู้เขียนที่เคยอ่านแล้วถูกใจ เพราะรู้ว่าจะได้อะไร"}
- LINT ["R4_absolute:ไม่เคย"]

### BNeSig0 · bip · ctx g · Ne-Si · NEW
current: {"a":"ในเกมที่เล่นมานาน ฉันชอบหาวิธีเล่นแบบใหม่ เพื่อให้มันยังมีอะไรให้ลองอยู่เสมอ","b":"ในเกมที่เล่นมานาน ฉันชอบเล่นด้วยวิธีที่คุ้นมือ แล้วค่อย ๆ เก็บรายละเอียดเพิ่ม"}
- LINT ["R4_absolute:เสมอ"]

### BNeSij0 · bip · ctx j · Ne-Si · rev10
current: {"a":"ฉันชอบไปที่ใหม่ทุกทริป","b":"ฉันชอบกลับไปที่เดิมที่รู้ว่าชอบ"}
- LINT R10 side length ratio 0.71

### BNeSiq0 · bip · ctx q · Ne-Si · NEW
current: {"a":"ฉันชอบลองแต่งตัวแนวใหม่ที่ไม่เคยใส่มาก่อน","b":"ฉันชอบแต่งตัวแนวเดิมที่ใส่แล้วรู้ว่าเข้ากับตัว"}
- LINT ["R4_absolute:ไม่เคย"]

### BNeSix0 · bip · ctx x · Ne-Si · NEW
current: {"a":"คุยกับเพื่อน ฉันชอบเปิดเรื่องใหม่ที่ยังไม่เคยคุยกัน แล้วต่อยอดไปเรื่อย ๆ","b":"คุยกับเพื่อน ฉันชอบเล่าย้อนเรื่องที่เคยผ่านมาด้วยกัน แล้วขำกันอีกรอบ"}
- LINT ["R4_absolute:ไม่เคย"]

### BNiSe10 · bip · ctx o · Ni-Se · NEW
current: {"a":"เวลากินอาหารอร่อย ๆ ฉันมักนึกเลยไปถึงว่ามันบอกอะไรเกี่ยวกับคนทำหรือที่มาของมัน","b":"เวลากินอาหารอร่อย ๆ ฉันมักจดจ่อกับรส กลิ่น และสัมผัสในคำนั้นอย่างเต็มที่"}
- debate: con_flag | ratings BNiSe10|a pro 3.2 con 3.2, BNiSe10|b pro 3.5 con 3.5
- CON[theory s2] Ni side "นึกถึงคนทำหรือที่มาของมัน" is backstory/association (Ne/Si), not convergent insight. → CON rewrite: {"a":"เวลากินอาหารอร่อย ๆ ฉันมักคิดเลยไปว่ามันสื่อถึงอะไร มากกว่าจดจ่อกับรสในคำนั้น","b":"เวลากินอาหารอร่อย ๆ ฉันมักจดจ่อกับรส กลิ่น และสัมผัสในคำนั้นอย่างเต็มที่"}

### BNiSe6 · bip · ctx o · Ni-Se · rev10
current: {"a":"เวลาอ่านหรือดูเรื่องราว ฉันมองหาความหมายเชิงสัญลักษณ์ที่อยู่ลึกกว่าเรื่องที่เห็น","b":"เวลาอ่านหรือดูเรื่องราว ฉันสนใจภาพ เสียง และฉากที่เห็นได้ชัด"}
- LINT R10 side length ratio 1.33

### BNiSei1 · bip · ctx i · Ni-Se · rev10
current: {"a":"ราคาแกว่งระยะสั้น ฉันมักถือต่อตามภาพระยะยาวที่มองไว้","b":"ราคาแกว่งระยะสั้น ฉันดูก่อนว่าตอนนี้ตลาดเกิดอะไรขึ้นจริง แล้วค่อยปรับ"}
- LINT ["R11_hierarchy:พระ"]
- LINT R10 side length ratio 0.75

### BNiSep0 · bip · ctx p · Ni-Se · NEW
current: {"a":"ระหว่างแข่ง ฉันมักเล่นตามภาพว่าเกมกำลังจะไปทางไหนในอีกหลายจังหวะข้างหน้า","b":"ระหว่างแข่ง ฉันมักเล่นตามสิ่งที่เห็นและเกิดขึ้นในสนามตรงหน้าทีละจังหวะ"}
- debate: con_flag | ratings BNiSep0|a pro 3.6 con 3.7, BNiSep0|b pro 3.3 con 3.2
- CON[desirability s2] Ni side "เห็นภาพหลายจังหวะข้างหน้า" sounds like an elite player (ability, 3.7) vs reactive play (3.2). → CON rewrite: {"a":"ระหว่างแข่ง ฉันมักเล่นตามภาพในหัวว่าเกมจะไปทางไหน แม้บางทีจะพลาดสิ่งที่เกิดขึ้นตรงหน้า","b":"ระหว่างแข่ง ฉันมักเล่นตามสิ่งที่เกิดขึ้นตรงหน้าทีละจังหวะ แม้บางทีจะไม่ได้คิดเผื่อไปข้างหน้า"}
- PRO[fix ability s1] A 'reading several moves ahead' sounds like playmaker skill (~3.6) vs B (~3.3). Consider adding 'แม้บางทีจะพลาดสิ่งที่เกิดตรงหน้า' to A.

### BNiSet0 · bip · ctx t · Ni-Se · NEW
current: {"a":"เวลาเลือกกิจกรรมกับสัตว์เลี้ยง ฉันคิดว่ามันพาเราไปสู่ภาพชีวิตที่อยากได้ในระยะยาวไหม","b":"เวลาเลือกกิจกรรมกับสัตว์เลี้ยง ฉันดูว่าตอนนี้มันกระตือรือร้นหรืออยากเล่นอะไรตรงหน้า"}
- debate: con_flag; pro_fix; side_gap -0.55 | ratings BNiSet0|a pro 3.2 con 3, BNiSet0|b pro 3.6 con 3.7
- CON[theory s2] Ni side "พาไปสู่ภาพชีวิตที่อยากได้ในระยะยาว" is long-range planning (Te/J) and sounds odd for pet play (3.0); Se side = attentive owner (3.7). Gap 0.7. → CON rewrite: {"a":"เวลาเลือกกิจกรรมกับสัตว์เลี้ยง ฉันมักมีภาพในใจอยู่แล้วว่าอยากให้มันเติบโตไปเป็นแบบไหน แล้วเลือกตามภาพนั้น","b":"เวลาเลือกกิจกรรมกับสัตว์เลี้ยง ฉันดูจากอารมณ์ของมันตอนนั้น แล้วเล่นตามที่มันตอบสนอง"}
- PRO[fix desirability s2] A 'leads to the life picture we want' sounds owner-centred (~3.2) vs B pet-centred (~3.6). Make A a vision of the shared future. → PRO rewrite: "A: เวลาเลือกกิจกรรมกับสัตว์เลี้ยง ฉันนึกถึงภาพว่าอีกหลายปีข้างหน้าเรากับมันจะเป็นอย่างไร แล้วเลือกตามภาพนั้น ‖ B: เวลาเลือกกิจกรรมกับสัตว์เลี้ยง ฉันดูว่าตอนนี้มันกระตือรือร้นหรืออยากเล่นอะไร แล้วเล่นตามนั้น"

### BNiSez1 · bip · ctx z · Ni-Se · rev10
current: {"a":"แรงบันดาลใจของฉันมาจากภาพอนาคตในหัว","b":"แรงบันดาลใจของฉันมาจากสิ่งที่ได้เห็นและได้ลองวันนี้"}
- LINT R10 side length ratio 0.69

### BTeFi10 · bip · ctx o · Te-Fi · NEW
current: {"a":"เวลามีคนขอให้ช่วย ฉันมักถามก่อนว่าเขาต้องการผลลัพธ์อะไร แล้วหาวิธีที่ได้ผลที่สุด","b":"เวลามีคนขอให้ช่วย ฉันมักถามใจตัวเองก่อนว่าเรื่องนี้ฉันเต็มใจและเห็นด้วยจริงไหม"}
- debate: con_flag; pro_fix; side_gap 0.55 | ratings BTeFi10|a pro 3.5 con 3.7, BTeFi10|b pro 3.1 con 3
- CON[desirability s2] Fi side "ถามใจตัวเองก่อนว่าเต็มใจจริงไหม" when asked for help reads as ไม่มีน้ำใจ (3.0) vs effective helper (3.7). Gap 0.7. → CON rewrite: {"a":"เวลามีคนขอให้ช่วย ฉันถามก่อนว่าเขาต้องการผลลัพธ์อะไร แล้วช่วยแบบที่ได้ผลเร็วที่สุด แม้จะดูเป็นงานเป็นการไปหน่อย","b":"เวลามีคนขอให้ช่วย ฉันช่วยในแบบที่ตรงกับใจและสิ่งที่ฉันเชื่อ แม้จะไม่ใช่วิธีที่เร็วที่สุด"}
- PRO[fix desirability s2] In Thai culture B ('ask my heart whether I'm willing' before helping) sounds reluctant/selfish (~3.1) against A's helpful efficiency (~3.5). Give Fi a values check followed by commitment. → PRO rewrite: "A: เวลามีคนขอให้ช่วย ฉันมักถามก่อนว่าเขาต้องการผลลัพธ์อะไร แล้วหาวิธีที่ได้ผลที่สุด ‖ B: เวลามีคนขอให้ช่วย ฉันมักดูก่อนว่าเรื่องนี้ตรงกับสิ่งที่ฉันเห็นว่าควรทำไหม ถ้าใช่ฉันจะช่วยเต็มที่"

### BTeFi4 · bip · ctx o · Te-Fi · rev10
current: {"a":"ฉันวัดความสำเร็จจากผลลัพธ์ที่คนอื่นตรวจสอบได้","b":"ฉันวัดความสำเร็จจากว่าฉันรู้สึกจริงใจกับสิ่งที่ทำหรือไม่"}
- CON audit of rev10 item [desirability s2] B 'รู้สึกจริงใจกับสิ่งที่ทำ' uses the sincerity virtue word (~4.0) vs A (~3.5). → CON rewrite: {"a":"ฉันวัดความสำเร็จจากผลลัพธ์ที่คนอื่นเห็นและตรวจสอบได้","b":"ฉันวัดความสำเร็จจากว่าสิ่งที่ทำตรงกับใจฉันแค่ไหน"}
- LINT ["R7_outcome:สำเร็จ","R2_virtue:จริงใจ","R7_outcome:สำเร็จ"]

### BTeFid0 · bip · ctx d · Te-Fi · NEW
current: {"a":"เวลาเลือกว่าวันนี้จะกินอะไร ฉันยึดเป้าที่วางไว้ เช่น งบหรือสุขภาพ เป็นหลัก","b":"เวลาเลือกว่าวันนี้จะกินอะไร ฉันยึดสิ่งที่ใจรู้สึกว่าใช่สำหรับวันนั้นเป็นหลัก"}
- debate: pro_fix | ratings BTeFid0|a pro 3.6 con 3.6, BTeFid0|b pro 3.2 con 3.2
- CON[desirability s1] Budget/health goals are virtuous (3.6) vs mood (3.2).
- PRO[fix theory s2] B 'ใจรู้สึกว่าใช่สำหรับวันนั้น' is craving (Se/Si bodily want), not Fi values; A 'สุขภาพ' is virtuous (~3.6). Re-anchor both. → PRO rewrite: "A: เวลาเลือกว่าวันนี้จะกินอะไร ฉันยึดเงื่อนไขที่ตั้งไว้ เช่น งบหรือเวลาที่มี เป็นหลัก ‖ B: เวลาเลือกว่าวันนี้จะกินอะไร ฉันยึดสิ่งที่ตรงกับตัวเอง เช่น ของที่ตั้งใจไม่กินหรือร้านที่อยากสนับสนุน เป็นหลัก"

### BTeFii0 · bip · ctx i · Te-Fi · rev10
current: {"a":"ฉันเลือกลงทุนจากตัวเลขและผลตอบแทน","b":"ฉันเลือกลงทุนในสิ่งที่ตรงกับคุณค่าที่ฉันเชื่อ"}
- LINT R10 side length ratio 0.73

### BTeFij0 · bip · ctx j · Te-Fi · rev10
current: {"a":"ฉันวางแผนทริปให้คุ้มเวลาและงบที่สุด","b":"ฉันวางแผนทริปตามที่ใจอยากไป แม้จะไม่คุ้มที่สุด"}
- LINT R10 side length ratio 0.76

### BTeFit0 · bip · ctx t · Te-Fi · NEW
current: {"a":"เวลาตัดสินใจเรื่องสำคัญของสัตว์เลี้ยง ฉันยึดข้อมูลจากหมอและผลที่วัดได้ แม้ใจจะลังเล","b":"เวลาตัดสินใจเรื่องสำคัญของสัตว์เลี้ยง ฉันยึดความรู้สึกข้างในว่าอะไรใช่สำหรับมัน แม้ข้อมูลจะชี้อีกทาง"}
- debate: con_flag; pro_fix; side_gap 0.80 | ratings BTeFit0|a pro 3.7 con 3.6, BTeFit0|b pro 2.8 con 2.9
- CON[desirability s2] Fi side overrides the vet's data on an important pet decision — sounds irresponsible (2.9) vs 3.6. Stakes too high for a neutral item. → CON rewrite: {"a":"เวลาเลือกของใช้หรือกิจกรรมให้สัตว์เลี้ยง ฉันยึดสิ่งที่วัดผลได้ เช่น น้ำหนักหรือสุขภาพที่ดีขึ้น","b":"เวลาเลือกของใช้หรือกิจกรรมให้สัตว์เลี้ยง ฉันยึดสิ่งที่รู้สึกว่าตรงกับนิสัยและความผูกพันระหว่างเรา"}
- PRO[fix desirability s3] B 'follow inner feeling even when the vet's data points the other way' on an important pet decision reads as irresponsible (~2.8) vs A (~3.7): gap ~0.9, Fi users will bend to A. Move to a situation where the data genuinely conflict. → PRO rewrite: "A: เวลาข้อมูลเรื่องการเลี้ยงจากหลายแหล่งขัดกัน ฉันเลือกวิธีที่มีผลวัดได้ชัด เช่น น้ำหนักหรือผลตรวจ ‖ B: เวลาข้อมูลเรื่องการเลี้ยงจากหลายแหล่งขัดกัน ฉันเลือกวิธีที่ตรงกับหลักที่ฉันยึดในการดูแลชีวิตหนึ่งชีวิต"

### BTeFix0 · bip · ctx x · Te-Fi · NEW
current: {"a":"จะช่วยเพื่อนสักเรื่อง ฉันเลือกวิธีที่เห็นผลจริงและเร็วที่สุด","b":"จะช่วยเพื่อนสักเรื่อง ฉันเลือกวิธีที่ใจฉันรู้สึกว่าจริงใจที่สุด"}
- debate: con_flag | ratings BTeFix0|a pro 3.5 con 3.6, BTeFix0|b pro 3.5 con 3.9
- CON[desirability s2] B uses the virtue word 'จริงใจที่สุด' (sincerity) against A's efficiency; B ~3.9 vs A ~3.6. → CON rewrite: {"a":"จะช่วยเพื่อนสักเรื่อง ฉันดูก่อนว่าวิธีไหนเห็นผลเร็วที่สุด","b":"จะช่วยเพื่อนสักเรื่อง ฉันดูก่อนว่าวิธีไหนตรงกับใจฉันที่สุด"}
- LINT ["R2_virtue:จริงใจ"]

### BTeFiz0 · bip · ctx z · Te-Fi · rev10
current: {"a":"ถ้าต้องเลือก ฉันเอาเส้นทางที่ไปถึงเป้าได้เร็วและแน่นอนกว่า","b":"ถ้าต้องเลือก ฉันเอาเส้นทางที่ตรงกับตัวตน แม้จะช้ากว่า"}
- LINT ["R1_ability:ได้เร็ว"]

### BTiFe1 · bip · ctx o · Ti-Fe · rev10
current: {"a":"ฉันต้องเข้าใจเหตุผลภายในของเรื่องก่อนจะเห็นด้วย","b":"ฉันให้น้ำหนักกับสิ่งที่คนในกลุ่มรู้สึกร่วมกัน ก่อนจะลงความเห็น"}
- LINT R10 side length ratio 0.76

### BTiFe2 · bip · ctx o · Ti-Fe · rev10
current: {"a":"เวลาอธิบาย ฉันเน้นให้เหตุผลทุกขั้นถูกต้องและต่อกันครบ","b":"เวลาอธิบาย ฉันเน้นเลือกคำและตัวอย่างที่คนฟังรู้สึกเข้าถึง"}
- LINT ["R7_outcome:ถูกต้อง"]

### BTiFe5 · bip · ctx o · Ti-Fe · rev10
current: {"a":"ในการประชุม ฉันสนใจว่าข้อสรุปสมเหตุสมผลหรือไม่","b":"ในการประชุม ฉันสนใจว่าทุกคนรู้สึกมีส่วนร่วมและไม่ถูกมองข้าม"}
- CON audit of rev10 item [desirability s2] B 'ทุกคนรู้สึกมีส่วนร่วมและไม่ถูกมองข้าม' is inclusive-leader virtue (~4.0) vs A (~3.5). → CON rewrite: {"a":"ในการประชุม ฉันสนใจว่าข้อสรุปสมเหตุสมผลหรือไม่","b":"ในการประชุม ฉันสนใจว่าบรรยากาศในห้องเป็นยังไง และทุกคนยังโอเคกันไหม"}

### BTiFe9 · bip · ctx o · Ti-Fe · NEW
current: {"a":"ฉันรู้สึกพอใจเมื่อเรื่องที่สับสนถูกจัดให้มีเหตุผลต่อกันครบทุกส่วน","b":"ฉันรู้สึกพอใจเมื่อคนที่เคยห่างเหินกลับมาคุยกันได้อย่างสบายใจ"}
- debate: con_flag; pro_fix | ratings BTiFe9|a pro 3.4 con 3.5, BTiFe9|b pro 3.8 con 3.8
- CON[desirability s2] Reconciling estranged people (b) is a moral good (3.8); tidy logic (a) is a private satisfaction (3.5). → CON rewrite: {"a":"ฉันรู้สึกพอใจเมื่อเรื่องที่สับสนถูกจัดให้มีเหตุผลต่อกันครบทุกส่วน แม้จะไม่มีใครถามหาคำอธิบายนั้น","b":"ฉันรู้สึกพอใจเมื่อบรรยากาศในวงที่ตึงอยู่กลับมาผ่อนคลาย แม้เรื่องที่ค้างจะยังไม่ได้ข้อสรุป"}
- PRO[fix desirability s2] B (reconciling estranged people) is near-saintly (~3.8) vs A (~3.4). Recast both as 'relief' and make B less heroic. → PRO rewrite: "A: ฉันรู้สึกโล่งเมื่อเรื่องที่ค้างคาในหัวถูกไล่จนเหตุผลต่อกันครบทุกส่วน ‖ B: ฉันรู้สึกโล่งเมื่อคนรอบตัวที่เคยตึงใส่กันกลับมาคุยกันได้ตามปกติ"
- LINT ["R2_virtue:มีเหตุผล"]

### BTiFef0 · bip · ctx f · Ti-Fe · NEW
current: {"a":"เข้ากลุ่มงานอดิเรก ฉันอยากคุยว่าทำไมแต่ละวิธีถึงได้ผล","b":"เข้ากลุ่มงานอดิเรก ฉันอยากให้ทุกคนรู้สึกสนุกและเป็นกันเอง"}
- debate: con_flag | ratings BTiFef0|a pro 3.3 con 3.4, BTiFef0|b pro 3.6 con 3.9
- CON[desirability s2] B wants everyone to feel fun and welcome (~3.9) vs A technical talk (~3.4); B also has E/sociable flavour. → CON rewrite: {"a":"เข้ากลุ่มงานอดิเรก ฉันสนใจว่าทำไมแต่ละวิธีถึงได้ผล","b":"เข้ากลุ่มงานอดิเรก ฉันสนใจว่าคนในกลุ่มเข้ากันไหม และบรรยากาศเป็นยังไง"}
- PRO[undefined desirability_imbalance s] 

### BTiFeg0 · bip · ctx g · Ti-Fe · NEW
current: {"a":"เวลาทีมแพ้ ฉันอยากไล่ดูว่าจุดไหนในวิธีเล่นของทีมที่ไม่สมเหตุสมผล","b":"เวลาทีมแพ้ ฉันอยากดูให้แน่ใจว่าไม่มีเพื่อนร่วมทีมคนไหนรู้สึกแย่เกินไป"}
- debate: pro_fix | ratings BTiFeg0|a pro 3.3 con 3.4, BTiFeg0|b pro 3.7 con 3.7
- CON[desirability s1] Fe side caring for teammates (3.7) vs fault analysis (3.4).
- PRO[fix desirability s2] B (no teammate feels too bad) ~3.7 vs A ~3.3; add the mirror cost to B. → PRO rewrite: "A: เวลาทีมแพ้ ฉันอยากไล่ดูว่าจุดไหนในวิธีเล่นของทีมที่ไม่สมเหตุสมผล ‖ B: เวลาทีมแพ้ ฉันอยากให้ทุกคนในทีมยังโอเคกันอยู่ก่อน แม้จะยังไม่ได้คุยว่าแพ้เพราะอะไร"

### BTiFei1 · bip · ctx i · Ti-Fe · rev10
current: {"a":"เพื่อนชวนลงทุน ฉันถามก่อนว่ามันทำงานยังไง","b":"เพื่อนชวนลงทุน ฉันนึกถึงความสัมพันธ์กับเพื่อนก่อนจะตอบ"}
- LINT R10 side length ratio 0.76

### BTiFem0 · bip · ctx m · Ti-Fe · NEW
current: {"a":"เมื่อเห็นเพื่อนแชร์ข่าวที่เหตุผลไม่ต่อกัน ฉันอยากชี้ให้เห็นว่าตรงไหนไม่สมเหตุสมผล","b":"เมื่อเห็นเพื่อนแชร์ข่าวที่เหตุผลไม่ต่อกัน ฉันคิดก่อนว่าจะทักอย่างไรไม่ให้เขาเสียหน้า"}
- debate: con_flag; pro_fix; side_gap -0.60 | ratings BTiFem0|a pro 3.2 con 3.1, BTiFem0|b pro 3.7 con 3.8
- CON[culture s2] Publicly pointing out a friend's illogical share = making them lose face (3.1) vs face-saving (3.8). Gap 0.7, purely cultural. → CON rewrite: {"a":"เมื่อเห็นเพื่อนแชร์ข่าวที่เหตุผลไม่ต่อกัน ฉันติดอยู่กับคำถามว่าตรงไหนไม่สมเหตุสมผล จนอยากไล่ให้ชัด","b":"เมื่อเห็นเพื่อนแชร์ข่าวที่เหตุผลไม่ต่อกัน ฉันคิดก่อนว่าเขาจะรู้สึกอย่างไรถ้ามีคนทัก จนบางทีปล่อยผ่านไป"}
- PRO[fix culture s2] Publicly pointing out a friend's illogic (A ~3.2) vs saving face (B ~3.7) — in Thai culture face-saving wins by default and A also smuggles E/Te confrontation. Make both internal and parallel. → PRO rewrite: "A: เมื่อเห็นเพื่อนแชร์ข่าวที่เหตุผลไม่ต่อกัน ฉันอยากไล่ให้รู้ก่อนว่าตรงไหนที่ไม่สมเหตุสมผล แม้สุดท้ายอาจไม่ได้ทักเขา ‖ B: เมื่อเห็นเพื่อนแชร์ข่าวที่เหตุผลไม่ต่อกัน ฉันคิดก่อนว่าถ้าทักไปเขาจะรู้สึกอย่างไร แม้สุดท้ายอาจไม่ได้ทักเขา"
- LINT ["R9_neglabel:เสียหน้า"]

### BTiFeq0 · bip · ctx q · Ti-Fe · NEW
current: {"a":"เพื่อนถามเรื่องชุด ฉันบอกตามหลักว่าสัดส่วนกับสีลงตัวไหม","b":"เพื่อนถามเรื่องชุด ฉันดูก่อนว่าเขาอยากได้ความมั่นใจแค่ไหน"}
- debate: con_flag | ratings BTiFeq0|a pro 3.2 con 3.3, BTiFeq0|b pro 3.6 con 3.9
- CON[desirability s2] B gauging how much confidence the friend needs is tactful kindness (~3.9) vs A blunt principle (~3.3). → CON rewrite: {"a":"เพื่อนถามเรื่องชุด ฉันบอกตามหลักที่ฉันใช้ ว่าสัดส่วนกับสีเข้ากันไหม","b":"เพื่อนถามเรื่องชุด ฉันบอกตามที่ดูว่าคนในงานน่าจะมองชุดนี้ยังไง"}
- PRO[undefined desirability_imbalance s]  → PRO rewrite: "A: เพื่อนถามเรื่องชุด ฉันชอบอธิบายว่าสัดส่วนกับสีตรงไหนลงตัว ตรงไหนยังขัด ‖ B: เพื่อนถามเรื่องชุด ฉันชอบดูก่อนว่าเขาอยากได้ความเห็นแบบไหน แล้วพูดให้ตรงกับที่เขาต้องการ"

### BTiFes0 · bip · ctx s · Ti-Fe · NEW
current: {"a":"ในกลุ่มติว ฉันมักถามจนกว่าเหตุผลของแต่ละขั้นจะต่อกันไม่ขัด แม้วงจะเดินช้าลง","b":"ในกลุ่มติว ฉันมักคอยดูว่าทุกคนในวงตามทันและสบายใจ แม้เนื้อหาจะเดินช้าลง"}
- debate: con_flag; pro_fix; side_gap -0.60 | ratings BTiFes0|a pro 3.2 con 3.2, BTiFes0|b pro 3.8 con 3.8
- CON[desirability s2] Ti side slows the whole tutoring group with questions (Thai: holding up the group is bad form) vs Fe side caring that everyone keeps up (3.2 vs 3.8). → CON rewrite: {"a":"ในกลุ่มติว ฉันสนใจว่าเหตุผลของแต่ละขั้นต่อกันไม่ขัด มากกว่าว่าวงจะเดินเร็วแค่ไหน","b":"ในกลุ่มติว ฉันสนใจว่าทุกคนรู้สึกโอเคกับจังหวะการติว มากกว่าว่าเนื้อหาจะละเอียดแค่ไหน"}
- PRO[fix desirability s2] B 'make sure everyone keeps up' (~3.8) vs A 'slows the group' (~3.2) — gap ~0.6. Give B the mirror cost (holding back own questions for harmony), the classic Fe-over-Ti trade. → PRO rewrite: "A: ในกลุ่มติว ฉันมักถามจนกว่าเหตุผลของแต่ละขั้นจะต่อกันไม่ขัด แม้วงจะเดินช้าลง ‖ B: ในกลุ่มติว ฉันมักคอยดูบรรยากาศให้ทุกคนสบายใจ แม้บางเรื่องที่ยังสงสัยฉันจะเก็บไว้ไม่ถาม"

### BTiFey0 · bip · ctx y · Ti-Fe · rev10
current: {"a":"คุยเรื่องความเชื่อ ฉันสนใจว่าแต่ละความเชื่อมีเหตุผลภายในแบบไหน","b":"คุยเรื่องความเชื่อ ฉันอยากให้ทุกคนในวงรู้สึกว่าได้รับการเคารพ"}
- LINT ["R2_virtue:มีเหตุผล"]

### EIar4 · ei · ctx ar · E-I · NEW
current: {"E":"เวลาฝึกทักษะใหม่ ฉันชอบลงมือลองเลย แล้วเรียนรู้จากสิ่งที่เกิดขึ้น","I":"เวลาฝึกทักษะใหม่ ฉันชอบดูและทำความเข้าใจให้พอก่อน แล้วค่อยลงมือ"}
- debate: con_flag; pro_fix | ratings EIar4|E pro 3.4 con 3.4, EIar4|I pro 3.5 con 3.5
- CON[ei_confound s3] E side "ลงมือลองเลย แล้วเรียนรู้จากสิ่งที่เกิดขึ้น" is the same content as Se items Sek8/Ses3/Seb3 and Se sides BNiSe9-B/BNiSeg0-B; I side "ดูและทำความเข้าใจให้พอก่อน" is Ni/Ti-style. E/I mean feeds 0.2 of every type score AND the introvert-lean correction, so this item pipes Se/N variance into E/I and back again. → CON rewrite: {"E":"เวลาฝึกทักษะใหม่ ฉันชอบถามและคุยกับคนที่ทำเป็นไปด้วย เพราะได้คิดออกมาดัง ๆ ช่วยให้เข้าใจเร็วขึ้น","I":"เวลาฝึกทักษะใหม่ ฉันชอบค่อย ๆ ทำความเข้าใจในหัวด้วยตัวเองก่อน แล้วค่อยถามคนอื่นเมื่อติดจริง ๆ"}
- PRO[fix ei_confound s2] 'ลงมือลองเลย vs ดูให้เข้าใจก่อน' is the Se-vs-Ni/Ti axis (same as BNiSe9, Ses3, Seb3, Sek8), not E/I; it will leak function into the E/I score. Rewrite to social vs solitary practice. → PRO rewrite: "E: เวลาฝึกทักษะใหม่ ฉันชอบฝึกกับคนอื่น แล้วถามหรือคุยกันไประหว่างทำ ‖ I: เวลาฝึกทักษะใหม่ ฉันชอบฝึกเงียบ ๆ ด้วยตัวเองให้คล่องก่อน แล้วค่อยไปทำกับคนอื่น"

### EIgi2 · ei · ctx gi · E-I · rev10
current: {"E":"ใครคุยถูกคอ ไม่นานฉันก็นับเป็นเพื่อนได้เลย","I":"ใครคุยถูกคอ ฉันชอบค่อย ๆ รู้จักกันไปก่อนจะเรียกว่าเพื่อน"}
- LINT R10 side length ratio 0.75

### EIir2 · ei · ctx ir · E-I · rev10
current: {"E":"ถ้าอยากรู้จักใคร ฉันทักไปก่อนเลย ไม่ค่อยรอจังหวะ","I":"ถ้าอยากรู้จักใคร ฉันรอจังหวะที่เป็นธรรมชาติ ให้ได้คุยกันเอง"}
- CON audit of rev10 item [desirability s2] E 'ไม่ค่อยรอจังหวะ' sounds tactless; I 'รอจังหวะที่เป็นธรรมชาติ' sounds graceful — unbalanced. → CON rewrite: {"E":"ถ้าอยากรู้จักใคร ฉันมักเป็นฝ่ายทักไปก่อน","I":"ถ้าอยากรู้จักใคร ฉันมักรอให้มีโอกาสได้คุยกันเอง"}

### EIir4 · ei · ctx ir · E-I · NEW
current: {"E":"ถ้าเห็นคนในกลุ่มงานอดิเรกที่ยังไม่รู้จัก ฉันมักเป็นฝ่ายเดินไปทักและชวนคุยก่อนเลย","I":"ถ้าเห็นคนในกลุ่มงานอดิเรกที่ยังไม่รู้จัก ฉันมักรอจังหวะที่ได้ทำอะไรด้วยกัน แล้วค่อยคุยกันไป"}
- debate: con_flag | ratings EIir4|E pro 3.7 con 3.7, EIir4|I pro 3.3 con 3.2
- CON[desirability s2] E side "เดินไปทักก่อนเลย" = social confidence (3.7) vs I side waiting (3.2): measures social skill/boldness, which the brief excludes. → CON rewrite: {"E":"ถ้าเห็นคนในกลุ่มงานอดิเรกที่ยังไม่รู้จัก ฉันมักทักก่อน เพราะคุยไปเดี๋ยวก็รู้จักกันเอง","I":"ถ้าเห็นคนในกลุ่มงานอดิเรกที่ยังไม่รู้จัก ฉันมักรู้จักเขาผ่านการทำกิจกรรมด้วยกันก่อน แล้วบทสนทนาก็ตามมาเอง"}
- PRO[fix desirability s1] E 'walk over and greet first' is the friendly-Thai ideal (~3.7) vs I (~3.3); acceptable since I side is dignified, but watch side-choice rates.

### Fea3 · st · ctx a · Fe · NEW
current: เวลาเพื่อนให้ดูงานศิลปะของเขา ฉันพูดถึงจุดที่ดีก่อนเสมอ แม้จะเห็นจุดที่ควรแก้ชัดกว่า
- LINT ["R4_absolute:เสมอ"]

### Fef2 · st · ctx f · Fe · NEW
current: เพื่อนเอางานอดิเรกมาให้ดู ฉันชมและให้กำลังใจก่อน แล้วค่อยแนะนำเบา ๆ ถ้าเขาอยากฟัง
- debate: con_flag | ratings Fef2 pro 3.7 con 4
- CON[desirability s2] Praise first then gentle advice 'if they want' is model etiquette (~4.0); duplicates Feq3 pattern. → CON rewrite: "เพื่อนเอางานอดิเรกมาให้ดู ฉันมักชมไปก่อนตามบรรยากาศ แม้ในใจจะเห็นจุดที่ควรแก้อยู่หลายจุด"

### Fef4 · st · ctx f · Fe · NEW
current: ทำงานอดิเรกกับคนอื่น ฉันมักปรับจังหวะตามคนที่มาด้วย เช่น เดินช้าลงหรือเลือกเพลงที่ง่ายขึ้น ให้ทุกคนไปด้วยกันได้
- debate: con_flag | ratings Fef4 pro 3.7 con 4
- CON[desirability s2] Slowing down so everyone can keep up is considerate (~4.0); no real cost stated. → CON rewrite: "ทำงานอดิเรกกับคนอื่น ฉันมักปรับจังหวะตามคนที่มาด้วย จนบางทีกลับบ้านมาแล้วรู้สึกว่ายังไม่ได้ทำเต็มที่เลย"

### Feg3 · st · ctx g · Fe · NEW
current: เวลาเล่นกับคนที่เพิ่งเริ่มเล่น ฉันมักเล่นช้าลงและคอยชมให้เขาสนุก แม้ทีมจะชนะยากขึ้น
- debate: con_flag; pro_fix; des_out_of_range 3.95 | ratings Feg3 pro 3.9 con 4
- CON[desirability s2] Slowing down and praising beginners at the cost of winning = sportsmanship virtue (~4.0); near-duplicate of Fep3. → CON rewrite: "เวลาเล่นเกมเป็นทีม อารมณ์ของเพื่อนร่วมทีมมีผลกับฉันมาก ถ้าใครเริ่มหงุดหงิด ฉันก็เล่นไม่สนุกไปด้วย"
- PRO[fix duplicate s2] Near-identical to Fep3 (slow down for beginners) and very virtuous (~3.9). Shift to Fe mood-regulation with a cost. → PRO rewrite: "เวลาเล่นเกมเป็นทีม ฉันคอยฟังอารมณ์ในวงแชตเสียง ถ้าเริ่มตึงฉันจะหาทางพูดให้บรรยากาศดีขึ้น แม้ต้องเสียสมาธิกับเกมไปบ้าง"

### Feh4 · st · ctx h · Fe · NEW
current: ถ้ารู้ว่าคนที่คบเหนื่อยมาทั้งวัน ฉันมักเปลี่ยนแผนของเราให้เข้ากับอารมณ์เขา แม้ตัวเองจะอยากทำอย่างอื่น
- debate: con_flag; des_out_of_range 3.95 | ratings Feh4 pro 3.8 con 4.1
- CON[desirability s2] Changing plans for a tired partner despite own wishes is the caring-partner ideal (~4.1); the sacrifice clause raises desirability. → CON rewrite: "ถ้าคนที่คบอารมณ์ไม่ดี ฉันมักเปลี่ยนแผนของเราตามเขาทันที จนเขาเองแทบไม่รู้ว่าฉันอยากทำอะไร"

### Fei3 · st · ctx i · Fe · rev10
current: ฉันสนใจว่าธุรกิจที่ลงทุนดูแลพนักงานและลูกค้าดีไหม เพราะห่วงคนที่เกี่ยวข้อง
- CON audit of rev10 item [theory s2] Caring whether a company treats staff/customers well is ethical-values (Fi/ESG) more than Fe; virtuous (~4.1). → CON rewrite: "ก่อนลงทุน ฉันมักนึกว่าคนในบ้านหรือคนใกล้ตัวจะรู้สึกยังไงกับการตัดสินใจนี้ แม้มันจะเป็นเงินของฉันเอง"

### Fej3 · st · ctx j · Fe · rev10
current: ไปที่ใหม่ ฉันใส่ใจธรรมเนียมของคนท้องถิ่น เพราะไม่อยากให้เขารู้สึกไม่ดี
- LINT ["R2_virtue:ใส่ใจ"]

### Fek7 · st · ctx k · Fe · NEW
current: ฉันมักรู้สึกไม่สบายใจถ้าต้องปฏิเสธใคร จนบางทีรับปากเรื่องที่ไม่ได้อยากทำ
- debate: con_flag; pro_fix; des_out_of_range 2.75 | ratings Fek7 pro 2.7 con 2.8
- CON[culture s2] Difficulty refusing / agreeing to unwanted requests is generic Thai เกรงใจ (and low assertiveness), endorsed across all types; also a mild distress item (~2.8). Measures culture, not Fe. → CON rewrite: "ก่อนจะปฏิเสธใคร ฉันมักคิดหาวิธีพูดที่รักษาน้ำใจเขาไว้ได้ จนบางทีใช้เวลานานกว่าจะตอบ"
- PRO[fix desirability s2] Saying yes to unwanted things is a people-pleasing weakness (~2.7) and edges toward a mental-health trope. Keep Fe's discomfort with refusing, but frame it as care for the other's feelings with a time cost. → PRO rewrite: "ถ้าต้องปฏิเสธใคร ฉันมักหาวิธีพูดให้เขาไม่เสียความรู้สึก จนบางทีลังเลนานกว่าจะพูดออกไป"

### Fel1 · st · ctx l · Fe · rev10
current: ฉันสนุกที่สุดเมื่อได้แบ่งปันประสบการณ์กับกลุ่มคน
- CON audit of rev10 item [ei_confound s2] 'สนุกที่สุดเมื่อได้แบ่งปันกับกลุ่มคน' is gregariousness (E), Fe ≠ outgoing. → CON rewrite: "ฉันสนุกกับกิจกรรมมากขึ้นเมื่อรู้ว่าคนที่ไปด้วยก็สนุก ถ้าเขาไม่สนุก ฉันก็พลอยหมดสนุกไปด้วย"

### Fem3 · st · ctx m · Fe · NEW
current: เวลาคอมเมนต์ในโพสต์ที่คนกำลังเถียงกัน ฉันมักเลือกคำที่ช่วยให้บรรยากาศเย็นลง มากกว่าบอกว่าใครถูก
- debate: con_flag | ratings Fem3 pro 3.7 con 3.8
- CON[desirability s2] Peacemaking comment in a flame war is a clear good-citizen answer (~3.8); commenting publicly also loads on E (expressive). → CON rewrite: "เวลาเห็นโพสต์ที่คนกำลังเถียงกัน ฉันใส่ใจว่าแต่ละฝ่ายรู้สึกอย่างไรมากกว่าว่าใครถูก จนบางทีไม่กล้าแสดงความเห็นจริงของตัวเอง"

### Fen5 · st · ctx n · Fe · NEW
current: พอมีข่าวร้ายที่เกี่ยวกับคนรู้จัก ฉันรีบทักไปถามไถ่และชวนคนอื่นช่วยกันดูแล จนเรื่องของตัวเองต้องพักไว้ก่อน
- debate: con_flag; des_out_of_range 4.00 | ratings Fen5 pro 3.8 con 4.2
- CON[double s2] Checking on the person AND rallying others to help (Te-style organising); very desirable (~4.2). → CON rewrite: "พอมีข่าวร้ายเกี่ยวกับคนรู้จัก ใจฉันจะไปอยู่กับความรู้สึกของเขาและครอบครัวทั้งวัน จนทำเรื่องอื่นไม่ค่อยลง"

### Fep3 · st · ctx p · Fe · NEW
current: เวลาเล่นกีฬาแบบสบาย ๆ กับคนที่เพิ่งหัดเล่น ฉันผ่อนแรงลงเพื่อให้ทุกคนสนุกด้วยกัน
- debate: con_flag; pro_fix | ratings Fep3 pro 3.8 con 3.9
- CON[desirability s2] Same virtuous "ease up for beginners" idea as Feg3 (~3.9) with no real cost; duplicate across g/p. → CON rewrite: "เวลาเล่นกีฬาเป็นทีม ฉันมักรู้สึกได้ว่าใครเริ่มเสียกำลังใจ แล้วอดไม่ได้ที่จะหันไปดูแลเขา จนบางทีหลุดจังหวะเกมของตัวเอง"
- PRO[fix desirability s2] Easing off for beginners is the nice-person answer (~3.8) and duplicates Feg3. Keep Fe atmosphere-tending with a team cost. → PRO rewrite: "เวลาเล่นกีฬากับเพื่อน ฉันมักคอยดูว่าทุกคนยังสนุกอยู่ไหม จนบางทีเล่นไม่เต็มที่เท่าคนอื่นในทีม"

### Feq1 · st · ctx q · Fe · NEW
current: จัดบ้าน ฉันนึกถึงคนที่จะมาเยี่ยมหรืออยู่ด้วยก่อน อยากให้ทุกคนเข้ามาแล้วรู้สึกสบายและเป็นกันเอง
- debate: con_flag | ratings Feq1 pro 3.7 con 4
- CON[desirability s2] A home where everyone feels comfortable and welcome is pure hospitality virtue (~4.0). → CON rewrite: "จัดบ้าน ฉันมักเลือกสไตล์ที่คนมาเยี่ยมเห็นแล้วคุ้นและสบายใจ แม้ใจจริงจะอยากลองอะไรที่แปลกกว่านี้"

### Feq3 · st · ctx q · Fe · NEW
current: เพื่อนถามว่าชุดนี้โอเคไหม ฉันเลือกคำพูดที่ทำให้เขามั่นใจขึ้นก่อน แล้วค่อยบอกจุดที่ปรับได้
- debate: con_flag | ratings Feq3 pro 3.6 con 4
- CON[desirability s2] Building a friend's confidence first then suggesting tweaks is ideal tact (~4.0); duplicates Fef2. → CON rewrite: "เพื่อนถามว่าชุดนี้โอเคไหม ฉันมักตอบตามบรรยากาศว่าเขาอยากได้ยินอะไร แม้ในใจจะคิดอีกแบบ"
- PRO[undefined  s] 

### Fer1 · st · ctx r · Fe · rev10
current: ถ้าคนใกล้ตัวไม่โอเค ฉันจะพักเรื่องตัวเองไว้ก่อน แล้วหาทางให้เขารู้สึกดีขึ้น
- LINT ["heroic_cost:พักเรื่องตัวเองไว้ก่อน"]

### Fer5 · st · ctx r · Fe · NEW
current: ฉันมักพูดในสิ่งที่คนในครอบครัวอยากได้ยินก่อน แล้วค่อยหาจังหวะบอกสิ่งที่ตัวเองคิดจริง
- debate: con_flag | ratings Fer5 pro 3 con 3
- CON[culture s2] Saying what family wants to hear first is Thai deference to elders (กตัญญู/เกรงใจผู้ใหญ่), near-universal; it measures culture rather than Fe attunement. → CON rewrite: "เวลาครอบครัวคุยเรื่องที่เห็นไม่ตรงกัน ฉันมักสังเกตว่าแต่ละคนรู้สึกอย่างไร แล้วหาคำพูดที่ทุกคนรับได้ จนบางทีความเห็นของตัวเองหายไป"
- PRO[strong  s] Fe prioritises the relational atmosphere before self-expression; honest cost (true view delayed). Mildly below midpoint, good counterweight to virtuous Fe items.

### Fes3 · st · ctx s · Fe · NEW
current: เวลาเพื่อนในห้องดูเครียดก่อนสอบ ฉันมักพูดให้กำลังใจหรือชวนคุยเรื่องเบา ๆ แม้ตัวเองก็ยังอ่านไม่จบ
- debate: con_flag; pro_fix; des_out_of_range 3.95 | ratings Fes3 pro 4 con 3.9
- CON[desirability s2] Encouraging stressed classmates while unprepared is self-sacrifice — virtuous in Thai culture, so the "cost" raises desirability (~3.9). → CON rewrite: "ก่อนสอบ ถ้าบรรยากาศในห้องตึงเครียด ฉันมักเครียดตามไปด้วย จนต้องชวนทุกคนคุยเรื่องเบา ๆ แม้จะทำให้ตัวเองอ่านได้น้อยลง"
- PRO[fix desirability s2] Comforting stressed friends while unprepared yourself is self-sacrificing virtue (~4.0), the highest in the set. Keep Fe group-climate tending but give it a real cost. → PRO rewrite: "ในกลุ่มอ่านหนังสือ ฉันมักคอยดูให้ทุกคนสบายใจและไม่มีใครถูกทิ้ง จนบางทีวงคุยกันเพลินมากกว่าอ่านจริง"

### Fev0 · st · ctx v · Fe · rev10
current: ฉันสนุกกับการดูหนังกับคนอื่น ทั้งการดูปฏิกิริยาและการคุยกันหลังดูจบ
- CON audit of rev10 item [ei_confound s2] Enjoying watching with others and post-film chat is sociability (E). → CON rewrite: "เวลาดูหนังกับคนอื่น ฉันมักเหลือบดูว่าเขาชอบไหม จนบางทีตัวเองก็ไม่ได้อินกับหนังเต็มที่"

### Fex0 · st · ctx x · Fe · NEW
current: ถ้าเพื่อนเล่าเรื่องสำคัญในแชทกลุ่มแล้วไม่มีใครตอบ ฉันมักรีบตอบรับให้เขาไม่เคว้ง แม้ตอนนั้นจะยุ่งอยู่
- debate: con_flag | ratings Fex0 pro 3.6 con 4.1
- CON[desirability s2] Replying so a friend isn't left hanging (แม้ยุ่งอยู่) reads as the model good friend in Thai group-chat culture (~4.1). The 'cost' is itself a virtue signal (sacrifice), so it raises rather than lowers desirability. → CON rewrite: "ถ้าเพื่อนเล่าเรื่องสำคัญในแชทกลุ่มแล้วเงียบ ฉันจะอึดอัดแทนเขาจนต้องรีบพิมพ์อะไรสักอย่าง แม้ยังไม่รู้จะพูดอะไรดี"

### Fex3 · st · ctx x · Fe · NEW
current: ถ้ามีเพื่อนใหม่มาร่วมวง ฉันมักคอยดึงเขาเข้าบทสนทนา จนบางทีตัวเองแทบไม่ได้คุยเรื่องที่อยากคุย
- debate: con_flag | ratings Fex3 pro 3.6 con 4
- CON[duplicate s2] Duplicates v10 Fek1 (ดึงคนที่ถูกทิ้งเข้าวง). Drawing people into talk is also an E/initiating behaviour, and in Thai culture being the inclusive host is clearly the 'good person' answer (~4.0). → CON rewrite: "ถ้าเพื่อนในกลุ่มคนหนึ่งดูเงียบไปผิดปกติ ฉันจะไม่สบายใจจนต้องหาจังหวะทักเขาแยก แม้อาจเป็นเรื่องที่ฉันคิดไปเอง"

### Fey4 · st · ctx y · Fe · NEW
current: เวลาคนในวงเชื่อต่างกัน ฉันมักหยิบจุดร่วมมาพูด เพื่อให้ทุกคนรู้สึกว่าความเชื่อของตัวเองได้รับการเคารพ
- debate: con_flag; des_out_of_range 4.05 | ratings Fey4 pro 3.9 con 4.2
- CON[desirability s2] Finding common ground so everyone's beliefs feel respected is the religious-harmony ideal (~4.2). → CON rewrite: "เวลาคนในวงเชื่อต่างกัน ฉันมักเลี่ยงพูดสิ่งที่ตัวเองเชื่อ แล้วหยิบเรื่องที่ทุกคนเห็นตรงกันมาคุยแทน"
- PRO[undefined desirability_high s]  → PRO rewrite: "เวลาคนในวงเชื่อต่างกัน ฉันมักหยิบจุดร่วมมาพูดให้ทุกคนสบายใจ จนบางทีไม่ได้บอกว่าตัวเองเชื่ออะไรจริง ๆ"

### Fez0 · st · ctx z · Fe · rev10
current: ความฝันของฉันมักมีคนอื่นอยู่ในนั้น เช่น อยากให้ครอบครัวสบาย หรืออยากทำอะไรที่ช่วยคนรอบตัว
- CON audit of rev10 item [culture s2] 'อยากให้ครอบครัวสบาย' = กตัญญู, a near-mandatory Thai value (~4.4); 89 chars. → CON rewrite: "ความฝันของฉันมักถูกปรับไปตามสิ่งที่ครอบครัวหรือคนรอบตัวอยากเห็น จนบางทีไม่แน่ใจว่าฝันไหนเป็นของฉันเอง"

### Fez4 · st · ctx z · Fe · NEW
current: ฉันมีแรงทำตามฝันมากขึ้นเมื่อมีคนร่วมทางที่เชียร์กัน และอยากให้ทุกคนในกลุ่มไปถึงฝันไปด้วยกัน
- debate: con_flag | ratings Fez4 pro 3.8 con 4
- CON[desirability s2] Wanting the whole group to reach their dreams together is altruistic (~4.0) and has E/group energy flavour. → CON rewrite: "ฉันมีแรงทำตามฝันมากขึ้นเมื่อรู้ว่าคนรอบตัวคาดหวังและเชียร์อยู่ จนบางทีลืมถามว่าฝันนั้นเป็นของฉันเองแค่ไหน"
- PRO[undefined desirability_high s] 

### Fia0 · st · ctx a · Fi · rev10
current: งานศิลปะของฉันมาจากความรู้สึกส่วนตัวที่ลึก และถ้าไม่จริงใจฉันจะไม่ทำ
- LINT ["R2_virtue:จริงใจ"]

### Fid3 · st · ctx d · Fi · NEW
current: ถ้าร้านไหนปฏิบัติกับพนักงานหรือลูกค้าแบบที่ฉันรับไม่ได้ ฉันเลิกไปเลย แม้อาหารจะถูกปาก
- debate: con_flag; pro_fix | ratings Fid3 pro 3.8 con 3.8
- CON[desirability s2] Boycotting a restaurant for mistreating staff = ethical-consumer virtue (~3.8). → CON rewrite: "ร้านที่ฉันกลับไปซ้ำมักเป็นร้านที่รู้สึกว่า “ใช่” กับใจ แม้คนอื่นจะว่ารสชาติธรรมดาหรือมีที่อร่อยกว่า"
- PRO[fix desirability s2] Boycotting a place for mistreating staff is moral heroism (~3.8). Fi is about personal resonance, not public ethics; reframe. → PRO rewrite: "ฉันมักเลือกร้านจากความรู้สึกผูกพันกับร้าน เช่น ร้านเล็ก ๆ ที่รู้สึกว่ามีตัวตน แม้ร้านอื่นจะอร่อยหรือสะดวกกว่า"

### Fif5 · st · ctx f · Fi · NEW
current: งานอดิเรกบางอย่างมีความหมายกับฉันมากจนไม่ค่อยอยากเล่าให้ใครฟัง จนบางทีเพื่อนสนิทยังไม่รู้ว่าฉันทำอยู่
- debate: con_flag | ratings Fif5 pro 3 con 3
- CON[ei_confound s2] Not telling anyone, even close friends, is privacy/contained expression (EI facet ec); Fi is about values, not secrecy. → CON rewrite: "งานอดิเรกบางอย่างมีความหมายกับฉันมาก จนถ้ามีคนพูดถึงมันแบบเล่น ๆ ฉันจะรู้สึกเหมือนโดนแตะเรื่องส่วนตัว"

### Fii1 · st · ctx i · Fi · rev10
current: ฉันอยากให้เงินของฉันไปสนับสนุนสิ่งที่ใจเชื่อว่าดี
- CON audit of rev10 item [desirability s2] 'ให้เงินไปสนับสนุนสิ่งที่ใจเชื่อว่าดี' is generic goodness (~4.2) with no cost. → CON rewrite: "ฉันเลือกใช้เงินกับสิ่งที่ใจรู้สึกผูกพัน แม้บางทีจะไม่ใช่ทางที่คุ้มที่สุด"

### Fik3 · st · ctx k · Fi · rev10
current: ความรู้สึกของฉันลึกและเป็นส่วนตัว ฉันเก็บไว้กับตัวมากกว่าแสดงออก
- CON audit of rev10 item [ei_confound s2] 'เก็บไว้กับตัวมากกว่าแสดงออก' is the EI ec facet (contained), not Fi values. → CON rewrite: "ความรู้สึกของฉันลึกและซับซ้อน จนบางทีฉันเองต้องใช้เวลานานกว่าจะรู้ว่ามันคืออะไร"

### Fil0 · st · ctx l · Fi · rev10
current: ฉันใช้ดนตรี งานเขียน หรืองานสร้างสรรค์เป็นที่ระบายความรู้สึกส่วนตัว
- LINT ["R1_ability:สร้างสรรค์"]

### Fim1 · st · ctx m · Fi · rev10
current: สิ่งที่ฉันโพสต์ต้องตรงกับความรู้สึกจริงของฉัน ไม่อย่างนั้นจะรู้สึกว่าไม่จริงใจ
- LINT ["R2_virtue:จริงใจ"]

### Fir2 · st · ctx r · Fi · rev10
current: ฉันสัมผัสได้ว่าคนตรงหน้าจริงใจกับสิ่งที่เขาเชื่อจริงหรือไม่
- CON audit of rev10 item [ability s2] 'สัมผัสได้ว่าคนตรงหน้าจริงใจหรือไม่' = lie-detection ability; also person-reading is not Fi's value judgment. → CON rewrite: "ฉันให้น้ำหนักมากกับว่าคนตรงหน้าดูจริงใจกับสิ่งที่เขาเชื่อแค่ไหน มากกว่าว่าเขาเชื่ออะไร"
- LINT ["R2_virtue:จริงใจ"]

### Fiv2 · st · ctx v · Fi · rev10
current: หนังที่กระทบใจ ฉันมักดูคนเดียว เพราะอยากอยู่กับความรู้สึกของตัวเองก่อนคุยกับใคร
- CON audit of rev10 item [ei_confound s2] 'มักดูคนเดียว' = solitude preference (I). → CON rewrite: "หนังที่กระทบใจ ฉันมักต้องใช้เวลาอยู่กับความรู้สึกนั้นก่อน ถึงจะบอกได้ว่ามันหมายถึงอะไรกับฉัน"

### Fiw4 · st · ctx w · Fi · NEW
current: ถ้างานไหนไม่มีความหมายกับฉันเอง ฉันทำได้แต่ใจไม่ไปด้วย แม้จะเป็นงานสำคัญ
- debate: con_flag | ratings Fiw4 pro 2.9 con 2.7
- CON[desirability s2] "ทำได้แต่ใจไม่ไปด้วย แม้จะเป็นงานสำคัญ" admits low work commitment — embarrassing for a Thai adult (~2.7, below target); Fi respondents will under-endorse it. → CON rewrite: "ฉันทำงานได้เต็มที่ที่สุดเมื่องานนั้นตรงกับสิ่งที่ฉันให้คุณค่า ถ้าไม่ตรง ฉันต้องหาความหมายส่วนตัวให้มันก่อนจึงจะมีแรงทำ"

### Fix0 · st · ctx x · Fi · NEW
current: ฉันยืนข้างเพื่อนในเรื่องที่ฉันเชื่อว่าถูก แต่ถ้าเขาทำสิ่งที่ขัดกับหลักในใจฉัน ฉันก็จะบอกว่าไม่เห็นด้วย
- debate: con_flag | ratings Fix0 pro 3.7 con 4.1
- CON[desirability s2] 'Loyal but honest when they're wrong' is the textbook ideal friend (~4.1). → CON rewrite: "ถ้าเพื่อนสนิททำสิ่งที่ขัดกับหลักในใจฉัน ความรู้สึกที่ฉันมีต่อเขาจะเปลี่ยนไป แม้ปากจะยังไม่ได้พูดอะไร"

### Fix4 · st · ctx x · Fi · NEW
current: ถ้าวงเพื่อนเริ่มนินทาใครแรง ๆ จนฉันไม่สบายใจ ฉันเลือกไม่ร่วมวง แม้บรรยากาศจะกร่อยไปบ้าง
- debate: con_flag; des_out_of_range 4.00 | ratings Fix4 pro 3.8 con 4.2
- CON[desirability s3] Refusing to join harsh gossip is a moral virtue (~4.2) that every function will claim; it measures conscientious morality, not Fi. → CON rewrite: "ถ้าวงเพื่อนคุยเรื่องที่ขัดกับสิ่งที่ฉันให้ค่า ฉันจะรู้สึกห่างจากวงนั้นขึ้นมาทันที แม้ภายนอกจะยังคุยต่อตามปกติ"
- PRO[undefined desirability_high s]  → PRO rewrite: "ถ้าวงเพื่อนคุยเรื่องที่ขัดกับหลักในใจฉัน ฉันมักนิ่งไปหรือขอตัว แม้เพื่อนจะมองว่าฉันจริงจังเกินไป"

### Fiz0 · st · ctx z · Fi · rev10
current: ความฝันของฉันต้องเป็นของฉันจริง ๆ ไม่ใช่สิ่งที่พ่อแม่หรือสังคมคาดหวัง
- LINT ["R11_hierarchy:พ่อแม่"]

### Nek0 · st · ctx k · Ne · rev10
current: ฉันมองเห็นทางเลือกและความเป็นไปได้หลายแบบอยู่เสมอ แม้ในเรื่องที่คนอื่นเห็นทางเดียว
- LINT ["R4_absolute:เสมอ"]

### Ner2 · st · ctx r · Ne · rev10
current: ฉันมองเห็นศักยภาพของคนที่คนอื่นยังมองไม่เห็น
- CON audit of rev10 item [ability s3] 'มองเห็นศักยภาพของคนที่คนอื่นยังมองไม่เห็น' = superiority + virtue (~4.4). → CON rewrite: "ฉันมักนึกเล่น ๆ ว่าคนใกล้ตัวน่าจะลองเป็นหรือทำอะไรได้อีกหลายแบบ แม้เขาเองจะไม่ได้คิดแบบนั้น"

### New0 · st · ctx w · Ne · rev10
current: ในการระดมสมอง ฉันโยนไอเดียได้หลายทางในเวลาสั้น ๆ
- CON audit of rev10 item [ability s2] 'โยนไอเดียได้หลายทางในเวลาสั้น ๆ' is a fluency/performance claim. → CON rewrite: "ในการระดมสมอง ฉันมักโยนไอเดียออกมาหลายทาง จนบางทีทีมต้องช่วยดึงกลับมาที่โจทย์"

### Nex0 · st · ctx x · Ne · NEW
current: ฉันชอบนึกว่าเพื่อนจากต่างกลุ่มถ้าได้รู้จักกันน่าจะคลิกกันแบบไหน แล้วลองแนะนำให้เจอกัน
- debate: con_flag | ratings Nex0 pro 3.6 con 3.6
- CON[ei_confound s2] Actually introducing friends from different groups is networking / gregarious (EI facet gi), not just Ne seeing possibilities. → CON rewrite: "ฉันชอบนึกเล่น ๆ ว่าเพื่อนจากต่างกลุ่มถ้าได้รู้จักกันจะคลิกกันแบบไหน แม้ส่วนใหญ่จะไม่ได้แนะนำให้เจอกันจริง"

### Ney1 · st · ctx y · Ne · rev10
current: ถ้ามีคนเล่าความเชื่อที่ไม่เคยได้ยิน ฉันอยากรู้ต่อทันทีว่ามันมาจากไหน และเชื่อมกับอะไรได้บ้าง
- LINT ["R4_absolute:ไม่เคย"]

### Nib1 · st · ctx b · Ni · rev10
current: เวลาอ่าน ฉันมักอ่านระหว่างบรรทัด และได้ความหมายที่ผู้เขียนไม่ได้พูดตรง ๆ
- CON audit of rev10 item [ability s2] 'ได้ความหมายที่ผู้เขียนไม่ได้พูดตรง ๆ' presupposes the reading is correct (literary skill). → CON rewrite: "เวลาอ่าน ฉันมักสนใจความหมายที่อาจซ่อนอยู่ระหว่างบรรทัด มากกว่าสิ่งที่ผู้เขียนพูดตรง ๆ"

### Nif0 · st · ctx f · Ni · NEW
current: ฉันมักเลือกงานอดิเรกจากความรู้สึกลึก ๆ ว่ามันจะพาฉันไปเป็นคนแบบไหน แม้ตอนเริ่มยังอธิบายไม่ได้ว่าทำไม
- debate: con_flag | ratings Nif0 pro 3.3 con 3.5
- CON[theory s2] 'จะพาฉันไปเป็นคนแบบไหน' is identity/authenticity (Fi) language; Ni here should be a hunch about where it leads, not who I become. → CON rewrite: "ฉันมักเลือกงานอดิเรกจากลางสังหรณ์ว่ามันจะเชื่อมไปสู่อะไรบางอย่างในอนาคต แม้ตอนเริ่มยังบอกไม่ได้ว่าอะไร"

### Nil5 · st · ctx l · Ni · NEW
current: เวลาว่าง ฉันมักกลับไปคิดเรื่องเดียวซ้ำ ๆ จากหลายมุม จนเห็นว่ามันเชื่อมกับเรื่องอื่นในชีวิตอย่างไร
- debate: con_flag; pro_fix | ratings Nil5 pro 3.3 con 3.4
- CON[theory s2] "คิดเรื่องเดียวจากหลายมุม จนเห็นว่ามันเชื่อมกับเรื่องอื่น" = divergent, connection-making language (Ne). Ni converges to one underlying pattern. → CON rewrite: "เวลาว่าง ฉันมักกลับไปครุ่นคิดเรื่องเดียวซ้ำ ๆ จนเห็นแก่นเดียวที่อยู่ข้างใต้มัน"
- PRO[fix theory s2] 'จากหลายมุม…เชื่อมกับเรื่องอื่น' is divergent branching (Ne). Ni is convergence on one core; rewrite to the narrowing movement. → PRO rewrite: "เวลาว่าง ฉันมักกลับไปครุ่นคิดเรื่องเดียวซ้ำ ๆ จนเห็นว่าแก่นจริง ๆ ของมันคืออะไร แม้จะไม่ได้ข้อสรุปที่เอาไปใช้ได้ทันที"

### Nip3 · st · ctx p · Ni · NEW
current: หลังเล่นหรือดูกีฬามาหลายนัด ฉันมักจับได้ว่ามีรูปแบบลึก ๆ อย่างหนึ่งที่วนกลับมาเสมอ
- LINT ["R4_absolute:เสมอ"]

### Niq5 · st · ctx q · Ni · NEW
current: เลือกของขวัญ ฉันมักนึกภาพว่าคนคนนั้นกำลังเติบโตไปทางไหน แล้วเลือกของที่เข้ากับทางนั้น
- debate: con_flag | ratings Niq5 pro 3.6 con 3.9
- CON[context s2] Six of 48 q statements are gift-choosing (Niq5 Neq5 Siq5 Teq5 Fiq5 Feq2). Gifts are interpersonal (relationship context), not personal taste, and push every function toward 'thoughtful giver' answers (~3.9 here). → CON rewrite: "เลือกของให้ตัวเอง ฉันมักนึกภาพว่าตัวเองกำลังเปลี่ยนไปทางไหน แล้วเลือกของที่เข้ากับตัวฉันในอีกไม่กี่ปีข้างหน้า"

### Niv0 · st · ctx v · Ni · rev10
current: เวลาดูหนังหรือซีรีส์ ฉันมักเดาตอนจบหรือจุดหักมุมได้ก่อนคนอื่น จากความรู้สึกบางอย่าง
- CON audit of rev10 item [ability s3] 'เดาตอนจบได้ก่อนคนอื่น' is an explicit superiority/accuracy claim. → CON rewrite: "เวลาดูหนังหรือซีรีส์ ฉันมักมีความรู้สึกบางอย่างว่าเรื่องกำลังจะไปจบตรงไหน แล้วดูต่อเพื่อเช็กว่าใช่ไหม"

### Nix2 · st · ctx x · Ni · NEW
current: ฉันมักมองมิตรภาพแต่ละช่วงเป็นภาพใหญ่ภาพเดียว ว่าเพื่อนกลุ่มนั้นเข้ามาในชีวิตฉันในจังหวะนั้นเพราะอะไร
- debate: con_flag | ratings Nix2 pro 3.3 con 3.3
- CON[unclear s2] 'เพื่อนกลุ่มนั้นเข้ามาในชีวิตในจังหวะนั้นเพราะอะไร' evokes บุพเพ/กรรม fate beliefs; measures religiosity/fatalism as much as Ni, and is long (~100 chars). → CON rewrite: "พอมองย้อนมิตรภาพแต่ละช่วง ฉันมักเห็นเส้นเรื่องเดียวที่ร้อยเพื่อนแต่ละกลุ่มเข้ากับช่วงชีวิตตอนนั้น"

### Niz4 · st · ctx z · Ni · NEW
current: ฉันมักรู้สึกว่าเรื่องที่เคยผ่านมาทั้งดีและร้าย ค่อย ๆ ชี้ไปที่ทางเดียวที่ฉันควรเดิน
- LINT ["R12_modal:ฉันควร"]

### Sea1 · st · ctx a · Se · rev10
current: ฉันสังเกตรายละเอียดของสี แสง และพื้นผิวในสิ่งรอบตัวได้ละเอียด
- CON audit of rev10 item [ability s2] 'สังเกต…ได้ละเอียด' is a perceptual-ability claim. → CON rewrite: "ฉันมักหยุดดูสี แสง และพื้นผิวของสิ่งรอบตัว จนบางทีเดินช้ากว่าคนที่มาด้วย"

### Seg0 · st · ctx g · Se · rev10
current: ในเกม ฉันตอบสนองสิ่งที่เกิดขึ้นตรงหน้าได้ไวโดยแทบไม่ต้องคิด
- CON audit of rev10 item [ability s2] 'ตอบสนองได้ไวโดยแทบไม่ต้องคิด' = reflex skill claim. → CON rewrite: "ในเกม ฉันมักกดตอบสนองสิ่งที่เกิดตรงหน้าไปก่อน แล้วค่อยคิดว่าควรทำแบบนั้นไหม"

### Sel1 · st · ctx l · Se · rev10
current: เวลาว่าง ฉันชอบทำอะไรที่ได้ใช้ประสาทสัมผัสเต็มที่ เช่น ลองชิมของแปลก ๆ ฟังเพลงดัง ๆ หรือเล่นกีฬา จนลืมเรื่องอื่นไปชั่วขณะ
- CON audit of rev10 item [double s2] 121 chars, three activities (tasting, loud music, sport); too long for a two-option pair and Se = thrill stereotype. → CON rewrite: "เวลาว่าง ฉันชอบทำอะไรที่ได้ใช้ประสาทสัมผัสเต็มที่ เช่น ลองชิมของแปลก ๆ จนลืมเรื่องอื่นไปชั่วขณะ"

### Ser3 · st · ctx r · Se · rev10
current: ฉันกล้าชวนใครไปทำอะไรสนุก ๆ ทันทีโดยไม่ต้องคิดนาน
- CON audit of rev10 item [ei_confound s2] 'กล้าชวนใคร…ทันที' = initiating (EI ir) plus courage virtue word กล้า. → CON rewrite: "เวลาอยู่กับคนใกล้ตัว ฉันมักชวนทำสิ่งที่เห็นอยู่ตรงหน้าเลย เช่น ร้านที่เพิ่งเปิดตรงหัวมุม"

### Set2 · st · ctx t · Se · rev10
current: ฉันมักใส่ใจสิ่งรอบตัวสัตว์เลี้ยง เช่น เสียง กลิ่น หรือของที่วางผิดที่
- LINT ["R2_virtue:ใส่ใจ"]

### Sew1 · st · ctx w · Se · rev10
current: เมื่อเกิดเหตุไม่คาดฝัน ฉันตอบสนองได้ไวและมักเหมาะกับสถานการณ์
- CON audit of rev10 item [ability s3] 'ตอบสนองได้ไวและมักเหมาะกับสถานการณ์' is a pure competence claim; in a pair it beats almost anything. → CON rewrite: "เมื่อเกิดเหตุไม่คาดฝัน ฉันมักขยับลงมือตามสิ่งที่เห็นตรงหน้าเลย แม้บางทีจะยังไม่ได้คิดให้รอบ"

### Sex2 · st · ctx x · Se · NEW
current: ในวงเพื่อน ฉันมักเห็นสิ่งเล็ก ๆ ที่เกิดขึ้นตรงหน้า เช่น แก้วใครหมดหรือใครนั่งไม่สบาย แล้วขยับไปจัดการเลย
- debate: con_flag; des_out_of_range 3.95 | ratings Sex2 pro 3.7 con 4.2
- CON[theory s2] Noticing whose glass is empty / who is sitting uncomfortably and fixing it is Thai host courtesy (Fe care for others' comfort), not just sensing; very desirable (~4.2). → CON rewrite: "ในวงเพื่อน ตาฉันมักจับอยู่กับสิ่งที่เกิดตรงหน้า เช่น อาหารที่เพิ่งมาเสิร์ฟหรือใครเดินเข้าร้าน จนบางทีหลุดจากเรื่องที่คุยกันอยู่"
- PRO[undefined function_contamination s]  → PRO rewrite: "ในวงเพื่อน ตาฉันมักไปอยู่กับสิ่งที่เกิดขึ้นรอบโต๊ะ เช่น เพื่อนเปลี่ยนทรงผม ฝนเริ่มตั้งเค้า หรือโต๊ะข้าง ๆ เพิ่งว่าง จนบางทีหลุดจากเรื่องที่คุยอยู่"

### Sey1 · st · ctx y · Se · rev10
current: ฉันเข้าถึงความเชื่อผ่านการลงมือทำจริง เช่น ทำบุญ ไหว้พระ หรือร่วมงาน มากกว่าการอ่านคำอธิบาย
- LINT ["R11_hierarchy:พระ"]

### Sif1 · st · ctx f · Si · NEW
current: ฉันจำได้ละเอียดว่าครั้งแรกที่ทำสำเร็จรู้สึกยังไงในมือ และใช้ความรู้สึกนั้นเป็นหลักเทียบเวลาฝึก
- LINT ["R7_outcome:สำเร็จ"]

### Sii1 · st · ctx i · Si · rev10
current: ฉันเลือกลงทุนในของที่คุ้นเคยหรือใช้อยู่ทุกวัน มากกว่าธุรกิจที่ไม่เคยรู้จัก
- LINT ["R4_absolute:ไม่เคย"]

### Sim3 · st · ctx m · Si · NEW
current: ฉันมีลำดับการเช็กโซเชียลที่ทำเป็นประจำ เช่น เปิดแอปไหนก่อนหลัง จนทำไปโดยไม่ต้องคิด
- debate: pro_fix | ratings Sim3 pro 2.8 con 2.9
- CON[desirability s1] Habitual app-checking order sounds like phone habit (~2.9).
- PRO[fix desirability s2] An automatic app-checking ritual sounds compulsive (~2.8). Replace with Si recall in social media. → PRO rewrite: "ฉันชอบเปิดดูโพสต์หรือรูปเก่าที่ระบบเตือนว่า “วันนี้เมื่อปีก่อน” แล้วนึกย้อนว่าตอนนั้นเป็นอย่างไร"

### Siq2 · st · ctx q · Si · NEW
current: ฉันเลือกของใช้จากความรู้สึกตอนใช้ที่จำได้ เช่น ผ้าแบบนี้ใส่แล้วคันไหม แก้วทรงนี้จับแล้วถนัดมือหรือเปล่า
- LINT ["R1_ability:ถนัด"]

### Sit3 · st · ctx t · Si · NEW
current: ฉันจำได้ว่าปกติสัตว์เลี้ยงกินเท่าไร นอนตรงไหน พอมีอะไรต่างจากเดิมนิดเดียวฉันก็รู้สึกได้
- debate: con_flag; pro_fix | ratings Sit3 pro 3.8 con 3.9
- CON[desirability s2] Knowing exactly how much the pet eats and noticing tiny changes = responsible owner (~3.9); near-duplicate of Sir4 template. → CON rewrite: "ฉันชอบให้กิจวัตรของสัตว์เลี้ยงเป็นแบบเดิมทุกวัน เช่น เวลาให้อาหารและที่นอน ถ้าต้องเปลี่ยน ฉันจะไม่ค่อยสบายใจ"
- PRO[fix desirability s2] Attentive pet-owner answer (~3.8) — wins against any pet statement. Keep Si baseline/routine but make it a preference, not a virtue. → PRO rewrite: "ฉันชอบให้กิจวัตรของสัตว์เลี้ยงเป็นแบบเดิมทุกวัน เช่น กินเวลาเดิม เดินเส้นทางเดิม เพราะรู้สึกว่าทุกอย่างเข้าที่"

### Siv0 · st · ctx v · Si · rev10
current: ฉันชอบดูหนังหรือซีรีส์เรื่องโปรดซ้ำหลายรอบ เพราะทุกครั้งให้ความสุขแบบคุ้นเคย
- LINT ["R4_absolute:ทุกครั้ง"]

### Siw4 · st · ctx w · Si · NEW
current: ฉันมักจำว่างานแต่ละแบบเคยติดปัญหาตรงไหน แล้วเตรียมเผื่อไว้เมื่อเจองานคล้ายกันอีก
- debate: con_flag; pro_fix | ratings Siw4 pro 3.8 con 3.9
- CON[desirability s2] Remembering past failure points and preparing for them reads as the prudent, experienced employee — a Thai workplace virtue (รอบคอบ). No cost; ~3.9, will beat almost any partner statement. → CON rewrite: "ฉันมักจำว่างานแบบนี้เคยติดปัญหาตรงไหน แล้วเตรียมเผื่อไว้ทุกครั้ง จนบางทีเตรียมมากกว่าที่งานจริงต้องใช้"
- PRO[fix desirability s2] Reads as the model-employee answer (remembers past problems and pre-empts them) ~3.8; it will win most MFC pairs for non-Si types. Keep the Si core (referencing stored experience) but add the realistic cost of over-applying past templates. → PRO rewrite: "ฉันมักจำว่างานแต่ละแบบเคยติดปัญหาตรงไหน แล้วเตรียมเผื่อไว้แบบเดิม แม้บางครั้งงานรอบใหม่จะไม่ได้เป็นแบบนั้นแล้ว"

### Six4 · st · ctx x · Si · NEW
current: มุกเก่าของกลุ่มที่เล่าซ้ำมาหลายปี ฉันยังขำได้ทุกครั้ง เพราะมันพาความรู้สึกตอนนั้นกลับมา
- LINT ["R4_absolute:ทุกครั้ง"]

### Siy2 · st · ctx y · Si · rev10
current: ก่อนเรื่องสำคัญ ฉันมีพิธีเล็ก ๆ ของตัวเองที่ทำแบบเดิมทุกครั้ง เช่น ใส่เสื้อตัวเดิม หรือไปที่เดิม
- LINT ["R4_absolute:ทุกครั้ง"]

### Siz5 · st · ctx z · Si · NEW
current: ก่อนลงมือทำสิ่งที่ฝัน ฉันมีเพลงหรือของประจำที่หยิบมาใช้ทุกครั้ง เพราะมันทำให้ใจเข้าที่
- LINT ["R4_absolute:ทุกครั้ง"]

### Tef3 · st · ctx f · Te · NEW
current: ฉันซื้ออุปกรณ์เท่าที่จำเป็นในแต่ละขั้น เทียบกับการใช้งานจริง ไม่ซื้อเผื่อไว้ก่อน
- debate: con_flag | ratings Tef3 pro 3.6 con 3.9
- CON[desirability s2] Buying only what is needed = พอเพียง/frugal virtue in Thai (~3.9); also reads Si-practical as much as Te. → CON rewrite: "ฉันซื้ออุปกรณ์ตามขั้นที่ฝึกถึงจริง ๆ ไม่ซื้อเผื่อ จนบางทีต้องเสียเวลาไปซื้อเพิ่มทีหลังหลายรอบ"
- PRO[undefined  s] 

### Tej4 · st · ctx j · Te · NEW
current: พอทริปมีปัญหา เช่น เที่ยวบินดีเลย์ ฉันรีบหาทางเลือกที่เสียเวลาน้อยที่สุด แล้วจัดการต่อทันที
- debate: con_flag | ratings Tej4 pro 3.8 con 4
- CON[ability s2] Quickly finding the least time-wasting alternative and handling it = competent crisis manager (~4.0). → CON rewrite: "พอทริปมีปัญหา เช่น เที่ยวบินดีเลย์ ฉันรีบตัดสินใจเลือกทางใหม่ทันที แม้บางคนในกลุ่มยังอยากรอดูสถานการณ์"
- PRO[undefined desirability_high s]  → PRO rewrite: "พอทริปมีปัญหา เช่น เที่ยวบินดีเลย์ ฉันรีบหาทางเลือกที่เสียเวลาน้อยที่สุดแล้วสรุปให้ทุกคน แม้บางคนยังอยากบ่นกันก่อน"

### Tek2 · st · ctx k · Te · rev10
current: ฉันเชื่อตัวเลขและหลักฐานมากกว่าคำบอกเล่า แม้บางทีจะดูเย็นชาในสายตาคนอื่น
- LINT ["R9_neglabel:เย็นชา"]

### Tem2 · st · ctx m · Te · rev10
current: เมื่อเห็นข้อมูลผิดบนโซเชียล ฉันรีบแก้หรือชี้แจงให้ถูกต้องทันที
- LINT ["R7_outcome:ถูกต้อง"]

### Tep0 · st · ctx p · Te · rev10
current: ฉันบันทึกตัวเลขการซ้อมทุกครั้ง เช่น ระยะหรือเวลา จนบางทีสนุกน้อยลงเพราะคิดแต่ตัวเลข
- LINT ["R4_absolute:ทุกครั้ง"]

### Teq0 · st · ctx q · Te · NEW
current: ฉันจัดตู้เสื้อผ้าเป็นระบบ มีชิ้นหลักไม่กี่ชิ้นที่จับคู่กันได้หมด เพื่อให้แต่งตัวตอนเช้าได้เร็ว
- LINT ["R1_ability:ได้เร็ว"]

### Ter1 · st · ctx r · Te · rev10
current: ฉันชอบวางแผนเรื่องส่วนรวม เช่น การเดินทางหรือกิจกรรมครอบครัว ให้เป็นระบบ
- LINT ["R2_virtue:ส่วนรวม"]

### Tes3 · st · ctx s · Te · NEW
current: หลังสอบแต่ละครั้ง ฉันดูว่าเสียคะแนนตรงไหนมากที่สุด แล้วเปลี่ยนวิธีอ่านตามนั้นทันที
- debate: con_flag; pro_fix | ratings Tes3 pro 3.9 con 3.9
- CON[desirability s2] Model-student behaviour (analyse errors, change strategy immediately) ~3.9; also partly ability. → CON rewrite: "หลังสอบแต่ละครั้ง ฉันสนใจว่าเสียคะแนนตรงไหนมากกว่าเนื้อหาที่ได้เรียน แล้วปรับวิธีอ่านเพื่อให้ได้คะแนนตามเป้า"
- PRO[fix desirability s2] Post-exam error analysis is the ideal-student answer (~3.9). Add a Te-typical cost (studying only what will be tested). → PRO rewrite: "หลังสอบแต่ละครั้ง ฉันดูว่าเสียคะแนนตรงไหนมากที่สุด แล้วเปลี่ยนวิธีอ่านตามนั้น จนบางทีอ่านแค่สิ่งที่น่าจะออกสอบ"

### Teu5 · st · ctx u · Te · NEW
current: เวลาต้องจัดเพลงให้งานหรือกิจกรรม ฉันรับเป็นคนวางลำดับ แบ่งช่วงเวลา และให้แต่ละคนรับผิดชอบส่วนของตัวเอง
- LINT ["R2_virtue:รับผิดชอบ"]

### Tew1 · st · ctx w · Te · rev10
current: เมื่อเห็นกระบวนการที่ไม่มีประสิทธิภาพ ฉันอยากรีบปรับให้ดีขึ้นทันที
- LINT ["R7_outcome:มีประสิทธิภาพ"]

### Tey3 · st · ctx y · Te · rev10
current: สำหรับฉัน ความเชื่อที่ดีคือสิ่งที่ช่วยให้ชีวิตเป็นระเบียบและมีวินัยขึ้นจริง
- LINT ["R2_virtue:วินัย"]

### Tia2 · st · ctx a · Ti · rev10
current: เวลาวิจารณ์งานศิลปะ ฉันดูความสอดคล้องของแนวคิดและตรรกะภายในของงาน
- LINT ["R6_label:ตรรกะ"]

### Tid1 · st · ctx d · Ti · rev10
current: เวลาชิมอาหาร ฉันแยกวิเคราะห์เป็นองค์ประกอบ เช่น เปรี้ยว เค็ม หวาน แล้วบอกได้ว่าขาดหรือเกินอะไร
- CON audit of rev10 item [ability s2] 'บอกได้ว่าขาดหรือเกินอะไร' is a palate-skill claim; 94 chars. → CON rewrite: "เวลาชิมอาหาร ฉันชอบแยกรสในหัวเป็นเปรี้ยว เค็ม หวาน แล้วคิดว่าแต่ละรสทำหน้าที่อะไรในจาน"

### Tih4 · st · ctx h · Ti · NEW
current: เจอคำแนะนำเรื่องความรักแบบสูตรสำเร็จ ฉันชอบคิดเองก่อนว่ามันจริงแค่ไหน และใช้ได้ในกรณีไหน
- LINT ["R7_outcome:สำเร็จ"]

### Tij2 · st · ctx j · Ti · rev10
current: เวลาวางทริป ฉันชอบคิดให้เข้าใจเองก่อนว่าทำไมเส้นทางแบบหนึ่งถึงสมเหตุสมผลกว่า แทนที่จะเชื่อตามรีวิว แม้จะใช้เวลาคิดนานขึ้น
- CON audit of rev10 item [unclear s2] 121 chars with two clauses; in a pair the long side gets read less carefully. → CON rewrite: "เวลาวางทริป ฉันชอบคิดเองว่าทำไมเส้นทางหนึ่งถึงสมเหตุสมผลกว่า มากกว่าเชื่อตามรีวิว"

### Tik3 · st · ctx k · Ti · rev10
current: ฉันให้ความสำคัญกับความแม่นยำของคำและนิยาม
- LINT ["R1_ability:แม่น"]

### Til5 · st · ctx l · Ti · NEW
current: เวลาเห็นเคล็ดลับหรือคำแนะนำในโซเชียล ฉันมักลองคิดเองก่อนว่ามันมีเหตุผลรองรับจริงไหม
- LINT ["R2_virtue:มีเหตุผล"]

### Tim2 · st · ctx m · Ti · rev10
current: ฉันมักไม่โพสต์ความเห็น ถ้ายังคิดไม่ครบทุกมุมว่าแม่นยำพอ
- CON audit of rev10 item [ei_confound s2] Not posting opinions = low expressiveness (I); also 'แม่นยำพอ' is a quality claim. → CON rewrite: "ก่อนกดแชร์อะไร ฉันมักไล่เช็กว่าเหตุผลในโพสต์ต่อกันติดไหม จนบางทีแชร์ช้ากว่าคนอื่น"
- LINT ["R1_ability:แม่น"]

### Tin4 · st · ctx n · Ti · NEW
current: ฉันชอบแยกให้ชัดว่าตรงไหนในข่าวเป็นข้อเท็จจริง ตรงไหนเป็นความเห็นของคนเขียน
- debate: con_flag; des_out_of_range 4.00 | ratings Tin4 pro 3.9 con 4.1
- CON[desirability s2] Separating fact from opinion is the media-literacy ideal (~4.1); everyone will claim it. → CON rewrite: "อ่านข่าวทีไร ฉันอดไม่ได้ที่จะแยกว่าประโยคไหนเป็นข้อเท็จจริง ประโยคไหนเป็นความเห็น จนอ่านข่าวสบาย ๆ ไม่ค่อยได้"
- PRO[undefined desirability_high s]  → PRO rewrite: "ฉันชอบแยกให้ชัดว่าตรงไหนในข่าวเป็นข้อเท็จจริง ตรงไหนเป็นความเห็น จนบางทีอ่านข่าวเดียวนานกว่าคนอื่นมาก"

### Tir2 · st · ctx r · Ti · rev10
current: ฉันอยากอธิบายความคิดของฉันให้ถูกต้องแม่นยำ แม้คนฟังไม่ได้ต้องการละเอียดขนาดนั้น
- LINT ["R1_ability:แม่น","R7_outcome:ถูกต้อง"]

### Tir5 · st · ctx r · Ti · NEW
current: ฉันมักสังเกตว่ากฎในบ้านบางข้อขัดกันเอง แล้วอยากถามว่ามันมีไว้เพื่ออะไรจริง ๆ
- debate: con_flag | ratings Tir5 pro 2.9 con 2.9
- CON[culture s2] Wanting to ask what house rules are "really for" reads as talking back to elders (เถียงผู้ใหญ่) for Thai adults (~2.9); Ti people will suppress it. → CON rewrite: "ฉันมักสังเกตว่ากฎหรือธรรมเนียมในบ้านบางข้อขัดกันเอง แล้วเก็บมาคิดว่าเหตุผลจริง ๆ ของมันคืออะไร"
- PRO[fix culture s1] Questioning house rules can read as disrespect toward elders (~2.9) and 'มีไว้เพื่ออะไร' leans to Te purpose. Soften to internal noticing of contradiction. → PRO rewrite: "ฉันมักสังเกตว่ากฎในบ้านบางข้อขัดกันเอง แล้วอดคิดในใจไม่ได้ว่าเหตุผลจริง ๆ ของมันคืออะไร"

### Tiu2 · st · ctx u · Ti · rev10
current: เวลาเถียงว่าเพลงไหนดี ฉันต้องมีเหตุผลที่อธิบายได้ ไม่ใช่แค่ชอบ
- LINT ["R2_virtue:มีเหตุผล"]

### Tiw2 · st · ctx w · Ti · rev10
current: ฉันชอบนิยามคำและแนวคิดให้แม่นยำก่อนเริ่มถกประเด็น
- LINT ["R1_ability:แม่น"]

### Tix0 · st · ctx x · Ti · NEW
current: เวลาเพื่อนขอคำแนะนำ ฉันมักถามกลับให้ชัดก่อนว่าปัญหาจริง ๆ คืออะไร เพราะอยากช่วยให้ตรงจุด
- debate: con_flag | ratings Tix0 pro 3.6 con 3.9
- CON[desirability s2] Clarifying the real problem 'เพราะอยากช่วยให้ตรงจุด' adds a helping motive; reads as the wise friend (~3.9). → CON rewrite: "เวลาเพื่อนขอคำแนะนำ ฉันมักถามจี้ให้ชัดก่อนว่าปัญหาจริง ๆ คืออะไร จนบางทีเพื่อนรู้สึกเหมือนโดนสัมภาษณ์"

### Tix2 · st · ctx x · Ti · NEW
current: ถ้ากติกาในกลุ่มเพื่อนขัดกันเอง เช่น วิธีหารค่าอาหาร ฉันมักชี้จุดนั้นแล้วเสนอหลักที่ใช้ได้ทุกครั้ง
- debate: con_flag | ratings Tix2 pro 3.2 con 3
- CON[theory s2] 'เสนอหลักที่ใช้ได้ทุกครั้ง' for the group is Te standardisation of the outer world; money-splitting talk also reads คิดเล็กคิดน้อย in Thai (~3.0). → CON rewrite: "ถ้ากติกาในกลุ่มเพื่อนขัดกันเอง เช่น ครั้งก่อนหารเท่า ครั้งนี้หารตามที่กิน ฉันจะค้างใจจนอยากรู้ว่าหลักที่สมเหตุสมผลจริง ๆ คือแบบไหน"
- LINT ["R4_absolute:ทุกครั้ง"]

### Tiy1 · st · ctx y · Ti · rev10
current: เวลาเจอคำทำนายหรือคำสอน ฉันชอบแยกดูว่าส่วนไหนเป็นตรรกะ ส่วนไหนเป็นการตีความ
- LINT ["R6_label:ตรรกะ"]

### Tiz4 · st · ctx z · Ti · NEW
current: ก่อนตั้งเป้าตามคนอื่น ฉันชอบถามตัวเองว่าคำว่า “สำเร็จ” ที่ใช้กันอยู่ หมายถึงอะไรกันแน่
- LINT ["R7_outcome:สำเร็จ"]
