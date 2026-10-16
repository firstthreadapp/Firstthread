// UI audit: full flows, text scan, a11y basics, 390px, back, pause/resume, na/drop
const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const path = require("path");
const URL = "file://" + path.resolve(process.argv[2]);
const OUT = process.argv[3] || "audit/ui";
const results = {};
const errs = [];
const BADTXT = /undefined|NaN|\[object|−0\.00?(?!\d)|Infinity|null(?![\w])|&lt;|&amp;|&quot;|<\/?(li|b|span|p|ul|div)\b/;
function hook(p, tag) {
  p.on("pageerror", e => errs.push(tag + ": " + e.message));
  p.on("console", m => { if (m.type() === "error" && !/ERR_FILE_NOT_FOUND|net::|Failed to load resource/.test(m.text())) errs.push(tag + " console: " + m.text()); });
}
async function setup(p, seed, ctxs, L) {
  await p.goto(URL);
  await p.fill("#seed", seed);
  // clear defaults
  await p.click("#none");
  for (const c of ctxs) await p.check(`input[name="ctx"][value="${c}"]`);
  if (L) await p.check(`input[name="len"][value="${L}"]`);
  await p.check("#ack");
  await p.click("#start");
}
async function screen(p) {
  if (await p.$("#go2")) return "intro";
  if (await p.$("#pgo")) return "pause";
  if (await p.$("#go")) return "resume";
  if (await p.$(".opt")) return "q";
  if (await p.$("#again")) return "result";
  return "other";
}
async function qInfo(p) {
  return p.evaluate(() => {
    const tag = (document.querySelector(".tag") || {}).textContent || "";
    const sa = (document.getElementById("sa") || {}).textContent || "", sb = (document.getElementById("sb") || {}).textContent || "";
    return { tag, sa, sb, count: (document.querySelector(".count") || {}).textContent, app: document.getElementById("app").innerText, sw: document.documentElement.scrollWidth, topic: !!document.getElementById("dropyes") };
  });
}
(async () => {
  const b = await chromium.launch();
  // ---------- Scenario 1: full run, 390px, na + topic drop, scan every screen ----------
  try {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
    const p = await ctx.newPage(); hook(p, "S1");
    await setup(p, "audit<b>&\"x'", ["x", "f", "q"], 84);
    const r = { screens: 0, likert: [], badText: [], wide: [], naClicks: 0, dropOffered: false, dropped: false, p1: 0, p2: 0, counts: [] };
    let k = 0, naLeft = 3;
    for (let step = 0; step < 400; step++) {
      const s = await screen(p);
      if (s === "intro") { const t = await p.evaluate(() => document.getElementById("app").innerText); if (BADTXT.test(t)) r.badText.push("intro: " + t.match(BADTXT)[0]); r.introTxt = t.slice(0, 80); await p.click("#go2"); continue; }
      if (s === "pause") { const sw = await p.evaluate(() => document.documentElement.scrollWidth); if (sw > 390) r.wide.push("pause " + sw); await p.click("#pgo"); continue; }
      if (s !== "q") break;
      const q = await qInfo(p); r.screens++;
      if (/ตรงกับฉันแค่ไหน/.test(q.tag) || !q.sa.trim() || !q.sb.trim()) r.likert.push(q.count + " " + q.tag);
      if (BADTXT.test(q.app)) r.badText.push(q.count + ": " + q.app.match(BADTXT)[0]);
      if (q.sw > 390) r.wide.push(q.count + " " + q.sw);
      if (/ช่วงที่ 2/.test(q.count)) r.p2++; else r.p1++;
      if (q.topic) {
        r.dropOffered = true;
        await p.click("#dropyes"); r.dropped = true;
        continue;
      }
      // press na on items of context x (to trigger drop prompt after 2) – first phase only
      if (naLeft > 0 && /เรื่องเพื่อน/.test(q.tag) && !/ช่วงที่ 2/.test(q.count)) { naLeft--; r.naClicks++; await p.click("#na"); await p.waitForTimeout(260); continue; }
      const v = [2, 1, -1, -2, 1, 2, 0, -1][k++ % 8];
      await p.click(`.opt[data-v="${v}"]`); await p.waitForTimeout(250);
    }
    await p.waitForTimeout(400);
    const res = await p.evaluate(() => {
      const app = document.getElementById("app");
      const cards = app.querySelectorAll("details.why");
      const bulletKinds = [...cards].map(c => [...c.querySelectorAll("ul.whyl > li")].map(li => (li.querySelector(".wlab") || {}).textContent || "?"));
      return { txt: app.innerText, cards: cards.length, bulletKinds, sw: document.documentElement.scrollWidth, html: app.innerHTML.length,
        seedShown: (app.innerText.match(/คำสุ่ม “[^”]*”/) || [""])[0], hasImgInj: !!app.querySelector("b b"),
        ev: [...app.querySelectorAll(".ev")].length, letters: [...app.querySelectorAll("ul.letters")].length };
    });
    r.result = { cards: res.cards, bulletKinds: res.bulletKinds, sw: res.sw, seedShown: res.seedShown, ev: res.ev, letters: res.letters };
    const m = res.txt.match(new RegExp(BADTXT.source, "g")); r.resultBad = m ? [...new Set(m)] : [];
    // context around bad text
    if (m) r.resultBadCtx = [...new Set(m)].map(x => { const i = res.txt.indexOf(x); return res.txt.slice(Math.max(0, i - 60), i + 40).replace(/\s+/g, " "); });
    r.has = { top3: res.txt.includes("3 อันดับแรก และเหตุผล"), stab: res.txt.includes("ความนิ่งของผล"), mbti101: res.txt.includes("ฉบับคนเพิ่งรู้จัก"), ph2: res.txt.includes("ช่วงที่ 2 · ข้อหาจุดค้าน"), gap: res.txt.includes("ทำไมเป็นอันดับนี้"), con: res.txt.includes("ข้อที่ค้านกับ") };
    await p.screenshot({ path: OUT + "-s1-result.png", fullPage: true });
    // reload on result page: should show result again
    await p.reload(); await p.waitForTimeout(300);
    r.reloadAfterResult = await screen(p);
    results.S1 = r;
    await ctx.close();
  } catch (e) { results.S1err = e.stack; }

  // ---------- Scenario 2: keyboard on scale ----------
  try {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
    const p = await ctx.newPage(); hook(p, "S2");
    await setup(p, "kbd", ["w"], 56);
    const r = {};
    r.initialFocus = await p.evaluate(() => document.activeElement && (document.activeElement.className + "|" + document.activeElement.getAttribute("role")));
    await p.keyboard.press("Tab");
    r.afterTab = await p.evaluate(() => document.activeElement && (document.activeElement.className + " v=" + document.activeElement.getAttribute("data-v")));
    await p.keyboard.press("ArrowRight");
    r.afterRight = await p.evaluate(() => document.activeElement && ("v=" + document.activeElement.getAttribute("data-v")));
    await p.keyboard.press("ArrowLeft"); await p.keyboard.press("ArrowLeft");
    r.afterLeft2 = await p.evaluate(() => document.activeElement && ("v=" + document.activeElement.getAttribute("data-v")));
    const c0 = await p.textContent(".count");
    await p.keyboard.press("Enter"); await p.waitForTimeout(350);
    r.enterAdvanced = (await p.textContent(".count")) !== c0;
    r.focusAfterAdvance = await p.evaluate(() => document.activeElement && document.activeElement.className);
    await p.keyboard.press("Tab"); await p.keyboard.press(" "); await p.waitForTimeout(350);
    r.spaceAdvanced = (await p.textContent(".count"));
    // labels
    r.unlabeled = await p.evaluate(() => [...document.querySelectorAll("button, input, a")].filter(el => !(el.getAttribute("aria-label") || el.textContent.trim() || (el.labels && el.labels.length) || el.getAttribute("title"))).map(el => el.outerHTML.slice(0, 80)));
    r.radioGroup = await p.evaluate(() => { const g = document.querySelector(".scale"); return g && g.getAttribute("role") + " / " + g.getAttribute("aria-label"); });
    r.htmlLang = await p.evaluate(() => document.documentElement.getAttribute("lang"));
    // back button
    r.backEnabled = await p.evaluate(() => !document.getElementById("back").disabled);
    const before = await p.textContent(".count");
    await p.click("#back"); await p.waitForTimeout(200);
    r.back = before + " -> " + (await p.textContent(".count")) + " backDisabledNow=" + (await p.evaluate(() => document.getElementById("back").disabled));
    results.S2 = r;
    // setup page a11y
    await p.goto(URL);
    results.S2.setupUnlabeled = await p.evaluate(() => [...document.querySelectorAll("button, input, a")].filter(el => !(el.getAttribute("aria-label") || el.textContent.trim() || (el.labels && el.labels.length))).map(el => el.outerHTML.slice(0, 80)));
    results.S2.setupSW = await p.evaluate(() => document.documentElement.scrollWidth);
    await ctx.close();
  } catch (e) { results.S2err = e.stack; }

  // ---------- Scenario 3: pause -> resume code round trip in a fresh context; old v10 link ----------
  try {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
    const p = await ctx.newPage(); hook(p, "S3");
    await setup(p, "สมชาย ๆ", ["r", "q"], 64);
    for (let i = 0; i < 7; i++) { await p.click(`.opt[data-v="${[2, -1, 1, -2, 0, 1, 2][i]}"]`); await p.waitForTimeout(260); }
    await p.click("#na"); await p.waitForTimeout(260);
    for (let i = 0; i < 3; i++) { await p.click(`.opt[data-v="1"]`); await p.waitForTimeout(260); }
    const qBefore = await qInfo(p);
    await p.click("#pause");
    const code = (await p.textContent("#pcode")).replace(/\s+/g, "");
    const r = { code: code.slice(0, 40) + "...", qBefore: qBefore.count + " " + qBefore.sa.slice(0, 30) };
    r.pauseSW = await p.evaluate(() => document.documentElement.scrollWidth);
    const ctx2 = await b.newContext({ viewport: { width: 390, height: 844 } });
    const p2 = await ctx2.newPage(); hook(p2, "S3b");
    await p2.goto(URL + "#" + code); await p2.waitForTimeout(300);
    r.linkLanding = await screen(p2);
    if (r.linkLanding === "resume") { await p2.click("#go"); }
    const q2 = await qInfo(p2); r.qAfter = q2.count + " " + q2.sa.slice(0, 30);
    r.sameQuestion = q2.count === qBefore.count && q2.sa === qBefore.sa && q2.sb === qBefore.sb;
    // paste code into setup box
    const p3 = await ctx2.newPage(); hook(p3, "S3c");
    await p3.goto(URL); await p3.waitForTimeout(200);
    if (await p3.$("#drop")) { await p3.click("#drop"); }
    await p3.click(".resumebox summary"); await p3.fill("#rcode", code.replace(/(.{5})/g, "$1 ")); await p3.click("#rgo"); await p3.waitForTimeout(300);
    const q3 = await qInfo(p3); r.pasteSame = q3.count === qBefore.count && q3.sa === qBefore.sa;
    // tampered / truncated
    await p3.goto(URL + "#" + code.slice(0, -5)); await p3.waitForTimeout(300);
    r.truncatedMsg = await p3.evaluate(() => (document.querySelector(".warn") || {}).textContent || document.querySelector(".count").textContent);
    // reload after opening link and answering more: does the link (hash) overwrite newer progress?
    await p2.click(`.opt[data-v="2"]`); await p2.waitForTimeout(260); await p2.click(`.opt[data-v="-2"]`); await p2.waitForTimeout(260); await p2.click(`.opt[data-v="1"]`); await p2.waitForTimeout(260);
    const adv = await qInfo(p2);
    await p2.reload(); await p2.waitForTimeout(300);
    let land = await screen(p2); if (land === "resume") await p2.click("#go");
    const afterReload = await qInfo(p2);
    r.linkReload = { before: adv.count, after: afterReload.count, lost: adv.count !== afterReload.count, runs: await p2.evaluate(() => Object.keys(JSON.parse(JSON.stringify(Object.fromEntries(Object.keys(localStorage).filter(k=>k.indexOf("ft11_run_")===0).map(k=>[k.slice(9),JSON.parse(localStorage.getItem(k))]))) || "{}")).length) };
    results.S3 = r;
    await ctx.close(); await ctx2.close();
  } catch (e) { results.S3err = e.stack; }

  // ---------- Scenario 4: v10 resume code + v10 share link opened in r11 ----------
  try {
    const V10 = "file://" + path.resolve(path.dirname(process.argv[2]), "../v10/index.html");
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
    const p = await ctx.newPage(); hook(p, "S4v10");
    await p.goto(V10); await p.fill("#seed", "old"); await p.check("#ack"); await p.click("#start");
    for (let i = 0; i < 4; i++) { await p.click(`.opt[data-v="1"]`); await p.waitForTimeout(280); }
    await p.click("#pause"); const code = (await p.textContent("#pcode")).replace(/\s+/g, "");
    const p2 = await (await b.newContext()).newPage(); hook(p2, "S4r11");
    await p2.goto(URL + "#" + code); await p2.waitForTimeout(300);
    const r = { v10code: code.slice(0, 12) };
    r.msg = await p2.evaluate(() => (document.querySelector(".warn") || {}).textContent || "(no warn) " + document.querySelector(".count").textContent);
    await p2.goto(URL); await p2.click(".resumebox summary"); await p2.fill("#rcode", code); await p2.click("#rgo"); await p2.waitForTimeout(200);
    r.pasteToast = await p2.evaluate(() => (document.getElementById("toast") || {}).textContent);
    // v10 local progress present in same origin: does r11 mention it?
    await p.goto(URL); await p.waitForTimeout(300);
    r.v10LocalLanding = await p.evaluate(() => document.querySelector(".count").textContent + " | warn=" + ((document.querySelector(".warn") || {}).textContent || "none") + " | keys=" + Object.keys(localStorage).join(","));
    results.S4 = r;
  } catch (e) { results.S4err = e.stack; }

  // ---------- Scenario 5: shared link round trip + crafted share ----------
  try {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
    const p = await ctx.newPage(); hook(p, "S5");
    await setup(p, "share", ["w"], 56);
    for (let step = 0; step < 200; step++) { const s = await screen(p); if (s === "intro") { await p.click("#go2"); continue; } if (s === "pause") { await p.click("#pgo"); continue; } if (s !== "q") break; await p.click(`.opt[data-v="${[2, 1, -1, -2, 1][step % 5]}"]`); await p.waitForTimeout(240); }
    const cap = await p.textContent("#caption");
    const link = cap.match(/#(s1\.[^\s]+)/)[1];
    const p2 = await ctx.newPage(); hook(p2, "S5b"); await p2.goto(URL + "#" + link); await p2.waitForTimeout(200);
    const r = { link, sharedTxt: (await p2.evaluate(() => document.getElementById("app").innerText)).slice(0, 120).replace(/\s+/g, " "), sharedSW: await p2.evaluate(() => document.documentElement.scrollWidth) };
    // crafted: ei=9 bars 'z'
    const forge = (body) => { let h = 7; for (let i = 0; i < body.length; i++) h = (h * 31 + body.charCodeAt(i)) % 1296; return body + "." + ("0" + h.toString(36)).slice(-2); };
    const parts = link.split("."); const d = parts[2]; const bad = forge(["s1", parts[1], d.slice(0, 10) + "9", parts[3]].join("."));
    await p2.goto(URL + "#" + bad); await p2.reload(); await p2.waitForTimeout(200);
    r.craftedEI9 = (await p2.evaluate(() => document.getElementById("app").innerText)).match(/undefined|NaN/g);
    const bad2 = forge(["s1", parts[1], d.slice(0, 2) + "zzzzzzzz" + d.charAt(10), "zzzzzzzzzz"].join("."));
    await p2.goto(URL + "#" + bad2); await p2.reload(); await p2.waitForTimeout(200);
    r.craftedBars = (await p2.evaluate(() => document.getElementById("app").innerText.slice(0, 200))).replace(/\s+/g, " ");
    // tryme -> compare
    await p2.goto(URL + "#" + link); await p2.reload(); await p2.waitForTimeout(200);
    await p2.click("#tryme"); await p2.waitForTimeout(300);
    r.trymeLanding = await screen(p2);
    results.S5 = r;
    await ctx.close();
  } catch (e) { results.S5err = e.stack; }

  results.errors = errs;
  console.log(JSON.stringify(results, null, 1));
  await b.close();
})();
