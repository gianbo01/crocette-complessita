## Appello del 27 Febbraio 2024


### 1. $\text{2-PLAYER-SAT} \in NSPACE(\log{n}) \Rightarrow \text{TAUTOLOGY} \leq SAT$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema 2-PLAYER-SAT è PSPACE-completo. La classe $NSPACE(\log n)$ (nota come NL) è contenuta nella classe deterministica P. Se un problema PSPACE-completo appartenesse a NL, allora l'intera classe PSPACE collasserebbe in P, portando a $P = NP = co-NP = PSPACE$. In questo scenario di collasso, il problema TAUTOLOGY (co-NP-completo) si ridurrebbe banalmente in tempo polinomiale a SAT (NP-completo), poiché ogni problema in P si riduce a ogni altro problema non banale in P.
    
      
    

### 2. $\text{TAUTOLOGY} \leq \text{2-PLAYER-SAT} \Rightarrow co-NP = PSPACE$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Sappiamo dalla teoria che $co-NP \subseteq PSPACE$. Essendo TAUTOLOGY in co-NP e 2-PLAYER-SAT un problema PSPACE-completo, è una proprietà strutturale intrinseca che TAUTOLOGY si riduca in tempo polinomiale a 2-PLAYER-SAT. Tuttavia, il fatto che questa singola riduzione esista (ed è sempre garantito che esista) non dimostra affatto che l'intera classe PSPACE si possa ridurre all'interno di co-NP, che sarebbe l'unico modo per provare il collasso $co-NP = PSPACE$.
    
      
    

### 3. Se $\mathbb{A}$ è PSPACE-completo allora $\mathbb{A}$ è NP-hard

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Se $\mathbb{A}$ è PSPACE-completo, ogni problema della classe PSPACE si riduce ad esso in tempo polinomiale. Poiché la classe NP è un sottoinsieme di PSPACE ($NP \subseteq PSPACE$), ne deriva logicamente che tutti i problemi in NP si riducono a $\mathbb{A}$. Un problema al quale tutti i problemi di NP si possono ridurre è, per l'appunto, NP-hard.
    
      
    

### 4. Se esiste un problema $\mathbb{A}$ tale che $\mathbb{A}$ è NP-completo e $\mathbb{A}$ è PSPACE-hard, allora $PSPACE = P$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Se $\mathbb{A}$ è PSPACE-hard, l'intera classe PSPACE si riduce ad esso. Essendo $\mathbb{A}$ anche NP-completo, esso appartiene a NP. Questo provocherebbe il collasso di PSPACE in NP ($PSPACE = NP$). Tuttavia, l'uguaglianza tra le classi non deterministiche non fornisce alcuna certezza che queste collassino ulteriormente verso il basso nella classe deterministica P, a meno che non si assuma arbitrariamente $P = NP$.
    
      
    

### 5. Se $\mathbb{A}$ è NP-completo e $\mathbb{B}$ è NP-completo allora il problema $\mathbb{C}$ definito da $\mathbb{C}(x) = \mathbb{A}(x) \wedge \mathbb{B}(x)$ appartiene alla classe $NP-completo$.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** L'intersezione logica (AND) di due problemi NP-completi genera un problema che appartiene certamente a NP (come visto nella variante precedente), ma **non è necessariamente NP-completo**. Si consideri un caso limite in cui i problemi $\mathbb{A}$ e $\mathbb{B}$ sono disgiunti (ad esempio, $\mathbb{A}$ accetta solo istanze che iniziano per 0, e $\mathbb{B}$ accetta solo istanze che iniziano per 1). In questo caso, l'intersezione $\mathbb{C}(x)$ restituirà sempre e banalmente "no", rendendo il problema risolvibile in tempo costante $O(1)$. Un problema risolvibile in $O(1)$ appartiene a P e non può essere NP-completo (assumendo $P \neq NP$).
    
      
    

### 6. Se $\mathbb{A} \in NP$ e $\mathbb{B} \in NP$ allora il problema $\mathbb{C}$ definito da $\mathbb{C}(x) = \mathbb{A}(x) \vee \mathbb{B}(x)$ appartiene alla classe $NP$.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** La classe NP è chiusa rispetto all'unione (OR). Un ipotetico algoritmo non deterministico per $\mathbb{C}$ può banalmente "indovinare" quale dei due problemi risulta verificato in positivo per quell'istanza $x$ e richiamare il rispettivo verificatore polinomiale. Poiché entrambi i verificatori operano in tempo polinomiale, il problema combinato $\mathbb{C}$ si mantiene ampiamente all'interno di NP.
    
      
    

### 7. Se INDEPENDENT SET è PSPACE-completo allora $NP = co-NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** INDEPENDENT SET appartiene originariamente alla classe NP. Se si assumesse che tale problema sia PSPACE-completo, ogni problema in PSPACE si ridurrebbe a un problema in NP, forzando l'uguaglianza $PSPACE = NP$. Dato che PSPACE è chiusa e simmetrica al suo complemento ($PSPACE = co-PSPACE$), questo collasso scatenerebbe a cascata l'inclusione forzata di tutte le classi, portando inesorabilmente all'uguaglianza $NP = co-NP$.
    
      
    

### 8. Se $\text{SYMMETRIC TSP} \in APX$ allora $co-NP = NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il SYMMETRIC TSP è notoriamente inapprossimabile per qualsiasi fattore costante a meno di non ammettere che $P = NP$. Sostenere che esso appartenga alla classe APX (che garantisce un'approssimazione costante) rende istantaneamente vera l'uguaglianza $P = NP$. Essendo la classe P chiusa per il complemento ($P = co-P$), questo collasso deterministico si rifletterebbe verso l'alto, causando di conseguenza l'uguaglianza $NP = co-NP$.
    
      
    

### 9. Se $SAT \nleq \text{2-SAT}$ allora $\text{TAUTOLOGY} \nleq \text{EULERIAN CYCLE}$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Procediamo con la contronominale: $\text{TAUTOLOGY} \leq \text{EULERIAN CYCLE} \Rightarrow SAT \leq \text{2-SAT}$. Se il problema co-NP-completo TAUTOLOGY si potesse ridurre al problema in P EULERIAN CYCLE, l'intera classe co-NP collasserebbe in P ($co-NP = P$), implicando per riflesso $P = NP$. Se $P = NP$, SAT (che è in NP) apparterrebbe a P. Poiché anche 2-SAT appartiene a P, SAT si potrebbe ridurre polinomialmente a 2-SAT. La contronominale è vera, confermando la verità dell'affermazione originaria.
    
      
    

### 10. Se $APX \neq FPTAS$ allora $P \neq co-NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Anche in questo caso è utile la contronominale: se $P = co-NP$ allora $APX = FPTAS$. L'ipotesi $P = co-NP$ implica inevitabilmente l'uguaglianza $P = NP$. In un mondo con $P = NP$, per ogni problema di ottimizzazione in NP è possibile calcolare in tempo polinomiale la soluzione ottima esatta. Una soluzione ottima esatta offre un fattore di approssimazione perfetto (fattore 1), che annulla ogni differenza tra le classi di approssimabilità, collassandole tutte in P ($APX = PTAS = FPTAS = P$). Essendo la contronominale vera, l'affermazione di partenza risulta corretta.
