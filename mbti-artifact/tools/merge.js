const fs=require("fs"), D=process.argv[2]||"r11";
const old=JSON.parse(fs.readFileSync("v10/bank_v10.json"));
const F=["Ni","Ne","Si","Se","Ti","Te","Fi","Fe"], P=["Ni-Se","Ne-Si","Ti-Fe","Te-Fi"];
const items=[]; // {id,kind,ctx,fn|pair|g, t | a,b, des}
const cnt={};
for(let w=1;w<=7;w++){
  const j=JSON.parse(fs.readFileSync(`${D}/w${w}.json`)); const sd=j.selfDes||{};
  for(const c in (j.statements||{})) for(const f of F){ (j.statements[c][f]||[]).forEach((t,k)=>{
      const base=((old.statements[c]||{})[f]||[]).length; const key=c+"|"+f; cnt[key]=(cnt[key]||0);
      const id=f+c+(base+cnt[key]); cnt[key]++;
      items.push({id,kind:"st",ctx:c,fn:f,t,des:sd[`${c}|${f}|${k}`]});});}
  for(const c in (j.bips||{})) for(const p of P){ (j.bips[c][p]||[]).forEach((ab,k)=>{
      const base=((old.bips[c]||{})[p]||[]).length; const key=c+"|"+p; cnt[key]=(cnt[key]||0);
      const id="B"+p.replace("-","")+(c==="o"?"":c)+(base+cnt[key]); cnt[key]++;
      items.push({id,kind:"bip",ctx:c,pair:p,a:ab[0],b:ab[1],desA:sd[`${c}|${p}|${k}|a`],desB:sd[`${c}|${p}|${k}|b`]});});}
  for(const g in (j.ei||{})) (j.ei[g]||[]).forEach((ei,k)=>{
      const base=(old.ei[g]||[]).length; const key="ei|"+g; cnt[key]=(cnt[key]||0);
      const id="EI"+g+(base+cnt[key]); cnt[key]++;
      items.push({id,kind:"ei",g,E:ei[0],I:ei[1],desE:sd[`ei|${g}|${k}|E`],desI:sd[`ei|${g}|${k}|I`]});});
}
const ids=new Set(); items.forEach(x=>{if(ids.has(x.id))throw "dup "+x.id; ids.add(x.id);});
fs.writeFileSync(`${D}/draft_all.json`,JSON.stringify(items,null,1));
let md="# Rev11 new items (draft)\n\n## Statements (MFC raw material) — id | ctx | fn | selfDes | text\n";
items.filter(x=>x.kind=="st").forEach(x=>md+=`${x.id} | ${x.ctx} | ${x.fn} | ${x.des} | ${x.t}\n`);
md+="\n## Opposite-pair bipolar — id | ctx | pair | desA/desB | A (first fn) ‖ B (second fn)\n";
items.filter(x=>x.kind=="bip").forEach(x=>md+=`${x.id} | ${x.ctx} | ${x.pair} | ${x.desA}/${x.desB} | A: ${x.a} ‖ B: ${x.b}\n`);
md+="\n## E/I — id | group | desE/desI | E ‖ I\n";
items.filter(x=>x.kind=="ei").forEach(x=>md+=`${x.id} | ${x.g} | ${x.desE}/${x.desI} | E: ${x.E} ‖ I: ${x.I}\n`);
fs.writeFileSync(`${D}/draft_review.md`,md);
const miss=items.filter(x=>x.kind=="st"?x.des==null:x.kind=="bip"?(x.desA==null||x.desB==null):(x.desE==null||x.desI==null));
console.log("items",items.length,"st",items.filter(x=>x.kind=="st").length,"bip",items.filter(x=>x.kind=="bip").length,"ei",items.filter(x=>x.kind=="ei").length,"missingDes",miss.length);
