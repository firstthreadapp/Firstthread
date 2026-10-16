const a=require('../r11/index.app.js');
const FN=a.FPLAIN;
let s0=7; const rnd=()=>{s0=(s0*1103515245+12345)%2147483648; return s0/2147483648;};
const gauss=()=>{let u=rnd()||1e-9,v=rnd();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);};
function util(profile,f){return profile.w[f]||0;}
function answer(q,profile){
  let d;
  if(q.ei){ d=(q.fa==='E'?1:-1)*profile.e; }
  else d=util(profile,q.fa)-util(profile,q.fb);
  let x=d*profile.k+gauss()*profile.noise;
  if(Math.abs(x)<profile.mid) return 0;
  return x>0?(x>1.3?2:1):(x<-1.3?-2:-1);
}
function W(code){const st=a.stackOf(code);const w={};a.FUNCS.forEach(f=>w[f]=0);w[st[0]]=1.2;w[st[1]]=0.8;w[st[2]]=0.25;w[st[3]]=-0.4;return w;}
const profiles={
 INFJ:{w:W('INFJ'),e:-0.8,k:1.4,noise:0.8,mid:0.35},
 ESTP:{w:W('ESTP'),e:0.8,k:1.4,noise:0.8,mid:0.35},
 AMBIG:{w:(()=>{const A=W('INFP'),B=W('ENFJ'),w={};a.FUNCS.forEach(f=>w[f]=(A[f]+B[f])/2*0.6);return w;})(),e:0.05,k:1.0,noise:1.0,mid:0.6}
};
const fix=v=>Math.abs(v)<0.05?'0.0':(v>=0?'+':'−')+Math.abs(v).toFixed(1);
const side=f=>f==='E'?'E · หันออก':(f==='I'?'I · หันเข้าใน':f);
const qh=(q,lead)=>q?`\n      ${lead||'เช่น'} คุณเลือก “${q.chosen}” (${side(q.cf)}) ${q.s===2?'แบบชัด ๆ':'แบบค่อนไปทางนี้'} มากกว่า “${q.other}” (${side(q.of)})${q.ph===2?' · ข้อช่วงที่ 2':''}`:'';
function bullet(b,code){
  if(b.kind==='ph1'){const t=b.fit;return `[ช่วงที่ 1 · ชุดคำถามหลัก ${b.n} ข้อ] `+(t.n?`ในข้อที่ ${code} ทำนายคำตอบได้ ${t.n} ข้อ คุณตอบไปทางที่ ${code} คาด ${t.pass} ข้อ สวนทาง ${t.fail} ข้อ พอ ๆ กัน ${t.even} ข้อ`+(t.inf?` (ตรง ${Math.round(t.rate*100)}% ของข้อที่ตอบเอียง)`:''):`ยังไม่มีข้อที่ ${code} ทำนายคำตอบได้`);}
  if(b.kind==='ph2'){const t=b.fit;return `[ช่วงที่ 2 · ข้อหาจุดค้าน ${b.n} ข้อ${b.lead?' · ผ่านเกณฑ์ยืนยัน':''}] `+(t.n?`${code} ผ่าน ${t.pass} จาก ${t.inf} ข้อ ที่คุณตอบเอียง`+(t.inf?` (${Math.round(t.rate*100)}%)`:'')+` พอ ๆ กัน ${t.even} ข้อ`:`ข้อช่วงที่ 2 ไม่ได้ทดสอบ ${code} โดยตรง`)+(b.quote?qh(b.quote,b.failed?'จุดค้านที่ชัดที่สุด:':'ไม่พบจุดค้านที่ตอบชัด ตัวอย่างข้อที่ผ่าน:')+(b.failed?` — ข้อนี้ ${code} คาดว่าคุณจะเลือกอีกฝั่ง`:''):'');}
  if(b.kind==='dom'||b.kind==='aux'){const t=b.tally,v=b.fit==='fit'?'เข้ากับ '+code:(b.fit==='mid'?'เข้ากับ '+code+' แค่ปานกลาง':'ยังไม่ค่อยเข้ากับ '+code);
    return `[${b.role} · ${v}] ${b.f} (${FN[b.f]}) อยู่อันดับ ${b.rank} จาก 8 ในคำตอบของคุณ (${fix(b.val)})`+(t.n>=3?` · ในข้อที่มี ${b.f} เป็นตัวเลือก ${t.n} ข้อ คุณเลือกฝั่ง ${b.f} ${t.pick} ครั้ง ฝั่งอื่น ${t.against} ครั้ง พอ ๆ กัน ${t.even} ครั้ง`:'')+(b.quote?qh(b.quote):`\n      ยังไม่มีข้อที่คุณเลือกฝั่ง ${b.f} ชัด ๆ`);}
  if(b.kind==='ei'){const say=!b.side?`หัวข้อหลัก I/E ของคุณอยู่กลาง ๆ (${fix(b.m)}) ตัว ${b.L} จึงมาจากคะแนนฟังก์ชันเป็นหลัก`:(b.fit==='fit'?`หัวข้อหลัก I/E ของคุณเอียงไปทาง ${b.side} (${fix(b.m)} จาก ${b.n} ข้อ) ตรงกับตัว ${b.L}`:`หัวข้อหลัก I/E ของคุณเอียงไปทาง ${b.side} (${fix(b.m)}) ซึ่งไม่ตรงกับตัว ${b.L} ของประเภทนี้`);
    return `[ตัวอักษร ${b.L} · พลังงานและความสนใจ] ${say}`+qh(b.quote,b.quoteAgainst?'ข้อที่ไปอีกทาง:':'เช่น');}
  if(b.kind==='con') return `[ข้อที่ค้านกับ ${code}] ไม่ใช่ทุกคำตอบจะชี้มาทางนี้`+qh(b.quote,'')+(b.quote&&b.quote.cf===b.inf?` ซึ่ง ${b.inf} คือหน้าที่ด้อยของ ${code} ตามทฤษฎี (ถนัดน้อยที่สุด)`:` ซึ่งเป็นฝั่งที่ ${code} ไม่ได้ถนัดเป็นอันดับต้น ๆ`);
  if(b.kind==='gap'){const txt=b.mode==='mirror'?`${code} ใช้หน้าที่ชุดเดียวกับ ${b.top} (${b.a} กับ ${b.b}) แต่สลับว่าอะไรเป็นหลัก ที่ตามหลังเพราะในคำตอบของคุณ ${b.a} (${fix(b.va)}) ${b.va>=b.vb?'สูงกว่า':'ต่ำกว่า'} ${b.b} (${fix(b.vb)})`+(b.eiPart?` และหัวข้อหลัก I/E เอียงไปทางตัวอักษรของ ${b.top}`:''):(b.mode==='aux'?`หน้าที่หลักเหมือน ${b.top} ต่างกันที่หน้าที่รอง: ${b.top} ใช้ ${b.a} (${fix(b.va)}) ส่วน ${code} ใช้ ${b.b} (${fix(b.vb)})`:`หน้าที่หลักของ ${code} คือ ${b.b} (${fix(b.vb)}) ส่วน ${b.top} คือ ${b.a} (${fix(b.va)})`+(b.eiPart?' · หัวข้อหลัก I/E ก็มีส่วนด้วย':''));
    return `[ทำไมเป็นอันดับนี้ · ห่างอันดับ 1 อยู่ ${b.gap.toFixed(2)} คะแนน] ${txt}`+qh(b.quote,'ข้อที่เทียบสองหน้าที่นี้ตรง ๆ:');}
  return '';
}
let out='';
for(const [name,P] of Object.entries(profiles)){
  const chosen=['w','x','f','q'], sur=a.pickSurprise('aud'+name,chosen,a.surCount(chosen.length,64));
  let set=a.buildSet('aud'+name,chosen,64,sur); const mainN=set.length;
  let ans=set.map(q=>answer(q,P));
  const probes=a.buildProbes(set,ans,'aud'+name,{chosen,sur,dropped:[]});
  set=set.concat(probes); ans=ans.concat(probes.map(q=>answer(q,P)));
  const V=a.verify(set,ans,mainN), rank=V.show.rank, st=a.stabilityOf(rank);
  out+=`\n===== ${name} respondent | mainN ${mainN} probes ${probes.length} | status ${V.status} | flags ${V.flags.join(',')} =====\n`;
  out+=`Top: ${rank.slice(0,5).map(r=>r.code+' '+r.score.toFixed(2)).join(' · ')}\n`;
  out+=`ความนิ่งของผล: ${st.label} · margin ${st.m.toFixed(2)} → ${st.p}% | EI m=${V.ei.m.toFixed(2)} | chOK ${V.chOK} | challenge lead ${V.challenge.fit.pass}/${V.challenge.fit.inf} rival ${V.challenge.rival} ${Math.round(V.challenge.rivalRate*100)}%\n`;
  const fnorder=a.FUNCS.slice().sort((x,y)=>V.show.sc.c[y]-V.show.sc.c[x]); out+='Functions: '+fnorder.map(f=>f+fix(V.show.sc.c[f])).join(' ')+'\n';
  const S={sc:V.show.sc,rank,ei:V.ei,mainN:V.mainN,chOK:V.chOK};
  rank.slice(0,3).forEach((r,k)=>{const ex=a.explainType(r.code,k,S,set,ans);
    out+=`\n -- #${k+1} ${r.code} ${a.TYPES[r.code].n} (หลัก ${a.STACKS[r.code][0]} รอง ${a.STACKS[r.code][1]})${k?' ห่าง −'+ex.gap.toFixed(2):''}\n`;
    ex.bullets.forEach(b=>out+='   • '+bullet(b,r.code)+'\n');
    out+='   ถอดรหัส: '+ex.letters.map(o=>o.L+'='+o.plain+' ('+o.how+')').join(' | ')+'\n';});
}
require('fs').writeFileSync(__dirname+'/reports.txt',out); console.log(out);
