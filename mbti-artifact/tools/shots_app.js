const { chromium } = require("/opt/node22/lib/node_modules/playwright");
const path=require("path"); const out=process.argv[3]||"ref/cur";
(async()=>{const b=await chromium.launch();
 for (const [w,h,n] of [[390,844,"m"],[1280,860,"d"]]) {
  const p=await b.newPage({viewport:{width:w,height:h}});
  await p.goto("file://"+path.resolve(process.argv[2])); await p.waitForTimeout(800);
  await p.screenshot({path:`${out}_${n}_setup.png`,fullPage:true});
  await p.fill("#seed","ดีไซน์"); await p.check("#ack"); await p.click("#start"); await p.waitForTimeout(400);
  await p.click('.opt[data-v="1"]'); await p.waitForTimeout(400);
  await p.screenshot({path:`${out}_${n}_q.png`});
  for(let k=0;k<400;k++){ if(await p.$("#go2")){await p.click("#go2");continue;} if(await p.$("#pgo")){await p.click("#pgo");continue;} const o=await p.$('.opt[data-v="'+[2,1,-1,-2,1,2,0][k%7]+'"]'); if(!o) break; await o.click(); await p.waitForTimeout(240);}
  await p.waitForTimeout(600);
  await p.screenshot({path:`${out}_${n}_res.png`,fullPage:true});
  if(n==="m"){ await p.emulateMedia({colorScheme:"dark"}); await p.screenshot({path:`${out}_${n}_res_dark.png`}); }
 }
 await b.close();})();
