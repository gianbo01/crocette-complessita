## Appello del 15 Luglio 2019
Per ognuna delle seguenti affermazioni si dica se essa è Vera, Falsa o"Irrisolta". Per "Irrisolta" si intende che per quanto si sa, non risulta provata nè l'affermazione, nè la sua falsità.
 

### 1. Se ogni algoritmo che risolve SAT ha complessità $\Omega (n+n^{\frac{\log{\log{n}}}{\log{n}}})$ allora $P\neq NP$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Dobbiamo prima semplificare l'espressione asintotica. Utilizzando le proprietà dei logaritmi e degli esponenziali ($n = 2^{\log_2 n}$), il termine $n^{\frac{\log{\log{n}}}{\log{n}}}$ si semplifica matematicamente in $\log n$. Il limite inferiore fornito è quindi $\Omega(n + \log n)$, che asintoticamente equivale a un limite lineare $\Omega(n)$. Qualsiasi algoritmo che risolva SAT deve almeno leggere l'intero input, impiegando banalmente un tempo lineare $O(n)$. Un limite inferiore polinomiale (come quello lineare) non fornisce alcuna dimostrazione che il problema richieda tempo super-polinomiale. Di conseguenza, questa premessa non è sufficiente per dimostrare che $P \neq NP$.
    
      
    

### 2. Se $P\neq NP$, allora nessun problema in NPSPACE può essere risolto in tempo polinomiale

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Per il Teorema di Savitch sappiamo che $NPSPACE = PSPACE$. L'affermazione sostiene che, se $P \neq NP$, l'intersezione tra $PSPACE$ e la classe $P$ sia vuota. Questo è scorretto: dalla gerarchia delle classi sappiamo che $P \subseteq PSPACE$, indipendentemente dal fatto che $P$ sia uguale o diverso da $NP$. Tutti i problemi facili che appartengono a $P$ (ad esempio, stabilire se il primo bit di una stringa è 1) appartengono per inclusione anche a $PSPACE$ e sono risolvibili in tempo polinomiale.
    
      
    

### 3. 2-SAT è riducibile in tempo polinomiale al problema SAT

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema 2-SAT è un sottoinsieme (un caso particolare) del problema SAT più generale. Qualsiasi formula in forma normale congiuntiva con al massimo 2 letterali per clausola (2-CNF) è, per definizione, una valida formula CNF in ingresso per SAT. La riduzione da 2-SAT a SAT può essere semplicemente la funzione identità, che mappa la formula in se stessa in tempo lineare (quindi polinomiale). In generale, essendo 2-SAT in $P$ (e quindi in $NP$) e SAT un problema $NP-completo$, la riduzione alla Karp è sempre matematicamente garantita.
    
      
    

### 4. Non esiste alcun algoritmo polinomiale che garantisce $\frac{11}{10}$-approssimazione per il problema di trovare il minimo numero di colori per colorare _propriamente_ i vertici di un grafo

-   **Esito:** Irrisolta.
    
      
    
-   **Motivazione:** Il problema della colorazione minima dei grafi (MIN GRAPH COLORING) è un problema di ottimizzazione NP-hard noto per la sua estrema inapprossimabilità. Il Teorema del Gap garantisce che non esistono algoritmi di approssimazione con fattore costante per questo problema _a meno che non si verifichi $P = NP$_. Se $P \neq NP$, l'affermazione sarebbe vera (tale algoritmo non esiste). Se invece $P = NP$, la soluzione ottima esatta (fattore 1) si potrebbe trovare in tempo polinomiale, rendendo l'affermazione falsa. Poiché $P$ contro $NP$ è un problema aperto, la verità di questa asserzione è irrisolta.
    
      
    

### 5. $\bigcup_{k>0}TIME(2^{n^{k}}) \neq \bigcup_{k>0}NTIME(2^{n^{k}})$

-   **Esito:** Irrisolta.
    
      
    
-   **Motivazione:** Le due unioni espresse nella formula rappresentano le definizioni formali delle classi EXPTIME (tempo esponenziale deterministico) e NEXPTIME (tempo esponenziale non deterministico). L'affermazione richiede di stabilire se EXPTIME $\neq$ NEXPTIME. Esattamente come per le classi $P$ e $NP$, sappiamo che $EXPTIME \subseteq NEXPTIME$, ma la dimostrazione della loro separazione netta o della loro uguaglianza costituisce uno dei grandi problemi aperti della complessità computazionale.
    
      
    

### 6. $NSPACE(\log{n}) \subseteq P$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** La classe $NSPACE(\log n)$, nota anche come $NL$, comprende i problemi risolvibili da una macchina non deterministica con memoria di lavoro logaritmica. Con uno spazio limitato asintoticamente a $O(\log n)$, il numero massimo di configurazioni distinte della macchina è limitato superiormente da $2^{O(\log n)}$, che corrisponde a una crescita polinomiale $O(n^c)$. Una macchina deterministica può esplorare in tempo polinomiale questo grafo di configurazioni limitato per verificare la raggiungibilità dello stato di accettazione, dimostrando così che $NL \subseteq P$.
    
      
    

### 7. $APX \subseteq PTAS$

-   **Esito:** Irrisolta.
    
      
    
-   **Motivazione:** Per definizione, sappiamo che vale l'inverso, ovvero $PTAS \subseteq APX$ (ogni PTAS garantisce un fattore $1+\epsilon$, che è una costante). Se la classe $P$ fosse uguale a $NP$, tutte le classi di approssimazione collasserebbero in $P$, rendendo l'inclusione vera ($APX = PTAS$). Al contrario, se assumiamo l'ipotesi largamente accreditata che $P \neq NP$, esistono problemi in $APX$ (come VERTEX COVER) che non ammettono un PTAS, rendendo l'affermazione falsa. Poiché il verdetto dipende dalla risoluzione di $P$ vs $NP$, l'asserzione è irrisolta.
    
      
    

### 8. Se esiste un algoritmo polinomiale per decidere se una formula Booleana è una tautologia, allora ogni problema in NP può essere risolto in tempo polinomiale.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema di valutare una tautologia (TAUTOLOGY) è il problema di riferimento della classe $co-NP-completo$. Se esistesse un algoritmo polinomiale per risolverlo, significherebbe che TAUTOLOGY $\in P$. Avere il problema più difficile di $co-NP$ risolvibile in tempo polinomiale provocherebbe il collasso dell'intera classe $co-NP$ in $P$ ($co-NP = P$). Dato che la classe $P$ è chiusa per il complemento, questo comporterebbe automaticamente l'uguaglianza $NP = P$. In un sistema dove $NP = P$, per l'appunto, tutti i problemi all'interno della classe $NP$ sarebbero risolvibili in tempo polinomiale deterministico.
