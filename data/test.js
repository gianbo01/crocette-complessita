// Controlla la logica di autocorrezione estraendola dal template, così da testare
// esattamente il codice che finisce in pagina.  Esegui con: node data/test.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const tpl = fs.readFileSync(path.join(__dirname, '..', 'app.template.html'), 'utf8');
const domande = JSON.parse(fs.readFileSync(path.join(__dirname, 'domande.json'), 'utf8'));

// I blocchi da SIMBOLI a verificaChiavi sono contigui nel template.
const da = tpl.indexOf('const SIMBOLI = [');
const a = tpl.indexOf('function promptCorrezione(');
assert.ok(da !== -1 && a > da, 'non trovo il blocco di normalizzazione nel template');
const mod = { exports: {} };
new Function('module', 'DOMANDE', tpl.slice(da, a) + '\nmodule.exports = { normalizza, parole, verificaChiavi, scegliEsame, SCHEMI_GUIDA, spezzaNegati };')(mod, domande);
const { normalizza, parole, verificaChiavi, scegliEsame, SCHEMI_GUIDA, spezzaNegati } = mod.exports;

let falliti = 0;
const prova = (nome, fn) => {
  try { fn(); console.log('  ✓ ' + nome); }
  catch (e) { falliti++; console.error('  ✗ ' + nome + '\n      ' + e.message.split('\n').join('\n      ')); }
};
const uguali = (x, y) => assert.deepStrictEqual(parole(x), parole(y));
const diversi = (x, y) => assert.notDeepStrictEqual(parole(x), parole(y));

prova('spaziatura e maiuscole non contano', () => {
  uguali('P = NP', 'p   =   np');
  uguali('Teorema del Gap', 'teorema  del gap');
});

prova('gli accenti non contano', () => {
  uguali('polinomialità', 'POLINOMIALITA');
});

prova('le varianti dei simboli coincidono', () => {
  uguali('P ⟹ NP', 'P => NP');
  uguali('NP ⊆ co-NP', 'NP <= co-NP');
  uguali('A ∈ NP', 'A in NP');
});

prova('la negazione NON viene persa in NFD', () => {
  diversi('P ≠ NP', 'P = NP');
  diversi('A ∉ co-NP', 'A ∈ co-NP');
  diversi('TAU ≰ SAT', 'TAU ⊆ SAT');
  uguali('P ≠ NP', 'P != NP');
});

prova('le flessioni italiane vengono assorbite', () => {
  const d = { chiavi: ['P chiusa per complemento'] };
  assert.ok(verificaChiavi(d, 'perché P è chiusa per complemento')[0].trovata);
  assert.ok(verificaChiavi(d, 'la chiusura di P per complementazione')[0].trovata);
});

prova('le parole di una chiave possono essere sparse e in altro ordine', () => {
  const d = { chiavi: ['teorema del gap', 'P = NP'] };
  const r = verificaChiavi(d, 'Per il gap, questo teorema dà P=NP.');
  assert.deepStrictEqual(r.map((x) => x.trovata), [true, true]);
});

prova('verificaChiavi non inventa corrispondenze', () => {
  assert.strictEqual(verificaChiavi({ chiavi: ['teorema di Savitch'] }, 'Non ne ho idea.')[0].trovata, false);
  assert.strictEqual(verificaChiavi({ chiavi: ['NP = co-NP'] }, 'Concludo che P = NP.')[0].trovata, false);
});

// Le chiavi guidano l'indizio dell'autocorrezione: se una chiave non compare
// nemmeno nella propria motivazione di riferimento, è formulata male.
prova('ogni chiave compare nella propria motivazione di riferimento', () => {
  const buchi = [];
  for (const d of domande) {
    const testo = d.testo + ' ' + d.spiegazione;
    for (const { chiave, trovata } of verificaChiavi(d, testo)) {
      if (!trovata) buchi.push(`${d.id} → «${chiave}»`);
    }
  }
  assert.strictEqual(buchi.length, 0,
    `${buchi.length} chiavi assenti dalla loro motivazione:\n` + buchi.join('\n'));
});

prova('simulazione: 10 affermazioni, niente varianti della stessa, al più 2 per schema', () => {
  for (let i = 0; i < 200; i++) {
    const es = scegliEsame(domande);
    assert.strictEqual(es.length, 10);
    assert.strictEqual(new Set(es.map((d) => d.id.split('~')[0])).size, 10, 'due varianti della stessa domanda');
    const perSchema = {};
    for (const d of es) perSchema[d.schema] = (perSchema[d.schema] ?? 0) + 1;
    assert.ok(Object.values(perSchema).every((n) => n <= 2), JSON.stringify(perSchema));
  }
});

prova('ogni schema ha una guida e almeno un esempio VERO e uno FALSO', () => {
  for (const d of domande) assert.ok(SCHEMI_GUIDA[d.schema], `${d.id}: schema «${d.schema}» senza guida`);
  for (const [slug, g] of Object.entries(SCHEMI_GUIDA)) {
    for (const campo of ['nome', 'forma', 'procedura', 'trappola']) assert.ok(g[campo], `${slug}: manca ${campo}`);
    const dom = domande.filter((d) => d.schema === slug && !d.id.includes('~'));
    assert.ok(dom.some((d) => d.risposta === 'VERO') && dom.some((d) => d.risposta === 'FALSO'), `${slug}: servono esempi VERO e FALSO`);
  }
});

