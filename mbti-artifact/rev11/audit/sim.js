// usage: node tools/sim.js <app.js> [N per type] [noise]
const A = require(require("path").resolve(process.argv[2]));
const N = +(process.argv[3] || 20), NOISE = +(process.argv[4] || 0.7);
let seed = 12345; const R = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const gauss = () => { let u = 0, v = 0; while (!u) u = R(); v = R(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
const CTX = A.CTX_ALL;
function person(code) {
  const st = A.stackOf(code), s = {};
  A.FUNCS.forEach(f => s[f] = 0.15 * gauss());
  s[st[0]] += 1.2; s[st[1]] += 0.8; s[st[2]] += 0.15; s[st[3]] -= 0.5;
  return { s, e: (code[0] === "E" ? 0.9 : -0.9) + 0.3 * gauss() };
}
function ans(p, q) {
  if (!q.bip) throw "non-bip item " + q.id;
  let d = q.ei ? (q.fa === "E" ? p.e : -p.e) : (p.s[q.fa] - p.s[q.fb]);
  d += NOISE * gauss();
  return d > 1.0 ? 2 : d > 0.3 ? 1 : d > -0.3 ? 0 : d > -1.0 ? -1 : -2;
}
let tot = 0, hit1 = 0, hit3 = 0, hidden = 0, statuses = {}, lens = {}, fail = 0, expl = 0;
const codes = Object.keys(A.STACKS);
codes.forEach(code => {
  for (let k = 0; k < N; k++) {
    const nctx = 1 + Math.floor(R() * 4), chosen = [];
    while (chosen.length < nctx) { const c = CTX[Math.floor(R() * CTX.length)]; if (chosen.indexOf(c) < 0) chosen.push(c); }
    const L = A.LENS[Math.floor(R() * 4)], ok = A.plan(chosen, L).ok ? L : 64;
    const sur = A.pickSurprise("s" + k + code, chosen, A.surCount(chosen.length, ok));
    let set = A.buildSet("s" + k + code, chosen, ok, sur);
    if (!set.length) { fail++; continue; }
    const p = person(code); let answers = set.map(q => ans(p, q));
    const pre = A.functionScores(set, answers);
    const mainN = set.length;
    if (!A.hiddenFor(pre)) {
      const pr = A.buildProbes(set, answers, "s" + k, { chosen, sur, dropped: [] });
      set = set.concat(pr); answers = answers.concat(pr.map(q => ans(p, q)));
    } else hidden++;
    const V = A.verify(set, answers, mainN);
    const rank = V.show.rank.map(r => r.code);
    tot++; if (rank[0] === code) hit1++; if (rank.slice(0, 3).indexOf(code) >= 0) hit3++;
    statuses[V.status] = (statuses[V.status] || 0) + 1;
    lens[set.length] = (lens[set.length] || 0) + 1;
    if (A.explainType) { const S = { sc: V.show.sc, rank: V.show.rank, ei: V.ei }; [0, 1, 2].forEach(i => { const ex = A.explainType(V.show.rank[i].code, i, S, set, answers); if (ex.bullets.length >= 3) expl++; }); }
  }
});
console.log(JSON.stringify({ tot, top1: +(hit1 / tot).toFixed(3), top3: +(hit3 / tot).toFixed(3), hidden, fail, statuses, explainOK: expl + "/" + tot * 3 }));
