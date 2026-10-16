// lint all items in a built app against research rules (word-level checks only; judgement goes to agents)
const A = require(require("path").resolve(process.argv[2])), fs = require("fs");
const RULES = {
  R1_ability: ["เก่ง","ถนัด","เชี่ยวชาญ","ฉลาด","หัวไว","ไหวพริบ","วิสัยทัศน์","มองการณ์ไกล","สร้างสรรค์","คิดเป็นระบบ","ลึกซึ้ง","รอบคอบ","ถี่ถ้วน","อ่านคนออก","ได้ดี","ได้ทันที","ได้เร็ว","แม่น","เหนือกว่า","รู้ได้"],
  R2_virtue: ["ใส่ใจ","เอาใจใส่","เห็นอกเห็นใจ","น้ำใจ","เสียสละ","ทุ่มเท","รับผิดชอบ","ซื่อสัตย์","จริงใจ","ยุติธรรม","ใจกว้าง","เปิดใจ","อดทน","วินัย","ตรงต่อเวลา","ถ่อมตัว","กตัญญู","กาลเทศะ","ภาวะผู้นำ","กล้าตัดสินใจ","มั่นใจในตัวเอง","มีเหตุผล","มีหลักการ","ใจเย็น","จิตสาธารณะ","ให้อภัย","ประนีประนอม","ขยัน","มุ่งมั่น","พอเพียง","มีสติ","คนดี","สามัคคี","ใฝ่รู้","ส่วนรวม","เพื่อผู้อื่น"],
  R4_absolute: ["เสมอ","ทุกครั้ง","ไม่เคย","ตลอดเวลา"],
  R6_label: ["สัญชาตญาณ","ตรรกะ","หลักตรรกะ"],
  R7_outcome: ["สำเร็จ","ได้ผลดี","ถูกต้อง","มีประสิทธิภาพ","อย่างรวดเร็ว","เป็นที่รัก","ได้รับการยอมรับ","ชมว่า","เป็นที่พึ่ง"],
  R9_neglabel: ["ขี้เกียจ","เห็นแก่ตัว","ใจร้อน","เย็นชา","ดื้อ","หัวรั้น","เพ้อฝัน","เพ้อเจ้อ","ขี้ลืม","หัวโบราณ","เจ้าอารมณ์","จู้จี้","โลเล","ไม่แคร์","ตามใจตัวเอง","ไร้ระเบียบ","เอาแต่ใจ","อวด","จับผิด","ขี้เถียง","ใช้อารมณ์","จับจด","เหลาะแหละ","เบื่อง่าย","ฟุ่มเฟือย","เจ้ากี้เจ้าการ","หักหน้า","เสียหน้า","ขวานผ่าซาก","งมงาย","ประมาท","ขี้อวด","ยึดติด"],
  R11_hierarchy: ["ผู้ใหญ่","พ่อแม่","คุณครู","หัวหน้า","เจ้านาย","ผู้บังคับบัญชา","พระ"],
  R12_modal: ["ฉันพยายาม","ฉันควร","อยากเป็นคนที่"],
  heroic_cost: ["แม้ตัวเองจะเหนื่อย","แม้ตัวเองจะลำบาก","ไม่ว่าจะยากแค่ไหน","จนลืมเรื่องตัวเอง","พักเรื่องตัวเองไว้ก่อน"]
};
const hit = t => { const out = []; for (const r in RULES) RULES[r].forEach(w => { if (t.indexOf(w) >= 0) out.push(r + ":" + w); }); return out; };
const rows = [];
A.QUESTIONS.forEach(q => { const h = hit(q.t); if (h.length) rows.push({ id: q.id, kind: "st", f: q.f, c: q.c, t: q.t, hits: h }); });
A.BIPS.forEach(b => { const ha = hit(b.ta), hb = hit(b.tb); if (ha.length || hb.length) rows.push({ id: b.id, kind: "bip", pair: b.pair, c: b.c, a: b.ta, b: b.tb, hitsA: ha, hitsB: hb }); });
A.EIS.forEach(e => { const ha = hit(e.te), hb = hit(e.ti); if (ha.length || hb.length) rows.push({ id: e.id, kind: "ei", g: e.g, E: e.te, I: e.ti, hitsE: ha, hitsI: hb }); });
// bipolar length balance (R10)
A.BIPS.concat(A.EIS.map(e => ({ id: e.id, ta: e.te, tb: e.ti }))).forEach(b => { const r = b.ta.length / b.tb.length; if (r > 1.3 || r < 1 / 1.3) rows.push({ id: b.id, kind: "len", a: b.ta, b: b.tb, ratio: +r.toFixed(2) }); });
if (process.argv[3]) fs.writeFileSync(process.argv[3], JSON.stringify(rows, null, 1));
const cnt = {}; rows.forEach(r => (r.hits || []).concat(r.hitsA || [], r.hitsB || [], r.hitsE || [], r.hitsI || [], r.kind === "len" ? ["R10_length"] : []).forEach(h => { const k = h.split(":")[0]; cnt[k] = (cnt[k] || 0) + 1; }));
const fnc = {}; rows.filter(r => r.kind === "st").forEach(r => fnc[r.f] = (fnc[r.f] || 0) + 1);
console.log("flagged items", rows.length, "of", A.QUESTIONS.length + A.BIPS.length + A.EIS.length, JSON.stringify(cnt), "statements by fn", JSON.stringify(fnc));
