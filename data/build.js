// Costruisce il banco domande e la pagina.
//
//   crocette/*.md          → i TESTI delle affermazioni, fonte di verità: non si toccano,
//                            vengono solo resi leggibili (LaTeX → Unicode, vedi latex.js)
//   data/crocette-map.json → per ogni affermazione, l'id della motivazione verificata
//   data/parte*.json       → le motivazioni verificate (parte6 corregge e integra le altre)
//
// Esegui con: node data/build.js
const fs = require('fs');
const path = require('path');
const { leggiCrocette } = require('./crocette');

const DIR = __dirname;
const RADICE = path.join(DIR, '..');
const ARGOMENTI = new Set([
  'classi-e-relazioni', 'co-NP', 'riduzioni', 'completezza',
  'approssimazione', 'self-reducibility', 'spazio', 'problemi-specifici',
]);
const FONTI = new Set(['ufficiale', 'studenti', 'derivata']);
// Lo «schema» è la forma logica della domanda (la guida è SCHEMI_GUIDA nel template).
const SCHEMI = new Set([
  'collasso', 'verso-separazione', 'classi-note', 'approssimazione',
  'quantificatori', 'riduzioni-chiusure', 'lower-bound', 'definizioni-fatti',
]);
const schemi = JSON.parse(fs.readFileSync(path.join(DIR, 'schemi.json'), 'utf8'));

// Ipotesi dichiarate nell'intestazione dell'esercizio, valide per tutto l'appello.
// L'ipotesi di un appello si legge dall'intestazione del suo .md («Si assuma che …»).
// Qui solo i file la cui intestazione non la riporta ma il PDF d'esame sì.
const IPOTESI_DI_RISERVA = {
  'Appello del 3 Febbraio 2023.md': 'Assumendo NP ≠ co-NP', // PDF: «Assumendo co-NP ≠ NP»
};
const ipotesiDi = (v) => v.ipotesi || IPOTESI_DI_RISERVA[v.file] || '';

// Domande vere di esami che non compaiono in crocette/ (prove 2014–2017), ricavate dai
// PDF d'esame. Per tenere solo crocette/, svuota questa lista.
const EXTRA = [
  'vf-logspace-red-implica-npc', 'vf-riduzione-conserva-esponente', 'vf-3sat-non-leq-2sat',
  'vf-algoritmo-nd-per-tautologia', 'vf-notriangle-in-nl', 'vf-notriangle-nl-completo',
  'vf-2psat-sigma2-implica-pi3-ph',
];

// --- motivazioni verificate, indicizzate per id (le parti successive sovrascrivono) ---
const libreria = new Map();
for (const p of ['parte1', 'parte2', 'parte3', 'parte4', 'parte5', 'parte6']) {
  for (const r of JSON.parse(fs.readFileSync(path.join(DIR, `${p}.json`), 'utf8'))) {
    const unito = { ...(libreria.get(r.id) ?? {}), ...r };
    for (const [k, v] of Object.entries(unito)) if (v === null) delete unito[k];
    libreria.set(r.id, unito);
  }
}

const mappa = JSON.parse(fs.readFileSync(path.join(DIR, 'crocette-map.json'), 'utf8'));
const voci = leggiCrocette(path.join(RADICE, 'crocette'));
const nomeAppello = (a) => a.replace(/^Appello del /, '');
// Due affermazioni sono «la stessa» se il testo coincide a meno di spazi e punto finale.
const norm = (s) => s.replace(/\s+/g, ' ').trim().replace(/[.;]+$/, '').toLowerCase();

const errori = [];
const esclusi = [];
const divergenze = [];

