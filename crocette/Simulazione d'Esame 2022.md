## Simulazione d'Esame 2022
Per ognuna delle seguenti affermazioni si dica se essa è Vera, Falsa o"Irrisolta". Per "Irrisolta" si intende che per quanto si sa, non risulta provata nè l'affermazione, nè la sua falsità.
Si assuma che $NP \neq co-NP$.


### 1. $P \neq NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Se per assurdo assumessimo $P = NP$, poiché la classe deterministica $P$ è simmetrica e chiusa per il complemento ($P = co-P$), si innescherebbe la catena di uguaglianze $NP = P = co-P = co-NP$. Questo risultato si scontra direttamente con la premessa $NP \neq co-NP$, dimostrando per assurdo che $P \neq NP$ deve essere necessariamente vera.
    
      
    

### 2. $TIME(2^{O(n)}) = NTIME(2^{O(n)})$

-   **Esito:** Irrisolta.
    
      
    
-   **Motivazione:** Questa uguaglianza si interroga sul collasso delle classi esponenziali ($EXPTIME = NEXPTIME$). L'assunzione $NP \neq co-NP$ governa i limiti inferiori e il comportamento delle classi polinomiali, ma non fornisce alcun vincolo o informazione matematica in grado di dirimere i rapporti di uguaglianza o separazione ai livelli esponenziali superiori. Il problema, pertanto, rimane aperto.
    
      
    

### 3. $P = APX$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** La classe $APX$ contiene problemi NP-hard (come il noto VERTEX COVER). Se $P = APX$, tutti questi problemi estremamente complessi sarebbero risolvibili in tempo esatto polinomiale, implicando inevitabilmente $P = NP$. Poiché abbiamo appena dimostrato (al Punto 1) che $P \neq NP$ sotto la nostra ipotesi, questa uguaglianza risulta matematicamente falsa.
    
      
    

### 4. $\text{VERTEX COVER} \notin co-NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema VERTEX COVER è certificato come NP-completo. Se esso appartenesse alla classe $co-NP$, ogni problema situato in $NP$ potrebbe essere ridotto a un problema in $co-NP$, causando il collasso totale $NP = co-NP$. Dato che la tua premessa iniziale lo vieta in modo esplicito, è garantito che VERTEX COVER non possa risiedere all'interno di $co-NP$.
    
      
    

### 5. $NTIME(\log{n}) \subseteq P$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Un algoritmo non deterministico che opera con un limite di tempo asintotico $O(\log n)$ può generare un albero di computazione con una profondità massima pari a $O(\log n)$. Il numero totale di stati (o foglie) possibili esplorabili in questo albero è al massimo $2^{O(\log n)}$, che matematicamente corrisponde a una crescita prettamente polinomiale $O(n^k)$. Una macchina deterministica può simulare questa intera esplorazione senza sforare i limiti di tempo di $P$, rendendo l'inclusione una verità incondizionata.
    
      
    

### 6. $APX \neq PTAS$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Sapendo con assoluta certezza che $P \neq NP$ (come diretta conseguenza della premessa), il Teorema del Gap diventa pienamente applicabile. Esso assicura che per determinati problemi in $APX$ non possa esistere nessuno schema di approssimazione $PTAS$, garantendo così la netta e rigorosa separazione tra le due classi.
    
      
    

### 7. $QSAT \notin P$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** QUANTIFIED SAT (QSAT) è il prototipo indiscusso della classe PSPACE-completo. Se QSAT appartenesse a $P$, l'intera e vasta classe $PSPACE$ collasserebbe in $P$ ($PSPACE = P$). Poiché $NP \subseteq PSPACE$ e $co-NP \subseteq PSPACE$, l'intero ecosistema verrebbe schiacciato in $P$, portando a $NP = co-NP$. Siccome ciò contraddice violentemente la premessa di partenza, l'asserzione che QSAT non stia in $P$ è inequivocabilmente vera.
    
      
    

### 8. $\text{SMALL FACTOR} \notin P$

-   **Esito:** Irrisolta.
    
      
    
-   **Motivazione:** SMALL FACTOR è uno di quei rari problemi che risiedono pacificamente nell'intersezione $NP \cap co-NP$. L'ipotesi $NP \neq co-NP$ stabilisce i perimetri esterni delle classi, ma non impedisce affatto che un problema specifico contenuto nella loro intersezione possa sfuggire a $P$ o esservi pienamente contenuto. Non esistendo né un algoritmo in tempo polinomiale in grado di risolverlo né una dimostrazione della sua impossibilità logica, il suo status rimane sospeso e irrisolto.
    
