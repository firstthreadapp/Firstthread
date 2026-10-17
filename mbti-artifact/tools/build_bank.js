// node tools/build_bank.js r11/final.json r11/index.src.html r11/index.html
const fs = require("fs");
const [fin, src, out] = process.argv.slice(2);
const F = JSON.parse(fs.readFileSync(fin, "utf8"));
const FN = ["Ni","Ne","Si","Se","Ti","Te","Fi","Fe"], PR = ["Ni-Se","Ne-Si","Ti-Fe","Te-Fi"];
const st = {}, bp = {}, ei = {};
F.items.forEach(x => {
  if (x.kind === "st") { ((st[x.ctx] = st[x.ctx] || {})[x.fn] = st[x.ctx][x.fn] || []).push([x.id, x.t]); }
  else if (x.kind === "bip") { ((bp[x.ctx] = bp[x.ctx] || {})[x.pair] = bp[x.ctx][x.pair] || []).push([x.id, x.a, x.b]); }
  else if (x.kind === "ei") { (ei[x.g] = ei[x.g] || []).push([x.id, x.E, x.I]); }
});
const J = o => JSON.stringify(o);
let bank = "/* ---------- rev11: คลังข้อเพิ่ม 488 ข้อความ/ข้อ ร่างโดยผู้เขียน 7 ราย แล้วผ่านการโต้แย้งของทีมเห็นด้วยและทีมเห็นต่าง ----------\n" +
  "   เรื่องใหม่: x เพื่อน · f งานอดิเรก · q รสนิยมส่วนตัว · ทุกเรื่องเพิ่มจำนวนข้อ 40–50% (ดูคำอธิบายใน CHANGELOG ของ rev11) */\n";
bank += "var R11_ST = " + J(Object.fromEntries(Object.entries(st).map(([c, o]) => [c, Object.fromEntries(Object.entries(o).map(([f, l]) => [f, l.map(z => z[1])]))]))) + ";\n";
bank += "var R11_BIP = " + J(Object.fromEntries(Object.entries(bp).map(([c, o]) => [c, Object.fromEntries(Object.entries(o).map(([p, l]) => [p, l.map(z => [z[1], z[2]])]))]))) + ";\n";
bank += "var R11_EI = " + J(Object.fromEntries(Object.entries(ei).map(([g, l]) => [g, l.map(z => [z[1], z[2]])]))) + ";\n";
bank += `["Ni", "Ne", "Si", "Se", "Ti", "Te", "Fi", "Fe"].forEach(function (f) {
  Object.keys(R11_ST).forEach(function (c) {
    var add = R11_ST[c][f] || [];
    if (c === "k") BANK_CORE[f] = BANK_CORE[f].concat(add);
    else if (BANK[f][c]) BANK[f][c] = BANK[f][c].concat(add);
    else { BANK_NEW[c] = BANK_NEW[c] || {}; BANK_NEW[c][f] = (BANK_NEW[c][f] || []).concat(add); }
  });
});
Object.keys(R11_BIP).forEach(function (c) {
  BIP_PAIRS.forEach(function (pr) {
    var key = pr[0] + "-" + pr[1], base = c === "o" ? BANK_BIP[key].length : ((BIP_CTX8[c] || {})[key] || []).length;
    (R11_BIP[c][key] || []).forEach(function (t, i) {
      BIPS.push({ id: "B" + pr[0] + pr[1] + (c === "o" ? "" : c) + (base + i), bip: true, pair: key, fa: pr[0], fb: pr[1], ta: t[0], tb: t[1], c: c });
    });
  });
});
Object.keys(R11_EI).forEach(function (g) { EI_BANK[g] = EI_BANK[g].concat(R11_EI[g]); });
`;
// verify ids generated match ids in final.json
let des = "/* rev11: คะแนนความน่าปรารถนาของข้อใหม่ = ค่าเฉลี่ยของผู้ให้คะแนน 2 ทีม (ทีมเห็นด้วย + ทีมเห็นต่าง ซึ่งเป็นโมเดลภาษา ไม่ใช่คนจริง) */\n";
des += "Object.assign(DES, " + J(F.des) + ");\nObject.assign(DES_EI, " + J(F.desEI || {}) + ");\n";
des += "/* rev11: ความน่าปรารถนารายฝั่งของข้อเลือกข้างคู่ตรงข้าม [ฝั่งหน้าที่แรก, ฝั่งหน้าที่หลัง] ใช้ตรวจความสมดุลและเลือกตัวอย่างในรายงาน */\nvar DES_BIP = " + J(F.desBip || {}) + ";\n";
let fix = "/* rev11: แก้ข้อเดิมที่ทีมเห็นต่างชี้ว่าบกพร่อง (ผู้ตัดสินรับแล้ว) */\n";
fix += "var R11_FIX = " + J(F.fix || {}) + ";\n";
fix += "/* rev12: ข้อที่ปลดออกจากการใช้ (ขัดกับขอบเขตบริบทใหม่ เช่น ฉากโต้แย้ง) */\nvar RETIRED = " + J(F.retired || {}) + ";\n";
fix += `QUESTIONS.forEach(function (q) { if (typeof R11_FIX[q.id] === "string") q.t = R11_FIX[q.id]; });
BIPS.forEach(function (b) { var x = R11_FIX[b.id]; if (x && x.a) { b.ta = x.a; b.tb = x.b; } });
EIS.forEach(function (e) { var x = R11_FIX[e.id]; if (x && x.E) { e.te = x.E; e.ti = x.I; } });
Object.assign(DES, ${J(F.fixDes || {})});
`;
let s = fs.readFileSync(src, "utf8");
for (const [m, v] of [["/*@@R11_BANK@@*/", bank], ["/*@@R11_DES@@*/", des], ["/*@@R11_FIX@@*/", fix]]) { if (s.split(m).length !== 2) throw "marker " + m; s = s.replace(m, () => v); }
fs.writeFileSync(out, s);
// self-check
const js = s.split("<script>")[1].split("</script>")[0]; fs.writeFileSync(out.replace(/\.html$/, ".app.js"), js);
const A = require(require("path").resolve(out.replace(/\.html$/, ".app.js")));
const qids = new Set(A.QUESTIONS.map(q => q.id)), bids = new Set(A.BIPS.map(b => b.id)), eids = new Set(A.EIS.map(e => e.id));
const miss = F.items.filter(x => !(x.kind === "st" ? qids.has(x.id) && A.qById(x.id).t === x.t : x.kind === "bip" ? bids.has(x.id) : eids.has(x.id)));
const noDes = F.items.filter(x => x.kind === "st" && typeof F.des[x.id] !== "number");
console.log("built", out, "questions", A.QUESTIONS.length, "bips", A.BIPS.length, "ei", A.EIS.length, "idMismatch", miss.length, miss.slice(0,3).map(x=>x.id), "noDes", noDes.length);
