## Appello del 8 Luglio 2024


### 1. Se esiste $n_{0}$ tale che ogni grafo G con $n\ge n_{0}$ vertici ha un vertex cover di taglia $k=O(\log n)$ allora ogni G con $n\ge n_{0}$ vertici ha un independent set di taglia $\iota=\Omega(n)$.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Esiste una relazione matematica esatta tra i due problemi in un medesimo grafo: l'unione dei vertici di un Minimum Vertex Cover e di un Maximum Independent Set costituisce l'intero insieme dei vertici, ovvero $\vert{}VC\vert{} + \vert{}IS\vert{} = n$. Se la taglia del Vertex Cover è asintoticamente molto piccola, pari a $O(\log n)$, allora la taglia dell'Independent Set complementare sarà esattamente $n - O(\log n)$. Poiché la funzione lineare $n$ cresce immensamente più in fretta rispetto a $\log n$, per $n$ sufficientemente grande il termine $n$ domina incontrastato. Questo garantisce che la dimensione dell'Independent Set sia limitata inferiormente da una frazione lineare di $n$, il che corrisponde alla definizione asintotica $\Omega(n)$.
    
      
    

### 2. Se esiste un algoritmo di $\alpha$-approssimazione per CLIQUE allora esiste un algoritmo di $(1+\alpha)$-approssimazione per INDEPENDENT SET.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema della ricerca di una CLIQUE in un grafo $G$ è strutturalmente e matematicamente identico alla ricerca di un INDEPENDENT SET nel suo grafo complemento $\overline{G}$. Poiché la trasformazione al grafo complemento mantiene invariate le strutture ottime, l'algoritmo di $\alpha$-approssimazione per CLIQUE eseguito sul grafo complemento garantisce esattamente la medesima $\alpha$-approssimazione per INDEPENDENT SET. Dal momento che si possiede già un'approssimazione rigorosa con fattore $\alpha$, si soddisfa per definizione anche il limite più permissivo e debole rappresentato da un'approssimazione con fattore $(1+\alpha)$.
    
      
    

### 3. Sia PSPACEc la classe dei problemi PSPACE-completi e sia co-NPc la classe dei problemi co-NP-completi. Se $PSPACEc \cap co-NPc \neq \emptyset$ allora $\mathcal{NP}=\mathcal{P}$

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Se l'intersezione tra le due classi non è vuota, esiste un problema $\mathbb{A}$ che è contemporaneamente PSPACE-completo e co-NP-completo. Poiché $\mathbb{A} \in co-NP$, l'intera classe PSPACE vi collasserebbe all'interno, forzando l'uguaglianza PSPACE = co-NP. Sapendo dalla gerarchia delle classi che $NP \subseteq PSPACE$, questo collasso causerebbe inevitabilmente a cascata l'inclusione di NP in co-NP, e quindi l'uguaglianza $\mathcal{NP} = co-\mathcal{NP}$. Tuttavia, l'uguaglianza tra le classi non deterministiche ($\mathcal{NP} = co-\mathcal{NP}$) non forza matematicamente la classe deterministica P a eguagliarle, non dimostrando quindi che $\mathcal{NP} = \mathcal{P}$.
    
      
    

### 4. Se A, B sono problemi NP-completi, allora il problema C definito da $\mathbb{C}(x)=\mathbb{A}(x)\wedge\mathbb{B}(x)$ non è in $co-\mathcal{NP}$.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** L'intersezione logica (AND) di due problemi non genera obbligatoriamente un nuovo problema complesso. Si consideri il caso estremo in cui $\mathbb{A}$ e $\mathbb{B}$ siano problemi reciprocamente esclusivi sulla medesima istanza $x$ (se uno è "yes", l'altro è matematicamente "no"). In tale scenario, il problema $\mathbb{C}$ restituirebbe perennemente "no" per qualsiasi input. Un problema con una risposta costante si risolve banalmente in tempo $O(1)$ appartenendo così alla classe $\mathcal{P}$. Poiché $\mathcal{P} \subseteq co-\mathcal{NP}$, il problema $\mathbb{C}$ si troverebbe di fatto all'interno di $co-\mathcal{NP}$, rendendo errata l'affermazione categorica che non vi appartenga.
    
      
    

