// Concurrency / storage audit
const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const path = require("path");
const URL = "file://" + path.resolve(process.argv[2]);
const R = {}; const errs = [];
const hook = (p, t) => { p.on("pageerror", e => errs.push(t + ": " + e.stack)); p.on("console", m => { if (m.type() === "error" && !/ERR_FILE_NOT_FOUND|net::|Failed to load/.test(m.text())) errs.push(t + " console: " + m.text()); }); };
async function start(p, seed) { await p.goto(URL); await p.waitForTimeout(150); if (await p.$("#drop")) await p.click("#drop"); await p.fill("#seed", seed); await p.check("#ack"); await p.click("#start"); }
async function answer(p, n, v) { for (let i = 0; i < n; i++) { if (await p.$("#pgo")) await p.click("#pgo"); await p.click(`.opt[data-v="${v}"]`); await p.waitForTimeout(260); } }
const runs = p => p.evaluate(() => { const m = JSON.parse(localStorage.getItem("ft11_runs") || "{}"); return Object.keys(m).map(k => ({ k, seed: m[k].seed, n: m[k].tape.length, tab: m[k].tab })); });
const toast = p => p.evaluate(() => { const t = document.getElementById("toast"); return t ? t.textContent : ""; });
const count = p => p.evaluate(() => (document.querySelector(".count") || {}).textContent || "");
const tabrun = p => p.evaluate(() => sessionStorage.getItem("ft11_tabrun"));
async function land(p) { await p.waitForTimeout(250); if (await p.$("#go")) { await p.click("#go"); await p.waitForTimeout(150); return "resume"; } return (await count(p)); }
(async () => {
  const b = await chromium.launch();
  // (a) reload mid-run
  try {
    const ctx = await b.newContext(); const A = await ctx.newPage(); hook(A, "a");
    await start(A, "reloadme"); await answer(A, 5, 2);
    const id0 = await tabrun(A), r0 = await runs(A);
    await A.reload(); const l = await land(A); await A.waitForTimeout(100);
    const t1 = await toast(A); await answer(A, 1, 1);
    const id1 = await tabrun(A), r1 = await runs(A);
    R.a_reload = { landing: l, countAfter: await count(A), toast: t1, runIdChanged: id0 !== id1, runsBefore: r0.length, runsAfter: r1.length, runs: r1.map(x => x.seed + ":" + x.n) };
    // repeated reloads -> eviction of another saved run
    const P = await ctx.newPage(); hook(P, "a2"); await start(P, "paused-other"); await answer(P, 4, -1); await P.close();
    for (let i = 0; i < 6; i++) { await A.reload(); await land(A); await answer(A, 1, 1); }
    const rr = await runs(A);
    R.a_evict = { runs: rr.map(x => x.seed + ":" + x.n), pausedOtherSurvives: rr.some(x => x.seed === "paused-other") };
    await ctx.close();
  } catch (e) { R.a_err = e.stack; }

  // (b) two tabs, (c) duplicated tab, (g) finish in one tab while other continues, (h) wipe in one tab
  try {
    const ctx = await b.newContext(); const A = await ctx.newPage(); hook(A, "b-A");
    await start(A, "tabA"); await answer(A, 3, 2);
    const B = await ctx.newPage(); hook(B, "b-B"); await B.goto(URL); await B.waitForTimeout(200);
    R.b_landing = await count(B);
    await B.fill("#seed", "tabB"); await B.check("#ack"); await B.click("#start"); await answer(B, 2, -2);
    await answer(A, 2, 1);
    R.b_runs = (await runs(A)).map(x => x.seed + ":" + x.n);
    R.b_toastA = await toast(A); R.b_toastB = await toast(B);
    // duplicate A
    const aRun = await tabrun(A);
    const C = await ctx.newPage(); hook(C, "b-C");
    await C.addInitScript(id => { try { if (!sessionStorage.getItem("ft11_tabrun")) sessionStorage.setItem("ft11_tabrun", id); } catch (e) {} }, aRun);
    await C.goto(URL); const cl = await land(C);
    R.c_landing = cl + " / " + (await count(C)) + " toast=" + (await toast(C));
    await answer(C, 1, -1); await answer(A, 1, 2);
    const cRun = await tabrun(C);
    R.c = { aRun, cRun, forked: aRun !== cRun, runs: (await runs(A)).map(x => x.seed + ":" + x.n + ":" + x.k.slice(-4)) };
    // A finishes phase 1 (64) + phase 2 while C continues
    for (let i = 0; i < 160; i++) { if (await A.$("#go2")) { await A.click("#go2"); continue; } if (await A.$("#pgo")) { await A.click("#pgo"); continue; } if (!(await A.$(".opt"))) break; await A.click(`.opt[data-v="${[2, 1, -1, -2][i % 4]}"]`); await A.waitForTimeout(320); }
    R.g_Afinished = !!(await A.$("#again"));
    await answer(C, 2, 1);
    R.g_runs = (await runs(C)).map(x => x.seed + ":" + x.n + ":" + x.k.slice(-4));
    R.g_Ccount = await count(C);
    // wipe in A (start new) -> other runs intact?
    await A.click("#again"); await A.waitForTimeout(200);
    R.h_afterWipe = (await runs(C)).map(x => x.seed + ":" + x.n + ":" + x.k.slice(-4));
    // C wipes via pause -> pdel while B live
    await C.click("#pause"); await C.click("#pdel"); await C.waitForTimeout(200);
    R.h_afterCdel = (await runs(B)).map(x => x.seed + ":" + x.n + ":" + x.k.slice(-4));
    await answer(B, 1, 1);
    R.h_Bstill = await count(B) + " toast=" + (await toast(B));
    // new tab now: what is offered? (A's tab is on setup; B live)
    const D = await ctx.newPage(); hook(D, "b-D"); await D.goto(URL); await D.waitForTimeout(250);
    R.h_newTabLanding = await D.evaluate(() => document.getElementById("app").innerText.slice(0, 120).replace(/\s+/g, " "));
    await ctx.close();
  } catch (e) { R.b_err = e.stack; }

  // (d) resume link opened twice
  try {
    const ctx = await b.newContext(); const A = await ctx.newPage(); hook(A, "d");
    await start(A, "linktwice"); await answer(A, 6, 1); await A.click("#pause");
    const code = (await A.textContent("#pcode")).replace(/\s+/g, ""); await A.close();
    const X = await ctx.newPage(), Y = await ctx.newPage(); hook(X, "dX"); hook(Y, "dY");
    await X.goto(URL + "#" + code); await land(X); await Y.goto(URL + "#" + code); await land(Y);
    await answer(X, 2, 2); await answer(Y, 3, -2); await answer(X, 1, 2);
    R.d = { X: await count(X), Y: await count(Y), runs: (await runs(X)).map(x => x.seed + ":" + x.n), toastX: await toast(X), toastY: await toast(Y) };
    await ctx.close();
  } catch (e) { R.d_err = e.stack; }

  // (e) storage blocked, (f) quota exceeded
  try {
    const ctx = await b.newContext(); const D = await ctx.newPage(); hook(D, "e");
    await D.addInitScript(() => { Object.defineProperty(window, "localStorage", { get() { throw new Error("blocked"); } }); Object.defineProperty(window, "sessionStorage", { get() { throw new Error("blocked"); } }); });
    await start(D, "nostore"); await answer(D, 3, 1); await D.click("#pause");
    R.e = { count: await count(D), code: !!(await D.textContent("#pcode")) };
    await D.click("#pgo"); await answer(D, 1, 2);
    await D.reload(); await D.waitForTimeout(200);
    R.e.afterReload = await count(D);
    const F = await (await b.newContext()).newPage(); hook(F, "f");
    await F.addInitScript(() => { const o = Storage.prototype.setItem; Storage.prototype.setItem = function (k, v) { if (this === window.localStorage) { const e = new DOMException("quota", "QuotaExceededError"); throw e; } return o.call(this, k, v); }; });
    await start(F, "quota"); await answer(F, 3, 1);
    R.f = { count: await count(F), toast: await toast(F), anyNotice: await F.evaluate(() => /บันทึกไม่ได้|เต็ม/.test(document.body.innerText)) };
    await F.reload(); await F.waitForTimeout(200);
    R.f.afterReload = await count(F);
  } catch (e) { R.ef_err = e.stack; }

  // (i) storage event with a corrupted map / other-tab clear
  try {
    const ctx = await b.newContext(); const A = await ctx.newPage(); hook(A, "i");
    await start(A, "corrupt"); await answer(A, 2, 1);
    const B = await ctx.newPage(); hook(B, "iB"); await B.goto(URL);
    await B.evaluate(() => localStorage.setItem("ft11_runs", "[1,2"));
    await answer(A, 1, 1);
    R.i_corrupt = { A: await count(A), runs: (await runs(A).catch(() => "parse fail")) };
    await B.evaluate(() => localStorage.clear()); await A.waitForTimeout(100); await answer(A, 1, 1);
    R.i_clear = (await runs(A)).map(x => x.seed + ":" + x.n);
    await ctx.close();
  } catch (e) { R.i_err = e.stack; }
  R.errors = errs;
  console.log(JSON.stringify(R, null, 1));
  await b.close();
})();
