# รวมข้อใหม่จากผู้เขียน w1..w5 เป็น r12/draft.json (ยังไม่มีคะแนนความน่าปรารถนาจากแผง)
import json,glob,os
B='r12/'
bank=json.load(open(B+'bank_r11.json'))
FN=["Ni","Ne","Si","Se","Ti","Te","Fi","Fe"]; PR=["Ni-Se","Ne-Si","Ti-Fe","Te-Fi"]
cnt={}
def base_st(c,f): return len(bank['statements'].get(c,{}).get(f,[]))
def base_bp(c,p): return len(bank['bips'].get(c,{}).get(p,[]))
items=[]; rewrites={}; problems=[]
for fn in sorted(glob.glob(B+'w[0-9].json')):
    W=json.load(open(fn)); sd=W.get('selfDes',{}); src=os.path.basename(fn)[:-5]
    for c,byf in W.get('statements',{}).items():
        for f in FN:
            for k,x in enumerate(byf.get(f,[])):
                t=x['t'] if isinstance(x,dict) else x
                key=('st',c,f); n=cnt.get(key,0); cnt[key]=n+1
                items.append({'id':f+c+str(base_st(c,f)+n),'kind':'st','ctx':c,'fn':f,'t':t,'scene':(x.get('scene') if isinstance(x,dict) else 'plain'),'selfDes':sd.get(f'{c}|{f}|{k}'),'src':src})
    for c,byp in W.get('bips',{}).items():
        for p in PR:
            for k,x in enumerate(byp.get(p,[])):
                key=('bp',c,p); n=cnt.get(key,0); cnt[key]=n+1
                items.append({'id':'B'+p.replace('-','')+('' if c=='o' else c)+str(base_bp(c,p)+n),'kind':'bip','ctx':c,'pair':p,'a':x['a'],'b':x['b'],'scene':x.get('scene','plain'),'src':src})
    for i,v in W.get('rewrites',{}).items(): rewrites[i]=dict(v,src=src)
ids=[x['id'] for x in items]; assert len(ids)==len(set(ids)),'dup ids'
for x in items:
    L=[len(x['t'])] if x['kind']=='st' else [len(x['a']),len(x['b'])]
    if max(L)>140: problems.append((x['id'],'long',max(L)))
    if x['kind']=='bip' and max(L)/max(1,min(L))>1.3: problems.append((x['id'],'lenratio',round(max(L)/min(L),2)))
json.dump({'items':items,'rewrites':rewrites},open(B+'draft.json','w'),ensure_ascii=False,indent=0)
from collections import Counter
print('items',len(items),Counter((x['kind'],x['ctx']) for x in items))
print('scenes',Counter(x['scene'] for x in items)); print('rewrites',len(rewrites)); print('problems',problems[:30],len(problems))
