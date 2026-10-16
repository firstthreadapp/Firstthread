const fs = require("fs"), D = "r11/debate/";
const items = JSON.parse(fs.readFileSync("r11/draft_all.json"));
const L = f => JSON.parse(fs.readFileSync(D + f));
const pro = [L("pro1.json"), L("pro2.json")], con = [L("con1.json"), L("con2.json")];
const R = (arr, k) => { for (const j of arr) if (typeof j.ratings[k] === "number") return j.ratings[k]; return null; };
const flags = {}, verds = {};
con.forEach(j => (j.flags || []).forEach(f => (flags[f.id] = flags[f.id] || []).push(f)));
pro.forEach(j => (j.verdicts || []).forEach(v => (verds[v.id] = verds[v.id] || []).push(v)));
const keysOf = x => x.kind === "st" ? [x.id] : x.kind === "bip" ? [x.id + "|a", x.id + "|b"] : [x.id + "|E", x.id + "|I"];
const avg = {}, miss = [];
items.forEach(x => keysOf(x).forEach(k => { const a = R(pro, k), b = R(con, k); if (a == null || b == null) miss.push(k); avg[k] = { pro: a, con: b, m: a != null && b != null ? (a + b) / 2 : (a ?? b) }; }));
const disputes = [];
items.forEach(x => {
  const why = [];
  const cf = (flags[x.id] || []).filter(f => f.sev >= 2), pf = (verds[x.id] || []).filter(v => v.v === "fix" && v.sev >= 2);
  if (cf.length) why.push("con_flag"); if (pf.length) why.push("pro_fix");
  const ks = keysOf(x);
  if (x.kind === "st") { const m = avg[ks[0]].m; if (m > 3.9 || m < 2.8) why.push("des_out_of_range " + m.toFixed(2)); }
  else { const g = avg[ks[0]].m - avg[ks[1]].m; if (Math.abs(g) > 0.5) why.push("side_gap " + g.toFixed(2)); }
  if (why.length) disputes.push({ id: x.id, kind: x.kind, ctx: x.ctx || x.g, fn: x.fn || x.pair || "E-I", text: x.t || { a: x.a, b: x.b, E: x.E, I: x.I }, ratings: ks.map(k => k + " pro " + avg[k].pro + " con " + avg[k].con), why, con: (flags[x.id] || []).map(f => ({ type: f.type, sev: f.sev, why: f.why, rewrite: f.rewrite })), pro: (verds[x.id] || []).map(v => ({ v: v.v, type: v.type, sev: v.sev, why: v.why, rewrite: v.rewrite })) });
});
const existing = (con[1].existing || []);
fs.writeFileSync(D + "avg.json", JSON.stringify(avg));
fs.writeFileSync(D + "disputes.json", JSON.stringify({ disputes, existing, conDesign: con[0].design || [], proDesign: pro[0].design || [] }, null, 1));
const strong = Object.values(verds).flat().filter(v => v.v === "strong").length;
console.log("items", items.length, "missingRatings", miss.length, miss.slice(0, 5), "disputes", disputes.length, "conFlagsAll", Object.values(flags).flat().length, "existingFlagged", existing.length, "proStrong", strong);
const cnt = {}; disputes.forEach(d => d.why.forEach(w => { const k = w.split(" ")[0]; cnt[k] = (cnt[k] || 0) + 1; })); console.log(cnt);