// Ogni motivazione vale per il testo su cui è stata verificata. Se un .md cambia (anche
// un solo simbolo, ⊆ al posto di ≠), la motivazione abbinata può non valere più: la build
// si ferma finché non la si ricontrolla e si conferma con  node data/build.js --accetta
const FILE_VERIFICATI = path.join(DIR, 'testi-verificati.json');
const ACCETTA = process.argv.includes('--accetta');
const verificati = fs.existsSync(FILE_VERIFICATI) ? JSON.parse(fs.readFileSync(FILE_VERIFICATI, 'utf8')) : {};
const attuali = {};
const cambiati = [];
for (const v of voci) {
  const m = mappa[v.chiave];
  const id = typeof m === 'object' ? 'escludi' : m;
  const ipotesi = ipotesiDi(v);
  attuali[v.chiave] = { id, testo: v.testo, ipotesi };
  const prima = verificati[v.chiave];
  if (!prima) cambiati.push(`${v.chiave}: affermazione nuova  «${v.testo.slice(0, 80)}»`);
  else if (prima.testo !== v.testo) cambiati.push(`${v.chiave}: testo cambiato\n        prima: ${prima.testo}\n        ora:   ${v.testo}`);
  // Un'ipotesi aggiunta o tolta può ribaltare la risposta anche a testo invariato.
  else if (prima.ipotesi !== undefined && prima.ipotesi !== ipotesi) cambiati.push(`${v.chiave}: ipotesi cambiata «${prima.ipotesi || 'nessuna'}» → «${ipotesi || 'nessuna'}»`);
  else if (prima.id !== id) cambiati.push(`${v.chiave}: motivazione riabbinata ${prima.id} → ${id}`);
}
if (cambiati.length && !ACCETTA) {
  errori.push(`${cambiati.length} affermazioni da ricontrollare prima di pubblicare:\n      ` + cambiati.join('\n      ') +
    '\n    Verifica che risposta e motivazione valgano per il nuovo testo, poi: node data/build.js --accetta');
}

// --- crocette: ogni affermazione diventa una domanda; testi identici si accorpano ---
const perTesto = new Map();
for (const v of voci) {
  const m = mappa[v.chiave];
  if (m === undefined) { errori.push(`${v.chiave}: manca in crocette-map.json («${v.testo.slice(0, 60)}…»)`); continue; }
  if (typeof m === 'object') { esclusi.push(`${v.chiave}: ${m.escludi}`); continue; }
  const r = libreria.get(m);
  if (!r) { errori.push(`${v.chiave}: l'id «${m}» non esiste in parte*.json`); continue; }

  if (v.esito && v.esito !== r.risposta) {
    divergenze.push(`${v.chiave}: nel file ${v.esito}, verificata ${r.risposta}  («${v.testo.slice(0, 70)}…»)`);
  }
  // Si accorpano solo se vale anche la stessa ipotesi: «NSPACE(log n) ⊆ P» sotto NP ≠ co-NP
  // e senza ipotesi restano due domande distinte.
  const k = `${norm(v.testo)}|${ipotesiDi(v)}`;
  const g = perTesto.get(k);
  if (g) {
    if (g.base !== m) errori.push(`${v.chiave}: stesso testo di ${g.chiavi[0]} ma motivazione diversa (${m} ≠ ${g.base})`);
    g.appelli.push(nomeAppello(v.appello)); g.chiavi.push(v.chiave);
  } else {
    perTesto.set(k, { base: m, testo: v.testo, appelli: [nomeAppello(v.appello)], chiavi: [v.chiave], ipotesi: ipotesiDi(v) });
  }
}

// Più testi diversi possono condividere la stessa motivazione: id stabile con suffisso ~2, ~3…
const usiPerId = new Map();
const domande = [];
for (const g of [...perTesto.values()].sort((a, b) => a.chiavi[0].localeCompare(b.chiavi[0], 'it'))) {
  const r = libreria.get(g.base);
  const n = (usiPerId.get(g.base) ?? 0) + 1;
  usiPerId.set(g.base, n);
  const ipotesi = g.ipotesi; // uguale per tutto il gruppo: fa parte della chiave di accorpamento
  domande.push({
    ...r,
    id: n === 1 ? g.base : `${g.base}~${n}`,
    testo: g.testo,
    appelli: g.appelli,
    ipotesi,
    schema: schemi[g.base],
    opzioni: ['VERO', 'FALSO'],
    origine: g.chiavi,
  });
}
for (const id of EXTRA) {
  const r = libreria.get(id);
  if (!r) { errori.push(`EXTRA: l'id «${id}» non esiste`); continue; }
  domande.push({ ...r, schema: schemi[id], opzioni: ['VERO', 'FALSO'], origine: ['pdf d\'esame'] });
}

