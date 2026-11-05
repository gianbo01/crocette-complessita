## Appello del 22 Giugno 2023

### 1. $P \neq NP \Rightarrow NP \neq PSPACE$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Dalla gerarchia delle classi sappiamo che $P \subseteq NP \subseteq PSPACE$. L'ipotesi $P \neq NP$ garantisce la separazione tra le prime due classi, ma non fornisce alcuna deduzione logica o informazione necessaria per separare $NP$ e $PSPACE$. Potrebbe tranquillamente verificarsi lo scenario in cui $P \neq NP$ ma contemporaneamente si abbia $NP = PSPACE$.
    
      
    

### 2. $NP \neq co-NP \Rightarrow PSPACE \neq P$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Questa è l'equivalente della sua contronominale $PSPACE = P \Rightarrow NP = co-NP$. Se assumessimo per assurdo $PSPACE = P$, assisteremmo al collasso di tutta la gerarchia verso $P$. Poiché $NP \subseteq PSPACE$ e $co-NP \subseteq PSPACE$, il collasso implicherebbe inevitabilmente l'uguaglianza $NP = co-NP$. Dato che questo violerebbe l'ipotesi iniziale dell'implicazione ($NP \neq co-NP$), la conseguenza $PSPACE \neq P$ risulta matematicamente vera.
    
      
    

### 3. $\mathbb{A} \in PSPACE-c \Rightarrow \mathbb{A} \in NP-hard$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Per la definizione formale di problema PSPACE-completo, ogni problema appartenente alla classe $PSPACE$ si riduce polinomialmente ad $\mathbb{A}$. Sapendo dalla gerarchia che $NP \subseteq PSPACE$, ne deriva che anche ogni problema appartenente a $NP$ si riduce logicamente ad $\mathbb{A}$. Un problema al quale tutti i problemi di $NP$ si possono ricondurre soddisfa esattamente la definizione di problema $NP-hard$.
    
      
    

### 4. $\text{SMALL FACTOR} \notin P\Rightarrow \forall\mathbb{A}\in NP$ è _self reducible_

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Il problema SMALL FACTOR appartiene all'intersezione $NP \cap co-NP$. Se assumiamo che esso non appartenga a $P$ (ovvero $\text{SMALL FACTOR} \notin P$), allora l'insieme $(NP \cap co-NP) \setminus P$ non è vuoto. Secondo il secondo teorema di self-reducibility, se si verifica questa specifica condizione, allora esiste obbligatoriamente almeno un problema nella classe $NP$ che _non_ è self-reducible. L'affermazione dichiara invece che _tutti_ i problemi in $NP$ lo sono, risultando così falsa.
    
      
    

### 5. $\text{EULPATH}\in NPC \Leftrightarrow P=NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema EULERIAN PATH (EULPATH) è risolvibile efficientemente in tempo polinomiale, quindi appartiene originariamente alla classe deterministica $P$.
    
      
    -   ($\Rightarrow$) Se EULPATH appartenesse a $NPC$, avremmo un problema situato contemporaneamente in $P$ e in $NPC$. Questo causerebbe istantaneamente il collasso totale $P = NP$.
        
          
        
    -   ($\Leftarrow$) Se $P = NP$, allora tutti i problemi in $P$ (incluso EULPATH) diverrebbero risolvibili con gli stessi limiti dei problemi in $NPC$, diventando a loro volta $NP-completi$.
        
          
        

### 6. $\exists alg\frac{3}{2}$-approx per INDEPENDENT SET $\Rightarrow\exists alg$ di $\frac{3}{2}$-approx per VERTEX COVER

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Sappiamo, attraverso il Teorema del Gap, che MAXIMUM INDEPENDENT SET non ammette alcun fattore di approssimazione costante $r$ (incluso $r = 1.5$) a meno che non si verifichi l'uguaglianza $P = NP$. Se esistesse l'algoritmo ipotizzato dalla premessa, verrebbe automaticamente implicato il collasso $P = NP$. In uno scenario in cui $P = NP$, la soluzione ottima per VERTEX COVER può essere individuata in modo esatto in tempo polinomiale. Un calcolo esatto garantisce il fattore di approssimazione perfetto $r = 1$, il quale copre e soddisfa abbondantemente la richiesta di un algoritmo di $\frac{3}{2}$-approssimazione (essendo $1 \le 1.5$).
    
      
    

### 7. $\mathbb{A}^{OPT}\in NP-hard$ e $P\neq NP\Rightarrow \exists x \in I(\mathbb{A}) t.c. \nexists alg$ polytime fornisce soluzione ottima per $x$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** L'affermazione sostiene che esista una _singola e specifica_ istanza $x$ per la quale in assoluto _nessun_ algoritmo polinomiale possa fornire la soluzione ottima. Questo è logicamente scorretto: fissata una specifica istanza $x$ conosciuta, è sempre possibile programmare un algoritmo banale che in tempo $O(1)$ restituisca direttamente la soluzione ottima per quell'input esatto (inserendo la soluzione hardcoded). L'impossibilità di trovare una soluzione in tempo polinomiale (quando $P \neq NP$) si applica al problema _generale_, ovvero alla capacità di un algoritmo di risolvere correttamente tutte le infinite istanze, non la singola isolata istanza $x$.
    
      
    

### 8. $P=NP \Rightarrow\exists alg A$ polytime $\forall\mathbb{A}\in NP$ e $\forall x\in I(\mathbb{A})\text{ t.c. }A(x) = \mathbb{A}(x)$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Questa è la precisa definizione formale del collasso $P = NP$. Affermare che $P = NP$ significa letteralmente che ogni problema $\mathbb{A}$ appartenente alla classe non deterministica $NP$ possiede anche un algoritmo deterministico polinomiale $A$ in grado di risolverlo in modo esatto. Tale algoritmo deve poter prendere in input qualsiasi istanza $x$ e restituire l'output corretto $A(x) = \mathbb{A}(x)$ calcolato in tempo polinomiale.
