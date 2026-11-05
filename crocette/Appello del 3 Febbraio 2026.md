## Appello del 3 Febbraio 2026



### 1. Se per un $\alpha > 0$ esiste un algoritmo di $\alpha$-approssimazione per MINIMUM VERTEX COVER allora esiste anche un algoritmo di $\alpha$-approssimazione per MAXIMUM INDEPENDENT SET
      
    
-   **Esito:** Falso.
    
-   **Motivazione:** I due problemi sono strettamente legati (il complemento di un Vertex Cover in un grafo è un Independent Set), ma le loro proprietà di approssimabilità sono diametralmente opposte. MINIMUM VERTEX COVER ammette algoritmi di approssimazione con fattore costante (ad esempio $\alpha = 2$, appartenendo ad APX). Al contrario, per via del Teorema del Gap, MAXIMUM INDEPENDENT SET non ammette alcun algoritmo di approssimazione con fattore costante a meno che non si verifichi $P = NP$. L'assunzione contestuale fissa in modo rigoroso $NP \neq co-NP$, il che implica matematicamente $P \neq NP$. L'esistenza di un'approssimazione costante per il primo non garantisce quindi la stessa per il secondo.
    
      
    

### 2. Se per un $\alpha > 0$ esiste un algoritmo di $\alpha$-approssimazione per MAXIMUM CLIQUE allora esiste anche un algoritmo di $\alpha$-approssimazione per MAXIMUM INDEPENDENT SET
      
    
-   **Esito:** Vero.
    
-   **Motivazione:** I problemi MAXIMUM CLIQUE e MAXIMUM INDEPENDENT SET sono perfettamente equivalenti dal punto di vista strutturale e del fattore di approssimazione. Una cricca (clique) di dimensione $k$ in un grafo $G$ corrisponde in modo esatto a un insieme indipendente di dimensione $k$ nel grafo complemento $\overline{G}$. Poiché l'operazione di complemento di un grafo richiede tempo strettamente polinomiale, qualsiasi algoritmo di $\alpha$-approssimazione per CLIQUE può essere riutilizzato in modo diretto per approssimare INDEPENDENT SET con lo stesso identico fattore $\alpha$, semplicemente fornendogli in input il grafo complemento.
    
      
    

### 3. Se Minimum Vertex Cover $\in FPTAS$ allora esiste un algoritmo di 100/99-approssimazione per MAX-3-SAT
      
    
-   **Esito:** Vero.
    
-   **Motivazione:** MINIMUM VERTEX COVER è un problema APX-completo, il che fissa un limite inferiore alla sua approssimabilità (non ammette uno schema FPTAS a meno che $P = NP$). Ipotizzare, come fa la premessa, che esso appartenga a FPTAS scatena inevitabilmente il collasso di classe $P = NP$. In uno scenario in cui $P = NP$, la soluzione ottima esatta per qualsiasi problema di ottimizzazione in NP (incluso MAX-3-SAT) può essere trovata in tempo deterministico polinomiale. Una soluzione calcolata in modo esatto fornisce un fattore di approssimazione matematico perfetto pari a $r=1$. Questo fattore soddisfa abbondantemente e banalmente la richiesta di un limite di $100/99$ (essendo $1 \le 1.01$).
    
      
    

### 4. $3-SAT \leq 2-SAT \Rightarrow \text{Ham-Cycle} \leq \text{EulerianCycle}$
      
    
-   **Esito:** Vero.
    
-   **Motivazione:** Il problema 3-SAT è un noto problema NP-completo, mentre 2-SAT appartiene alla classe deterministica P. Se il problema più difficile della classe NP (3-SAT) si riducesse in tempo polinomiale a un problema in P (2-SAT), si scatenerebbe il collasso totale $P = NP$. Sotto l'effetto di questo collasso, il problema HAMILTONIAN CYCLE (che è NP-completo) verrebbe declassato e apparterrebbe anch'esso a P. Essendo EULERIAN CYCLE già un problema consolidato in P, HAMILTONIAN CYCLE si potrebbe banalmente ridurre a esso, poiché all'interno della classe P tutti i problemi decisionali non banali si riducono gli uni agli altri in tempo polinomiale.
    
      
    

