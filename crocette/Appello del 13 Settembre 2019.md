## Appello del 13 Settembre 2019
Per ognuna delle seguenti affermazioni si dica se essa è Vera, Falsa o"Irrisolta". Per "Irrisolta" si intende che per quanto si sa, non risulta provata nè l'affermazione, nè la sua falsità.
Si assuma che $NP \neq co-NP$

  

### 1. $P \neq NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Come dimostrato poco sopra, l'assunzione $NP \neq co-NP$ forza matematicamente la separazione tra la classe deterministica $P$ e quella non deterministica $NP$. Se fossero uguali, le classi $NP$ e $co-NP$ collasserebbero a loro volta.
    
      
    

### 2. $SPACE(2^{O(n)}) = NSPACE(2^{O(n)})$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Questa affermazione rimane vera in modo incondizionato grazie al Teorema di Savitch (che stabilisce $NSPACE(f(n)) \subseteq SPACE(f(n)^2)$). La relazione asintotica per le classi di complessità spaziale esponenziale porta inevitabilmente all'uguaglianza perfetta EXPSPACE = NEXPSPACE, indipendentemente dall'assunzione su $NP$.
    
      
    

### 3. $P = APX$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** La classe APX contiene problemi NP-hard (come VERTEX COVER). Se l'intera classe APX convergesse in $P$, tutti i problemi in essa contenuti sarebbero risolvibili in tempo esatto polinomiale, causando l'uguaglianza $P = NP$. Dato che la tua premessa implica $P \neq NP$, questa uguaglianza è falsa.
    
      
    

### 4. $\text{VERTEX COVER} \in co-NP$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** VERTEX COVER è un problema NP-completo. Se esso appartenesse alla classe $co-NP$, essendo un problema completo per la sua classe, comporterebbe che tutti i problemi in $NP$ si ridurrebbero a $co-NP$, scatenando il collasso $NP = co-NP$. Poiché la traccia impone di assumere $NP \neq co-NP$, VERTEX COVER non può assolutamente trovarsi in $co-NP$.
    
      
    

### 5. $NSPACE(\log{n}) \subseteq P$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** L'inclusione della classe spaziale non deterministica logaritmica ($NL$) all'interno della classe $P$ è un teorema matematicamente provato e incondizionato (basato sulla risoluzione del problema della raggiungibilità nei grafi). Vale sempre, a prescindere dalle ipotesi aggiuntive.
    
      
    

### 6. $APX \neq PTAS$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Sotto l'ipotesi che $P \neq NP$ (derivata dalla tua assunzione), il Teorema del Gap garantisce che la gerarchia dell'approssimabilità non collassa. Esistono problemi in APX che non ammettono alcuno schema di approssimazione PTAS, confermando che le due classi sono rigorosamente separate.
    
      
    

### 7. $\text{2-PLAYER-HAMILTONIAN-PATH} \notin P$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema 2-PLAYER-HAMILTONIAN-PATH è PSPACE-completo. Se per assurdo esso appartenesse a $P$, l'intera classe $PSPACE$ collasserebbe in $P$ ($PSPACE = P$). Poiché $NP \subseteq PSPACE$ e $co-NP \subseteq PSPACE$, questo causerebbe a cascata il collasso di entrambe le classi in $P$, portando inesorabilmente a $NP = co-NP$. Questo violerebbe l'ipotesi iniziale dell'esercizio, dimostrando per assurdo che il problema non può appartenere a $P$.
