// Generate many finished runs in node (mirrors the page's replay logic), inject into localStorage, render result page, scan text
const GL=[]; process.on("exit",()=>{require("fs").writeFileSync("r12/cal/gaplines.json",JSON.stringify(GL,null,1));});
const A = require(path0 = require("path").resolve(process.argv[2].replace(/index\.html$/, "index.app.js")));
const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const path = require("path");
const URL = "file://" + path.resolve(process.argv[2]);
const N = +(process.argv[3] || 60);
let seed = 31337; const R = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const g = () => { let u = 0; while (!u) u = R(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * R()); };
const codes = Object.keys(A.STACKS), CTX = A.CTX_ALL;
function sim(k) {
  const code = codes[k % 16], st = A.stackOf(code), s = {}; A.FUNCS.forEach(f => s[f] = 0.4 * g()); s[st[0]] += 1.2; s[st[1]] += 0.8; s[st[3]] -= 0.5;
  const style = k % 10 === 7 ? "mid" : (k % 10 === 8 ? "side" : (k % 10 === 9 ? "p2side" : "normal"));
  const e = (code[0] === "E" ? 1 : -1) * (0.2 + R());
  const ans = (q, ph2) => {
    if (style === "mid") return R() < 0.85 ? 0 : 1;
    if (style === "side" || (style === "p2side" && ph2)) return R() < 0.97 ? 2 : 1;
    let d = q.ei ? (q.fa === "E" ? e : -e) : (s[q.fa] - s[q.fb]); d += 0.9 * g();
    return d > 1 ? 2 : d > 0.3 ? 1 : d > -0.3 ? 0 : d > -1 ? -1 : -2;
  };
  const n = 1 + Math.floor(R() * 4), chosen = []; while (chosen.length < n) { const c = CTX[Math.floor(R() * CTX.length)]; if (chosen.indexOf(c) < 0) chosen.push(c); }
  if (k % 4 === 0 && chosen.indexOf("x") < 0) chosen[0] = "x";
  const ch = A.CTX_ALL.filter(c => chosen.indexOf(c) >= 0);
  const L = A.availableLens(ch)[Math.floor(R() * A.availableLens(ch).length)], sd = "res" + k;
  const sur = A.pickSurprise(sd, ch, A.surCount(ch.length, L));
  let set = A.buildSet(sd, ch, L, sur), answers = set.map(() => null), tape = [], reps = 0, dropped = [], naTopic = {}, mainN = 0;
  const info = () => ({ chosen: ch, sur, dropped });
  const first = () => answers.indexOf(null);
  const wantDrop = k % 5 === 2 ? ch[0] : null;
  while (true) {
    const i = first(); if (i < 0) break;
    const q = set[i];
    let v = ans(q, !!mainN);
    if (!mainN && R() < 0.05) v = "na";
    if (!mainN && wantDrop && q.c === wantDrop && (naTopic[wantDrop] || 0) < 2) v = "na";
    tape.push(v === "na" ? "n" : String(v + 2)); answers[i] = v;
    if (v === "na") {
      if (!q.ph && !q.ei && q.c && q.c !== "k" && q.c !== "o") naTopic[q.c] = (naTopic[q.c] || 0) + 1;
      if (!q.ph && reps < 24) { const r = A.replacement(set, i, sd, info(), reps + 1); if (r) { set.splice(r.pos, 0, r.item); answers.splice(r.pos, 0, null); reps++; } }
      if (wantDrop && q.c === wantDrop && naTopic[wantDrop] === 2 && dropped.indexOf(wantDrop) < 0) { A.dropTopic(set, answers, wantDrop, sd, info()); dropped.push(wantDrop); tape.push("D" + wantDrop); }
    }
    if (!mainN && first() < 0) {
      const pre = A.functionScores(set, answers); const pr = A.hiddenFor(pre) ? [] : A.buildProbes(set, answers, sd, info());
      mainN = set.length; set = set.concat(pr); answers = answers.concat(pr.map(() => null));
    }
  }
  return { code, style, seed: sd, chosen: ch, L, tape, best: k % 3 === 0 ? codes[(k * 7) % 16] : (k % 3 === 1 ? "none" : null) };
}
(async () => {
  const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const bad = [], wide = [], errs = [], summary = { hidden: 0, statuses: {}, rendered: 0, notResult: 0 };
  for (let k = 0; k < N; k++) {
    const r = sim(k);
    const p = await ctx.newPage();
    p.on("pageerror", e => errs.push(k + ": " + e.message));
    p.on("console", m => { if (m.type() === "error" && !/ERR_FILE_NOT_FOUND|net::|Failed to load/.test(m.text())) errs.push(k + " console: " + m.text()); });
    await p.addInitScript(rec => { try { sessionStorage.clear(); sessionStorage.setItem("ft11_tabrun","run"+rec.seed); const m = {}; m["run" + rec.seed] = { v: 12, seed: rec.seed, chosen: rec.chosen, L: rec.L, tape: rec.tape, best: rec.best, cps: [20, 40, 60], ph: 3, at: Date.now(), beat: 0, tab: "zz" }; localStorage.setItem("ft11_runs", JSON.stringify(m)); } catch (e) {} }, r);
    await p.goto(URL); await p.waitForTimeout(120);
    const gl = await p.evaluate(() => [...document.querySelectorAll("li.w-mid")].map(x=>x.innerText).filter(t=>/สลับว่าอะไรเป็นหลัก|ทำไมไม่ใช่/.test(t))); GL.push(...gl); const o = await p.evaluate(() => {
      const app = document.getElementById("app");
      return { isResult: !!document.getElementById("again"), txt: app.innerText, sw: document.documentElement.scrollWidth, unclear: !!app.querySelector(".code.unclear"),
        status: ((app.querySelector(".result .note, .result .warn") || {}).textContent || "").slice(0, 40), cards: app.querySelectorAll("details.why").length,
        share: (document.getElementById("caption") || {}).textContent || "" };
    });
    if (!o.isResult) { summary.notResult++; bad.push(k + " not result: " + o.txt.slice(0, 80)); await p.close(); continue; }
    summary.rendered++; if (o.unclear) summary.hidden++;
    const st = /ยืนยันแล้ว:/.test(o.txt) ? "confirmed" : /ยังไม่ผ่านเกณฑ์ยืนยัน/.test(o.txt) ? "close" : /พลิกผล/.test(o.txt) ? "changed" : /รูปแบบที่เชื่อถือได้น้อย/.test(o.txt) ? "partial" : "none";
    summary.statuses[st] = (summary.statuses[st] || 0) + 1;
    const re = /undefined|NaN|\[object|Infinity|−0\.0(?!\d)|−0\.00|&lt;|&amp;|&quot;|<\/?(li|b|span|p|ul|div|small|q)\b|\bnull\b/g;
    const m = o.txt.match(re); if (m) [...new Set(m)].forEach(x => { const i = o.txt.indexOf(x); bad.push(k + " [" + r.style + "] '" + x + "' …" + o.txt.slice(Math.max(0, i - 70), i + 30).replace(/\s+/g, " ")); });
    if (!o.unclear && o.cards !== 3) bad.push(k + " cards=" + o.cards);
    if (o.sw > 390) wide.push(k + " sw=" + o.sw);
    // confirmed but also showing conflicting warnings
    if (st === "confirmed" && /สองส่วนนี้ชี้คนละทาง|อันดับ 1 ต่างกันระหว่างก่อนและหลัง/.test(o.txt)) bad.push(k + " confirmed+conflict-warning: " + (o.txt.match(/สองส่วนนี้ชี้คนละทาง[^\n]*|อันดับ 1 ต่างกันระหว่างก่อนและหลัง[^\n]*/) || [""])[0].slice(0, 90));
    if (st === "confirmed" && /ใกล้เคียง [A-Z]{4} \/ [A-Z]{4}/.test(o.share)) bad.push(k + " confirmed but share says 'ใกล้เคียง': " + o.share.slice(0, 50));
    if (k < 3) await p.screenshot({ path: "audit/res-" + k + ".png", fullPage: true });
    await p.close();
  }
  console.log(JSON.stringify({ summary, bad, wide, errs }, null, 1));
  await b.close();
})();
