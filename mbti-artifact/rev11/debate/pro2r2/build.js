const fs=require("fs");
const W=require("../r2_work2.json");
const rows=require("./items_bip.js").concat(require("./items_st.js"));
const L=fs.readFileSync(__dirname+"/../../../tools/lint.js","utf8");
const RULES=eval("("+L.match(/const RULES = (\{[\s\S]*?\n\});/)[1]+")");
const hit=t=>{const o=[];for(const r in RULES)RULES[r].forEach(w=>{if(t.indexOf(w)>=0)o.push(r+":"+w)});return o;};
const out=[];const byId={};W.forEach(w=>byId[w.id]=w);
const seen=new Set();let bad=0;
for(const [id,action,text,rules,argument,des] of rows){
  if(seen.has(id)){console.log("DUP",id);bad++;} seen.add(id);
  const w=byId[id]; if(!w){console.log("UNKNOWN",id);bad++;continue;}
  const o={id,action,text,rules,argument,des};
  if(w.kind==="st"){ if(typeof text!=="string"||typeof des!=="number"){console.log("SHAPE",id);bad++;}
    const h=hit(text); if(h.length)console.log("LINT",id,h); if(text.length<40||text.length>130)console.log("LEN",id,text.length);}
  else { const [k1,k2]=w.kind==="ei"?["E","I"]:["a","b"];
    if(typeof text!=="object"||!text[k1]||!text[k2]||Object.keys(text).length!==2||typeof des!=="object"||typeof des[k1]!=="number"||typeof des[k2]!=="number"){console.log("SHAPE",id);bad++;continue;}
    const r=text[k1].length/text[k2].length; if(r>1.2||r<1/1.2)console.log("R10",id,r.toFixed(2),text[k1].length,text[k2].length);
    [k1,k2].forEach(k=>{const h=hit(text[k]);if(h.length)console.log("LINT",id,k,h)});}
  out.push(o);
}
W.forEach(w=>{if(!seen.has(w.id)){console.log("MISSING",w.id);bad++;}});
console.log("count",out.length,"unique",seen.size,"bad",bad);
fs.writeFileSync(__dirname+"/../r2_pro2.json",JSON.stringify(out,null,1));
