const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const path = require("path");
(async () => {
  const url = "file://" + path.resolve(process.argv[2]);
  const b = await chromium.launch(); const ctx = await b.newContext();
  const errs = []; const hook = p => { p.on("pageerror", e => errs.push(e.message)); };
  async function start(p, seed) { await p.goto(url); await p.fill("#seed", seed); await p.check("#ack"); await p.click("#start"); }
  async function answer(p, n, v) { for (let i = 0; i < n; i++) { await p.click(`.opt[data-v="${v}"]`); await p.waitForTimeout(280); } }
  const runs = async p => p.evaluate(() => { const m = JSON.parse(JSON.stringify(Object.fromEntries(Object.keys(localStorage).filter(k=>k.indexOf("ft11_run_")===0).map(k=>[k.slice(9),JSON.parse(localStorage.getItem(k))]))) || "{}"); return Object.keys(m).map(k => ({ k, seed: m[k].seed, n: m[k].tape.length })); });
  const A = await ctx.newPage(); hook(A); await start(A, "tabA"); await answer(A, 3, 2);
  const B = await ctx.newPage(); hook(B); await B.goto(url);
  console.log("B landing:", (await B.textContent(".count")).trim(), "(expect setup, A is live)");
  await B.fill("#seed", "tabB"); await B.check("#ack"); await B.click("#start"); await answer(B, 2, -2);
  await answer(A, 2, 1);
  console.log("after A=5,B=2:", JSON.stringify(await runs(A)));
  // duplicated tab: copy A's sessionStorage run id into a new tab
  const aRun = await A.evaluate(() => sessionStorage.getItem("ft11_tabrun"));
  const C = await ctx.newPage(); hook(C); await C.addInitScript(id => { try { sessionStorage.setItem("ft11_tabrun", id); } catch (e) {} }, aRun);
  await C.goto(url); await C.waitForTimeout(300);
  console.log("C landing:", (await C.textContent("#app")).slice(0, 80).replace(/\s+/g, " "));
  if (await C.$("#go")) { await C.click("#go"); await answer(C, 1, -1); }
  await answer(A, 1, 2);
  const cRun = await C.evaluate(() => sessionStorage.getItem("ft11_tabrun"));
  console.log("A run", aRun, "C run", cRun, "forked:", aRun !== cRun);
  console.log("final:", JSON.stringify(await runs(A)));
  // storage blocked: private-mode style
  const D = await (await b.newContext()).newPage(); hook(D);
  await D.addInitScript(() => { Object.defineProperty(window, "localStorage", { get() { throw new Error("blocked"); } }); Object.defineProperty(window, "sessionStorage", { get() { throw new Error("blocked"); } }); });
  await start(D, "nostore"); await answer(D, 3, 1);
  console.log("no-storage tab works:", (await D.textContent(".count")).trim());
  console.log("errors:", errs);
  await b.close();
})();
