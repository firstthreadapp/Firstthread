// Follow-ups: wipe after reload, truncated/future links, phase-2 back, pause at intro -> link -> intro, checkpoint
const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const path = require("path");
const URL = "file://" + path.resolve(process.argv[2]);
const R = {}; const errs = [];
const hook = (p, t) => { p.on("pageerror", e => errs.push(t + ": " + e.message)); };
async function start(p, seed, L) { await p.goto(URL); await p.waitForTimeout(150); if (await p.$("#drop")) await p.click("#drop"); await p.fill("#seed", seed); if (L) await p.check(`input[name="len"][value="${L}"]`); await p.check("#ack"); await p.click("#start"); }
async function step(p, v) { if (await p.$("#pgo")) { await p.click("#pgo"); await p.waitForTimeout(100); } await p.click(`.opt[data-v="${v}"]`); await p.waitForTimeout(300); }
const runs = p => p.evaluate(() => { const m = JSON.parse(localStorage.getItem("ft11_runs") || "{}"); return Object.keys(m).map(k => m[k].seed + ":" + m[k].tape.length); });
const count = p => p.evaluate(() => (document.querySelector(".count") || {}).textContent || "");
const ageAll = p => p.evaluate(() => { const m = JSON.parse(localStorage.getItem("ft11_runs") || "{}"); Object.keys(m).forEach(k => m[k].beat = Date.now() - 120000); localStorage.setItem("ft11_runs", JSON.stringify(m)); });
async function finish(p) { for (let i = 0; i < 200; i++) { if (await p.$("#go2")) { await p.click("#go2"); await p.waitForTimeout(100); continue; } if (await p.$("#pgo")) { await p.click("#pgo"); await p.waitForTimeout(100); continue; } if (!(await p.$(".opt"))) break; await p.click(`.opt[data-v="${[2, 1, -1, -2, 0][i % 5]}"]`); await p.waitForTimeout(300); } }
(async () => {
  const b = await chromium.launch();
  // 1) finish -> reload -> "again" (wipe) -> new visit later
  try {
    const ctx = await b.newContext(); const A = await ctx.newPage(); hook(A, "1");
    await start(A, "wipeafterreload", 56); await finish(A);
    R.w_finished = !!(await A.$("#again"));
    await A.reload(); await A.waitForTimeout(300);
    R.w_reloadScreen = !!(await A.$("#again")) ? "result" : await count(A);
    await A.click("#again"); await A.waitForTimeout(200);
    R.w_runsAfterAgain = await runs(A);
    await A.close(); const B = await ctx.newPage(); hook(B, "1b");
    await B.goto(URL); await B.waitForTimeout(100); await ageAll(B); await B.reload(); await B.waitForTimeout(300);
    R.w_nextVisit = (await B.$("#again")) ? "OLD RESULT SHOWN" : await count(B);
    await ctx.close();
  } catch (e) { R.w_err = e.stack; }
  // 2) mid-run reload -> pdel -> later visit
  try {
    const ctx = await b.newContext(); const A = await ctx.newPage(); hook(A, "2");
    await start(A, "pdelafterreload", 64); for (let i = 0; i < 5; i++) await step(A, 1);
    await A.reload(); await A.waitForTimeout(200); if (await A.$("#go")) await A.click("#go");
    await step(A, 2); await A.click("#pause"); await A.click("#pdel"); await A.waitForTimeout(200);
    R.p_runsAfterDel = await runs(A);
    await A.close(); const B = await ctx.newPage(); await B.goto(URL); await ageAll(B); await B.reload(); await B.waitForTimeout(300);
    R.p_nextVisit = await B.evaluate(() => document.getElementById("app").innerText.slice(0, 140).replace(/\s+/g, " "));
    await ctx.close();
  } catch (e) { R.p_err = e.stack; }
  // 3) truncated + future-version link (with real reload)
  try {
    const ctx = await b.newContext(); const A = await ctx.newPage(); hook(A, "3");
    await start(A, "trunc", 56); for (let i = 0; i < 4; i++) await step(A, 1); await A.click("#pause");
    const code = (await A.textContent("#pcode")).replace(/\s+/g, "");
    const P = await ctx.newPage(); hook(P, "3b");
    await P.goto(URL + "#" + code.slice(0, -4)); await P.waitForTimeout(250);
    R.t_trunc = await P.evaluate(() => (document.querySelector(".warn") || {}).textContent || "NO WARN: " + document.querySelector(".count").textContent);
    const forge = (body) => { let h = 7; for (let i = 0; i < body.length; i++) h = (h * 31 + body.charCodeAt(i)) % 1296; return body + "." + ("0" + h.toString(36)).slice(-2); };
    const parts = code.split("."); const fut = forge(["r1", "c"].concat(parts.slice(2, 5)).join("."));
    const P2 = await ctx.newPage(); await P2.goto(URL + "#" + fut); await P2.waitForTimeout(250);
    R.t_future = await P2.evaluate(() => (document.querySelector(".warn") || {}).textContent || "none");
    // tape with too many answers
    const over = forge(parts.slice(0, 4).concat([parts[4] + "4".repeat(300)]).join("."));
    const P3 = await ctx.newPage(); hook(P3, "3c"); await P3.goto(URL + "#" + over); await P3.waitForTimeout(250);
    R.t_overlong = await P3.evaluate(() => (document.querySelector(".warn") || {}).textContent || document.querySelector(".count").textContent);
    // invalid symbol in tape
    const junk = forge(parts.slice(0, 4).concat([parts[4] + "9Z"]).join("."));
    const P4 = await ctx.newPage(); hook(P4, "3d"); await P4.goto(URL + "#" + junk); await P4.waitForTimeout(250);
    R.t_junk = await P4.evaluate(() => (document.querySelector(".warn") || {}).textContent || document.getElementById("app").innerText.slice(0, 80));
    if (await P4.$("#go")) { await P4.click("#go"); await P4.waitForTimeout(200); R.t_junk2 = await P4.evaluate(() => document.getElementById("app").innerText.slice(0, 200).replace(/\s+/g, " ")); }
    await ctx.close();
  } catch (e) { R.t_err = e.stack; }
  // 4) checkpoint at 20, pause at phase-2 intro -> link -> intro; back inside phase 2
  try {
    const ctx = await b.newContext(); const A = await ctx.newPage(); hook(A, "4");
    await start(A, "cp", 56); let cp = null;
    for (let i = 0; i < 56 + 10; i++) {
      if (await A.$("#pgo")) { cp = cp || (await count(A)); await A.click("#pgo"); await A.waitForTimeout(100); continue; }
      if (await A.$("#go2")) break;
      await A.click(`.opt[data-v="${[2, 1, -1, -2][i % 4]}"]`); await A.waitForTimeout(300);
    }
    R.cp_first = cp;
    R.intro = !!(await A.$("#go2"));
    await A.click("#pause2"); const code = (await A.textContent("#pcode")).replace(/\s+/g, "");
    const B = await (await b.newContext()).newPage(); hook(B, "4b"); await B.goto(URL + "#" + code); await B.waitForTimeout(200);
    if (await B.$("#go")) await B.click("#go");
    R.linkAtIntro = (await B.$("#go2")) ? "intro" : await count(B);
    await B.click("#go2"); await B.waitForTimeout(150);
    R.p2firstBackDisabled = await B.evaluate(() => document.getElementById("back").disabled);
    const c1 = await count(B); await B.click('.opt[data-v="2"]'); await B.waitForTimeout(300);
    const c2 = await count(B); await B.click("#back"); await B.waitForTimeout(200);
    R.p2back = c1 + " -> " + c2 + " -> back -> " + (await count(B));
    await B.click("#pause"); const code2 = (await B.textContent("#pcode")).replace(/\s+/g, "");
    const C = await (await b.newContext()).newPage(); hook(C, "4c"); await C.goto(URL + "#" + code2); await C.waitForTimeout(200);
    R.p2resumeTitle = await C.evaluate(() => (document.getElementById("h1focus") || {}).textContent);
    if (await C.$("#go")) await C.click("#go");
    R.p2resumeCount = (await C.$("#go2")) ? "intro" : await count(C);
  } catch (e) { R.cp_err = e.stack; }
  R.errors = errs;
  console.log(JSON.stringify(R, null, 1));
  await b.close();
})();
