// Rende leggibile il LaTeX dei testi in crocette/*.md, senza cambiarne il contenuto:
// ogni comando diventa il simbolo Unicode che rappresenta, e la markup Markdown
// (backtick, corsivo con _..._) viene tolta. Le parole restano quelle del file.

const SIMBOLI = {
  neq: '≠', ne: '≠', leq: '≤', le: '≤', geq: '≥', ge: '≥', nleq: '≰', ngeq: '≱',
  in: '∈', notin: '∉', subseteq: '⊆', subset: '⊂', supseteq: '⊇', cap: '∩', cup: '∪',
  setminus: '\\', wedge: '∧', land: '∧', vee: '∨', lor: '∨', neg: '¬',
  Rightarrow: '⟹', Leftarrow: '⟸', Leftrightarrow: '⟺', iff: '⟺', rightarrow: '→', to: '→',
  bigcup: '⋃', bigcap: '⋂',
  forall: '∀', exists: '∃', exist: '∃', nexists: '∄', infty: '∞', emptyset: '∅',
  cdot: '·', times: '×', approx: '≈', ldots: '…', dots: '…', vert: '|', mid: '|',
  Omega: 'Ω', Theta: 'Θ', epsilon: 'ε', varepsilon: 'ε', alpha: 'α', beta: 'β', delta: 'δ',
  phi: 'φ', varphi: 'φ', Phi: 'Φ', pi: 'π', Pi: 'Π', Sigma: 'Σ', iota: 'ι', lambda: 'λ',
  log: 'log', ',': ' ', ';': ' ', ' ': ' ', '!': '',
};
const DOPPIO = { A: '𝔸', B: '𝔹', C: 'ℂ', D: '𝔻', N: 'ℕ', P: 'ℙ', R: 'ℝ', X: '𝕏', Y: '𝕐', Z: 'ℤ' };

// Legge un argomento {…} bilanciato a partire da s[i] === '{'.
function argomento(s, i) {
  let prof = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') prof++;
    else if (s[j] === '}' && --prof === 0) return { dentro: s.slice(i + 1, j), fine: j + 1 };
  }
  return { dentro: s.slice(i + 1), fine: s.length };
}
// Legge l'argomento di ^ o _: un gruppo {…} oppure un solo carattere / comando.
function apice(s, i) {
  if (s[i] === '{') return argomento(s, i);
  const m = s.slice(i).match(/^\\[a-zA-Z]+|^./);
  return { dentro: m ? m[0] : '', fine: i + (m ? m[0].length : 0) };
}
const APICI = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾', n: 'ⁿ', i: 'ⁱ', k: 'ᵏ', c: 'ᶜ',
  O: 'ᴼ', P: 'ᴾ', T: 'ᵀ' };
const PEDICI = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎', k: 'ₖ', n: 'ₙ', i: 'ᵢ', T: 'ₜ', K: 'ₖ', t: 'ₜ' };
// Vero solo se TUTTA la stringa è un unico gruppo tra parentesi: "(a)" sì, "(a)/(b)" no.
function unGruppo(x) {
  if (x[0] !== '(' || x[x.length - 1] !== ')') return false;
  let prof = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === '(') prof++;
    else if (x[i] === ')' && --prof === 0 && i < x.length - 1) return false;
  }
  return true;
}
// Racchiude tra parentesi solo ciò che ne ha bisogno: "11", "n", "(a)" restano come sono.
const racchiudi = (x) => (/^[\p{L}\p{N}]+$/u.test(x) || unGruppo(x) ? x : `(${x})`);
// Comandi incontrati e non riconosciuti: i test pretendono che l'insieme resti vuoto.
const sconosciuti = new Set();
// Apice o pedice: in Unicode se ogni carattere ha la sua forma, altrimenti ^(…) / _…
function scrivi(segno, x) {
  const mappa = segno === '^' ? APICI : PEDICI;
  if (x && [...x].every((ch) => ch in mappa)) return [...x].map((ch) => mappa[ch]).join('');
  if (segno === '_' && /^[\p{L}\p{N}]+$/u.test(x)) return `_${x}`;
  // Negli esponenti ogni termine di più caratteri va chiuso: a^(nᵏ), non a^nᵏ.
  return `${segno}${[...x].length === 1 || unGruppo(x) ? x : `(${x})`}`;
}

