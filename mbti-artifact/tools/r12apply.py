# คะแนนแบบปิดตา -> ปรับเทียบด้วยข้อที่รู้คะแนน -> คัดข้อ -> r12/final.json
import json,statistics as S,sys
B='r12/'
J=json.load(open(B+'judged.json')); F=json.load(open('r11/final.json')); bank=json.load(open(B+'bank_r11.json'))
cal={}; report=[]
for k in (1,2):
    K=json.load(open(B+f'rate_key{k}.json')); RA=json.load(open(B+f'rateA{k}.json')); RB=json.load(open(B+f'rateB{k}.json'))
    m=lambda n:(RA[str(n)]+RB[str(n)])/2
    anc=[(m(r['n']),r['known']) for r in K if r['kind']=='anc']
    x=[a for a,_ in anc]; y=[b for _,b in anc]; mx,my=S.mean(x),S.mean(y)
    b=sum((xi-mx)*(yi-my) for xi,yi in anc)/sum((xi-mx)**2 for xi in x); a=my-b*mx
    report.append('sheet%d anchor r %.2f raterAB r %.2f slope %.2f'%(k,S.correlation(x,y),S.correlation([RA[str(r['n'])] for r in K],[RB[str(r['n'])] for r in K]),b))
    for r in K:
        if r['kind']!='anc': cal[r['id']]=round(a+b*m(r['n']),2)
print('\n'.join(report))
olddes={**F['fixDes'],**F['des']}
keep=[];rej=[]
for x in J['items']:
    if x['kind']=='st':
        d=cal[x['id']]; ok=2.6<=d<=4.0
        x['des']=d
    else:
        da,db=cal[x['id']+'.a'],cal[x['id']+'.b']; ok=abs(da-db)<=0.5 and min(da,db)>=2.5 and max(da,db)<=4.3
        x['desA'],x['desB']=da,db
    (keep if ok else rej).append(x)
# renumber kept
cnt={}
def base(kind,c,k): return len((bank['statements'] if kind=='st' else bank['bips']).get(c,{}).get(k,[]))
for x in keep:
    k=x['fn'] if x['kind']=='st' else x['pair']; key=(x['kind'],x['ctx'],k); n=cnt.get(key,0); cnt[key]=n+1
    x['id']=(k+x['ctx']+str(base('st',x['ctx'],k)+n)) if x['kind']=='st' else ('B'+k.replace('-','')+('' if x['ctx']=='o' else x['ctx'])+str(base('bip',x['ctx'],k)+n))
items={i['id']:i for i in F['items']}
for x in keep:
    if x['kind']=='st': F['items'].append({'id':x['id'],'kind':'st','ctx':x['ctx'],'fn':x['fn'],'t':x['t'],'des':x['des'],'scene':x['scene']}); F['des'][x['id']]=x['des']
    else: F['items'].append({'id':x['id'],'kind':'bip','ctx':x['ctx'],'pair':x['pair'],'a':x['a'],'b':x['b'],'scene':x['scene']}); F['desBip'][x['id']]=[x['desA'],x['desB']]
rwok=[];rwrej=[]
for i,v in J['rewrites'].items():
    if 't' in v:
        d=cal[i]; ok=2.5<=d<=4.2
        if ok:
            if i in items: items[i]['t']=v['t']; F['des'][i]=d
            else: F['fix'][i]=v['t']; F['fixDes'][i]=d
    else:
        da,db=cal[i+'.a'],cal[i+'.b']; ok=abs(da-db)<=0.5
        if ok:
            if i in items: items[i]['a'],items[i]['b']=v['a'],v['b']
            else: F['fix'][i]={'a':v['a'],'b':v['b']}
            F['desBip'][i]=[da,db]
    (rwok if ok else rwrej).append(i)
from collections import Counter
print('new kept',len(keep),Counter((x['kind'],x['scene']) for x in keep)); print('new rejected',len(rej),[(x['oid'],x.get('des',(x.get('desA'),x.get('desB')))) for x in rej])
print('rewrites adopted',len(rwok),'rejected',rwrej)
if '--write' in sys.argv: json.dump(F,open(B+'final.json','w'),ensure_ascii=False); json.dump({'cal':cal,'rejected':[x['oid'] for x in rej],'rw_rejected':rwrej},open(B+'apply_log.json','w'),ensure_ascii=False)
