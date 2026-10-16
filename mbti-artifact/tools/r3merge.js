const fs = require("fs"), D = "r11/debate/";
const F = JSON.parse(fs.readFileSync("r11/final.json")), fx = JSON.parse(fs.readFileSync(D + "r3_pro.json"));
const ra = JSON.parse(fs.readFileSync(D + "r3_rate_a.json")), rb = JSON.parse(fs.readFileSync(D + "r3_rate_b.json")), anchors = JSON.parse(fs.readFileSync(D + "r3_anchors.json"));
const oldDes = id => F.des[id] ?? F.fixDes[id];
// align round-3 scale to the panel with the anchors (mean shift)
const shift = anchors.reduce((s, id) => s + oldDes(id) - (ra[id] + rb[id]) / 2, 0) / anchors.length;
const m = k => (ra[k] + rb[k]) / 2 + shift;
const newIds = new Set(F.items.map(x => x.id)), log = { accepted: 0, kept: 0 }, rows = [];
fx.forEach(x => {
  const it = F.items.find(y => y.id === x.id);
  if (typeof x.text === "string") {
    const nv = m(x.id), ov = oldDes(x.id), better = Math.abs(nv - 3.3) < Math.abs(ov - 3.3) - 0.05;
    rows.push([x.id, "st", ov.toFixed(2), nv.toFixed(2), better]);
    if (!better) { log.kept++; return; } log.accepted++;
    if (newIds.has(x.id)) { it.t = x.text; F.des[x.id] = +nv.toFixed(2); } else { F.fix[x.id] = x.text; F.fixDes[x.id] = +nv.toFixed(2); }
  } else if (x.text.a) {
    const a = m(x.id + "|a"), b = m(x.id + "|b"), og = F.desBip[x.id][0] - F.desBip[x.id][1], better = Math.abs(a - b) < Math.abs(og) - 0.1;
    rows.push([x.id, "bip", og.toFixed(2), (a - b).toFixed(2), better]);
    if (!better) { log.kept++; return; } log.accepted++;
    if (newIds.has(x.id)) { it.a = x.text.a; it.b = x.text.b; } else F.fix[x.id] = x.text;
    F.desBip[x.id] = [+a.toFixed(2), +b.toFixed(2)];
  } else {
    const e = m(x.id + "|E"), i = m(x.id + "|I"), og = F.desEI[x.id][0] - F.desEI[x.id][1], better = Math.abs(e - i) < Math.abs(og) - 0.1;
    rows.push([x.id, "ei", og.toFixed(2), (e - i).toFixed(2), better]);
    if (!better) { log.kept++; return; } log.accepted++;
    if (newIds.has(x.id)) { it.E = x.text.E; it.I = x.text.I; } else F.fix[x.id] = x.text;
    F.desEI[x.id] = [+e.toFixed(2), +i.toFixed(2)];
  }
});
fs.writeFileSync("r11/final.json", JSON.stringify(F));
fs.writeFileSync(D + "r3_result.json", JSON.stringify(rows));
const anc = anchors.map(id => [oldDes(id), (ra[id] + rb[id]) / 2]), mx = anc.reduce((s, v) => s + v[0], 0) / anc.length, my = anc.reduce((s, v) => s + v[1], 0) / anc.length;
let sxy = 0, sxx = 0, syy = 0; anc.forEach(([x, y]) => { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; syy += (y - my) ** 2; });
console.log("anchor shift", shift.toFixed(2), "anchor r", (sxy / Math.sqrt(sxx * syy)).toFixed(2), JSON.stringify(log));
rows.forEach(r => console.log(r.join(" ")));