prova('complemento: la barra combinante diventa un pezzo «negato» senza perdere testo', () => {
  assert.deepStrictEqual(spezzaNegati('P = NP'), [['P = NP', false]]);
  assert.deepStrictEqual(spezzaNegati('Se 𝔸 ≤ 𝔹\u0305 allora'), [['Se 𝔸 ≤ ', false], ['𝔹', true], [' allora', false]]);
  assert.deepStrictEqual(spezzaNegati('X\u0304 ≤ Y\u0304'), [['X', true], [' ≤ ', false], ['Y', true]]);
  assert.deepStrictEqual(spezzaNegati(''), [['', false]]);
  // Nessuna barra deve restare nei testi: ogni domanda si ricompone uguale, barre a parte.
  for (const d of domande) for (const t of [d.testo, d.spiegazione]) {
    const pezzi = spezzaNegati(t);
    assert.ok(pezzi.every(([x]) => !/[\u0304\u0305]/.test(x)), `${d.id}: barra combinante rimasta`);
    assert.strictEqual(pezzi.map(([x]) => x).join(''), t.replace(/[\u0304\u0305]/g, ''));
  }
});

// --- resa dei testi di crocette/: LaTeX → Unicode senza perdere contenuto ---
const { renderizza } = require('./latex');
const { leggiCrocette } = require('./crocette');

prova('LaTeX: relazioni, classi e complementi', () => {
  assert.strictEqual(renderizza('Se $\\mathbb{A}\\leq\\overline{\\mathbb{B}}$ allora $\\mathbb{A}\\notin co-NP$'),
    'Se 𝔸 ≤ 𝔹̅ allora 𝔸 ∉ co-NP');
  assert.strictEqual(renderizza('$NP \\neq co-NP \\Rightarrow P \\neq NP \\cap co-NP$'), 'NP ≠ co-NP ⟹ P ≠ NP ∩ co-NP');
});

prova('LaTeX: \\frac{2}{3}n resta (2/3)n e non diventa 2/(3n)', () => {
  assert.strictEqual(renderizza('taglia $\\frac{2}{3}n$ allora'), 'taglia (2/3)n allora');
  assert.strictEqual(renderizza('taglia $\\frac{n}{2}$'), 'taglia n/2');
});

prova('LaTeX: apici, pedici e riduzioni', () => {
  assert.strictEqual(renderizza('$\\mathbb{A} \\leq_T \\mathbb{B}$'), '𝔸 ≤ₜ 𝔹');
  assert.strictEqual(renderizza('$x_1, x_2$ e $\\phi^{(n)}$'), 'x₁, x₂ e φ⁽ⁿ⁾');
  assert.strictEqual(renderizza('$O(a^{n^{k}})$'), 'O(a^(nᵏ))');
  assert.strictEqual(renderizza('$\\Omega(n^{\\log n})$'), 'Ω(n^(log n))');
  assert.strictEqual(renderizza('$\\mathbb{A} \\not\\le \\mathbb{B}$'), '𝔸 ≰ 𝔹');
});

prova('LaTeX: una frazione nell\'esponente resta nell\'esponente', () => {
  // (a)/(b) inizia e finisce con una parentesi ma NON è un gruppo unico: va racchiusa.
  assert.strictEqual(renderizza('$\\Omega(n+n^{\\frac{\\log \\log n}{\\log n}})$'), 'Ω(n+n^((log log n)/(log n)))');
  assert.strictEqual(renderizza('$\\Omega(\\frac{1}{n^{\\log{n}}})$'), 'Ω(1/(n^(log n)))');
});

prova('LaTeX: numeri e simboli senza parentesi superflue', () => {
  assert.strictEqual(renderizza('$\\frac{11}{10}$-approssimazione'), '11/10-approssimazione');
  assert.strictEqual(renderizza('$\\bigcup_{k>0} TIME(2^{n^{k}})$'), '⋃_(k>0) TIME(2^(nᵏ))');
});

prova('Markdown: backtick e corsivo tolti, parole intatte', () => {
  assert.strictEqual(renderizza('Se `A` è `NP-completo` e _yes_'), 'Se A è NP-completo e yes');
});

prova('crocette/: tutte le affermazioni lette, nessun LaTeX residuo', () => {
  const voci = leggiCrocette(path.join(__dirname, '..', 'crocette'));
  assert.ok(voci.length >= 144, `lette solo ${voci.length} affermazioni`);
  const sporche = voci.filter((v) => /[$`{}]|\\[a-zA-Z]/.test(v.testo));
  assert.strictEqual(sporche.length, 0, sporche.map((v) => `${v.chiave}: ${v.testo}`).join('\n'));
  const senzaEsito = voci.filter((v) => !['VERO', 'FALSO', 'IRRISOLTA'].includes(v.esito));
  assert.strictEqual(senzaEsito.length, 0, senzaEsito.map((v) => `${v.chiave} «${v.esito}»`).join(', '));
  // Ogni intestazione che parla di assumere qualcosa deve produrre un'ipotesi leggibile.
  const fs = require('fs');
  for (const file of new Set(voci.map((v) => v.file))) {
    const testa = fs.readFileSync(path.join(__dirname, '..', 'crocette', file), 'utf8').split(/\n\s*(?:#+\s*)?1\.\s/)[0];
    const ip = voci.find((v) => v.file === file).ipotesi;
    if (/assum/i.test(testa)) assert.match(ip, /^Assumendo [^$\\]+$/, `${file}: ipotesi non letta dall'intestazione («${ip}»)`);
    else assert.strictEqual(ip, '', `${file}: ipotesi inventata «${ip}»`);
  }
  const { sconosciuti } = require('./latex');
  assert.strictEqual(sconosciuti.size, 0, `comandi LaTeX non riconosciuti: ${[...sconosciuti].join(', ')}`);
});

if (falliti) { console.error(`\n${falliti} controlli falliti`); process.exit(1); }
console.log(`\n✓ tutti i controlli passati (${domande.length} domande)`);
