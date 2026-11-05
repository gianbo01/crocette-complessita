## Appello del 27 Settembre 2023

### 1. $NP \neq PSPACE \Rightarrow P \neq NP$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Dalla gerarchia delle classi sappiamo che $P \subseteq NP \subseteq PSPACE$. L'ipotesi $NP \neq PSPACE$ garantisce una separazione netta tra NP e PSPACE, ma non vieta in alcun modo che possa verificarsi l'uguaglianza tra le classi inferiori. Potrebbe esistere uno scenario teorico in cui $P = NP$, mantenendo al contempo una rigida separazione dalla classe superiore ($P = NP \subset PSPACE$).
    
      
    

### 2. $NP \neq co-NP \Rightarrow P \neq NP \cap co-NP$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Questa implicazione logica è equivalente alla sua contronominale: $P = NP \cap co-NP \Rightarrow NP = co-NP$. Questa conclusione è matematicamente falsa: la premessa non è sufficientemente restrittiva da forzare l'uguaglianza delle due classi. Potrebbe esistere tranquillamente un universo computazionale in cui l'intersezione $NP \cap co-NP$ coincide esattamente con la classe P, ma le classi NP e co-NP rimangono comunque più ampie e separate tra loro.
    
      
    

### 3. $\mathbb{A} \in PSPACE-C \Rightarrow \mathbb{A} \in NP-hard$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Per la definizione formale di problema PSPACE-completo, ogni problema appartenente alla classe PSPACE si riduce in tempo polinomiale ad $\mathbb{A}$. Dato che la gerarchia stabilisce che $NP \subseteq PSPACE$, ne deriva inevitabilmente che anche ogni problema appartenente a NP si riduce logicamente ad $\mathbb{A}$. Un problema al quale si riducono tutti i problemi in NP soddisfa esattamente la definizione di problema NP-hard.
    
      
    

### 4. $\text{SMALL FACTOR} \in co-NPC \Rightarrow P = NP$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Il problema SMALL FACTOR appartiene all'intersezione $NP \cap co-NP$. Se per ipotesi esso diventasse co-NP-completo, tutti i problemi in co-NP si ridurrebbero a un problema in NP, causando il collasso totale $NP = co-NP$. Tuttavia, l'uguaglianza tra le due classi non deterministiche non è una condizione sufficiente a garantire un ulteriore collasso verso il basso. Pertanto, l'implicazione non porta necessariamente all'uguaglianza $P = NP$.
    
      
    

### 5. $P = APX \Rightarrow \text{EULERIAN PATH} \in NPC$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** La classe APX contiene problemi NP-hard, come VERTEX COVER. Se si verificasse l'uguaglianza $P = APX$, allora problemi come VERTEX COVER apparterrebbero a P, innescando il collasso totale delle classi $P = NP$. Il problema EULERIAN PATH è risolvibile in tempo polinomiale, quindi $\in P$. In uno scenario in cui $P = NP$, tutti i problemi in P diverrebbero equivalenti ai problemi in NP, venendo riclassificati come NP-completi.
    
      
    

### 6. $\mathbb{A}^{OPT} \in NP-hard$ e $P \neq NP \Rightarrow \exists x \in I(\mathbb{A}) \text{ t.c. } \nexists alg$ polytime fornisce soluzione OPT per $x$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** L'affermazione sostiene che debba esistere una _singola e specifica_ istanza $x$ in grado di far fallire ogni algoritmo polinomiale in assoluto. Questo è logicamente impossibile: fissata una singola istanza conosciuta $x$, è sempre fattibile scrivere un banale algoritmo "ad hoc" che, in tempo costante $O(1)$, stampi in output la soluzione ottima pre-programmata nel codice per quel caso esatto. La difficoltà di un problema (hardness) si applica alla capacità di risolvere _tutte_ le infinite istanze, non una sola isolata.
    
      
    

### 7. $P \neq NP \Rightarrow \forall \Pi \text{ polytime}, \forall \mathbb{A} \in NP \exists \infty \text{ istanze } x \in I(\mathbb{A}) \text{ t.c. } \Pi(x) \neq \mathbb{A}(x)$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** L'affermazione generalizza in modo inappropriato dicendo "per _ogni_ problema $\mathbb{A}$ in NP". Poiché la classe P è un sottoinsieme di NP ($P \subseteq NP$), l'insieme NP include anche tutti i problemi intrinsecamente "facili". Per questi problemi (ad esempio, REACHABILITY o 2-SAT), esiste per definizione un algoritmo deterministico polinomiale $\Pi$ in grado di restituire la risposta corretta per _tutte_ le istanze, fallendo quindi su zero istanze, non su un numero infinito.
    
      
    

### 8. $QSAT \in co-NPC \Rightarrow \text{VERTEX COVER} \in co-NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** QUANTIFIED SAT (QSAT) è un problema noto per essere PSPACE-completo. Se assumessimo che tale problema sia co-NP-completo, significherebbe che l'intera classe PSPACE collassa in co-NP, forzando l'uguaglianza $PSPACE = co-NP$. Sapendo dalla gerarchia che $NP \subseteq PSPACE$, questo causerebbe a cascata l'inclusione di NP in co-NP e il collasso totale $NP = co-NP$. Poiché VERTEX COVER è un problema NP-completo e quindi appartiene a NP, attraverso questo collasso esso apparterrebbe logicamente anche a co-NP.
