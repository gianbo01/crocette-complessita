## Appello del 6 Luglio 2026
1. Se un grafo non diertto G con $n$ vertici ha un INDEPENDENT SET di taglia $\frac{2}{3}n$ allora G ha un VERTEX COVER di taglia $\frac{n}{2}$	
	-   **Esito:** Vero.
	-   **Motivazione:** 
		- $S \text{ è un Independent Set} ⟺ V∖S \text{ è un Vertex Cover}$
		- Inoltre, se l'Independent Set ha taglia $\frac{2}{3}n$,

		- allora il suo complementare ha taglia $n-\frac{2}{3}n=\frac{1}{3}n$

		- Quindi esiste un Vertex Cover di taglia $\frac{1}{3}n \leq \frac{1}{2}n$
2. Se esiste un algoritmo di $\frac{2}{3}$-approssimazione per MAXIMUM INDEPENDENT SET allora esiste anche un algoritmo di $\frac{2}{3}$-approssimazione per MINIMUM VERTEX COVER
	-   **Esito:** Falso.
	-   **Motivazione:** Nonostante la relazione esatta tra le soluzioni ottime dei due problemi (complementarità), il fattore di approssimazione non si conserva e non si trasferisce in modo lineare dal problema di massimizzazione (INDEPENDENT SET) a quello di minimizzazione (VERTEX COVER). Inoltre, è teoricamente noto che VERTEX COVER appartiene alla classe APX (ammette una 2-approssimazione), mentre INDEPENDENT SET non ammette alcuna approssimazione con fattore costante se P $\neq$ NP.
3. Se co-NP $\neq$ PSPACE allora 2-PLAYER SAT $\nleq$ SAT
	-   **Esito:** Vero.
	-   **Motivazione:** Il problema 2-PLAYER SAT è PSPACE-completo. Se, per assurdo, si riducesse a SAT (che è NP-completo), significherebbe che l'intera classe PSPACE si riduce a NP, causando il collasso PSPACE $\subseteq$ NP e quindi PSPACE = NP. Essendo la classe PSPACE chiusa rispetto al complemento (PSPACE = co-PSPACE), otterremmo di conseguenza anche PSPACE = co-NP. Pertanto, l'assunzione che co-NP $\neq$ PSPACE vieta categoricamente questa riduzione, rendendo l'affermazione vera.
4. Se PTAS $\neq$ APX allora NPSPACE $\neq$ P
	-   **Esito:** Vero.
	-   **Motivazione:** L'ipotesi PTAS $\neq$ APX implica direttamente che P $\neq$ NP, altrimenti tutte le classi di approssimabilità collasserebbero nell'uguaglianza P = FPTAS = PTAS = APX. Sapendo che P $\subseteq$ NP $\subseteq$ PSPACE, il fatto che P $\neq$ NP garantisce che P non possa essere uguale a PSPACE. Infine, per il Teorema di Savitch, sappiamo che PSPACE = NPSPACE. Unendo i pezzi, si ottiene inevitabilmente P $\neq$ NPSPACE.