### 5. Se P $\neq$ co-NP allora $APX\ne PTAS$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Dire che $P \neq co-NP$ è un'affermazione logicamente equivalente ad affermare che $P \neq NP$. Assumendo $P \neq NP$, la teoria computazionale ci assicura che la gerarchia dell'approssimabilità non collassa e rimane strettamente separata. Specificamente, esistono problemi fortemente NP-hard (come MINIMUM VERTEX COVER) che risiedono in APX ammettendo approssimazioni con fattore costante, ma per i quali è matematicamente impossibile costruire schemi di approssimazione arbitrariamente vicini all'ottimo (PTAS). Essendoci problemi in APX che non possono esistere in PTAS, le due classi sono rigorosamente separate ($APX \neq PTAS$).
    
      
    

### 6. Se MAX-2-SAT $\leq$ SMALL FACTOR allora $co-\mathcal{NP}=\mathcal{N}\mathcal{P}$

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Il problema di ottimizzazione/decisione MAX-2-SAT è un problema NP-hard. Se esso si riducesse in tempo polinomiale a SMALL FACTOR, trasferirebbe la sua durezza, rendendo SMALL FACTOR a sua volta un problema NP-hard. Sapendo che SMALL FACTOR è certificabile sia per le risposte "yes" che "no", esso appartiene già alla classe $co-\mathcal{NP}$ (oltre che a $\mathcal{NP}$). Avere un problema NP-hard situato all'interno di $co-\mathcal{NP}$ costringe tutti i problemi in $\mathcal{N}\mathcal{P}$ a potersi ridurre in $co-\mathcal{NP}$, innescando fatalmente il collasso totale $co-\mathcal{NP} = \mathcal{N}\mathcal{P}$.
    
      
    

### 7. Se VERTEX COVER $\in PTAS$ allora $\mathcal{NP}=co-\mathcal{N}\mathcal{P}$.

-   **Esito:** Vero.
    
      
    
-   **Motivazione:** Applicando il Teorema del Gap, è stato provato che VERTEX COVER non ammette schemi di approssimazione arbitraria (PTAS) e possiede un limite invalicabile a meno che non si verifichi $P = NP$. Se ipotizziamo per assurdo che esso appartenga a PTAS, implicheremmo istantaneamente l'uguaglianza $\mathcal{P} = \mathcal{N}\mathcal{P}$. Poiché la classe deterministica $\mathcal{P}$ è per definizione chiusa per il complemento ($\mathcal{P} = co-\mathcal{P}$), dal collasso $\mathcal{P} = \mathcal{N}\mathcal{P}$ deriva senza eccezioni l'uguaglianza $\mathcal{NP} = co-\mathcal{N}\mathcal{P}$.
    
      
    

### 8. Se esiste un algoritmo di 3-approssimazione per INDEPENDENT SET allora CIRCUITSAT non è co-NP-completo.

-   **Esito:** Falso.
    
      
    
-   **Motivazione:** Il problema MAXIMUM INDEPENDENT SET non ammette alcun algoritmo di approssimazione con fattore costante se si assume $P \neq NP$. Se un tale algoritmo di 3-approssimazione esistesse, causerebbe l'immediato collasso $P = NP$, da cui deriverebbe a cascata $NP = co-NP$. Il problema CIRCUITSAT è un noto problema NP-completo (Teorema di Cook-Levin). In uno scenario in cui $\mathcal{N}\mathcal{P}$ e $co-\mathcal{N}\mathcal{P}$ coincidono perfettamente, tutti i problemi NP-completi divengono automaticamente anche co-NP-completi. Di conseguenza, sotto tale ipotesi, CIRCUITSAT _sarebbe_ a tutti gli effetti co-NP-completo, confutando la tesi della domanda.
