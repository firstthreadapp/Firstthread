// Generate a resume code (r1.) replaying a deterministic run; mirrors UI logic. usage: node tape.js app seed chips L naCtx naRate doDrop
const A = require(process.argv[2]);
const [seed, chipsS, Ls, naCtx, naRateS, doDropS] = process.argv.slice(3);
const L = +Ls, naRate = +(naRateS || 0.1), doDrop = doDropS === "1";
const CF = { f: "l" }, topicOf = c => CF[c] || c, members = t => [topicOf(t)].concat(Object.keys(CF).filter(k => CF[k] === topicOf(t)));
const chosen = A.CTX_ALL.filter(c => CF[c] ? chipsS.includes(CF[c]) : chipsS.includes(c));
const sn = A.surCount(chosen.length, L), sur = sn ? A.pickSurprise(seed, chosen, sn) : [];
let set = A.buildSet(seed, chosen, L, sur), answers = set.map(() => null), reps = 0, usedDrop = [], naTopic = {}, mainN = 0, tape = [];
function rng(s) { let h = 2166136261; for (const ch of s) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 1e6) / 1e6; }; }
const tag = `${seed}|${chosen.join("")}|${L}`, r = rng(tag + "|ans"); let didDrop = false;
const info = () => ({ chosen, sur, dropped: usedDrop }), fo = () => answers.indexOf(null);
for (let step = 0; step < 400; step++) {
  const i = fo(); if (i < 0) break; const q = set[i];
  let v = [2, 1, 0, -1, -2][Math.floor(r() * 5)];
  if (r() < naRate || (naCtx && naCtx !== "-" && topicOf(q.c) === naCtx)) v = "na";
  answers[i] = v; tape.push(v === "na" ? "n" : String(v + 2));
  if (v === "na") {
    let topic = null;
    if (!q.ph && !q.ei && q.c && q.c !== "k" && q.c !== "o") { topic = topicOf(q.c); naTopic[topic] = (naTopic[topic] || 0) + 1; }
    if (!q.ph && reps < 24) { const rp = A.replacement(set, i, seed, info(), reps + 1); if (rp) { set.splice(rp.pos, 0, rp.item); answers.splice(rp.pos, 0, null); reps++; } }
    const prompt = topic && naTopic[topic] === 2 && !usedDrop.includes(topic) && set.some((x, k) => answers[k] === null && !x.ei && !x.ph && x.c === topic);
    if (prompt && doDrop && !didDrop) { A.dropTopic(set, answers, topic, seed, info()); usedDrop.push(...members(topic)); didDrop = true; tape.push("D" + topic); }
  }
  if (!mainN && fo() < 0) { const pre0 = A.functionScores(set, answers); const pr = A.hiddenFor(pre0) ? [] : A.buildProbes(set, answers, seed, info()); mainN = set.length; set = set.concat(pr); answers = answers.concat(pr.map(() => null)); }
}
function b64u(s) { return Buffer.from(s, "utf8").toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function chk(s) { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 1296; return ("0" + h.toString(36)).slice(-2); }
const body = "r1." + (12).toString(36) + "." + b64u(seed) + "." + A.LENS.indexOf(L) + chosen.join("") + "." + tape.join("");
const gaps = A.contextGaps(set.slice(0, mainN), answers.slice(0, mainN), 4, 1.0), ag = A.chosenByCtx(set.slice(0, mainN), answers.slice(0, mainN), gaps.map(g => g.c));
console.log(JSON.stringify({ code: body + "." + chk(body), chosen, sur, usedDrop, n: set.length, mainN, gaps: gaps.map(g => g.c), ag: ag.map(g => g.c), lastQ: set[set.length - 1].ta }));
