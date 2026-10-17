# ใช้คำตัดสินของผู้ตัดสินกับ draft แล้วจัดเลข id ข้อใหม่ใหม่ (หลังตัดข้อ) -> r12/judged.json
import json
B='r12/'
D=json.load(open(B+'draft.json')); bank=json.load(open(B+'bank_r11.json'))
dec={}
for f in ('judge_A.json','judge_B.json'):
    for d in json.load(open(B+'debate/'+f))['decisions']: dec[d['id']]=d
items=[];drop=[];applied=0
for x in D['items']:
    d=dec.get(x['id'])
    if d:
        if d['verdict']=='drop': drop.append(x['id']); continue
        if d['verdict']!='keep':
            if x['kind']=='st': x['t']=d['t']
            else: x['a'],x['b']=d['a'],d['b']
            applied+=1
    items.append(x)
# renumber
cnt={}
def base(kind,c,k): return len((bank['statements'] if kind=='st' else bank['bips']).get(c,{}).get(k,[]))
for x in items:
    k=x['fn'] if x['kind']=='st' else x['pair']; key=(x['kind'],x['ctx'],k); n=cnt.get(key,0); cnt[key]=n+1
    x['oid']=x['id']
    x['id']=(k+x['ctx']+str(base('st',x['ctx'],k)+n)) if x['kind']=='st' else ('B'+k.replace('-','')+('' if x['ctx']=='o' else x['ctx'])+str(base('bip',x['ctx'],k)+n))
rw={}
for i,v in D['rewrites'].items():
    d=dec.get(i)
    if d and d['verdict']=='drop': drop.append(i); continue
    v=dict(v)
    if d and d['verdict']!='keep':
        if 't' in v: v['t']=d['t']
        else: v['a'],v['b']=d['a'],d['b']
        applied+=1
    rw[i]=v
# flags on existing items not in draft (e.g. Siy1) -> new rewrites
extra=[i for i in dec if i not in {x['oid'] for x in items} and i not in D['rewrites'] and i not in drop and dec[i]['verdict'] not in ('keep','drop')]
for i in extra:
    d=dec[i]; rw[i]={'t':d['t']} if 't' in d else {'a':d['a'],'b':d['b']}
json.dump({'items':items,'rewrites':rw},open(B+'judged.json','w'),ensure_ascii=False,indent=0)
print('items',len(items),'dropped',len(drop),drop[:20],'applied',applied,'rewrites',len(rw),'extra',extra)
