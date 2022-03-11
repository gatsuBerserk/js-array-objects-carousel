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
const multimedia = [
    {
        name : "Four elements",
        description : "Life",
        image : "146108.jpg", 

    },

    {
        name : "Color",
        descrizione : "Beautiful",
        image : "271342.jpg",
    },

    {
        name : "Nature",
        description : "We respect",
        image : "nature-5325442_960_720.jpg", 
        
    },

    {
        name : "Reflect",
        description: "Moments",
        image : "pexels-photo-1323550.jpeg",
    },

    {
        name : "Island in the sky",
        description: "Sky and sea merge",
        image : "sunset-3087145_960_720.jpg",
    },

];

const title = document.getElementById("my-before-carousel");  
title.innerHTML=`<h1> GO VEGAN  <h1>`;  
const photo = document.querySelector("div.my-carousel-images"); 
const preview = document.querySelector("div.my-thumbnails"); 
for(let i = 0; i <multimedia.length; i++){ 
    
    photo.innerHTML+=
    `
    <img class="my-img" src="img/${multimedia[i].image}" alt="${multimedia[i].name}"> 
    `;  
    
    preview.innerHTML += 
    `
    
    <img class="dom-preview" src="img/${multimedia[i].image}" alt="${multimedia[i].nome}">
    `; 
} 

let activeElement= 0;
document.getElementsByClassName("my-img")[activeElement].classList.add("active");
document.getElementsByClassName("dom-preview")[activeElement].classList.add("filter"); 

const nextOne = document.querySelector("div.my-previous"); 

nextOne.addEventListener("click", function(){ 
    
    document.getElementsByClassName("my-img")[activeElement].classList.remove("active"); 
    document.getElementsByClassName("dom-preview")[activeElement].classList.remove("filter"); 

    if(activeElement === 0){
        activeElement= multimedia.length -1; 
    }else{
        activeElement--;
    }; 

    document.getElementsByClassName("my-img")[activeElement].classList.add("active"); 
    document.getElementsByClassName("dom-preview")[activeElement].classList.add("filter");
}); 

const fewer = document.querySelector("div.my-next");  

fewer.addEventListener("click", function() {
    document.getElementsByClassName("my-img")[activeElement].classList.remove("active"); 
    document.getElementsByClassName("dom-preview")[activeElement].classList.remove("filter"); 
   

    if( activeElement === multimedia.length -1){
        activeElement= 0;
    }else{
        activeElement++;
    }
    
    document.getElementsByClassName("my-img")[activeElement].classList.add("active");
    document.getElementsByClassName("dom-preview")[activeElement].classList.add("filter");
      
});   




 setInterval (next, 1500);


function next(){ 
    
    document.getElementsByClassName("my-img")[activeElement].classList.remove("active");
	document.getElementsByClassName("dom-preview")[activeElement].classList.remove("filter");
	
	if ( activeElement === multimedia.length - 1 ){
		activeItem = 0;
	} else {
		activeElement++;
	}
	document.getElementsByClassName("my-img")[activeElement].classList.add("active");
	document.getElementsByClassName("dom-preview")[activeElement].classList.add("filter");
	
}; 





