## Appello del 3 Febbraio 2023

### 1. Non esiste un algoritmo di approssimazione 3 per il problema INDEPENDENT SET.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Non esiste alcun algoritmo di approssimazione con fattore costante $r$ (incluso $r=3$) per il problema INDEPENDENT SET. Poiché INDEPENDENT SET non appartiene alla classe APX, è impossibile trovare un'approssimazione costante a meno di non incorrere nel collasso delle classi di complessità.
    
      
    

### 2. Se $co-NP \cap NP \ne P$ allora ogni problema nella classe NP è selfreducible.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Vale esattamente l'opposto. Per il secondo teorema di self-reducibility, se l'intersezione $co-NP \cap NP$ non coincide con P (ovvero $(NP \cap co-NP) \setminus P \ne \emptyset$), allora esiste obbligatoriamente almeno un problema in NP che _non_ è self-reducible. Un esempio teorico noto per questo scenario è il problema SMALL FACTOR.
    
      
    

### 3. $APX \ne PTAS$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Se per assurdo $APX = PTAS$, significherebbe poter trovare un algoritmo di approssimazione arbitrariamente vicino all'ottimo per ogni problema in APX, come ad esempio VERTEX COVER. Questo è assurdo perché il teorema del gap per VERTEX COVER stabilisce un limite inferiore all'approssimabilità (non si può scendere sotto $\frac{7}{6}$); superarlo comporterebbe $P = NP$ (e di conseguenza il collasso $NP = co-NP$, escluso dalla traccia).
    
      
    

### 4. Se $\mathbb{A} \in P$ allora $\mathbb{A} \notin NP \cap co-NP$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Se un problema $\mathbb{A}$ appartiene a P, esiste un algoritmo deterministico polinomiale che lo risolve. Questo algoritmo può essere utilizzato direttamente come certificatore in tempo polinomiale sia per le istanze "yes" (quindi $\mathbb{A} \in NP$) sia per le istanze "no" (quindi $\mathbb{A} \in co-NP$). Di conseguenza, la classe P è un sottoinsieme dell'intersezione $NP \cap co-NP$, per cui $\mathbb{A}$ vi appartiene pienamente.
    
      
    

### 5. PSPACE $\neq$ co-NP.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** 
	- Sappiamo che $NP\subseteq PSPACE$

	- Se per assurdo fosse $PSPACE=coNP$

	- allora avremmo $NP\subseteq coNP$

	- Da questo segue $NP=coNP$

	- che contraddice l’ipotesi $NP\neq coNP$
    
      
    

### 6. Esiste un algoritmo polinomiale che per ogni grafo G ed ogni valore k determina se tutte le clique di G hanno taglia inferiore a k.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Il problema formulato (verificare se un grafo _non_ possiede alcuna clique di taglia $\ge k$) è l'esatto complemento del problema decisional CLIQUE. Dato che CLIQUE è NP-completo, il suo complemento appartiene per definizione alla classe co-NPC. Se esistesse un algoritmo polinomiale per risolverlo, questo problema apparterrebbe a P, il che implicherebbe $P = NP$ e a cascata $NP = co-NP$, cadendo nell'assurdo per l'ipotesi fornita.
    
      
    

### 7. Il problema SMALL FACTOR non è NP-completo.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema SMALL FACTOR è verificabile polinomialmente sia in positivo che in negativo, collocandosi all'interno dell'intersezione $NP \cap co-NP$. Se per assurdo esso fosse NP-completo, per definizione di durezza tutti i problemi della classe NP si ridurrebbero a SMALL FACTOR, che si trova anche in co-NP. Questo causerebbe l'inclusione di NP in co-NP portando al collasso $NP = co-NP$, in aperta violazione dell'assunzione della traccia.
    
      
    

### 8. QUANTIFIED SAT è co-NP-completo

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** QUANTIFIED SAT (noto anche come Q-SAT) è il problema prototipico della classe PSPACE-completo. Se fosse co-NP-completo apparterrebbe alla classe co-NP; questo significherebbe che ogni problema in PSPACE potrebbe ridursi a un problema in co-NP, comportando l'uguaglianza PSPACE = co-NP e costringendo di riflesso la classe NP a collassare in co-NP ($NP = co-NP$).
    
      
    

### 9. Se A è PSPACE-completo allora A $\notin$ co-NP.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** La logica è la medesima dell'affermazione precedente. Un problema PSPACE-completo definisce la massima difficoltà per la classe PSPACE. Se un problema del genere appartenesse a co-NP, l'intera classe PSPACE collasserebbe all'interno di co-NP. Dato che $NP \subseteq PSPACE$, questo genererebbe l'uguaglianza $NP = co-NP$, contravvenendo alla premessa dell'esercizio. Pertanto, un problema PSPACE-completo non può stare in co-NP.
    
      
    

### 10. Se A è NP-completo allora A non è in co-NP.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Se un problema $\mathbb{A}$ fosse contemporaneamente NP-completo e appartenente alla classe co-NP, allora, in virtù della sua NP-completezza, qualsiasi altro problema nella classe NP potrebbe essere ridotto in tempo polinomiale ad $\mathbb{A}$. Poiché $\mathbb{A} \in co-NP$, l'intera classe NP ricadrebbe all'interno di co-NP, portando all'assurdo logico $NP = co-NP$ escluso dalla traccia.
