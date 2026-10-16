// Structural audit of r11 engine: lengths, duplicates, adjacency, phase 2, replacement, drop topic, verify consistency
const A = require(require("path").resolve(process.argv[2]));
const N = +(process.argv[3] || 30);
let seed = 777; const R = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const g = () => { let u = 0; while (!u) u = R(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * R()); };
const CTX = A.CTX_ALL, codes = Object.keys(A.STACKS);
const out = { builds: 0, emptyBuild: [], wrongLen: [], nonBip: [], dupId: [], dupStmt: [], clashAvoidable: 0, clashTotal: 0, p2len: {}, p2dup: [], p2nonBip: [], repNonBip: [], repDup: [], repNull: 0, repCalls: 0, dropNonBip: [], dropDup: [], dropLeft: [], verifyIncons: [], newCtxUsed: { x: 0, f: 0, q: 0 }, crash: [] };
function stmtKeys(q) { if (q.mfc || q.h2h) return [q.ida || q.id.split(/[:+]/)[1], q.idb || q.id.split("+")[1]]; return [q.id]; }
function checkDup(set, tag, bucket) {
  const ids = {}, st = {};
  set.forEach((q, i) => {
    if (ids[q.id]) bucket.push(tag + " dup id " + q.id + " @" + i); ids[q.id] = 1;
    stmtKeys(q).forEach(k => { if (st[k]) bucket.push(tag + " dup stmt " + k + " @" + i); st[k] = 1; });
  });
}
function clashes(set) { let n = 0; for (let i = 1; i < set.length; i++) if (A.clash(set[i - 1], set[i])) n++; return n; }
function person(code) {
  const st = A.stackOf(code), s = {}; A.FUNCS.forEach(f => s[f] = 0.4 * g());
  s[st[0]] += 1.2; s[st[1]] += 0.8; s[st[3]] -= 0.5; return { s, e: (code[0] === "E" ? 1 : -1) * 0.8 };
}
function ans(p, q) { let d = q.ei ? (q.fa === "E" ? p.e : -p.e) : (p.s[q.fa] - p.s[q.fb]); d += 0.8 * g(); return d > 1 ? 2 : d > 0.3 ? 1 : d > -0.3 ? 0 : d > -1 ? -1 : -2; }
for (const L of A.LENS) {
  for (let nctx = 1; nctx <= CTX.length; nctx++) {
    for (let k = 0; k < (nctx <= 4 || nctx === CTX.length ? N : Math.ceil(N / 3)); k++) {
      const chosen = [];
      // force new contexts often
      if (k % 3 === 0) ["x", "f", "q"].slice(0, nctx).forEach(c => chosen.push(c));
      while (chosen.length < nctx) { const c = CTX[Math.floor(R() * CTX.length)]; if (chosen.indexOf(c) < 0) chosen.push(c); }
      if (!A.plan(chosen, L).ok) continue;
      const sd = "a" + L + "_" + nctx + "_" + k;
      try {
        const sur = A.pickSurprise(sd, chosen, A.surCount(chosen.length, L));
        let set = A.buildSet(sd, chosen, L, sur); out.builds++;
        if (!set.length) { out.emptyBuild.push(sd + " " + chosen.join("")); continue; }
        if (set.length !== L) out.wrongLen.push(sd + " len " + set.length);
        set.forEach(q => { if (!q.bip) out.nonBip.push(sd + " " + q.id); if ("xfq".indexOf(q.c) >= 0 && q.c) out.newCtxUsed[q.c]++; });
        checkDup(set, sd, out.dupId);
        const cl = clashes(set); out.clashTotal += cl; if (cl) out.clashAvoidable++;
        // simulate with some "na" answers -> replacement
        const info = { chosen, sur, dropped: [] };
        const p = person(codes[k % 16]);
        const answers = set.map(() => null);
        let reps = 0, i = 0;
        while (true) {
          i = answers.indexOf(null); if (i < 0) break;
          let v = ans(p, set[i]);
          if (R() < 0.06 && reps < 24) {
            v = "na"; answers[i] = v; out.repCalls++;
            const r = A.replacement(set, i, sd, info, reps + 1);
            if (r) { if (!r.item.bip) out.repNonBip.push(sd + " " + r.item.id); set.splice(r.pos, 0, r.item); answers.splice(r.pos, 0, null); reps++; } else out.repNull++;
            continue;
          }
          answers[i] = v;
          // topic drop at ~40%
          if (k % 4 === 1 && i === Math.floor(set.length * 0.4) && !info.dropped.length) {
            const topic = chosen[0];
            A.dropTopic(set, answers, topic, sd, info); info.dropped.push(topic);
            set.forEach((q, j) => { if (answers[j] === null && !q.bip) out.dropNonBip.push(sd + " " + q.id); if (answers[j] === null && q.c === topic) out.dropLeft.push(sd + " " + topic + " " + q.id); });
          }
        }
        checkDup(set, sd + "+rep", out.repDup); out.clashAfterRep = (out.clashAfterRep||0) + clashes(set);
        const mainN = set.length;
        const pre = A.functionScores(set, answers);
        if (!A.hiddenFor(pre)) {
          const pr = A.buildProbes(set, answers, sd, info);
          out.p2len[pr.length] = (out.p2len[pr.length] || 0) + 1;
          pr.forEach(q => { if (!q.bip) out.p2nonBip.push(sd + " " + q.id); });
          set = set.concat(pr); pr.forEach(q => answers.push(ans(p, q)));
          checkDup(set, sd + "+p2", out.p2dup); out.clashP2 = (out.clashP2||0) + clashes(pr); out.p2Runs=(out.p2Runs||0)+1;
        }
        const V = A.verify(set, answers, mainN);
        // consistency checks
        const lead = V.show.rank[0].code, ch = V.challenge;
        const chOKcalc = V.probeN > 0 && !V.p2bad && ch.fit.inf >= A.CH_T.min && ch.fit.rate >= A.CH_T.rate && ch.fit.rate - ch.rivalRate >= A.CH_T.gap && V.show.rank[0].score - V.show.rank[1].score >= A.CH_T.margin;
        if ((V.status === "confirmed") !== chOKcalc) out.verifyIncons.push(sd + " status " + V.status + " chOK " + chOKcalc);
        if (ch.lead !== lead) out.verifyIncons.push(sd + " challenge lead " + ch.lead + " != shown " + lead);
      } catch (e) { out.crash.push(sd + " " + chosen.join("") + " " + (e.stack || e).toString().split("\n").slice(0, 3).join(" | ")); }
    }
  }
}
const trunc = a => Array.isArray(a) ? { n: a.length, ex: a.slice(0, 5) } : a;
const o2 = {}; Object.keys(out).forEach(k => o2[k] = trunc(out[k]));
console.log(JSON.stringify(o2, null, 1));
