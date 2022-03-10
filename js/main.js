/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */ 

// Inizializzo Array Oggetti 
const image = [
    {
        nome : "Four elements",
        descrizione : "Life",
        image : "146108.jpg",
    },

    {
        nome : "Color",
        descrizione : "Beautiful",
        image : "271342.jpg",
    },

    {
        nome : "Nature",
        descrizione : "We respect",
        image : "nature-5325442_960_720.jpg",
    },

    {
        nome : "Reflect",
        descrizione : "Moments",
        image : "pexels-photo-1323550.jpeg",
    },

    {
        nome : "Island in the sky",
        descrizione : "Sky and sea merge",
        image : "sunset-3087145_960_720.jpg",
    },

];

const title = document.getElementById("my-before-carousel");  
title.innerHTML=`<h1> GO VEGAN  <h1>`; 