function math(s) {
  let out = '';
  for (let i = 0; i < s.length;) {
    const c = s[i];
    if (c === '\\') {
      const m = s.slice(i + 1).match(/^[a-zA-Z]+|^./);
      const nome = m ? m[0] : '';
      i += 1 + nome.length;
      if (nome === 'mathbb' || nome === 'mathcal' || nome === 'mathrm' || nome === 'text' || nome === 'textbf' || nome === 'operatorname') {
        const a = argomento(s, i); i = a.fine;
        out += nome === 'mathbb' ? [...a.dentro].map((ch) => DOPPIO[ch] ?? ch).join('') : math(a.dentro);
      } else if (nome === 'overline' || nome === 'bar') {
        const a = argomento(s, i); i = a.fine;
        out += [...math(a.dentro)].map((ch) => ch + '̅').join('');
      } else if (nome === 'frac') {
        const n = argomento(s, i); const d = argomento(s, n.fine); i = d.fine;
        const frazione = `${racchiudi(math(n.dentro))}/${racchiudi(math(d.dentro))}`;
        if (/[\p{L}\p{N}]$/u.test(out)) out += ' ';
        // \frac{2}{3}n è (2/3)·n, non 2/(3n): se segue un fattore, la frazione va chiusa.
        out += /^\s*[\p{L}\p{N}(]/u.test(s.slice(i)) ? `(${frazione})` : frazione;
      } else if (nome === 'not') {
        const m2 = s.slice(i).match(/^\s*\\([a-zA-Z]+)/);
        if (m2 && (m2[1] === 'le' || m2[1] === 'leq')) { out += '≰'; i += m2[0].length; }
        else out += '¬';
      } else if (nome === 'log') {
        out += 'log ';
      } else if (nome in SIMBOLI) {
        out += SIMBOLI[nome];
        if (/^[a-zA-Z]+$/.test(nome) && /^[a-zA-Z0-9{]/.test(s[i] ?? '')) out += ' ';
      } else {
        out += nome; // comando sconosciuto: lo si lascia leggibile invece di perderlo
        if (/^[a-zA-Z]+$/.test(nome)) sconosciuti.add(nome);
      }
    } else if (c === '^' || c === '_') {
      const a = apice(s, i + 1); i = a.fine;
      out = out.replace(/\s+$/, '') + scrivi(c, math(a.dentro).trim());
    } else if (c === '{' || c === '}') {
      i++;
    } else {
      out += c; i++;
    }
  }
  return out;
}

function renderizza(testo) {
  let t = String(testo).replace(/`([^`]*)`/g, '$1');
  // $…$ → matematica; il resto è Markdown: si toglie il corsivo _parola_.
  t = t.split(/(\$[^$]*\$)/g).map((pezzo) =>
    pezzo.startsWith('$') && pezzo.endsWith('$') && pezzo.length > 1
      ? math(pezzo.slice(1, -1))
      : pezzo.replace(/(^|[\s(])_([^_\n]+)_(?=[\s.,;:)]|$)/g, '$1$2'),
  ).join('');
  // Spazi uniformi attorno a relazioni e connettivi ("𝔸∈ NP" → "𝔸 ∈ NP"),
  // lasciando attaccati i pedici delle riduzioni ("≤ₜ").
  t = t.replace(/\s*([∈∉≤≥≰≠⊆⊂∩∪∧∨⟹⟸⟺=][ₜₖ]?)\s*/g, ' $1 ');
  // Pulizia degli spazi senza toccare le parole: "( x )" diventa "(x)".
  return t.replace(/\s*\n\s*/g, ' ').replace(/\(\s+/g, '(').replace(/\s+\)/g, ')')
    .replace(/\s+([,.;:])/g, '$1').replace(/\s+([_^₀-₉ₜₖ])/g, '$1').replace(/[ \t]{2,}/g, ' ').trim();
}

module.exports = { renderizza, sconosciuti };
