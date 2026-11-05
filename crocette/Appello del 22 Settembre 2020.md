## Appello del 22 Settembre 2020

Ricordiamo che la traccia impone di assumere $NP \ne co-NP$.

### 1. Se esistesse un algoritmo di approssimazione $r$ per il problema INDEPENDENT SET allora esisterebbe anche un algoritmo di approssimazione $2r$ per il problema CLIQUE.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema della ricerca di un INDEPENDENT SET in un grafo $G$ è strutturalmente equivalente alla ricerca di una CLIQUE nel grafo complemento $\overline{G}$. Un algoritmo che fornisce una $r$-approssimazione per INDEPENDENT SET, eseguito sul grafo complemento, garantisce esattamente la medesima $r$-approssimazione per il problema CLIQUE. Dal momento che si possiede matematicamente un'approssimazione con fattore $r$, viene soddisfatta per definizione anche la condizione più debole (più permissiva) di possedere un'approssimazione con fattore $2r$.
    
      
    

### 2. Se esiste un algoritmo di 3-approssimazione per TSP (problema di ottimizzazione) allora il problema di decisione $TSP_{DEC} \in co-NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema del commesso viaggiatore generale (TSP non metrico) è inapprossimabile per qualsiasi fattore costante a meno che non si verifichi l'uguaglianza $P = NP$. Se esistesse una 3-approssimazione, ciò comporterebbe inevitabilmente il collasso $P = NP$. In uno scenario in cui $P = NP$, poiché la classe P è chiusa rispetto al complemento ($P = co-P$), si innescherebbe l'uguaglianza $NP = co-NP$. Il problema $TSP_{DEC}$ è noto per appartenere a $NP$ (nello specifico, è NP-completo). Attraverso il collasso delle classi appena dimostrato, esso apparterrebbe logicamente anche a $co-NP$.
    
      
    

### 3. VERTEX COVER non è PSPACE-completo.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** VERTEX COVER è un problema noto appartenente alla classe NP (è NP-completo). Se per assurdo esso fosse PSPACE-completo, significherebbe che l'intera classe PSPACE si riduce a un problema in NP, causando il collasso $PSPACE = NP$. La classe PSPACE è simmetrica e chiusa rispetto al complemento ($PSPACE = co-PSPACE$). Pertanto, il collasso $PSPACE = NP$ implicherebbe necessariamente l'uguaglianza $NP = co-NP$. Poiché la traccia dell'esercizio impone esplicitamente di assumere $NP \ne co-NP$, questa catena logica porta a una contraddizione, dimostrando che VERTEX COVER non può essere PSPACE-completo.
    
      
    

### 4. Per ogni coppia di problemi $\mathbb{A} \in NP$ e $\mathbb{B} \in co-NP$ il problema $\mathbb{C}$ definito da $\mathbb{C}(x) = \mathbb{A}(x) \lor \mathbb{B}(x)$ appartiene alla classe NP.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Se questa affermazione fosse vera per _qualsiasi_ coppia di problemi, potremmo scegliere un problema banale $\mathbb{A} \in P$ (e quindi $\mathbb{A} \in NP$) programmato per restituire sistematicamente "Falso". La definizione diventerebbe $\mathbb{C}(x) = \text{Falso} \lor \mathbb{B}(x)$, che equivale a dire $\mathbb{C}(x) = \mathbb{B}(x)$. Se $\mathbb{C}$ deve appartenere a NP per ipotesi, allora ogni problema $\mathbb{B} \in co-NP$ dovrebbe necessariamente appartenere a NP. Questo implicherebbe l'inclusione $co-NP \subseteq NP$ e il conseguente collasso $NP = co-NP$. Questo collasso viola esplicitamente la premessa dell'esercizio ($NP \ne co-NP$), rendendo l'affermazione falsa.
    

### 5. Se $P \ne co-NP$ allora $APX \ne PTAS$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** L'ipotesi iniziale $P \ne co-NP$ è logicamente equivalente a dire $P \ne NP$. Se assumiamo che $P \ne NP$, la teoria dell'approssimabilità ci garantisce che la gerarchia delle classi di approssimazione non collassa. Nello specifico, sappiamo che esistono problemi come MINIMUM VERTEX COVER che appartengono alla classe APX (poiché ammettono una 2-approssimazione), ma per i quali è matematicamente impossibile scendere sotto un certo limite di approssimazione (fattore $\frac{7}{6}$) a meno che $P = NP$. L'impossibilità di ottenere approssimazioni arbitrariamente vicine all'ottimo ($1+\epsilon$) esclude VERTEX COVER dalla classe PTAS. Essendoci problemi in APX che non possono stare in PTAS, le due classi sono rigorosamente separate, confermando che $APX \ne PTAS$.

### 6. Se esistesse un algoritmo polinomiale per decidere se una formula Booleana è una tautologia, allora ogni problema in NP potrebbe essere risolto in tempo polinomiale.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema di determinare se una formula booleana è una tautologia (TAUTOLOGY) è il problema prototipico della classe co-NP-completo. Se esistesse un algoritmo deterministico in tempo polinomiale per risolverlo, significherebbe che TAUTOLOGY appartiene alla classe P. Dal momento che un problema completo per la sua classe risulta risolvibile in P, l'intera classe collasserebbe in P ($co-NP = P$). Essendo la classe P chiusa per il complemento, il collasso forzerebbe anche l'uguaglianza $NP = P$. In un mondo in cui $NP = P$, tutti i problemi appartenenti a NP potrebbero per l'appunto essere risolti efficientemente in tempo polinomiale.
