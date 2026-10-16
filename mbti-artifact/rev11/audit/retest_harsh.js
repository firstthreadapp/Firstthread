// retest under the harsher calib2 respondent model (desirability lean, heavier noise)
const A=require('../r11/index.app.js'); const N=+process.argv[2]||480;
let seed=991; const R=()=>{seed=(seed*1103515245+12345)%2147483648;return seed/2147483648;};
const g=()=>{let u=0;while(!u)u=R();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*R());};
const codes=Object.keys(A.STACKS),CTX=A.CTX_ALL,DB=A.DES_BIP,DE=A.DES_EI_ALL;
function desGap(q){ if(q.mfc||q.h2h) return A.desOf(q.ida||q.id.split(/[:+]/)[1])-A.desOf(q.idb||q.id.split("+")[1]);
 if(q.ei){const r=DE[q.id];return r?(q.fa==="E"?r[0]-r[1]:r[1]-r[0]):0;} const r=DB[q.id]; return r?(q.fa===q.pair.split("-")[0]?r[0]-r[1]:r[1]-r[0]):0;}
function person(code){const st=A.stackOf(code),s={},amp=0.35+R();A.FUNCS.forEach(f=>s[f]=0.45*g());s[st[0]]+=1.2*amp;s[st[1]]+=0.8*amp;s[st[3]]-=0.5*amp;
 return {s,e:(code[0]==="E"?1:-1)*(0.3+0.9*R())+0.3*g(),noise:0.5+R(),mid:R()<0.3?0.5:0.3,gam:R()<0.5?1.5*R():0};}
function ans(p,q){let d=q.ei?(q.fa==="E"?p.e:-p.e):(p.s[q.fa]-p.s[q.fb]); if(p.gam)d+=p.gam*desGap(q); d+=p.noise*g(); return d>1?2:d>p.mid?1:d>-p.mid?0:d>-1?-1:-2;}
function run(p,sd){const chosen=[];const n=1+Math.floor(R()*3);while(chosen.length<n){const c=CTX[Math.floor(R()*CTX.length)];if(chosen.indexOf(c)<0)chosen.push(c);}
 const L=64,sur=A.pickSurprise(sd,chosen,A.surCount(chosen.length,L));let set=A.buildSet(sd,chosen,L,sur),a=set.map(q=>ans(p,q));const m=set.length;
 const pr=A.buildProbes(set,a,sd,{chosen,sur,dropped:[]});set=set.concat(pr);a=a.concat(pr.map(q=>ans(p,q)));const V=A.verify(set,a,m);const rk=V.show.rank;
 return {top:rk[0].code,st:A.stabilityOf(rk),status:V.status};}
const B={};let conf=0,confOK=0;
for(let k=0;k<N;k++){const code=codes[k%16],p=person(code),r1=run(p,'a'+k),r2=run(p,'b'+k);const b=r1.st.label+' (claims '+r1.st.p+'%)';B[b]=B[b]||{n:0,same:0,truth:0};B[b].n++;if(r1.top===r2.top)B[b].same++;if(r1.top===code)B[b].truth++;
 if(r1.status==='confirmed'){conf++;if(r1.top===code)confOK++;}}
for(const k in B) console.log(k,'n',B[k].n,'sameOnRetest',Math.round(B[k].same/B[k].n*100)+'%','matchesTrue',Math.round(B[k].truth/B[k].n*100)+'%');
console.log('confirmed',conf,'of',N,'precision',(confOK/conf).toFixed(3));
