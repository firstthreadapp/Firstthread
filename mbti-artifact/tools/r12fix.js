// rev12 audit fixes: collect suggested fixes from content_audit.json (+ hand-written ones), build blind rating sheet with anchors
const fs = require("fs");
const f = require("../r12/audit/content_audit.json");
const fixes = {};
const skipIdx = new Set([11, 12, 13, 14, 25, 26, 47, 56, 6, 7]); // systemic or multi-id: handled by hand below
f.forEach((x, i) => { if (skipIdx.has(i)) return; if (/^(B?[NSTF][ieo])/.test(x.id) && x.id.indexOf(",") < 0) fixes[x.id] = x.suggested_fix; });
Object.assign(fixes, {
  Ney2: f[6].suggested_fix,
  Niy2: "หลักคิดที่ฉันใช้ตอนนี้ค่อย ๆ ตกผลึกเป็นภาพเดียวในหัว ที่ฉันใช้มองเรื่องอื่น ๆ ในชีวิต",
  Tiy0: "ก่อนรับหลักคิดอะไรมาใช้ ฉันต้องไล่เหตุผลในหัวก่อนว่ามันเข้ากับสิ่งที่ฉันเข้าใจไหม",
  Fey0: "หลักของฉันคือถ้าเพื่อนชวนไปงานวันเกิด ก็มักรีบตอบรับไว้ก่อนเพราะกลัวเขาจะรู้สึกว่าไม่มีใครไป ทั้งที่งานนั้นอาจมีคนไปเต็มอยู่แล้ว",
  Fii8: "เลือกสีของของใช้ ฉันมักเลือกสีที่อยากอยู่ด้วยในช่วงนั้น จนบางทีของในห้องสีตีกันไปหมด",
  Tes0: f[14].suggested_fix,
  Neg4: f[25].suggested_fix,
  Fis0: f[26].suggested_fix,
  Fey5: "เวลาเพื่อนเล่าเป้าหมายชีวิตที่ต่างจากฉันมาก ฉันมักคอยดูว่าเขาอยากให้ตอบรับแบบไหน จนบางทีจำรายละเอียดที่เขาเล่าได้ไม่ครบ",
  BNiSes0: f[47].suggested_fix,
  Ney6: f[56].suggested_fix
});
fs.writeFileSync("r12/audit/fixes.json", JSON.stringify(fixes, null, 1));
// sheet
const rows = [];
for (const id in fixes) { const v = fixes[id]; if (typeof v === "string") rows.push({ id, text: v }); else { rows.push({ id: id + ".a", text: v.a }); rows.push({ id: id + ".b", text: v.b }); } }
const anc = [];
[1, 2].forEach(k => require(`../r12/rate_key${k}.json`).forEach(r => { if (r.kind === "anc") anc.push(r); }));
const S = require("../r12/rate_sheet1.json").concat(require("../r12/rate_sheet2.json"));
// anchor text: look up in the sheet with same n per key
const ancRows = [];
[1, 2].forEach(k => { const sh = require(`../r12/rate_sheet${k}.json`), key = require(`../r12/rate_key${k}.json`); key.forEach(r => { if (r.kind === "anc") ancRows.push({ id: "ANC:" + r.id, text: sh.find(s => s.n === r.n).text, known: r.known }); }); });
const seen = {}; const all = rows.concat(ancRows.filter(a => !seen[a.id] && (seen[a.id] = 1)));
let s = 12345; const rnd = () => (s = (s * 1103515245 + 12345) % 2147483648) / 2147483648;
for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [all[i], all[j]] = [all[j], all[i]]; }
const sheet = all.map((r, i) => ({ n: i + 1, text: r.text })), key = all.map((r, i) => ({ n: i + 1, id: r.id, known: r.known ?? null }));
fs.writeFileSync("r12/rate_sheet3.json", JSON.stringify(sheet, null, 0).replace(/},{/g, "},\n{"));
fs.writeFileSync("r12/rate_key3.json", JSON.stringify(key));
// checks
const bad = [];
rows.forEach(r => { if (r.text.length < 40 || r.text.length > 130) bad.push([r.id, r.text.length]); });
for (const id in fixes) { const v = fixes[id]; if (typeof v !== "string") { const q = v.a.length / v.b.length; if (q > 1.2 || q < 1 / 1.2) bad.push([id, "ratio", q.toFixed(2)]); } }
console.log("fixes", Object.keys(fixes).length, "rows", rows.length, "anchors", all.length - rows.length, "bad", JSON.stringify(bad));
