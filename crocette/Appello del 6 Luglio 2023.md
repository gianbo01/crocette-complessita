## Appello del 6 Luglio 2023

### 1. $\forall alg$ che risolve SAT ha $\Omega(\frac{1}{n^{\log{n}}}) \Rightarrow P\neq NP$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Un limite inferiore (lower bound) pari a $\Omega(\frac{1}{n^{\log{n}}})$ tende a zero al crescere di $n$, risultando un limite sub-polinomiale banale che è rispettato praticamente da qualsiasi algoritmo. Avere un limite inferiore polinomiale o sub-polinomiale per un problema NP-completo come SAT non dimostra affatto che il problema non sia risolvibile in tempo polinomiale, e di conseguenza non è sufficiente per poter affermare che $P \neq NP$. Affinché l'implicazione sia vera, occorrerebbe dimostrare un limite inferiore super-polinomiale per _ogni_ algoritmo possibile.
    
      
    

### 2. Sia U l'insieme degli algoritmi che prendono in input una formula CNF $\phi$ ed in tempo polinomiale rispondono _yes_ o _no_. Se $P \neq NP$ allora $\forall A \in U$ e $\forall n$ sufficientemente grande, $\exist\phi^{(n)}$ di taglia $n$ t.c. $A$ fallisce su $\phi^{(n)}$, ovvero se $\phi^{(n)}$ è soddisfacibile allora $A$ dice _no_ su input $\phi^{(n)}$, mentre se $\phi^{(n)}$ non è soddisfacibile allora $A$ dice _yes_ su input $\phi^{(n)}$
-   **Esito:** Falso.
    
      
    
-   **Motivazione:** L'affermazione richiede matematicamente l'esistenza di una _singola_ formula $\phi^{(n)}$ universale in grado di far fallire contemporaneamente _tutti_ gli algoritmi dell'insieme $U$. Questo è errato: sebbene ogni algoritmo polinomiale in $U$ debba prima o poi fallire su qualche istanza (assumendo $P \neq NP$), algoritmi diversi falliranno molto probabilmente su formule $\phi^{(n)}$ _diverse_ di taglia $n$.
    
      
    

### 3. $\mathbb{A}\in NP \text{ t.c. } \exists\mathbb{A} \leq SAT \Rightarrow \mathbb{A}\in NPC$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** I problemi NP-completi sono quelli ai quali tutti i problemi della classe NP si possono ricondurre. La riduzione $\mathbb{A} \leq \text{SAT}$ indica solo che $\mathbb{A}$ si riduce a SAT, confermando l'appartenenza di $\mathbb{A}$ a NP, ma non dimostra la sua durezza (NP-hardness). Affinché $\mathbb{A}$ sia definito NP-completo, dovrebbe valere l'esatto opposto: deve essere SAT a ridursi ad $\mathbb{A}$ ($\text{SAT} \leq \mathbb{A}$).
    
      
    

### 4. $APX \neq PTAS \Rightarrow P \neq NP$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Questa è l'equivalente della sua contronominale $P = NP \Rightarrow APX = PTAS$. Se si verificasse l'uguaglianza $P = NP$, le soluzioni ottime esatte per ogni problema in NP potrebbero essere calcolate in modo efficiente in tempo polinomiale, causando il collasso totale di tutte le classi di approssimazione verso P ($APX = PTAS = FPTAS = P$). Di conseguenza, se sappiamo per premessa che $APX \neq PTAS$, possiamo dedurre con totale certezza che $P \neq NP$.
    
      
    

### 5. Si assuma che $NP \neq co-NP$. Allora $SAT \leq_T TAU$ e $TAU \nleq SAT$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** La prima parte dell'affermazione ($SAT \leq_T TAU$) è vera: essendo SAT in NP e TAUTOLOGY (TAU) in co-NP, è possibile applicare il lemma per cui ogni problema in NP si riduce alla Turing a un problema co-NP-completo. La seconda parte ($TAU \nleq SAT$, assumendo la riduzione alla Karp) è vera per assurdo: se TAUTOLOGY (co-NP-completo) si riducesse alla Karp a SAT (NP-completo), l'intera classe co-NP si ridurrebbe a NP, portando all'uguaglianza $NP = co-NP$, il che contraddirebbe apertamente l'ipotesi iniziale dell'esercizio in cui $NP \neq co-NP$.
    
      
    

### 6. Se $\exists alg$ polinomiale che garantisce $\frac{8}{7}$-approssimazione per MIN COL allora $\exists alg$ polinomiale che garantisce $\frac{5}{2}$-approssimazione per INDEPENDENT SET

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Attraverso il Teorema del Gap, è stato garantito che per il problema MIN COL non può esistere alcun algoritmo di approssimazione con fattore $r < 4/3$ a meno che non si verifichi l'uguaglianza $P = NP$. Dato che $\frac{8}{7} < \frac{4}{3}$ (ovvero $1.142 < 1.333$), l'esistenza di un algoritmo con tale fattore per MIN COL implicherebbe il collasso totale $P = NP$. In uno scenario in cui $P = NP$, qualsiasi problema in NP (incluso INDEPENDENT SET) può essere risolto in modo esatto in tempo polinomiale. Una soluzione esatta garantisce l'approssimazione ottima $1$, che copre abbondantemente la garanzia del limite $\frac{5}{2}$ richiesto ($1 \le 2.5$).
    
      
    

### 7. Sia $x\in I(\mathbb{A})$ dove $\mathbb{A}$ problema di minimizzazione. Sia $OPT(x)$ il valore della soluzione ottima per $x$. Sia $A$ un PTAS per il problema $\mathbb{A}$. Se $\epsilon = 0,5$ il valore della soluzione ritornata da $A$ su un input $(x,\epsilon)$ è $A(x,\epsilon)$ allora possiamo dedurre $OPT(x) \geq 11$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Essendo in presenza di uno schema PTAS per un problema di minimizzazione, il fattore di approssimazione matematico è garantito a $r = 1+\epsilon = 1.5$. Sappiamo quindi che $\frac{A(x,\epsilon)}{OPT(x)} \le 1.5$. Se l'algoritmo restituisce $15$, otteniamo $\frac{15}{OPT(x)} \le 1.5$, da cui manipolando la formula deriva $OPT(x) \ge 10$. Dedurre in modo assoluto che $OPT(x) \ge 11$ è errato perché esclude arbitrariamente il caso valido in cui l'ottimo sia esattamente 10 (caso in cui l'approssimazione raggiungerebbe precisamente il limite massimo consentito di 1.5).
    
      
    

### 8. $\mathbb{A} \leq \text{VERTEX COVER}\Rightarrow \overline{\mathbb{A}} \leq_T \text{INDEPENDENT SET}$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Poiché VERTEX COVER è un noto problema NP-completo, la riduzione in input $\mathbb{A} \leq \text{VERTEX COVER}$ dimostra che il problema $\mathbb{A}$ appartiene esso stesso alla classe NP. Di diretta conseguenza, il suo problema complemento $\overline{\mathbb{A}}$ appartiene alla classe co-NP. Sappiamo che INDEPENDENT SET è un problema NP-completo. Sfruttando il lemma secondo cui qualsiasi problema in co-NP si può ridurre alla Turing a un qualsiasi problema NP-completo (semplicemente invertendo l'output booleano in uscita dall'oracolo), l'implicazione risulta sempre verificata e vera.
