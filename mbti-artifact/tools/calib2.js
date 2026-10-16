// collects per-respondent records under a harsh, heterogeneous respondent model
const A = require(require("path").resolve(process.argv[2]));
const N = +(process.argv[3] || 800), OUT = process.argv[4];
let seed = 4242; const R = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const g = () => { let u = 0; while (!u) u = R(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * R()); };
const codes = Object.keys(A.STACKS), CTX = A.CTX_ALL;
const DB = A.DES_BIP || {}, DE = A.DES_EI_ALL || {};
function desGap(q) {                                                       // desirability(side ก-data fa) − desirability(side fb), 1–5 scale
  if (q.mfc || q.h2h) return A.desOf(q.ida || q.id.split(/[:+]/)[1]) - A.desOf(q.idb || q.id.split("+")[1]);
  if (q.ei) { const r = DE[q.id]; return r ? (q.fa === "E" ? r[0] - r[1] : r[1] - r[0]) : 0; }
  const r = DB[q.id]; return r ? (q.fa === q.pair.split("-")[0] ? r[0] - r[1] : r[1] - r[0]) : 0;
}
function person(code) {
  const st = A.stackOf(code), s = {}, amp = 0.35 + 1.0 * R();           // clarity of the profile varies a lot
  A.FUNCS.forEach(f => s[f] = 0.45 * g());                               // idiosyncratic function strengths
  s[st[0]] += 1.2 * amp; s[st[1]] += 0.8 * amp; s[st[3]] -= 0.5 * amp;
  const mid = R() < 0.3 ? 0.5 : 0.3;                                     // some people use "พอ ๆ กัน" a lot
  return { s, e: (code[0] === "E" ? 1 : -1) * (0.3 + 0.9 * R()) + 0.3 * g(), noise: 0.5 + 1.0 * R(), mid, gam: R() < 0.5 ? 1.5 * R() : 0 };
}
function ans(p, q) {
  let d = q.ei ? (q.fa === "E" ? p.e : -p.e) : (p.s[q.fa] - p.s[q.fb]);
  if (p.gam) d += p.gam * desGap(q);                                     // half the people lean toward the more desirable side, in proportion to its desirability gap
  d += p.noise * g();
  return d > 1 ? 2 : d > p.mid ? 1 : d > -p.mid ? 0 : d > -1 ? -1 : -2;
}
const recs = [];
for (let k = 0; k < N; k++) {
  const code = codes[k % 16], p = person(code);
  const chosen = []; const n = 1 + Math.floor(R() * 4); while (chosen.length < n) { const c = CTX[Math.floor(R() * CTX.length)]; if (chosen.indexOf(c) < 0) chosen.push(c); }
  const L = A.LENS[Math.floor(R() * 4)], LL = A.plan(chosen, L).ok ? L : 64, sd = "c" + k;
  const sur = A.pickSurprise(sd, chosen, A.surCount(chosen.length, LL));
  let set = A.buildSet(sd, chosen, LL, sur), a = set.map(q => ans(p, q)); const m = set.length;
  const pre = A.functionScores(set, a);
  if (!A.hiddenFor(pre)) { const pr = A.buildProbes(set, a, sd, { chosen, sur, dropped: [] }); set = set.concat(pr); a = a.concat(pr.map(q => ans(p, q))); }
  const V = A.verify(set, a, m);
  recs.push({ code, L: LL, lead: V.show.rank[0].code, top3: V.show.rank.slice(0, 3).map(r => r.code), status: V.status, flags: V.flags, ch: V.challenge ? { rate: V.challenge.fit.rate, inf: V.challenge.fit.inf, riv: V.challenge.rivalRate } : null, same1: V.same1, margin: V.show.rank[0].score - V.show.rank[1].score, p2bad: V.p2bad, hidden: A.hiddenFor(pre), probeN: V.probeN });
}
if (OUT) require("fs").writeFileSync(OUT, JSON.stringify(recs));
const acc = recs.filter(r => r.lead === r.code).length / recs.length, top3 = recs.filter(r => r.top3.indexOf(r.code) >= 0).length / recs.length;
const st = {}; recs.forEach(r => { st[r.status] = st[r.status] || { n: 0, ok: 0 }; st[r.status].n++; if (r.lead === r.code) st[r.status].ok++; });
console.log("N", recs.length, "top1", acc.toFixed(3), "top3", top3.toFixed(3));
Object.keys(st).forEach(k => console.log(" status", k, "n", st[k].n, "precision", (st[k].ok / st[k].n).toFixed(3)));
const fl = {}; recs.forEach(r => r.flags.forEach(f => fl[f] = (fl[f] || 0) + 1)); console.log(" flags", JSON.stringify(fl));
