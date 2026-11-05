// Legge crocette/*.md: numero, testo (reso leggibile), esito proposto nel file.
// I testi sono la fonte di verità e non vengono modificati, solo resi (LaTeX → Unicode).
const fs = require('fs');
const path = require('path');
const { renderizza } = require('./latex');

const HEADER = /^\s*(?:#+\s*)?(\d+)\.\s+(.*\S)\s*$/;
const ESITO = /\*\*Esito:\*\*\s*(.*\S)/;
const MOTIV = /\*\*Motivazione:\*\*/;

function leggiCrocette(dir) {
  const voci = [];
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()) {
    const righe = fs.readFileSync(path.join(dir, file), 'utf8').replace(/^\uFEFF/, '').split(/\r?\n/);
    const titolo = (righe.find((r) => /^#{1,2}\s/.test(r)) || file).replace(/^#+\s*/, '').replace(/\.md$/, '').trim();
    let cur = null;
    let stato = null;
    const preambolo = [];
    for (const riga of righe) {
      if (!riga.trim() || (/^#{1,2}\s/.test(riga) && !HEADER.test(riga))) continue;
      const h = riga.match(HEADER);
      if (h && !ESITO.test(riga) && !MOTIV.test(riga)) {
        cur = { chiave: `${file}#${h[1]}`, file, appello: titolo, n: +h[1], sorgente: h[2], esito: null };
        voci.push(cur); stato = 'testo'; continue;
      }
      if (!cur) { preambolo.push(riga.trim()); continue; }
      const e = riga.match(ESITO);
      if (e) { cur.esito = /vero/i.test(e[1]) ? 'VERO' : /falso/i.test(e[1]) ? 'FALSO' : /irrisolt/i.test(e[1]) ? 'IRRISOLTA' : e[1]; stato = 'fine'; continue; }
      if (MOTIV.test(riga)) { stato = 'fine'; continue; }
      if (stato === 'testo') cur.sorgente += '\n' + riga.trim();
    }
    // Ipotesi valida per tutto l'appello, dall'intestazione: «Si assuma che $NP \neq co-NP$»,
    // «…impone di assumere $NP \ne co-NP$», «Assumendo …».
    const m = preambolo.join(' ').match(/(?:si assuma che|assumere|assumendo)\s+(\$[^$]+\$|[^.]+)/i);
    const ipotesi = m ? `Assumendo ${renderizza(m[1]).replace(/[.\s]+$/, '')}` : '';
    for (const v of voci) if (v.file === file) v.ipotesi = ipotesi;
  }
  for (const v of voci) v.testo = renderizza(v.sorgente);
  return voci;
}

module.exports = { leggiCrocette };
