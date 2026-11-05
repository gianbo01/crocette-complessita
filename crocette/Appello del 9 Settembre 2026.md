## Appello del 9 Settembre 2026

 1. Se 2-PLAYER SAT $\in co-NP$ allora 2-PLAYER SAT $\leq$ VERTEX COVER
	-   **Esito:** Vero.
	-   **Motivazione:** Il problema 2-PLAYER SAT (equivalente a Q-SAT) è PSPACE-completo. Se appartenesse a co-NP, tutta la classe PSPACE sarebbe contenuta in co-NP, portando al collasso PSPACE = co-NP. Poiché NP $\subseteq$ PSPACE, avremmo di conseguenza NP = co-NP = PSPACE. In questo scenario di collasso, 2-PLAYER SAT apparterrebbe a NP. Dato che VERTEX COVER è un problema NP-completo, ogni problema in NP (incluso 2-PLAYER SAT in questo scenario ipotetico) si riduce a esso in tempo polinomiale.
 2. Se per una funzione $\alpha$ esiste un algoritmo di approssimazione per MAXIMUM CLIQUE che su ogni grado ritorna in tempo polinomiale una clique di taglia non minore di $\alpha(|V|)$ volte la clique di taglia massima allora esiste anche un algoritmo di polinomiale che su ogni grafo ritorna un independent set di taglia non minore di $\alpha(|V|)$ volte il massimo independent set-V indica l'insieme dei vertici
	 -   **Esito:** Vero.
	-   **Motivazione:** Il problema della ricerca di una CLIQUE in un grafo $G$ è strutturalmente e matematicamente identico alla ricerca di un INDEPENDENT SET nel grafo complemento $\overline{G}$. La trasformazione da un grafo al suo complemento richiede tempo polinomiale e mantiene invariato il numero di vertici $\vert{}V\vert{}$. Pertanto, qualsiasi algoritmo di approssimazione per MAXIMUM CLIQUE può essere eseguito direttamente sul grafo complemento per ottenere un INDEPENDENT SET mantenendo esattamente lo stesso fattore di approssimazione $\alpha(\vert{}V\vert{})$.
 3. Se MINIMUN VERTX COVER $\in$ FPTAS allora esiste un algoritmo di 100/99-approsimazione per MAX-3-SAT
	 -   **Esito:** Vero.
	-   **Motivazione:** È noto che per MINIMUM VERTEX COVER non esiste un'approssimazione migliore di 7/6 (e non appartiene a FPTAS o PTAS) a meno che P $\ne$ NP. Se VERTEX COVER appartenesse a FPTAS (che permette approssimazioni arbitrarie $1+\epsilon$), implicherebbe il collasso P = NP. Se P = NP, ogni problema di ottimizzazione in NP, incluso MAX-3-SAT, potrebbe essere risolto in modo esatto in tempo polinomiale. Una risoluzione esatta corrisponde a un'approssimazione ottima ($r=1$), che soddisfa ampiamente la richiesta di un algoritmo di 100/99-approssimazione (poiché $1 \le 100/99$).
 4. $APX \neq FPTAS$ se e solo se $P \neq co-NP$
	-   **Esito:** Vero.
	-   **Motivazione:** Dalle definizioni delle classi, sappiamo che $P = co-NP$ equivale a dire $P = NP$. Se $P = NP$, la soluzione ottima esatta per ogni problema in NP può essere trovata in tempo polinomiale, facendo collassare l'intera gerarchia dell'approssimabilità in P = FPTAS = PTAS = APX. Al contrario, se $P \ne NP$ (e quindi $P \ne co-NP$), le classi rimangono separate perché esistono problemi fortemente inapprossimabili (come VERTEX COVER) che appartengono ad APX ma non a FPTAS. La doppia implicazione è quindi corretta.
 5. Se $P \neq NP$ allora per ogni problema $\mathbb{A}$ nella classe NP esiste un insieme di istanze $X$ di $\mathbb{A}$ tali che, per ogni algoritmo polinomiale $\Pi$ su ogni $x\in X$ è scorretta, ovvero $\mathbb{A}(x)\neq\Pi$
	-   **Esito:** Falso.
	-   **Motivazione:** L'affermazione generalizza dicendo "per _ogni_ problema $\mathbb{A}$ nella classe NP". Tuttavia, la classe P è un sottoinsieme di NP ($P \subseteq NP$). Per i problemi che appartengono a P (come EULERIAN CYCLE o REACHABILITY), esiste per definizione un algoritmo deterministico polinomiale in grado di risolverli correttamente su _tutte_ le istanze. Pertanto, l'affermazione fallisce per tutti i problemi di NP che si trovano anche in P.
 6. Se VERTEX COVER $\notin co-NP$ allora QUANTIFIED SAT non è co-NP-completo
	-   **Esito:** Vero.
	-   **Motivazione:** QUANTIFIED SAT (Q-SAT) è un problema PSPACE-completo. Se fosse co-NP-completo, implicherebbe il collasso PSPACE = co-NP. Dato che NP $\subseteq$ PSPACE, questo causerebbe a sua volta NP = co-NP. VERTEX COVER è un problema NP-completo; se si verificasse il collasso NP = co-NP, VERTEX COVER apparterrebbe a co-NP. Procedendo per modus tollens: se assumiamo la premessa che VERTEX COVER $\notin$ co-NP, allora significa che le classi non sono collassate e QUANTIFIED SAT non può essere co-NP-completo.
 7. Se per un $\alpha > 0$ esiste un algoritmo di $\alpha$-approsimazione per MINIMUM VERTEX COVER allora esiste anche un algoritmo di $\alpha$-approssimazione per MAXIMUM INDEPENDENT SET
	-   **Esito:** Falso.
	-   **Motivazione:** Sebbene i due problemi siano strettamente correlati per quanto riguarda le soluzioni esatte (un sottoinsieme è Vertex Cover se e solo se il suo complemento è un Independent Set), questa relazione non mantiene gli stessi fattori di approssimazione. Infatti, è noto che VERTEX COVER ammette una 2-approssimazione (appartiene ad APX), mentre INDEPENDENT SET non ammette alcuna approssimazione con fattore costante se $P \ne NP$.
 8. Se $NP \neq co-NP$ allora SMALL FACTOR non è NP-completo
	-   **Esito:** Vero.
	-   **Motivazione:** Il problema SMALL FACTOR appartiene all'intersezione $NP \cap co-NP$. Se per assurdo esso fosse NP-completo, tutti i problemi di NP si ridurrebbero a esso; ma, essendo SMALL FACTOR in co-NP, questo comporterebbe che l'intera classe NP si riduca a co-NP, causando il collasso $NP = co-NP$. Pertanto, assumendo come da premessa che $NP \ne co-NP$, SMALL FACTOR non può essere NP-completo.
 9. 3-SAT $\leq$ 2-SAT $\Rightarrow$ HAM-CYCLE $\leq$ EULERIAN CYCLE
	-   **Esito:** Vero.
	-   **Motivazione:** 3-SAT è NP-completo, mentre 2-SAT appartiene a P. Se 3-SAT si riducesse in tempo polinomiale a 2-SAT, implicherebbe il collasso totale P = NP. In un mondo in cui P = NP, tutti i problemi di NP e co-NP apparterrebbero a P, inclusi HAM-CYCLE ed EULERIAN CYCLE (che è già in P). Di conseguenza, qualsiasi problema in NP potrebbe essere ridotto a qualsiasi altro problema non banale in P in tempo polinomiale.

