const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const path = require("path");
const FILE = "file://" + path.resolve(process.argv[2]);
const DUPS = process.argv.slice(3);
const out = {};
const errsOf = p => { const e = []; p.on("pageerror", x => e.push("pageerror: " + x.message)); p.on("console", m => { if (m.type() === "error" && !/ERR_FILE_NOT_FOUND|net::|Failed to load resource/.test(m.text())) e.push("console: " + m.text()); }); return e; };
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  let p = await ctx.newPage(); let errs = errsOf(p);
  await p.goto(FILE);
  // ---- setup chips
  out.mainChips = await p.$$eval('fieldset:nth-of-type(1) input[name="ctx"]', els => els.map(e => e.value + "=" + e.nextElementSibling.textContent));
  out.moreChips = await p.$$eval('fieldset:nth-of-type(2) input[name="ctx"]', els => els.map(e => e.value + "=" + e.nextElementSibling.textContent));
  out.hasF = await p.$('input[name="ctx"][value="f"]') !== null;
  out.defaultSummary = await p.textContent("#summary");
  const lenState = () => p.$$eval('input[name="len"]', els => els.map(e => e.value + (e.disabled ? "x" : "") + (e.checked ? "*" : "")).join(" "));
  await p.click("#all");
  out.afterAll = { checked: await p.$$eval('input[name="ctx"]:checked', e => e.length), total: await p.$$eval('input[name="ctx"]', e => e.length), lens: await lenState(), guard: await p.textContent("#guard"), summary: await p.textContent("#summary") };
  await p.click("#none");
  out.afterNone = { checked: await p.$$eval('input[name="ctx"]:checked', e => e.length), lens: await lenState(), guard: await p.textContent("#guard"), start: await p.$eval("#start", e => e.disabled) };
  await p.check('input[name="ctx"][value="l"]');
  out.onlyL = { lens: await lenState(), guard: await p.textContent("#guard"), summary: await p.textContent("#summary") };
  await p.check('input[name="len"][value="92"]');
  out.onlyL92 = { lens: await lenState(), summary: await p.textContent("#summary") };
  await p.uncheck('input[name="ctx"][value="l"]'); await p.check('input[name="ctx"][value="c"]');
  out.onlyC = { lens: await lenState(), guard: await p.textContent("#guard") };
  await p.uncheck('input[name="ctx"][value="c"]'); await p.check('input[name="ctx"][value="e"]');
  out.onlyE = { lens: await lenState(), guard: await p.textContent("#guard") };
  out.setupScrollW = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.screenshot({ path: "setup.png", fullPage: true });
  // ---- interactive run with l + c + e and drop of l
  await p.check('input[name="ctx"][value="l"]'); await p.check('input[name="ctx"][value="c"]');
  await p.fill("#seed", "ทดสอบ12"); await p.dispatchEvent("#seed", "input");
  await p.check('input[name="len"][value="64"]'); await p.check("#ack");
  out.runSummary = await p.textContent("#summary");
  await p.click("#start");
  const tags = [], log = []; let nl = 0, dropped = false, pausedCode = null, beforePauseQ = null, afterDropLF = 0;
  for (let k = 0; k < 300; k++) {
    if (await p.$("#go2")) { await p.click("#go2"); continue; }
    if (await p.$("#pgo")) { await p.click("#pgo"); await p.waitForTimeout(50); continue; }
    if (!(await p.$(".opt"))) break;
    const tag = await p.textContent(".tag"); tags.push(tag);
    if (await p.$("#dropyes")) { out.dropPrompt = await p.textContent("#topicslot"); await p.click("#dropyes"); dropped = true; await p.waitForTimeout(50); continue; }
    if (dropped && /เวลาว่าง/.test(tag) && !/ช่วงที่ 2/.test(tag)) afterDropLF++;
    if (k === 40 && !pausedCode) {
      beforePauseQ = await p.textContent(".q");
      await p.click("#pause"); pausedCode = (await p.textContent("#pcode")).replace(/\s+/g, "");
      await p.click("#pgo"); continue;
    }
    if (/เวลาว่าง/.test(tag) && !dropped && nl < 4) { nl++; await p.click("#na"); }
    else { const v = [2, 1, -1, -2, 1, 2, 0, -1][k % 8]; await p.click(`.opt[data-v="${v}"]`); }
    await p.waitForTimeout(240);
  }
  out.tagsWithLF = tags.filter(t => /เวลาว่าง/.test(t)).length;
  out.dropped = dropped; out.afterDropLFqs = afterDropLF; out.pausedCode = pausedCode;
  const txt = await p.textContent("#app");
  out.resultLen = txt.length; out.resultBad = (txt.match(/undefined|NaN|\[object/g) || []);
  out.resultFooter = (txt.match(/ชุดคำถาม: คำสุ่ม[^)]*\)/) || [""])[0];
  out.resultLFheadings = (txt.match(/เรื่องเวลาว่างและงานอดิเรก/g) || []).length;
  out.resultScrollW = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.screenshot({ path: "result_lce.png", fullPage: true });
  out.errsRun = errs.slice();
  // ---- resume code into a fresh context, via the setup box
  const ctx2 = await b.newContext({ viewport: { width: 390, height: 844 } });
  let p2 = await ctx2.newPage(); let e2 = errsOf(p2);
  await p2.goto(FILE);
  await p2.click(".resumebox summary"); await p2.fill("#rcode", pausedCode); await p2.click("#rgo"); await p2.waitForTimeout(200);
  out.resumeQ = await p2.$(".q") ? await p2.textContent(".q") : await p2.textContent("#app");
  out.resumeMatches = out.resumeQ === beforePauseQ;
  out.resumeErrs = e2;
  // ---- duplicate-heading repro codes via link
  out.dups = [];
  for (const code of DUPS) {
    const c3 = await b.newContext({ viewport: { width: 390, height: 844 } }); const p3 = await c3.newPage(); const e3 = errsOf(p3);
    await p3.goto(FILE + "#" + code); await p3.waitForTimeout(150);
    if (await p3.$("#go")) await p3.click("#go");
    await p3.waitForTimeout(250);
    const t3 = await p3.textContent("#app");
    const heads = await p3.$$eval(".ctxs > li > b, ul.ctxs li > b", els => els.map(e => e.textContent));
    out.dups.push({ code: code.slice(0, 30), isResult: /เสร็จแล้ว/.test(t3), lfHeadingCount: (t3.match(/เรื่องเวลาว่างและงานอดิเรก/g) || []).length, heads: heads.filter(h => /^เรื่อง/.test(h)), bad: t3.match(/undefined|NaN/g), sw: await p3.evaluate(() => document.documentElement.scrollWidth), errs: e3 });
    await p3.screenshot({ path: "dup_" + out.dups.length + ".png", fullPage: true });
    await c3.close();
  }
  // ---- rev11 localStorage + old link
  const c4 = await b.newContext({ viewport: { width: 390, height: 844 } });
  await c4.addInitScript(() => { if (!sessionStorage.getItem("__seeded")) { sessionStorage.setItem("__seeded", "1"); localStorage.setItem("ft11_run_old1", JSON.stringify({ v: 11, seed: "มะลิ12", chosen: ["w", "r", "l"], L: 64, tape: ["4", "3", "2", "1"], best: null, cps: [], ph: 1, at: Date.now() - 1000, beat: 0, tab: "x", lin: [] })); localStorage.setItem("ft11_run_old2", JSON.stringify({ v: 11, seed: "x", chosen: ["f", "i"], L: 92, tape: [], ph: 3, at: Date.now() - 5000, beat: 0, tab: "y", lin: [] })); } });
  const p4 = await c4.newPage(); const e4 = errsOf(p4);
  await p4.goto(FILE); await p4.waitForTimeout(200);
  out.rev11Local = { screen: (await p4.textContent(".count")), warn: await p4.$(".warn[role=alert]") ? await p4.textContent(".warn[role=alert]") : null, errs: e4 };
  await p4.check('input[name="ctx"][value="e"]'); await p4.check("#ack"); await p4.click("#start"); await p4.waitForTimeout(100);
  out.rev11Local.keysAfterStart = await p4.evaluate(() => Object.keys(localStorage).filter(k => k.startsWith("ft11_run_")).map(k => k + ":" + JSON.parse(localStorage.getItem(k)).v));
  // r11-style resume link (version b = 11)
  function chk(s) { let h = 7; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 1296; return ("0" + h.toString(36)).slice(-2); }
  const oldBody = "r1.b." + Buffer.from("มะลิ12").toString("base64").replace(/=+$/, "") + ".1wrl.4321";
  const p5 = await c4.newPage(); const e5 = errsOf(p5);
  await p5.goto(FILE + "#" + oldBody + "." + chk(oldBody)); await p5.waitForTimeout(150);
  out.rev11Link = { warn: await p5.$(".warn[role=alert]") ? await p5.textContent(".warn[role=alert]") : null, errs: e5 };
  // r11 share link still renders
  await b.close();
  console.log(JSON.stringify(out, null, 1));
})();
