const a=require('../r11/index.app.js');
let s=12345; const rnd=()=>{s=(s*1103515245+12345)%2147483648; return s/2147483648;};
const shuffle=arr=>{arr=arr.slice(); for(let i=arr.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]];} return arr;};
const out={stm:[],bip:[],ei:[]};
for(const f of a.FUNCS){
  const pool=a.QUESTIONS.filter(q=>q.f===f);
  const nw=shuffle(pool.filter(q=>'xfq'.includes(q.c)));
  const ot=shuffle(pool.filter(q=>!'xfq'.includes(q.c)));
  const pick=nw.slice(0,6).concat(ot.slice(0,9));
  pick.forEach(q=>out.stm.push({id:q.id,f:q.f,c:q.c,t:q.t,des:a.DES[q.id]}));
}
for(const p of ['Ni-Se','Ne-Si','Ti-Fe','Te-Fi']){
  const pool=a.BIPS.filter(b=>b.pair===p);
  const nw=shuffle(pool.filter(q=>'xfq'.includes(q.c))), ot=shuffle(pool.filter(q=>!'xfq'.includes(q.c)));
  nw.slice(0,3).concat(ot.slice(0,7)).forEach(b=>out.bip.push({id:b.id,pair:p,c:b.c,a:b.ta,b:b.tb,des:a.DES_BIP[b.id]}));
}
for(const g of a.EI_GROUPS){ shuffle(a.EIS.filter(e=>e.g===g.g)).slice(0,2).forEach(e=>out.ei.push({id:e.id,g:e.g,E:e.te,I:e.ti,des:a.DES_EI_ALL[e.id]})); }
require('fs').writeFileSync(__dirname+'/sample.json',JSON.stringify(out,null,1));
for(const x of out.stm) console.log(x.id,'|',x.c,'|',x.des,'|',x.t);
