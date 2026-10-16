// rating sheets for the whole final bank (function labels hidden to keep ratings blind)
const A = require(require("path").resolve(process.argv[2])), fs = require("fs"), out = process.argv[3];
const rows = [];
A.QUESTIONS.forEach(q => rows.push(`${q.id} | ${A.CTX_NAME[q.c] || q.c} | ${q.t}`));
A.BIPS.forEach(b => { rows.push(`${b.id}|a | ${A.CTX_NAME[b.c] || "ทั่วไป"} | ${b.ta}`); rows.push(`${b.id}|b | ${A.CTX_NAME[b.c] || "ทั่วไป"} | ${b.tb}`); });
A.EIS.forEach(e => { rows.push(`${e.id}|E | ทั่วไป | ${e.te}`); rows.push(`${e.id}|I | ทั่วไป | ${e.ti}`); });
// deterministic shuffle so similar items are not adjacent
let sd = 7; const rnd = () => { sd = (sd * 1103515245 + 12345) % 2147483648; return sd / 2147483648; };
for (let i = rows.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [rows[i], rows[j]] = [rows[j], rows[i]]; }
const h = Math.ceil(rows.length / 2);
[rows.slice(0, h), rows.slice(h)].forEach((r, i) => fs.writeFileSync(`${out}_${i + 1}.md`, `# Rating sheet ${i + 1} (${r.length} statements) — key | topic | statement\n\n` + r.join("\n") + "\n"));
console.log("statements to rate", rows.length, "sheets", h, rows.length - h);