### 5. $APX \neq FPTAS \Leftrightarrow P \neq co-NP$
          
        
-   **Esito:** Vero.
    
-   **Motivazione:** L'equivalenza (doppia implicazione) si dimostra verificando ambedue le direzioni:
    
      
    -   ($\Rightarrow$): Dimostriamo per contronominale: se fosse $P = co-NP$, per simmetria strutturale avremmo inevitabilmente $P = NP$. Con $P = NP$, le soluzioni esatte si troverebbero in tempo polinomiale per ogni problema, facendo collassare tutta l'approssimabilità in $APX = FPTAS$. La direzione logica è quindi solida.
        
          
        
    -   ($\Leftarrow$): Assumendo $P \neq co-NP$, sappiamo che deve valere anche $P \neq NP$ (altrimenti avremmo $NP=P=co-P=co-NP$). Essendo $P \neq NP$, il Teorema del Gap garantisce matematicamente che esistono problemi in APX che non ammettono alcuno schema FPTAS, rendendo assoluta la separazione $APX \neq FPTAS$.
        
      
    

### 6. Se $P \neq NP$ allora per ogni problema $\mathbb{A}$ nella classe NP esiste un insieme di istanze X di $\mathbb{A}$ tali che per ogni algoritmo polinomiale $\Pi$ la soluzione ritornata da $\Pi$ su ogni $x \in X$ è scorretta, ovvero $\mathbb{A}(x) \neq \Pi(x)$
      
    
-   **Esito:** Falso.
    
-   **Motivazione:** L'affermazione fallisce perché generalizza in modo improprio includendo la dicitura "per _ogni_ problema $\mathbb{A}$ nella classe NP". La classe deterministica P è un sottoinsieme di NP ($P \subseteq NP$). Pertanto, per tutti i problemi considerati "facili" che risiedono in P (ad esempio EULERIAN CYCLE o 2-SAT), esiste per definizione un algoritmo deterministico polinomiale $\Pi$ in grado di restituire la risposta perfetta e corretta per _tutte_ le possibili istanze. Per questi specifici problemi, l'insieme $X$ di istanze critiche su cui ogni algoritmo fallisce è logicamente vuoto, rendendo l'assioma generale errato.
    
      
    

### 7. Se $\text{Vertex Cover} \notin co-NP$ allora QUANTIFIED SAT non è co-NP-completo
      
    
-   **Esito:** Vero.
    
-   **Motivazione:** Dimostriamolo ragionando per assurdo in base alle conseguenze. Supponiamo che QUANTIFIED SAT (QSAT) sia co-NP-completo. Essendo QSAT il problema PSPACE-completo di riferimento, tale classificazione causerebbe l'immediata uguaglianza $PSPACE = co-NP$. Poiché sappiamo che $NP \subseteq PSPACE$, ne deriverebbe che $NP \subseteq co-NP$, scatenando il collasso totale e la fusione $NP = co-NP$. In un universo computazionale in cui $NP = co-NP$, tutti i problemi appartenenti a NP (compreso VERTEX COVER) apparterrebbero di riflesso anche a co-NP. Tuttavia, la premessa iniziale impone esplicitamente che VERTEX COVER $\notin co-NP$. Per evitare questo cortocircuito logico, è necessario e matematicamente obbligatorio che QSAT non sia co-NP-completo.
    
      
    

### 8. Se $NP \neq co-NP$ allora SMALL FACTOR non è NP-completo
      
    
-   **Esito:** Vero.


-   **Motivazione:** Il problema SMALL FACTOR è verificabile in tempo polinomiale sia per le casistiche positive che per le casistiche negative, il che lo colloca di diritto all'interno dell'intersezione $NP \cap co-NP$. Se per assurdo esso venisse classificato come un problema NP-completo, significherebbe per definizione che tutti i problemi contenuti nella classe NP si potrebbero ridurre ad esso in tempo polinomiale. Poiché SMALL FACTOR risiede anche all'interno di co-NP, questa catena di riduzioni trascinerebbe l'intera classe NP all'interno di co-NP, innescando l'uguaglianza totale $NP = co-NP$. Dato che la premessa dell'esercizio impone come assioma invalicabile $NP \neq co-NP$, è garantito che SMALL FACTOR non possa assolutamente essere NP-completo.
    
