# usage: python3 rep.py FILE SPEC.json  ; SPEC = [[old,new],...]; matches with NBSP-insensitive " ๆ"
import sys, json
path, spec = sys.argv[1], json.load(open(sys.argv[2], encoding="utf-8"))
s = open(path, encoding="utf-8").read()
for old, new in spec:
    cands = [old, old.replace(" ๆ", " ๆ")]
    hit = [c for c in cands if s.count(c) == 1]
    if not hit:
        print("NOMATCH:", old[:80], [s.count(c) for c in cands]); sys.exit(1)
    s = s.replace(hit[0], new.replace(" ๆ", " ๆ") if hit[0] != old else new)
open(path, "w", encoding="utf-8").write(s)
print("ok", len(spec))
