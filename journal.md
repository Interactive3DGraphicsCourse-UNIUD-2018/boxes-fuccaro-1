# 15 maggio
Idea: costruire un labirinto tramite heightmap e posizionare al centro il minotauro insieme ad una altro personaggio.
Nell'animazione far muovere il personaggio per farlo uscire dal labirinto.

# 17 maggio
Costruito il labirinto.
heightmap reperita tramite il sito [mazegenerator](http://www.mazegenerator.net/).  Siccome l'immagine scaricata presentava una risoluzione troppo ambia, l'ho ridotta tramite il tool online [reduceimages](https://www.reduceimages.com/) ad una risoluzione di 90x90 px. Inoltre tramite il tool online [pinetools invertimagecolors](http://pinetools.com/invert-image-colors) ho invertito i colori.

# 18 maggio
Costruito il minotauro: Per prima cosa ho utilizzato l'[editor](https://threejs.org/editor/) threejs per avere un idea sul risultato finale. Ho poi ricopiato i valori delle dimensioni e delle posizioni dei diversi cubi che vanno a comporre il minotauro, nel codice threejs.


![labirinto con al centro il minotauro](/screenshots/labirintominotauro.png)

# 23 maggio
Aggiunta del terreno con texture, e aggiunta del secondo personaggio.
Ho modificato l'immagine solution (ogni pixel "bianco" rappresenta una casella in cui il personaggio deve moversi per uscire dal labirinto) in modo che i movimenti avvengano solo verso una casella adiacente alla posizione precedente.

![labirinto con minotauro e personaggio](/screenshots/labirinto2.png)

# 25 maggio
Aggiunte le texture al labirinto, al minotauro al personaggio e al terreno.
Per creare le texture effetto minecraft ho utilizzato delle normali texture, le ho ridimensionate a 20x20px e poi a 90x90px.   
Esempio:

<img src="/screenshots/journal/bush.jpg" width="460">

immagine a dimensioni naturali

<img src="/textures/bush.jpg">

immagine ridotta 90x90px
<<<<<<< HEAD

# 27 maggio
Aggiunta animazione autonoma del personaggio.
Da aggiungere:
- [ ] Ruotare il personaggio verso la direzione del movimento
- [ ] Controlli utente per permettere di iniziare, mettere in pausa o far ripartire da zero l'animazione e modificare la velocita di movimento del personaggio (mps - movimento al secondo).
=======
>>>>>>> 693ec9ccfcb7fbbbdddd1bb0f1be35f79f752f89
