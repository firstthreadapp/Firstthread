// apply blind-rated audit fixes to r12/final.json. usage: node tools/r12fixapply.js [--write]
const fs = require("fs");
const F = JSON.parse(fs.readFileSync("r12/final.before_audit.json", "utf8"));
const fx = require("../r12/audit/fixes.json"), K = require("../r12/rate_key3.json");
const RA = require("../r12/rateA3.json"), RB = require("../r12/rateB3.json");
const m = n => (RA[n] + RB[n]) / 2;
const anc = K.filter(r => r.known != null), x = anc.map(r => m(r.n)), y = anc.map(r => r.known);
const mean = a => a.reduce((s, v) => s + v, 0) / a.length, mx = mean(x), my = mean(y);
const b = anc.reduce((s, r, i) => s + (x[i] - mx) * (y[i] - my), 0) / x.reduce((s, v) => s + (v - mx) ** 2, 0), a = my - b * mx;
const cor = (p, q) => { const mp = mean(p), mq = mean(q); return p.reduce((s, v, i) => s + (v - mp) * (q[i] - mq), 0) / Math.sqrt(p.reduce((s, v) => s + (v - mp) ** 2, 0) * q.reduce((s, v) => s + (v - mq) ** 2, 0)); };
console.log("anchor r", cor(x, y).toFixed(2), "rater r", cor(K.map(r => RA[r.n]), K.map(r => RB[r.n])).toFixed(2), "slope", b.toFixed(2));
const cal = {}; K.forEach(r => { if (r.known == null) cal[r.id] = +(a + b * m(r.n)).toFixed(2); });
const items = {}; F.items.forEach(i => items[i.id] = i);
const MUST = new Set(["Fiy2", "BTeFiy1", "Fiy0", "Fiy5", "Ney3", "Tiy5", "Ney2", "Niy2", "Tiy0", "Fey0"]); // religion-in-y: never keep old text
const DUP = new Set(["Seq6", "Sim4", "Siq6", "Nil6", "Nic1", "Fiz6", "Teq6"]);
const log = { ok: [], rej: [], retired: [] };
for (const id in fx) {
  const v = fx[id], isB = typeof v !== "string";
  let ok, d;
  if (!isB) { d = cal[id]; ok = d >= 2.6 && d <= 4.0; }
  else { d = [cal[id + ".a"], cal[id + ".b"]]; ok = Math.abs(d[0] - d[1]) <= 0.4 && Math.min(...d) >= 2.5 && Math.max(...d) <= 4.3; }
  const old = isB ? F.desBip[id] : (items[id] ? items[id].des : F.fixDes[id]);
  if (ok) {
    log.ok.push([id, old, d]);
    if (items[id]) { if (isB) { items[id].a = v.a; items[id].b = v.b; F.desBip[id] = d; } else { items[id].t = v; items[id].des = d; F.des[id] = d; } }
    else { F.fix[id] = v; if (isB) F.desBip[id] = d; else F.fixDes[id] = d; }
  } else {
    log.rej.push([id, old, d]);
    if (MUST.has(id) || DUP.has(id)) { F.retired[id] = 1; log.retired.push(id); }
  }
}
console.log("accepted", log.ok.length, "rejected", log.rej.length, "retired", log.retired);
log.rej.forEach(r => console.log(" rej", JSON.stringify(r)));
if (process.argv[2] === "--write") { fs.writeFileSync("r12/final.json", JSON.stringify(F, null, 1)); fs.writeFileSync("r12/audit/fix_apply_log.json", JSON.stringify({ a, b, ...log }, null, 1)); console.log("written"); }
