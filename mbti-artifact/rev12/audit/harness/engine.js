// Engine-level audit harness for rev12. Replicates UI closure logic (startRun/applyAnswer/closeMain/drop) from index.app.js.
const A = require(process.argv[2] || "../r12/index.app.js");
const SEEDS = +(process.argv[3] || 60);
const RET = { BTiFey1: 1 };
const CTX_FOLLOW = { f: "l" };
function topicOf(c) { return CTX_FOLLOW[c] || c; }
function topicMembers(t) { t = topicOf(t); return [t].concat(Object.keys(CTX_FOLLOW).filter(k => CTX_FOLLOW[k] === t)); }
function uiList(chips) { return A.CTX_ALL.filter(c => CTX_FOLLOW[c] ? chips.includes(CTX_FOLLOW[c]) : chips.includes(c)); }
function rng(s) { let h = 2166136261; for (const ch of s) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 1e6) / 1e6; }; }
const issues = {}; function bad(k, d) { (issues[k] = issues[k] || []).length < 400 && issues[k].push(d); issues[k].n = (issues[k].n || 0) + 1; }
function ids(q) { return q.mfc ? [q.id, q.ida, q.idb] : (q.h2h ? [q.id] : [q.id]); }
function checkSet(set, tag, allowCtx) {
  const seen = {};
  set.forEach((q, i) => {
    if (!q) { bad("null item", tag); return; }
    if (q.ta === undefined || q.tb === undefined || /undefined|NaN/.test(q.ta + q.tb)) bad("undefined text", tag + " " + q.id);
    if (RET[q.id]) bad("RETIRED present", tag + " " + q.id + " @" + i + (q.ph ? " ph2" : ""));
    const base = q.mfc ? [q.ida, q.idb] : [q.id];
    base.forEach(id => { if (seen[id]) bad("duplicate item", tag + " " + id); seen[id] = 1; });
    if (allowCtx && q.c && !q.ph && !q.ei && q.c !== "k" && q.c !== "o" && allowCtx.indexOf(q.c) < 0) bad("item from unselected ctx", tag + " " + q.c + " " + q.id);
  });
}
function run(seed, chips, L, opts) {
  const chosen = uiList(chips);
  const S = { seed, chosen, L };
  const sn = A.surCount(chosen.length, L);
  const sur = sn ? A.pickSurprise(seed, chosen, sn) : [];
  if (sur.includes("f") && !sur.includes("l")) bad("surprise offers f without l", seed + " " + chips);
  if (sur.some(c => chosen.includes(c))) bad("surprise duplicates chosen", seed + chips + sur);
  let set = A.buildSet(seed, chosen, L, sur);
  const tag = `${seed}|${chips.join("")}|${L}`;
  if (!A.plan(chosen, L).ok) return { skipped: true };
  if (set.length !== L) { bad("wrong length / empty", tag + " len=" + set.length + " sur=" + sur.join("")); return {}; }
  checkSet(set, tag, chosen.concat(sur));
  if (opts && opts.full) {
    let answers = set.map(() => null), reps = 0, usedDrop = [], naTopic = {}, noAsk = [], mainN = 0;
    const info = () => ({ chosen, sur, dropped: usedDrop });
    const r = rng(tag + "|ans");
    let didDrop = false;
    const firstOpen = () => answers.indexOf(null);
    for (let step = 0; step < 400; step++) {
      const i = firstOpen(); if (i < 0) break;
      const q = set[i];
      let v = [2, 1, 0, -1, -2][Math.floor(r() * 5)];
      const wantNa = r() < (opts.naRate || 0.12) || (opts.naCtx && topicOf(q.c) === opts.naCtx);
      if (wantNa) v = "na";
      answers[i] = v;
      if (v === "na") {
        let topic = null;
        if (!q.ph && !q.ei && q.c && q.c !== "k" && q.c !== "o") { topic = topicOf(q.c); naTopic[topic] = (naTopic[topic] || 0) + 1; }
        if (!q.ph && reps < 24) {
          const rp = A.replacement(set, i, seed, info(), reps + 1);
          if (rp) { set.splice(rp.pos, 0, rp.item); answers.splice(rp.pos, 0, null); reps++; }
        }
        const prompt = topic && naTopic[topic] === 2 && !usedDrop.includes(topic) && !noAsk.includes(topic) && set.some((x, k) => answers[k] === null && !x.ei && !x.ph && topicOf(x.c) === topic);
        // detect missed prompt for merged members (f items remain but no l items)
        if (topic && naTopic[topic] === 2 && !usedDrop.includes(topic) && !prompt && set.some((x, k) => answers[k] === null && !x.ei && !x.ph && topicMembers(topic).includes(x.c))) bad("drop prompt suppressed: only follower items remain", tag + " topic=" + topic);
        if (prompt && opts.doDrop && !didDrop) {
          A.dropTopic(set, answers, topic, seed, info()); usedDrop.push(...topicMembers(topic)); didDrop = true;
          const left = set.filter((x, k) => answers[k] === null && !x.ph && topicMembers(topic).includes(x.c));
          if (left.length) bad("items of dropped topic remain", tag + " " + topic + " n=" + left.length + " " + left.map(x => x.c).join(""));
        }
      }
      if (!mainN && firstOpen() < 0) {
        const pre0 = A.functionScores(set, answers);
        const probes = A.hiddenFor(pre0) ? [] : A.buildProbes(set, answers, seed, info());
        mainN = set.length;
        set = set.concat(probes); answers = answers.concat(probes.map(() => null));
        probes.forEach(p => { if (usedDrop.includes(p.c)) bad("probe from dropped ctx", tag + " " + p.c + " " + p.id); });
      }
    }
    checkSet(set, tag + "|final", null);
    // result-side helpers
    const gaps = A.contextGaps(set.slice(0, mainN), answers.slice(0, mainN), 4, 1.0);
    const gapCtx = gaps.map(g => g.c);
    const ag = A.chosenByCtx(set.slice(0, mainN), answers.slice(0, mainN), gapCtx);
    const headings = gaps.map(g => A.CTX_NAME[g.c]).concat(ag.map(g => A.CTX_NAME[g.c]));
    const dupH = headings.filter((h, i) => headings.indexOf(h) !== i);
    if (dupH.length) bad("duplicate context heading in result", tag + " gaps=" + gapCtx.join("") + " ag=" + ag.map(g => g.c).join("") + " dup=" + dupH.join(","));
    const fs = A.functionScores(set, answers); const rank = A.rankTypes(fs.c, fs.ei);
    if (rank.some(x => !isFinite(x.score))) bad("NaN score", tag);
    let V; try { V = A.verify(set, answers, mainN); } catch (e) { bad("verify crash", tag + " " + e.message); }
    return { set, answers, mainN, didDrop, reps };
  }
  return { set };
}
const lens = A.LENS;
const ctxChips = A.CTX_ALL.filter(c => !CTX_FOLLOW[c]);
let built = 0, skipped = 0;
// 1) every chip alone, all lengths
for (const c of ctxChips) for (const L of lens) for (let s = 0; s < SEEDS; s++) { const r = run("s" + s, [c], L); r.skipped ? skipped++ : built++; }
// 2) random combos
const R = rng("combos");
for (let k = 0; k < SEEDS * 20; k++) {
  const n = 2 + Math.floor(R() * 4); const pick = [];
  while (pick.length < n) { const c = ctxChips[Math.floor(R() * ctxChips.length)]; if (!pick.includes(c)) pick.push(c); }
  if (k % 3 === 0 && !pick.includes("c")) pick[0] = "c"; if (k % 3 === 1 && !pick.includes("e")) pick[0] = "e";
  for (const L of lens) { const r = run("m" + k, pick, L); r.skipped ? skipped++ : built++; }
}
// 3) full runs (answers, na, replacements, drop, probes) with c, e, l, y
let full = 0, drops = 0;
const combos = [["l"], ["c"], ["e"], ["y"], ["l", "c"], ["l", "e"], ["c", "e"], ["l", "c", "e"], ["y", "l"], ["y", "c", "e", "l"], ["w", "l"], ["i", "c"]];
for (const ch of combos) for (const L of lens) for (let s = 0; s < Math.max(10, SEEDS / 3); s++) {
  const naCtx = s % 2 ? "l" : (s % 3 ? ch[0] : null);
  const r = run("f" + s, ch, L, { full: true, doDrop: true, naRate: 0.1, naCtx: s % 4 === 0 ? null : naCtx });
  if (r.set) { full++; if (r.didDrop) drops++; }
}
console.log(JSON.stringify({ built, skipped, full, drops, issues: Object.fromEntries(Object.entries(issues).map(([k, v]) => [k, { n: v.n, ex: v.slice(0, 400) }])) }, null, 1));
