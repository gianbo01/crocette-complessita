## Appello del 19 Giugno 2019

### 1. Se si dimostrasse che ogni algoritmo che risolve SAT deve avere complessità $\Omega(n^{\log n})$ allora $P \neq NP$.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il limite inferiore (lower bound) $\Omega(n^{\log n})$ rappresenta una funzione a crescita super-polinomiale. Se venisse dimostrato che _ogni_ algoritmo per SAT ha un tempo di esecuzione limitato inferiormente da questa complessità, significherebbe che SAT non può essere risolto in tempo polinomiale e quindi non appartiene a $P$. Essendo SAT un problema NP-completo, se esso non appartiene a $P$, l'intera classe dei problemi NP-completi non può appartenere a $P$, dimostrando così che $P \neq NP$.
    
      
    

### 2. Sia U l'insieme degli algoritmi che prendono in input una formula CNF $\phi$ ed in tempo polinomiale rispondono _yes_ o _no_. Se $P \neq NP$ allora per ogni n sufficientemente grande, esiste una formula $\phi^{(n)}$ di taglia n tale che ogni algoritmo in U fallisce su $\phi^{(n)}$, ovvero se $\phi^{(n)}$ è soddisfacibile ogni algoritmo in U dice _no_ su input $\phi^{(n)}$, mentre se $\phi^{(n)}$ non è soddisfacibile ogni algoritmo in U dice _yes_ su input $\phi^{(n)}$.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** L'affermazione richiede l'esistenza di una _singola_ e specifica formula $\phi^{(n)}$ in grado di sconfiggere e far fallire contemporaneamente _tutti_ gli algoritmi dell'insieme $U$. Questo non è corretto: sebbene ogni algoritmo polinomiale in $U$ debba prima o poi fallire su qualche istanza (assumendo $P \neq NP$), algoritmi diversi falliranno molto probabilmente su formule $\phi^{(n)}$ _diverse_ tra loro. Non vi è alcuna garanzia dell'esistenza di una singola "istanza killer" universale per l'intera classe di algoritmi.
    
      
    

### 3. Se per un problema $\mathbb{A} \in NP$ esiste una riduzione $\mathbb{A} \leq \text{SAT}$ allora $\mathbb{A}$ è NP-completo.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** La direzione della riduzione fornita nell'affermazione è errata per poter dimostrare la NP-completezza. Ridurre un problema $\mathbb{A}$ a SAT ($\mathbb{A} \leq \text{SAT}$) dimostra unicamente che $\mathbb{A}$ appartiene alla classe NP, cosa peraltro già assunta nella premessa. Affinché $\mathbb{A}$ possa essere definito come NP-completo, deve valere il contrario: tutti i problemi in NP (e quindi SAT stesso) devono potersi ridurre ad $\mathbb{A}$ ($\text{SAT} \leq \mathbb{A}$), provando così che $\mathbb{A}$ è NP-hard.
    
      
    

### 4. Se $NP \subseteq co-NP$ allora $co-NP \subseteq NP$.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** La dimostrazione matematica è diretta. Consideriamo un qualsiasi problema $\mathbb{L} \in co-NP$. Per definizione, il suo complemento $\overline{\mathbb{L}}$ appartiene alla classe $NP$. Sfruttando l'ipotesi data dal testo, poiché $\overline{\mathbb{L}} \in NP$ e $NP \subseteq co-NP$, deduciamo che $\overline{\mathbb{L}}$ appartiene anche a $co-NP$. Ma se il complemento di $\mathbb{L}$ sta in $co-NP$, allora il problema originale $\mathbb{L}$ deve necessariamente trovarsi in $NP$. Poiché questo vale per ogni $\mathbb{L} \in co-NP$, l'inclusione $co-NP \subseteq NP$ è dimostrata.
    
      
    

### 5. Si assuma che $NP \neq co-NP$. Allora esistono problemi $\mathbb{A} \in NP$ e $\mathbb{B} \in co-NP$ tali che $\mathbb{A} \leq_T \mathbb{B}$, $\mathbb{A} \not\le \mathbb{B}$ ovvero esiste una riduzione alla Turing da A a B ma non esiste una riduzione alla Karp da A a B.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Prendiamo come esempio $\mathbb{A} = \text{SAT}$ (in NP) e $\mathbb{B} = \text{TAUTOLOGY}$ (in co-NP). È possibile ridurre alla Turing SAT a TAUTOLOGY ($\text{SAT} \leq_T \text{TAUTOLOGY}$): basta invocare l'oracolo per TAUTOLOGY e negare l'output finale in tempo costante. Tuttavia, una riduzione alla Karp ($\text{SAT} \leq_K \text{TAUTOLOGY}$) non può esistere: se esistesse, essendo TAUTOLOGY in co-NP, anche SAT entrerebbe in co-NP, facendo collassare l'intera classe NP in co-NP ($NP \subseteq co-NP$ e quindi $NP = co-NP$). Poiché la traccia impone di assumere $NP \neq co-NP$, la riduzione alla Karp è preclusa.
    
      
    

### 6. Se $NP \cap co-NP \neq P$ allora tutti i problemi in $NP$ sono self-reducible.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Vale esattamente l'opposto. L'ipotesi $NP \cap co-NP \neq P$ descrive una situazione in cui l'intersezione $(NP \cap co-NP) \setminus P$ non è vuota. Secondo il secondo teorema di self-reducibility, se si verifica questa precisa condizione, allora esiste almeno un problema nella classe NP che _non_ gode della proprietà di essere self-reducible. Un classico candidato teorico menzionato nei testi per questo scenario è il problema SMALL FACTOR.
    
      
    

### 7. Se esistesse un algoritmo polinomiale deterministico per 2-PLAYER-HAMPATH allora varrebbe la relazione $P = NP$.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema 2-PLAYER-HAMPATH (noto anche come Alternating Hamiltonian Path) è la versione a due giocatori dell'Hamiltonian Path ed è rigorosamente dimostrato essere PSPACE-completo. Se fosse individuato un algoritmo deterministico in tempo polinomiale per risolverlo, il problema apparterrebbe alla classe P. Avendo un problema PSPACE-completo all'interno di P, l'intera classe PSPACE collasserebbe in P ($PSPACE = P$). Dalla gerarchia di complessità sappiamo che $P \subseteq NP \subseteq PSPACE$; se gli estremi coincidono, tutte le classi intermedie collassano di conseguenza, imponendo matematicamente $P = NP$.
    
      
    

### 8. Sia $x$ un'istanza di un problema di minimizzazione $\mathbb{A}$. Sia $OPT(x)$ il valore della soluzione ottima per $x$. Sia $A$ un PTAS (polynomial time approximation scheme) per il problema $\mathbb{A}$. Se per $\epsilon = 0.5$ il valore della soluzione ritornata da $A$ su input $(x, \epsilon)$ è $A(x, \epsilon) = 15$ allora possiamo dedurre $OPT(x) \ge 11$.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Per un problema di minimizzazione, un algoritmo PTAS assicura la seguente disuguaglianza: $\frac{A(x)}{OPT(x)} \le 1 + \epsilon$. Sostituendo i valori forniti ($\epsilon = 0.5$ e $A(x) = 15$), si ottiene $\frac{15}{OPT(x)} \le 1.5$, che manipolata algebricamente diventa $OPT(x) \ge \frac{15}{1.5} = 10$. Dedurre che $OPT(x) \ge 11$ è scorretto poiché si va a escludere arbitrariamente il caso matematicamente valido in cui l'ottimo assuma esattamente il valore 10 (dove l'approssimazione raggiunge proprio il fattore esatto del limite consentito di 1.5).
