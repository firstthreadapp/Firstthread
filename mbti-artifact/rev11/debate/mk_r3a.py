import json,re
r = {
"Siz0":4.0,"BTiFej0|a":3.0,"Fek3":3.1,"BTiFeh0|b":3.6,"BTiFe1|b":3.6,"BTiFej0|b":4.0,"BTeFia0|b":2.4,
"Tis2":3.3,"Tiv3":3.0,"BTeFij0|a":3.2,"EIir5|E":4.1,"BTeFi7|b":2.7,"Fiw0":3.2,"BNiSei1|a":3.4,"Ser3":3.1,
"Tik1":3.2,"Sey0":3.5,"Nek5":2.8,"BTiFex0|a":3.3,"Fir3":3.4,"BNiSe4|a":3.6,"Fix4":3.2,"BNeSiy0|b":3.3,
"BTiFev0|b":3.6,"Nil2":4.0,"BTiFe6|a":3.0,"BTiFey0|b":3.8,"Tet1":3.3,"Siu1":2.9,"BTiFej1|a":2.9,"Nil4":3.3,
"Teb1":3.5,"BTiFed0|b":3.4,"Fet2":3.7,"BTeFi10|b":2.8,"Sej3":3.1,"BTiFeb0|a":2.6,"Tij3":3.5,"Neg2":3.1,
"Tik3":2.7,"BTiFe1|a":3.1,"Nij4":3.4,"Tek9":3.6,"BTiFeg0|b":3.8,"Sip0":3.0,"Fih3":3.2,"Tiq4":2.9,
"BTiFed0|a":2.6,"Tei1":3.5,"Tiz3":3.3,"BTeFia0|a":3.9,"Ned0":3.0,"Sew3":3.3,"BTiFe6|b":3.9,"Tek2":2.5,
"Fih1":3.5,"Fek2":3.6,"Sir4":3.7,"BTiFex0|b":3.8,"Fin2":2.6,"Nej2":3.1,"EIir0|E":3.6,"BTiFev0|a":2.8,
"BTeFi10|a":3.2,"Fej4":3.9,"EIir0|I":2.9,"BTiFej1|b":3.7,"Sek8":3.2,"BTiFe11|a":2.9,"BTiFen1|b":3.4,
"BTiFe3|a":2.7,"BTiFeu1|b":3.9,"BTeFij0|b":2.9,"EIir1|E":3.6,"Feg1":3.4,"BTiFeu0|b":3.5,"BTiFe3|b":3.7,
"EIir1|I":3.2,"BTiFeb0|b":3.7,"Tej1":3.1,"BTiFet0|b":3.9,"BTeFi3|a":3.6,"EIir2|I":3.0,"BTiFeu1|a":2.5,
"BTeFi3|b":3.0,"BTeFi7|a":3.5,"EIir5|I":3.0,"Fiy0":3.0,"Ter1":3.1,"Siv0":3.0,"BTiFen1|a":2.7,"Tim1":3.3,
"Nef1":3.1,"BTiFeh1|a":3.0,"BTiFeg0|a":3.0,"BNiSei1|b":3.2,"BTiFey1|a":3.2,"Nij5":3.2,"Fij5":2.9,
"BTiFey1|b":3.7,"Tiq5":2.9,"Fix3":3.5,"Fiw5":3.5,"BTiFeh0|a":3.1,"Nek8":2.8,"BTiFe11|b":4.1,"Fez4":3.4,
"Niu0":3.2,"EIir2|E":3.6,"Fig1":3.1,"Fiu4":2.9,"BTiFet0|a":2.9,"BNiSe4|b":3.0,"Tek7":3.8,"BTiFey0|a":2.8,
"BTiFeu0|a":3.0,"Tik5":2.9,"BNeSiy0|a":3.5,"BTiFeh1|b":3.5,
}
d="/tmp/claude-0/-home-user-Firstthread/e931de2c-f018-5589-abea-b2596fdb8974/scratchpad/r11/debate/"
keys=[l.split(" | ")[0].strip() for l in open(d+"r3_sheet.md",encoding="utf-8") if " | " in l and not l.startswith("#")]
print(len(keys),len(r),set(keys)^set(r))
json.dump({k:r[k] for k in keys},open(d+"r3_rate_a.json","w",encoding="utf-8"),ensure_ascii=False,indent=0)
j=json.load(open(d+"r3_rate_a.json",encoding="utf-8")); print(len(j)==len(keys))