// --- controlli di integrità ---
const visti = new Map();
for (const d of domande) {
  const dove = d.id;
  for (const campo of ['id', 'testo', 'risposta', 'spiegazione', 'fonte']) {
    if (typeof d[campo] !== 'string' || !d[campo].trim()) errori.push(`${dove}: campo «${campo}» mancante o vuoto`);
  }
  for (const campo of ['appelli', 'chiavi', 'argomenti']) {
    if (!Array.isArray(d[campo]) || d[campo].length === 0) errori.push(`${dove}: «${campo}» deve essere un array non vuoto`);
  }
  if (!['VERO', 'FALSO'].includes(d.risposta)) errori.push(`${dove}: risposta «${d.risposta}» non è VERO/FALSO`);
  if (!FONTI.has(d.fonte)) errori.push(`${dove}: fonte «${d.fonte}» non valida`);
  for (const a of d.argomenti ?? []) if (!ARGOMENTI.has(a)) errori.push(`${dove}: argomento sconosciuto «${a}»`);
  if (!SCHEMI.has(d.schema)) errori.push(`${dove}: schema «${d.schema}» mancante o non valido in schemi.json`);
  if (/[\\$`]|\\[a-zA-Z]/.test(d.testo.replace(/ \\ /g, ''))) errori.push(`${dove}: LaTeX non convertito nel testo: ${d.testo}`);
  if (visti.has(d.id)) errori.push(`${dove}: id duplicato`); else visti.set(d.id, true);
}
// Ogni voce della mappa deve corrispondere a un'affermazione esistente.
const chiaviVoci = new Set(voci.map((v) => v.chiave));
for (const k of Object.keys(mappa)) if (!k.startsWith('_') && !chiaviVoci.has(k)) errori.push(`crocette-map.json: «${k}» non esiste in crocette/`);
const idBase = new Set(domande.map((d) => d.id.split('~')[0]));
for (const k of Object.keys(schemi)) if (!idBase.has(k)) errori.push(`schemi.json: «${k}» non corrisponde a nessuna domanda`);

if (errori.length) {
  console.error(`✗ ${errori.length} problemi:\n  ` + errori.join('\n  '));
  process.exit(1);
}

fs.writeFileSync(path.join(DIR, 'domande.json'), JSON.stringify(domande, null, 2) + '\n');
if (ACCETTA) {
  fs.writeFileSync(FILE_VERIFICATI, JSON.stringify(attuali, null, 2) + '\n');
  console.log(`  confermati come verificati: ${cambiati.length} testi cambiati o nuovi`);
}

const conta = (sel) => domande.reduce((mm, d) => { for (const x of [sel(d)].flat()) mm.set(x, (mm.get(x) ?? 0) + 1); return mm; }, new Map());
const mostra = (mm) => [...mm].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join('  ');
console.log(`✓ ${domande.length} domande  (${voci.length} affermazioni in crocette/, ${esclusi.length} escluse, ${EXTRA.length} extra dai PDF)`);
console.log('  risposta:  ' + mostra(conta((d) => d.risposta)));
console.log('  fonte:     ' + mostra(conta((d) => d.fonte)));
console.log('  argomenti: ' + mostra(conta((d) => d.argomenti)));
console.log('  schemi:    ' + mostra(conta((d) => d.schema)));
console.log('  appelli:   ' + conta((d) => d.appelli).size + ' distinti');
if (divergenze.length) console.log(`\n  risposta nel file diversa da quella verificata (${divergenze.length}):\n    ` + divergenze.join('\n    '));
if (esclusi.length) console.log(`\n  escluse (${esclusi.length}):\n    ` + esclusi.join('\n    '));

const tpl = fs.readFileSync(path.join(RADICE, 'app.template.html'), 'utf8');
const marcatore = '/*__DOMANDE__*/[]';
if (!tpl.includes(marcatore)) { console.error('✗ marcatore __DOMANDE__ non trovato nel template'); process.exit(1); }
const html = tpl.replace(marcatore, () => JSON.stringify(domande));
fs.writeFileSync(path.join(RADICE, 'index.html'), html);
console.log('\n  pagina:    index.html (' + Math.round(html.length / 1024) + ' KB)');
