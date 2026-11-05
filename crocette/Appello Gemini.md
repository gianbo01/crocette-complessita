## Appello Gemini

### 1. Se $NP \neq co-NP$, allora $P \neq NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Se si assumesse per assurdo $P = NP$, poiché la classe $P$ è chiusa rispetto al complemento ($P = co-P$), si otterrebbe la catena di uguaglianze $NP = P = co-P = co-NP$. Questo contraddice direttamente l'ipotesi imposta $NP \neq co-NP$, dimostrando che l'uguaglianza tra $P$ e $NP$ è impossibile in questo scenario.
    

    

### 3. Se $NP \neq co-NP$, allora $P=APX$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** La classe APX racchiude problemi NP-hard come VERTEX COVER. Se fosse vero che $P = APX$, allora tutti questi problemi potrebbero essere risolti in tempo polinomiale, implicando $P = NP$. Tuttavia, come dimostrato al Punto 1, la premessa $NP \neq co-NP$ forza $P \neq NP$, rendendo questa uguaglianza falsa.
    
      
    

### 4. Se $NP \neq co-NP$, allora $\text{VERTEX COVER}\notin co-NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** VERTEX COVER è un problema NP-completo. Se esso risiedesse all'interno di co-NP, ogni problema della classe NP potrebbe esservi ridotto, causando a cascata l'inclusione di NP in co-NP e il collasso $NP = co-NP$. Dato che la premessa lo vieta categoricamente, il problema non può appartenere a co-NP.
    
      
    

### 5. Se $NP \neq co-NP$, allora $NTIME(\log{n})\subseteq P$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** L'inclusione della classe NL ($NTIME(\log n)$) in P è una verità strutturale e incondizionata, derivante dalla possibilità di risolvere il problema di raggiungibilità su un grafo di configurazioni polinomiali in tempo deterministico polinomiale. L'assunzione esterna non scardina questo teorema.
    
      
    

### 6. Se $NP \neq co-NP$, allora $APX \neq PTAS$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Sapendo che $P \neq NP$ (derivato dalla premessa iniziale), possiamo applicare in modo assoluto il Teorema del Gap. Esso sancisce che esistono problemi di ottimizzazione in APX (come il MINIMUM VERTEX COVER) che non ammettono alcuno schema PTAS, garantendo una separazione formale tra le due classi.
    
      
    

### 7. Se $NP \neq co-NP$, allora $QSAT \notin P$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** QUANTIFIED SAT (QSAT) è il problema PSPACE-completo per eccellenza. Se QSAT appartenesse a P, tutta la classe PSPACE collasserebbe in P. Poiché l'ecosistema PSPACE contiene sia NP che co-NP, verrebbero schiacciate entrambe in P, portando a $NP = co-NP$. Poiché questo viola violentemente la premessa, QSAT deve stare fuori da P.
    
      
    

