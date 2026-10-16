// merge round-2 Pro rewrites + Con verification into final.json (items, fixes); ratings come later from the blind panel
const fs = require("fs"), D = "r11/debate/";
const draft = JSON.parse(fs.readFileSync("r11/draft_all.json"));
const work = [1, 2].flatMap(i => JSON.parse(fs.readFileSync(`${D}r2_work${i}.json`)));
const pro = [1, 2].flatMap(i => JSON.parse(fs.readFileSync(`${D}r2_pro${i}.json`)));
const con = [1, 2].flatMap(i => JSON.parse(fs.readFileSync(`${D}r2_con${i}.json`)));
const W = Object.fromEntries(work.map(w => [w.id, w])), P = Object.fromEntries(pro.map(p => [p.id, p])), C = Object.fromEntries(con.map(c => [c.id, c]));
const BAD = /เก่ง|ฉลาด|ได้ดี|แม่น|ใส่ใจ|เสียสละ|น้ำใจ|ซื่อสัตย์|ยุติธรรม|มีเหตุผล|รับผิดชอบ|สำเร็จ|ถูกต้อง|มีประสิทธิภาพ|ทุกครั้ง|ไม่เคย|ตลอดเวลา|ผู้ใหญ่|พ่อแม่|เจ้านาย|หัวหน้า|เสมอ(?!กัน)/;
const shapeOK = (w, t) => w.kind === "st" ? typeof t === "string" && t.length > 10 : w.kind === "bip" ? t && t.a && t.b : t && t.E && t.I;
const txts = t => typeof t === "string" ? [t] : Object.values(t);
const lintOK = t => txts(t).every(x => !BAD.test(x.replace(/เสมอกัน/g, "")));
const log = { accept: 0, counter: 0, counterRejected: 0, proMissing: 0, keep: 0 }, final = {};
work.forEach(w => {
  const p = P[w.id], c = C[w.id];
  if (!p || !shapeOK(w, p.text)) { log.proMissing++; final[w.id] = { text: w.text, src: "unchanged" }; return; }
  if (!c || c.verdict !== "object") { log.accept++; final[w.id] = { text: p.text, src: p.action === "keep" ? "pro-keep" : "pro" }; return; }
  if (c.counter && shapeOK(w, c.counter) && lintOK(c.counter)) { log.counter++; final[w.id] = { text: c.counter, src: "con-counter", why: c.why }; }
  else { log.counterRejected++; final[w.id] = { text: p.text, src: "pro (counter failed shape/lint)", why: c.why }; }
});
// apply: new items → items list; rev10 items → fix map
const items = draft.map(x => {
  const f = final[x.id]; if (!f) return x;
  const y = Object.assign({}, x);
  if (x.kind === "st") y.t = f.text; else if (x.kind === "bip") { y.a = f.text.a; y.b = f.text.b; } else { y.E = f.text.E; y.I = f.text.I; }
  return y;
});
const newIds = new Set(draft.map(x => x.id)), fix = {};
work.filter(w => !newIds.has(w.id)).forEach(w => { const f = final[w.id]; if (JSON.stringify(f.text) !== JSON.stringify(w.text)) fix[w.id] = f.text; });
fs.writeFileSync("r11/final_items.json", JSON.stringify({ items, fix }, null, 1));
fs.writeFileSync(D + "adjudication.json", JSON.stringify(final, null, 1));
console.log(JSON.stringify(log), "rev10 fixes", Object.keys(fix).length, "new items changed", Object.keys(final).filter(id => newIds.has(id) && final[id].src !== "unchanged").length);