5. Se P $\neq$ NP allora per ogni coppia di problemi $A,B \in$ PSPACE/P il problema $C = A \wedge B$ non è in P (un'istanza di C è yes se e solo se è yes sia per A che per B)
	-   **Esito:** Falso.
	-   **Motivazione:** L'intersezione logica tra due problemi complessi può generare un problema risolvibile in tempo polinomiale o addirittura banale. Se si scelgono due problemi $\mathbb{A}$ e $\mathbb{B}$ appartenenti a PSPACE \ P che sono l'uno l'esatto complemento dell'altro, il problema $\mathbb{C} = \mathbb{A} \wedge \mathbb{B}$ restituirebbe sempre e solo "no" per qualsiasi istanza (è impossibile che una condizione e la sua negazione siano entrambe vere). Un problema che risponde sempre "no" si risolve in tempo costante $O(1)$, appartenendo così banalmente alla classe P.
6. Se A è SELF-REDUCIBLE allora A è NP-completo
	-   **Esito:** Falso.
	-   **Motivazione:** Il primo teorema di self-reducibility afferma che _ogni_ problema NP-completo è self-reducible, ma l'implicazione inversa non è valida. Esistono problemi self-reducible che non sono NP-completi. Un classico esempio discusso in teoria è il problema GRAPH ISOMORPHISM, il quale è dimostrato essere self-reducible ma appartiene ai problemi NP-intermedi (non si ritiene sia NP-completo).
7. Se tutti i problemi in NP sono SELF-REDUCIBLE allora $P = NP \cap co-NP$
	-   **Esito:** Vero.
	-   **Motivazione:** Questa è la diretta conseguenza (la contronominale) del secondo teorema di self-reducibility. Il teorema stabilisce che se esiste un problema nell'insieme $(NP \cap co-NP) \setminus P$, allora esiste un problema in NP che _non_ è self-reducible. Sotto l'ipotesi della domanda, non essendoci problemi non self-reducible in NP, l'insieme $(NP \cap co-NP) \setminus P$ deve essere vuoto. Poiché P è per definizione un sottoinsieme di $NP \cap co-NP$, l'unica conclusione matematica possibile è l'uguaglianza P = $NP \cap co-NP$.
8. Se $P\neq NP$ ed esiste un algoritmo di 2-approssimazione per MAX-3-SAR allora esiste un algoritmo di $\frac{9}{8}$-approssimazione per VERTEX COVER
	-   **Esito:** Falso.
	-   **Motivazione:** La premessa è un dato di fatto: un algoritmo con fattore di approssimazione $r = 8/7$ per MAX-3-SAT esiste già (soddisfando ampiamente il requisito di una 2-approssimazione, essendo $8/7 \le 2$). La conclusione, tuttavia, è matematicamente impossibile: in base al Teorema del Gap, MINIMUM VERTEX COVER non ammette alcun algoritmo di approssimazione con fattore $r < 7/6$ nell'ipotesi che P $\neq$ NP. Poiché $\frac{9}{8} < \frac{7}{6}$ (ovvero $1.125 < 1.166$), una $\frac{9}{8}$-approssimazione per VERTEX COVER non può esistere. L'implicazione (Vero $\Rightarrow$ Falso) risulta falsa.
9. Se QUANTIFIED SAT è NP-completo allora VERTEX COVER $\in co-NP \wedge NP$
	-   **Esito:** Vero.
	-   **Motivazione:** QUANTIFIED SAT (Q-SAT) definisce il livello di massima durezza della classe PSPACE essendo PSPACE-completo. Se fosse NP-completo apparterrebbe a NP, causando l'inclusione di PSPACE in NP e il conseguente collasso PSPACE = NP. Dato che PSPACE è chiusa rispetto al complemento, questo innescherebbe l'uguaglianza NP = co-NP. VERTEX COVER è un problema NP-completo, quindi appartiene già a NP; se le classi NP e co-NP coincidessero, apparterrebbe anche a co-NP, posizionandosi per l'appunto nella loro intersezione.
10. Se QUANTIFIED SAT $\leq A$ allora $\overline{A}$ è PSPACE-completo
	-   **Esito:** Falso.
	-   **Motivazione:** Poiché QUANTIFIED SAT è PSPACE-completo, la riduzione QUANTIFIED SAT $\le \mathbb{A}$ dimostra soltanto che il problema $\mathbb{A}$ è _PSPACE-hard_. Sfruttando la regola delle riduzioni logiche tra complementi ($\mathbb{X} \le \mathbb{Y} \iff \overline{\mathbb{X}} \le \overline{\mathbb{Y}}$), possiamo affermare che anche $\overline{\mathbb{A}}$ è PSPACE-hard. Tuttavia, per definire un problema come "completo" in una classe, esso deve obbligatoriamente anche _appartenere_ a quella classe. L'affermazione non specifica che $\mathbb{A}$ appartenga a PSPACE (potrebbe risiedere in EXPTIME o classi superiori), di conseguenza non possiamo definire $\overline{\mathbb{A}}$ come PSPACE-completo.
	
11. Se $NP \neq co-NP$ allora SMALLFACTOR è NP-completo
	-   **Esito:** Falso.
	-   **Motivazione:** Vale esattamente il ragionamento contrario. Il problema SMALL FACTOR è certificabile e verificabile sia per istanze "yes" sia per istanze "no", appartenendo quindi alla classe $NP \cap co-NP$. Se per assurdo esso fosse NP-completo, ogni problema nella classe NP potrebbe ridursi a un problema in co-NP, facendo collassare l'intera classe NP all'interno di co-NP e forzando l'uguaglianza NP = co-NP. Assumendo come premessa forte $NP \neq co-NP$, la completezza di SMALL FACTOR è totalmente preclusa. 
