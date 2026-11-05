## Appello del 25 Settembre 2026



### 1. $\text{TWO-PLAYER-SAT} \in NSPACE(\log{n}) \Rightarrow \text{TAUTOLOGY} \leq SAT$
      
    
-   **Esito:** Vero.
    
-   **Analisi:** `TWO-PLAYER-SAT` è un problema PSPACE-completo. La classe $NSPACE(\log n)$, nota anche come NL, è un sottoinsieme della classe deterministica P ($NL \subseteq P$). Se un problema PSPACE-completo appartenesse a NL, l'intera gerarchia PSPACE collasserebbe all'interno di P, portando all'uguaglianza $PSPACE = P = NP = co-NP$. Questo collasso violerebbe apertamente la tua assunzione di base ($NP \neq co-NP$), rendendo la premessa logicamente impossibile in questo universo computazionale. Un'implicazione con premessa sempre falsa è matematicamente vera; in alternativa, nel mondo collassato ipotizzato dalla premessa, ogni problema di co-NP (come TAUTOLOGY) si ridurrebbe banalmente a uno di NP (come SAT) essendo tutti risolvibili in tempo polinomiale.
    
      
    

### 2. $\text{TAUTOLOGY} \leq \text{TWO-PLAYER-SAT} \Rightarrow co-NP = PSPACE$
      
    
-   **Esito:** Falso.
    
-   **Analisi:** Sappiamo dalla gerarchia delle classi di complessità che $co-NP \subseteq PSPACE$. Essendo TAUTOLOGY un problema co-NP-completo e TWO-PLAYER-SAT un problema PSPACE-completo, è strutturalmente garantito che esista una riduzione polinomiale dal primo al secondo. La premessa è quindi una verità incondizionata. Tuttavia, la semplice esistenza di questa riduzione (dal basso verso l'alto nella gerarchia) non fornisce alcuna dimostrazione che l'intera classe PSPACE collassi all'interno di co-NP. Un'implicazione in cui la premessa è vera ma la conseguenza non consegue logica risulta non valida.
    
      
    

### 3. Se $\mathbb{A}$ è PSPACE-completo allora $\mathbb{A}$ è NP-hard
      
    
-   **Esito:** Vero.
    
-   **Analisi:** Per la definizione di completezza, se un problema $\mathbb{A}$ è PSPACE-completo, allora qualsiasi problema appartenente alla classe PSPACE si riduce ad $\mathbb{A}$ in tempo polinomiale. Poiché la classe NP è un sottoinsieme di PSPACE ($NP \subseteq PSPACE$), tutti i problemi all'interno di NP si riducono a cascata ad $\mathbb{A}$. La definizione di un problema al quale si riducono tutti i problemi di NP coincide esattamente con la definizione formale di problema NP-hard.
    
      
    

### 4. Se esiste un problema $\mathbb{A}$ tale che $\mathbb{A}$ è NP-completo e $\mathbb{A}$ è PSPACE-hard, allora $NPSPACE = co-NP$
      
    
-   **Esito:** Vero.
    
-   **Analisi:** Se $\mathbb{A}$ è PSPACE-hard, significa che ogni problema in PSPACE si riduce ad esso. Se $\mathbb{A}$ è contemporaneamente NP-completo, significa che appartiene a NP ($\mathbb{A} \in NP$). Questo provocherebbe l'inclusione di PSPACE in NP, forzando l'uguaglianza $PSPACE = NP$. Per il Teorema di Savitch sappiamo che $NPSPACE = PSPACE$. Inoltre, poiché PSPACE è una classe chiusa per il complemento ($PSPACE = co-PSPACE$), se $PSPACE = NP$ allora deve valere anche $co-PSPACE = co-NP$. Sostituendo le uguaglianze, si ottiene inevitabilmente il collasso totale $NPSPACE = PSPACE = co-NP$.
    
      
    

### 5. Se $\mathbb{A}$ è NP-completo e $\mathbb{B}$ è NP-completo allora il problema $\mathbb{C}$ definito da $\mathbb{C}(x) = \mathbb{A}(x) \wedge \mathbb{B}(x)$ è NP-completo.
      
    
-   **Esito:** Falso.
    
-   **Analisi:** L'intersezione logica (AND) di due problemi NP-completi $\mathbb{A}$ e $\mathbb{B}$ produce un problema $\mathbb{C}$ che appartiene sicuramente alla classe NP, ma non è garantito che ne mantenga la durezza e la completezza. Esistono casi in cui i linguaggi accettati da $\mathbb{A}$ e $\mathbb{B}$ sono mutuamente esclusivi (l'intersezione è vuota). In tal caso, il problema combinato $\mathbb{C}$ risponderà sempre "no" per qualsiasi input, diventando un problema banale risolvibile in tempo costante $O(1)$. Sotto la tua assunzione $NP \neq co-NP$ (che implica $P \neq NP$), un problema risolvibile in P non può essere NP-completo.
    
      
    

### 6. Se $\mathbb{A} \in NP$ e $\mathbb{B} \in NP$ allora il problema $\mathbb{C}$ definito da $\mathbb{C}(x) = \mathbb{A}(x) \vee \mathbb{B}(x)$ appartiene alla classe NP.
      
    
-   **Esito:** Vero.
    
-   **Analisi:** La classe non deterministica NP è matematicamente chiusa rispetto all'operazione di unione logica (OR). Poiché entrambi i problemi originari appartengono a NP, per entrambi esistono certificati verificabili in tempo polinomiale. Un algoritmo non deterministico per risolvere $\mathbb{C}$ può semplicemente "indovinare" per quale dei due problemi l'istanza è positiva, e successivamente lanciare il relativo verificatore. Entrambe le operazioni mantengono la complessità in tempo polinomiale, confermando l'appartenenza a NP.
    
      
    

### 7. Se $\text{SYMMETRIC TSP} \in APX$ allora $co-NP = NP$
      
    
-   **Esito:** Vero.
    
-   **Analisi:** Il problema del commesso viaggiatore generale simmetrico (SYMMETRIC TSP) è noto per essere inapprossimabile entro un fattore costante a meno di non scatenare il collasso della classe P nella classe NP. Ipotizzare che esso appartenga ad APX (che garantisce proprio un fattore di approssimazione costante) rende immediatamente vera l'uguaglianza $P = NP$. Essendo la classe deterministica P chiusa per il complemento ($P = co-P$), questo collasso forza di conseguenza l'uguaglianza tra le rispettive controparti non deterministiche, portando a $NP = co-NP$.
    
      
    

### 8. Se $APX \neq FPTAS$ allora $SAT \nleq \text{2-SAT}$
    
-   **Esito:** Vero.

-   **Analisi:** Si può dimostrare attraverso la contronominale: se $SAT \leq \text{2-SAT}$, allora $APX = FPTAS$. Il problema SAT è NP-completo, mentre 2-SAT appartiene alla classe P. Se il problema più arduo di NP si riducesse in tempo polinomiale a un problema in P, l'intera classe NP collasserebbe in P ($P = NP$). In un universo computazionale in cui $P = NP$, la soluzione ottima esatta per qualsiasi problema di ottimizzazione in NP potrebbe essere calcolata in tempo polinomiale, fornendo un'approssimazione perfetta (fattore $r=1$). Questo azzererebbe le differenze tra tutte le classi di approssimabilità, facendole collassare in P ($APX = PTAS = FPTAS$). Poiché la contronominale è vera, anche l'implicazione di partenza risulta valida.
    
      
