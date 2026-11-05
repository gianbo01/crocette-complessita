## Appello del 31 Gennaio 2024

  

### 1. TWO-PLAYER-SAT $\in$ NSPACE(log n) $\Rightarrow$ TAUTOLOGY $\le$ SAT

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema `TWO-PLAYER-SAT` (equivalente a `Q-SAT`) è un noto problema `PSPACE-completo`. L'ipotesi che appartenga a `NSPACE(log n)` (classe contenuta in `P`) implica un collasso delle classi: l'intera classe `PSPACE` collasserebbe all'interno di `P`. Se `PSPACE = P`, ne deriva necessariamente che $P = NP = co-NP$. In tale scenario, il problema `TAUTOLOGY` (appartenente a `co-NP`) si ridurrebbe in tempo polinomiale a `SAT` (appartenente a `NP`), in quanto tutti i problemi decisionali collassati in `P` si riducono banalmente tra loro.
    
      
    

### 2. TAUTOLOGY $\le$ TWO-PLAYER-SAT $\Rightarrow$ co-NP = PSPACE

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Sappiamo dalla teoria che `TAUTOLOGY` è un problema `co-NP-completo` e che `TWO-PLAYER-SAT` è `PSPACE-completo`. Dalla gerarchia standard delle classi di complessità è noto che $co-NP \subseteq PSPACE$. Di conseguenza, è sempre vero che un problema in `co-NP` (come TAUTOLOGY) si riduca a un problema `PSPACE-completo`. Questa riduzione è un fatto già assodato strutturalmente e non fornisce alcuna informazione aggiuntiva che giustifichi un collasso e l'uguaglianza tra le due classi `co-NP` e `PSPACE`.
    
      
    

### 3. Se `A` è `PSPACE-completo` allora `A` è `NP-hard`.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Per la definizione di completezza, se un problema $\mathbb{A}$ è `PSPACE-completo`, significa che ogni problema appartenente alla classe `PSPACE` si riduce polinomialmente ad $\mathbb{A}$. Poiché la classe `NP` è un sottoinsieme di `PSPACE` ($NP \subseteq PSPACE$), ogni problema in `NP` si riduce a cascata ad $\mathbb{A}$. Un problema al quale tutti i problemi di `NP` si riducono è, per l'appunto, `NP-hard`.
    
      
    

### 4. Se esiste un problema `A` tale che `A` è `NP-completo` e `A` è `PSPACE-hard`, allora `PSPACE = P`.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Se un problema $\mathbb{A}$ è `PSPACE-hard`, ogni problema in `PSPACE` si riduce ad esso. Se contemporaneamente $\mathbb{A}$ è `NP-completo`, allora $\mathbb{A}$ appartiene a `NP`. Questo comporterebbe che ogni problema in `PSPACE` si riduce a un problema in `NP`, implicando il collasso $PSPACE = NP$. Tuttavia, questo collasso non forza in alcun modo l'uguaglianza con la classe deterministica, non potendo quindi dimostrare che $PSPACE = P$ (a meno di non assumere preventivamente e arbitrariamente che $P = NP$).
    
      
    

### 5. Se `A` è `NP-completo` e `B` è `NP-completo` allora il problema `C` definito da $C(x) = A(x) \land B(x)$ è $NP-completo$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** L'intersezione logica (AND) di due problemi `NP-completi` non genera obbligatoriamente un nuovo problema `NP-completo`. Si consideri un'istanza patologica in cui $\mathbb{A}$ e $\mathbb{B}$ siano costruiti per fornire risposte mutuamente esclusive (se per un input $\mathbb{A}$ risponde "yes", $\mathbb{B}$ risponde "no" e viceversa). In questa situazione, il problema congiunto $\mathbb{C}$ restituirebbe sempre e solo "no", risultando in un problema banale risolvibile in tempo costante $O(1)$. Essendo risolvibile in tempo costante, $\mathbb{C}$ apparterrebbe a `P` e non potrebbe essere `NP-completo` (a meno che $P = NP$).
    
      
    

### 6. Se $A \in NP$ e $B \in NP$ allora il problema $C$ definito da $C(x) = A(x) \lor B(x)$ appartiene alla classe $NP$.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** La classe `NP` è matematicamente chiusa rispetto all'operazione di unione (OR). Se due problemi $\mathbb{A}$ e $\mathbb{B}$ appartengono a `NP`, significa che per entrambi esiste un certificatore verificabile in tempo polinomiale. Un algoritmo non deterministico per il problema $\mathbb{C}$ può semplicemente "indovinare" quale dei due problemi risulta verificato e lanciare il rispettivo certificatore in tempo polinomiale, confermando l'appartenenza di $\mathbb{C}$ a `NP`.
    
      
    

### 7. Se `INDEPENDENT SET` è `PSPACE-completo` allora `NP = co-NP`.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema `INDEPENDENT SET` appartiene alla classe `NP`. Se assumessimo che tale problema sia `PSPACE-completo`, ogni problema in `PSPACE` si ridurrebbe a un problema in `NP`, causando l'immediato collasso $PSPACE = NP$. Dalla gerarchia delle classi sappiamo che $co-NP \subseteq PSPACE$; sostituendo PSPACE con NP grazie al collasso appena dedotto, otterremmo $co-NP \subseteq NP$, il che implica necessariamente la perfetta uguaglianza $NP = co-NP$.
    
      
    

### 8. Se `SYMETRIC TSP` $\in$ `APX` allora `co-NP = NP`.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema del commesso viaggiatore generale simmetrico (`SYMMETRIC TSP`) è inapprossimabile per qualsiasi fattore costante, a meno che non si verifichi l'uguaglianza $P = NP$. Assumere che `SYMMETRIC TSP` appartenga alla classe `APX` (che contiene i problemi approssimabili entro una costante) renderebbe vero il collasso $P = NP$. Dato che la classe P è simmetrica ($P = co-P$), questo provocherebbe un collasso a cascata di tutte le classi, portando inequivocabilmente a $NP = co-NP$.
    
      
    

### 9. Se `SAT` $\nleq$ `2-SAT` allora `TAUTOLOGY` $\nleq$ `EULERIANCYCLE`

-   **Esito:** Vero.
    
      
    
-   **Motivazione:**
	-   $2-SAT \in P$ ed $\text{EULERIAN CYCLE} \in P$.
	-   Se $\text{TAUTOLOGY}\leq \text{EULERIAN CYCLE}$, allora $\text{TAUTOLOGY}\in P$.
	-   Essendo $\text{TAUTOLOGY}$ il complemento di SAT, avremmo anche $SAT\in P$.
	-   Ma allora $SAT\leq 2\text{-SAT}$, contraddicendo l'ipotesi $SAT\nleq2\text{-SAT}$.
      
    

### 10. Se APX $\ne$ FPTAS allora $P \ne co-NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Questo enunciato si dimostra in modo diretto sfruttando la contrapposizione logica: se fosse $P = co-NP$, allora implicherebbe anche $P = NP$. In un universo in cui $P = NP$, sarebbe possibile trovare la soluzione ottima esatta per ogni problema in tempo polinomiale. Ciò fornirebbe un'approssimazione con fattore esatto $r=1$ per ogni problema, facendo collassare l'intera gerarchia dell'approssimabilità in $P = FPTAS = PTAS = APX$. Poiché la premessa iniziale ci dice esplicitamente che $APX \ne FPTAS$, questo collasso è negato, dimostrando quindi che $P \ne co-NP$.
