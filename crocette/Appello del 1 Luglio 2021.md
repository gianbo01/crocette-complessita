## Appello del 1 Luglio 2021
1. Per ogni algoritmo di $r$-approssimazione per il problema INDEPENDENT SET esiste un algoritmo di $2r$-approssimazione per CLIQUE.

	-   **Esito:** Vero.
	-   **Motivazione:** Il problema della ricerca di un INDEPENDENT SET in un grafo $G$ è strutturalmente equivalente alla ricerca di una CLIQUE nel suo grafo complemento $\overline{G}$. Un algoritmo che fornisce una $r$-approssimazione per INDEPENDENT SET, se eseguito sul grafo complemento, garantisce esattamente la medesima $r$-approssimazione per CLIQUE. Dal momento che possediamo un'approssimazione con fattore $r$, per definizione matematica soddisfiamo anche la condizione più debole di avere un'approssimazione con fattore $2r$ (poiché l'algoritmo rientra ampiamente in questo margine più largo).
    
2. Se esiste un algoritmo polinomiale di 3-approssimazione per TSP (problema di ottimizzazione) allora il problema di decisione INDEPENDENT SET appartiene a $co-NP$
	
	-   **Esito:** Vero.
	-   **Motivazione:** Il problema del commesso viaggiatore generale (TSP non metrico) è inapprossimabile per qualsiasi fattore a meno che non si verifichi l'uguaglianza $P = NP$. Se esistesse una 3-approssimazione, ciò comporterebbe inevitabilmente il collasso $P = NP$. In uno scenario in cui $P = NP$, per la chiusura del complemento si ha che $P = co-P$, forzando l'uguaglianza $NP = co-NP$. Poiché INDEPENDENT SET è un problema noto appartenente a $NP$, attraverso questo collasso esso apparterrebbe anche a $co-NP$.

3. Se $\mathbb{A} \in NP$ e $\mathbb{B}$ è $co-NP$-completo, allora esiste una Turing-reduction $\mathbb{A} \leq_T \mathbb{B}$.
	
	-   **Esito:** Vero.
	-   **Motivazione:** Se $\mathbb{B}$ è un problema $co-NP$-completo, il suo esatto complemento $\overline{\mathbb{B}}$ è per definizione $NP$-completo. Poiché il problema $\mathbb{A}$ si trova in $NP$, esso può essere ridotto alla Karp al problema $NP$-completo $\overline{\mathbb{B}}$ in tempo polinomiale ($\mathbb{A} \leq_K \overline{\mathbb{B}}$). Una riduzione alla Karp verso il complemento di un problema si può sfruttare direttamente come una riduzione alla Turing verso il problema originale: basta invocare l'oracolo per $\mathbb{B}$ e invertire l'output finale. Questo procedimento certifica che $\mathbb{A} \leq_T \mathbb{B}$.

4. Se per ogni coppia di problemi $\mathbb{A} \in NP$ e $\mathbb{B} \in co-NP$ il problema $\mathbb{C}$ definito da $\mathbb{C}(x) = \mathbb{A}(x) \vee \mathbb{B}(x)$ appartiene alla classe $NP$ allora $co-NP = NP$.

	-   **Esito:** Vero.
	-   **Motivazione:** L'ipotesi afferma che la condizione vale per _qualsiasi_ problema $\mathbb{A} \in NP$. Si consideri un problema banale $\mathbb{A} \in P$ (e quindi $\in NP$) costruito per restituire sempre "Falso" per qualsiasi istanza $x$. Sostituendo questa funzione nell'equazione, otteniamo $\mathbb{C}(x) = \text{Falso} \vee \mathbb{B}(x)$, il che si riduce a $\mathbb{C}(x) = \mathbb{B}(x)$. Se $\mathbb{C}$ deve appartenere a $NP$ secondo la premessa, allora anche $\mathbb{B}$ deve necessariamente appartenere a $NP$. Dato che questo deve valere per _ogni_ $\mathbb{B} \in co-NP$, si deduce che $co-NP \subseteq NP$, il che porta alla certezza matematica che $co-NP = NP$.

5. Se $P \neq NP$ allora $co-NP \neq NP$.

	-   **Esito:** Falso.
	-   **Motivazione:** La relazione logica tra queste disuguaglianze non è bidirezionale. Dalla teoria sappiamo che se $NP \ne co-NP$, allora questo implica $P \ne NP$. Tuttavia, il viceversa non è dimostrato. Potrebbe teoricamente esistere un universo computazionale in cui $P \ne NP$ pur mantenendo il collasso tra le classi nondeterministiche, ovvero $NP = co-NP$. L'implicazione descritta non è quindi un fatto assodato.

6. Se $\mathbb{B}$ è un problema $NP$-completo allora $\overline{\mathbb{B}} \leq \text{TAUTOLOGY}$

	-   **Esito:** Vero.
	-   **Motivazione:** Se un problema $\mathbb{B}$ è $NP$-completo, per definizione il suo problema complemento $\overline{\mathbb{B}}$ appartiene alla classe $co-NP$ (ed è nello specifico $co-NP$-completo). Il problema TAUTOLOGY è notoriamente il problema prototipico della classe $co-NP$-completo. In base alla definizione di completezza per una classe, tutti i problemi che appartengono a quella classe devono potersi ridurre polinomialmente (alla Karp) al problema completo per eccellenza. Di conseguenza, essendo $\overline{\mathbb{B}} \in co-NP$ e TAUTOLOGY $co-NP$-completo, è matematicamente garantita l'esistenza della riduzione $\overline{\mathbb{B}} \leq \text{TAUTOLOGY}$.

7. Se per ogni $\mathbb{A} \in NP$ è vero che $\mathbb{A} \leq \mathbb{B}$ allora $\mathbb{B} \leq \text{SAT}$ — qui $\leq$ denota una riduzione alla Karp.

	-   **Esito:** Falso.
	-   **Motivazione:** La premessa stabilisce che tutti i problemi di $NP$ si riducono a $\mathbb{B}$, qualificando così $\mathbb{B}$ come problema $NP$-hard. Tuttavia, affinché $\mathbb{B}$ si riduca a SAT (che è un problema in $NP$), $\mathbb{B}$ dovrebbe necessariamente appartenere esso stesso alla classe $NP$. Essere $NP$-hard non impone alcun limite superiore alla complessità: $\mathbb{B}$ potrebbe risiedere in classi esponenzialmente più difficili come PSPACE, EXPTIME, o essere addirittura indecidibile.

8. Se ogni problema in $NP$ è self-reducible allora SMALL FACTOR $\in P$.

	-   **Esito:** Vero.
	-   **Motivazione:** Si applica la contronominale del secondo teorema di self-reducibility: se _nessun_ problema in $NP$ è sprovvisto della proprietà di self-reducibility, allora non possono esistere problemi nell'insieme $(NP \cap co-NP) \setminus P$. Questo costringe l'insieme a essere vuoto, indicando che tutto ciò che si trova nell'intersezione $NP \cap co-NP$ deve per forza ricadere anche all'interno di $P$. Il problema SMALL FACTOR è certificabile sia per le risposte positive che negative, per cui SMALL FACTOR $\in (NP \cap co-NP)$. Di conseguenza, esso deve necessariamente appartenere a $P$.

9. In ogni grafo non diretto con $n$ vertici, esiste o un vertex cover di taglia al più $n/2$ o un independent set di taglia almeno $n/2$.

	-   **Esito:** Falso.
	-   **Motivazione:** Sappiamo che per un qualsiasi grafo, la somma della cardinalità di un Maximum Independent Set ($I_{max}$) e di un Minimum Vertex Cover ($C_{min}$) è esattamente pari al numero di vertici $n$ ($\vert{}I_{max}\vert{} + \vert{}C_{min}\vert{} = n$). Immaginiamo un grafo ciclo $C_5$ (un pentagono, $n=5$). Il suo Maximum Independent Set ha cardinalità 2, che è rigorosamente minore di $n/2$ (ovvero $2 < 2.5$). Di conseguenza, il suo Minimum Vertex Cover ha cardinalità $5 - 2 = 3$, che è rigorosamente maggiore di $n/2$ (ovvero $3 > 2.5$). In questo scenario, non si verifica _nessuna_ delle due condizioni citate.

10. Se esiste un algoritmo polinomiale che garantisce approssimazione $14/13$ per il problema di trovare il minimo vertex cover di un grafo allora $NP = P$.

	-   **Esito:** Vero.
	-   **Motivazione:** Mediante il Teorema del Gap è stato determinato il limite inferiore di approssimabilità per il problema MINIMUM VERTEX COVER: non è possibile scendere sotto il fattore $\frac{7}{6}$ a meno che non si verifichi l'uguaglianza $P = NP$. Il fattore di approssimazione proposto è $\frac{14}{13} \approx 1.076$. Essendo $\frac{14}{13}$ strettamente minore del limite inferiore $\frac{7}{6} \approx 1.166$, l'esistenza di tale algoritmo implicherebbe matematicamente il collasso totale delle classi in $P = NP$.

