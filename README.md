# Crocette di Complessità

Affermazioni vero/falso dagli appelli di Complessità computazionale, con motivazioni verificate.

**Pagina:** https://gianbo01.github.io/crocette-complessita/

## Com'è fatto

| Dove | Cosa |
|---|---|
| `crocette/*.md` | i testi degli appelli, uno per file |
| `data/crocette-map.json` | per ogni affermazione, l'id della sua motivazione |
| `data/parte*.json` | le motivazioni verificate (le parti successive correggono le precedenti) |
| `app.template.html` | la pagina, senza le domande |
| `index.html` | la pagina pronta, generata: non modificarla a mano |

## Modificare

Per un errore in un testo o in una motivazione: apri una issue o una pull request.

Per rigenerare la pagina (serve Node.js):

```bash
node data/build.js   # scrive index.html
node data/test.js    # controlla l'autocorrezione
```

Se cambi il testo di un'affermazione, la build si ferma: prima ricontrolla che risposta e
motivazione valgano ancora, poi conferma con `node data/build.js --accetta`.
