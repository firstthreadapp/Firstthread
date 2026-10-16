// retest calibration: P(same top-1 on a second, independent set) vs top-1 margin of the first set
const A = require(require("path").resolve(process.argv[2]));
const N = +(process.argv[3] || 600);
let seed = 777; const R = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const g = () => { let u = 0; while (!u) u = R(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * R()); };
const codes = Object.keys(A.STACKS), CTX = A.CTX_ALL;
function person(code) { const st = A.stackOf(code), s = {}; const amp = 0.5 + R(); // varying clarity
  A.FUNCS.forEach(f => s[f] = 0.35 * g()); s[st[0]] += 1.2 * amp; s[st[1]] += 0.8 * amp; s[st[2]] += 0.15; s[st[3]] -= 0.5 * amp;
  return { s, e: (code[0] === "E" ? 0.8 : -0.8) * amp + 0.4 * g(), noise: 0.6 + 0.8 * R() }; }
function ans(p, q) { let d = q.ei ? (q.fa === "E" ? p.e : -p.e) : (p.s[q.fa] - p.s[q.fb]); d += p.noise * g(); return d > 1 ? 2 : d > .3 ? 1 : d > -.3 ? 0 : d > -1 ? -1 : -2; }
function run(p, sd) {
  const chosen = []; const n = 1 + Math.floor(R() * 3); while (chosen.length < n) { const c = CTX[Math.floor(R() * CTX.length)]; if (chosen.indexOf(c) < 0) chosen.push(c); }
  const L = 64, sur = A.pickSurprise(sd, chosen, A.surCount(chosen.length, L)); let set = A.buildSet(sd, chosen, L, sur), a = set.map(q => ans(p, q)); const m = set.length;
  const pr = A.buildProbes(set, a, sd, { chosen, sur, dropped: [] }); set = set.concat(pr); a = a.concat(pr.map(q => ans(p, q)));
  const V = A.verify(set, a, m); const rk = V.show.rank; return { top: rk[0].code, margin: rk[0].score - rk[1].score, as: V.show.a };
}
const bins = [0, 0.1, 0.2, 0.35, 0.5, 0.75, 1e9], st = bins.slice(1).map(() => ({ n: 0, same: 0, truth: 0 }));
for (let k = 0; k < N; k++) { const code = codes[k % 16], p = person(code); const r1 = run(p, "a" + k), r2 = run(p, "b" + k);
  const b = bins.findIndex((x, i) => r1.margin >= x && r1.margin < bins[i + 1]); st[b].n++; if (r1.top === r2.top) st[b].same++; if (r1.top === code) st[b].truth++; }
st.forEach((x, i) => console.log(`margin ${bins[i]}–${bins[i + 1]}: n=${x.n} sameOnRetest=${(x.same / x.n * 100).toFixed(0)}% matchesTrue=${(x.truth / x.n * 100).toFixed(0)}%`));
