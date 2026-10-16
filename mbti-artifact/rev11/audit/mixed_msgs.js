// how often the result header/stability/status send mixed signals (harsh respondent model, single run)
const A=require('../r11/index.app.js'); const N=+process.argv[2]||320;
let seed=55; const R=()=>{seed=(seed*1103515245+12345)%2147483648;return seed/2147483648;};
const g=()=>{let u=0;while(!u)u=R();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*R());};
const codes=Object.keys(A.STACKS),CTX=A.CTX_ALL;
function person(code){const st=A.stackOf(code),s={},amp=0.35+R();A.FUNCS.forEach(f=>s[f]=0.45*g());s[st[0]]+=1.2*amp;s[st[1]]+=0.8*amp;s[st[3]]-=0.5*amp;
 return {s,e:(code[0]==="E"?1:-1)*(0.3+0.9*R())+0.3*g(),noise:0.5+R(),mid:R()<0.3?0.5:0.3};}
function ans(p,q){let d=q.ei?(q.fa==="E"?p.e:-p.e):(p.s[q.fa]-p.s[q.fb]); d+=p.noise*g(); return d>1?2:d>p.mid?1:d>-p.mid?0:d>-1?-1:-2;}
let c={n:0,farButLowStab:0,farButMirrorClose:0,p2perfectNotConfirmed:0,confirmed:0,statusClose:0,closeMarginOnly:0,domNotTop2:0,mirrorReasonInverted:0};
for(let k=0;k<N;k++){const code=codes[k%16],p=person(code);const chosen=[CTX[k%CTX.length]];
 const sur=A.pickSurprise('m'+k,chosen,A.surCount(1,64));let set=A.buildSet('m'+k,chosen,64,sur),a=set.map(q=>ans(p,q));const m=set.length;
 const pre=A.functionScores(set,a); if(A.hiddenFor(pre)) continue;
 const pr=A.buildProbes(set,a,'m'+k,{chosen,sur,dropped:[]});set=set.concat(pr);a=a.concat(pr.map(q=>ans(p,q)));
 const V=A.verify(set,a,m),rk=V.show.rank,as=V.show.a,st=A.stabilityOf(rk);c.n++;
 if(!as.borderline&&st.level<=1)c.farButLowStab++; if(!as.borderline&&as.mirrorMargin<0.15)c.farButMirrorClose++;
 const ch=V.challenge.fit; if(ch.inf>=8&&ch.rate>=0.9&&V.status!=='confirmed')c.p2perfectNotConfirmed++;
 if(V.status==='confirmed')c.confirmed++; if(V.status==='close'){c.statusClose++; if(ch.inf>=8&&ch.rate>=0.8&&ch.rate>=V.challenge.rivalRate&&rk[0].score-rk[1].score<0.5)c.closeMarginOnly++;}
 const sc=V.show.sc.c,order=A.FUNCS.slice().sort((x,y)=>sc[y]-sc[x]),dom=A.STACKS[rk[0].code][0]; if(order.indexOf(dom)>1)c.domNotTop2++;
 const mir=A.mirrorOf(rk[0].code); const mi=rk.slice(0,3).findIndex(r=>r.code===mir); if(mi>0){const T=A.STACKS[rk[0].code]; if(sc[T[0]]<sc[T[1]]) c.mirrorReasonInverted++;}
}
console.log(JSON.stringify(c));
