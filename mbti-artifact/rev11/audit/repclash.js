const A = require(require("path").resolve(process.argv[2]));
let seed = 99; const R = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const CTX = A.CTX_ALL; let fall = 0, clashIns = 0, tot = 0, avoidable = 0, dropClash = 0, drops = 0, endPos=0;
for (let k = 0; k < 600; k++) {
  const L = A.LENS[k % 4], n = 1 + (k % 5) + (L > 64 ? 1 : 0), chosen = [];
  while (chosen.length < n) { const c = CTX[Math.floor(R() * CTX.length)]; if (chosen.indexOf(c) < 0) chosen.push(c); }
  const sd = "rc" + k, sur = A.pickSurprise(sd, chosen, A.surCount(n, L)), info = { chosen, sur, dropped: [] };
  const set = A.buildSet(sd, chosen, L, sur), answers = set.map(() => null); let reps = 0;
  while (true) {
    const i = answers.indexOf(null); if (i < 0) break;
    if (R() < 0.15 && reps < 24) {
      answers[i] = "na"; const r = A.replacement(set, i, sd, info, reps + 1); tot++;
      if (r) {
        const before = r.pos - 1, after = r.pos;
        const c = A.clash(set[before], r.item) || A.clash(r.item, set[after]);
        if (r.pos === set.length) endPos++;
        set.splice(r.pos, 0, r.item); answers.splice(r.pos, 0, null); reps++;
        if (c) { clashIns++;
          // was there any clash-free slot in [i+2, len]?
          let ok = false; for (let p = i + 2; p <= set.length - 1; p++) { const s2 = set.slice(); s2.splice(set.indexOf(r.item),1); if (!A.clash(s2[p-1], r.item) && !A.clash(r.item, s2[p])) { ok = true; break; } }
          if (ok) avoidable++;
        }
      }
      continue;
    }
    answers[i] = 1;
    if (k % 3 === 0 && i === 20) { const before = []; for (let j=1;j<set.length;j++) before.push(A.clash(set[j-1],set[j])); A.dropTopic(set, answers, chosen[0], sd, info); info.dropped.push(chosen[0]); drops++; for (let j=1;j<set.length;j++) if (A.clash(set[j-1],set[j]) && !before[j-1]) dropClash++; }
  }
}
console.log({ tot, clashIns, avoidable, endPos, drops, dropClash });
