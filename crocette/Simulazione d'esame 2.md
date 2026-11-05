## Simulazione d'esame 2
Per ognuna delle seguenti affermazioni si dica se essa è Vera, Falsa o"Irrisolta". Per "Irrisolta" si intende che per quanto si sa, non risulta provata nè l'affermazione, nè la sua falsità.

### 1. Se ogni algoritmo che risolve SAT ha complessità $\Omega(n+n^{\frac{\log{\log{n}}}{}})$ allora $P \neq NP$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Anche se il denominatore dell'esponente manca nel testo originale (spesso in questi esercizi è $\log n$), il valore della funzione $n^{\frac{\log{\log{n}}}{\dots}}$ risulta comunque asintoticamente sub-polinomiale o al massimo polinomiale. Un limite inferiore (lower bound) di tipo polinomiale come $\Omega(n)$ indica semplicemente che l'algoritmo deve almeno leggere l'input. Avere un limite inferiore polinomiale per SAT non esclude in alcun modo che possa esistere un algoritmo risolutivo anch'esso polinomiale, pertanto non fornisce alcuna dimostrazione matematica per affermare che $P \neq NP$.
    
      
    

### 2. Se QSAT si riduce in tempo polinomiale a SAT allora $co-NP = NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema QUANTIFIED SAT (QSAT) è PSPACE-completo. Se esso si riducesse in tempo polinomiale a SAT (che appartiene a NP), significherebbe che l'intera classe PSPACE si può ridurre a NP, causando il collasso $PSPACE = NP$. Sappiamo dalla teoria che la classe PSPACE è simmetrica e chiusa per il complemento ($PSPACE = co-PSPACE$). Di conseguenza, se PSPACE coincide con NP, anche i rispettivi complementi coincidono, forzando matematicamente l'uguaglianza $NP = co-NP$.
    
      
    

### 3. 2-SAT è riducibile in tempo polinomiale al problema SAT

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema 2-SAT è semplicemente un caso particolare e più ristretto del problema generale SAT. Ogni istanza valida per 2-SAT (una formula CNF con clausole di al massimo due letterali) è intrinsecamente un'istanza valida per SAT. La riduzione può quindi consistere nella funzione identità, che mappa l'istanza in se stessa in tempo lineare (che è polinomiale). Più formalmente, essendo 2-SAT in P (e quindi in NP) e SAT un problema NP-completo, l'esistenza di una riduzione alla Karp è garantita per definizione.
    
      
    

### 4. Non esiste alcun algoritmo polinomiale che garantisce approssimazione 11/10 per il problema di trovare il minimo numero di colori per colorare propriamente i vertici di un grafo

-   **Esito:** Irrisolta.
    
      
    
-   **Motivazione:** Il problema della colorazione dei grafi è un problema NP-hard per il quale esistono limiti di inapprossimabilità molto severi, ma questi limiti sono sempre condizionati all'ipotesi $P \neq NP$. Se assumiamo $P \neq NP$, tale algoritmo effettivamente non può esistere (l'affermazione sarebbe vera). Se però si scoprisse che $P = NP$, si potrebbe calcolare la colorazione ottima esatta in tempo polinomiale (fattore 1, che soddisfa ampiamente la richiesta di 1.1), rendendo l'affermazione falsa. Poiché P vs NP è un problema aperto, la verità dell'affermazione è irrisolta.
    
      
    

### 5. $\bigcup_{k>0} \mathcal{TIME}(2^{n^{k}}) \neq \bigcup_{k>0} \mathcal{NTIME}(2^{n^{k}})$

-   **Esito:** Irrisolta.
    
      
    
-   **Motivazione:** Queste due espressioni formali rappresentano l'unione di tutte le classi di tempo esponenziale, definendo rispettivamente le classi EXPTIME (deterministica) e NEXPTIME (non deterministica). La formula chiede quindi di valutare se $EXPTIME \neq NEXPTIME$. Analogamente al problema P vs NP, sappiamo con certezza che $EXPTIME \subseteq NEXPTIME$, ma la prova formale della loro separazione netta o della loro uguaglianza costituisce a oggi uno dei grandi problemi aperti dell'informatica teorica.
    
      
    

### 6. $\mathcal{SPACE}(\log{n}) \subseteq NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** La classe $\mathcal{SPACE}(\log n)$ identifica la classe spaziale deterministica $L$ (algoritmi deterministici con memoria logaritmica). Dalla gerarchia fondamentale delle classi di complessità, conosciamo la catena di inclusioni $L \subseteq NL \subseteq P \subseteq NP$. Applicando semplicemente la proprietà transitiva di questi sottoinsiemi, si deduce con certezza matematica che la classe $L$ è pienamente contenuta all'interno della classe $NP$.
    
      
    

### 7. $APX \subseteq PTAS$

-   **Esito:** Irrisolta.
    
      
    
-   **Motivazione:** La relazione tra queste due classi dipende interamente dal collasso o meno di P e NP. Se si assume l'ipotesi largamente accreditata che $P \neq NP$, esistono problemi all'interno di APX (come il MINIMUM VERTEX COVER) che non ammettono uno schema di approssimazione arbitrario PTAS, rendendo la disuguaglianza falsa ($APX \not\subseteq PTAS$). Se invece $P = NP$, tutte le classi di approssimazione collassano nell'uguaglianza $APX = PTAS = P$, rendendo l'affermazione vera. Di conseguenza, la questione è un problema aperto.
    
      
    

### 8. Se esiste un algoritmo polinomiale per decidere se una formula Booleana è una tautologia, allora ogni problema in NP può essere risolto in tempo polinomiale

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema di verificare una tautologia (TAUTOLOGY) è co-NP-completo. Se esistesse un algoritmo deterministico polinomiale per esso, significherebbe che TAUTOLOGY appartiene alla classe P. Risolvere in tempo polinomiale il problema più difficile della sua classe implicherebbe il collasso totale di co-NP all'interno di P ($co-NP = P$). Essendo la classe P chiusa per il complemento, questo comporterebbe inevitabilmente l'uguaglianza tra P e NP ($P = NP$). In un mondo in cui $P = NP$, per definizione, tutti i problemi decisionali della classe NP possono essere risolti efficientemente in tempo polinomiale.
