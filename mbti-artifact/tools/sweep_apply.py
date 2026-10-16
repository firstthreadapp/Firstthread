import json,statistics as S,sys
B='r11/sweep/'
K=json.load(open(B+'key.json'));RA=json.load(open(B+'rateA.json'));RB=json.load(open(B+'rateB.json'))
m=lambda n:(RA[str(n)]+RB[str(n)])/2
anc=[(m(k['n']),k['known']) for k in K if k['kind']=='anc']
x=[a for a,_ in anc];y=[b for _,b in anc];mx,my=S.mean(x),S.mean(y)
b=sum((xi-mx)*(yi-my) for xi,yi in anc)/sum((xi-mx)**2 for xi in x);a=my-b*mx
print('anchor r %.2f raterAB r %.2f slope %.2f'%(S.correlation(x,y),S.correlation([RA[str(k['n'])] for k in K],[RB[str(k['n'])] for k in K]),b))
cal={k['id']:round(a+b*m(k['n']),2) for k in K if k['kind']=='new'}
F=json.load(open('r11/final.json'));items={i['id']:i for i in F['items']}
old={**F['fixDes'],**F['des']}
dst={d['id']:d for d in json.load(open(B+'dec_st.json'))};dbi={d['id']:d for d in json.load(open(B+'dec_bi.json'))}
flags={x['id']:x for x in json.load(open(B+'flags_all.json'))}
log=[];T=3.3
for id_,d in dst.items():
  if d['v']=='reject' or not d.get('t'): log.append((id_,'reject-defender'));continue
  n=cal[id_];o=old.get(id_);cat=flags.get(id_,{}).get('cat','')
  ok = 2.7<=n<=3.8 and (o is None or abs(n-T)<=abs(o-T)+0.15 or cat not in ('b',))
  if not (2.5<=n<=4.3): ok=False
  if not ok: log.append((id_,'reject-rating %.2f->%.2f'%(o or 0,n)));continue
  if id_ in items: items[id_]['t']=d['t'];F['des'][id_]=n
  else: F['fix'][id_]=d['t'];F['fixDes'][id_]=n
  log.append((id_,'adopt %.2f->%.2f'%(o or 0,n)))
for id_,d in dbi.items():
  if d['v']=='reject': log.append((id_,'reject-defender'));continue
  ei='E' in d
  s1,s2=('E','I') if ei else ('a','b')
  n=[cal[id_+'.'+s1],cal[id_+'.'+s2]]
  o=(F['desEI'] if ei else F['desBip']).get(id_,[3,3])
  gn,go=abs(n[0]-n[1]),abs(o[0]-o[1])
  if not (gn<=0.3 or gn<go-0.05) or min(n)<2.5 or max(n)>4.3: log.append((id_,'reject-rating gap %.2f->%.2f'%(go,gn)));continue
  if id_ in items:
    items[id_][s1]=d[s1];items[id_][s2]=d[s2]
  else: F['fix'][id_]={s1:d[s1],s2:d[s2]}
  (F['desEI'] if ei else F['desBip'])[id_]=n
  log.append((id_,'adopt gap %.2f->%.2f'%(go,gn)))
if '--write' in sys.argv: json.dump(F,open('r11/final.json','w'),ensure_ascii=False); json.dump(log,open(B+'apply_log.json','w'),ensure_ascii=False,indent=0)
from collections import Counter
print(Counter(l[1].split(' ')[0] for l in log))
for l in log:
  if l[1].startswith('reject-rating'): print(l)
