const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const path = require("path");
(async () => {
  const file = "file://" + path.resolve(process.argv[2]);
  const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" in {} ? undefined : undefined });
  const p = await b.newPage({ viewport: { width: 390, height: 844 } });
  const errs = []; p.on("pageerror", e => errs.push(e.message)); p.on("console", m => { if (m.type() === "error") errs.push(m.text()); });
  await p.goto(file);
  await p.fill("#seed", "สมโอ");
  await p.check('input[name="ctx"][value="c"]'); await p.check('input[name="ctx"][value="e"]'); await p.check('input[name="ctx"][value="i"]');
  await p.check("#ack");
  console.log(await p.textContent("#summary"));
  await p.click("#start");
  let n = 0, likert = 0;
  for (let k = 0; k < 400; k++) {
    if (await p.$("#go2")) { await p.click("#go2"); continue; }
    if (await p.$("#pgo")) { await p.click("#pgo"); continue; }
    const opts = await p.$$(".opt"); if (!opts.length) break;
    if (!(await p.$(".q.bip"))) likert++;
    if (k === 3) await p.screenshot({ path: process.argv[3] + "-q.png" });
    const v = [2, 1, -1, -2, 1, 2, 0][k % 7]; await p.click(`.opt[data-v="${v}"]`); n++;
    await p.waitForTimeout(260);
  }
  console.log("answered", n, "likert screens", likert);
  await p.waitForTimeout(300);
  const txt = await p.textContent("#app");
  console.log("has top3:", txt.includes("3 อันดับแรก และเหตุผล"), "stab:", txt.includes("ความนิ่งของผล"), "101:", txt.includes("ฉบับคนเพิ่งรู้จัก"));
  await p.screenshot({ path: process.argv[3] + "-result.png", fullPage: true });
  const w = await p.evaluate(() => document.documentElement.scrollWidth); console.log("scrollWidth", w);
  console.log("errors", errs.filter(e => !/ERR_FILE_NOT_FOUND|net::|Failed to load resource/.test(e)));
  await b.close();
})();
