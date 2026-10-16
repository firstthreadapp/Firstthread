const a=require('../r11/index.app.js');
const m=x=>x.reduce((p,c)=>p+c,0)/x.length;
console.log('Statement desirability by function:');
for(const f of a.FUNCS){const v=a.QUESTIONS.filter(q=>q.f===f).map(q=>a.DES[q.id]).filter(x=>typeof x==='number');
 console.log(f, v.length, m(v).toFixed(2), '>3.75:',v.filter(x=>x>3.75).length,'<2.75:',v.filter(x=>x<2.75).length);}
console.log('Bipolar a-b gaps by pair:');
for(const p of ['Ni-Se','Ne-Si','Ti-Fe','Te-Fi']){const g=a.BIPS.filter(b=>b.pair===p).map(b=>{const d=a.DES_BIP[b.id];return d?d[0]-d[1]:NaN}).filter(x=>!isNaN(x));
 console.log(p,g.length,'mean',m(g).toFixed(2),'|gap|>0.5:',g.filter(x=>Math.abs(x)>0.5).length,'b favoured >0.5:',g.filter(x=>x<-0.5).length);
 a.BIPS.filter(b=>b.pair===p).forEach(b=>{const d=a.DES_BIP[b.id]; if(d&&Math.abs(d[0]-d[1])>0.6) console.log('   ',b.id,d, b.ta,'||',b.tb);});}
const e=a.EIS.map(x=>{const d=a.DES_EI_ALL[x.id];return d?d[0]-d[1]:NaN});
console.log('EI E-I mean', m(e).toFixed(2), 'E favoured >0.5:', e.filter(x=>x>0.5).length,'of',e.length);
a.EIS.forEach(x=>{const d=a.DES_EI_ALL[x.id]; if(d&&Math.abs(d[0]-d[1])>0.5) console.log('   ',x.id,d,x.te,'||',x.ti);});
console.log('EI_MAIN', JSON.stringify(a.EI_MAIN));
// lengths
const L=a.QUESTIONS.filter(q=>q.t.length>130); console.log('statements >130 chars:',L.length, L.slice(0,5).map(q=>q.id+':'+q.t.length));
// duplicate cost phrases
const ph={}; a.QUESTIONS.forEach(q=>{const mm=q.t.match(/(แม้[^,]*|จนบางที[^,]*)$/); if(mm){const k=mm[1].slice(0,20); (ph[k]=ph[k]||[]).push(q.id);}});
Object.entries(ph).filter(([k,v])=>v.length>=3).forEach(([k,v])=>console.log('rep',k,v.join(',')));
// banned words
const ban=/เก่ง|ได้ดี|แม่น|ฉลาด|รู้ได้ทันที|เหนือกว่า|คนเยอะ|อยู่คนเดียว/;
a.QUESTIONS.filter(q=>ban.test(q.t)).forEach(q=>console.log('BAN',q.id,q.t));
a.BIPS.filter(q=>ban.test(q.ta+q.tb)).forEach(q=>console.log('BANB',q.id,q.ta,'||',q.tb));
