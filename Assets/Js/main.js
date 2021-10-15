/*  Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre. */

/* Strumenti
-array
-eventListener
-for
-getElementById/querySelector/insertAdjacentHTML/getElementsByClassName
-if

*/


/* Dati tre array contenenti:
una lista ordinata di 5 immagini,
una lista ordinata dei relativi 5 luoghi e
una lista di 5 news, */
const items = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];


const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];


const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
// variabili
let jumboElement = document.getElementById("jumbo");
let rightImgElement = document.getElementById("right_img");
let contatore = 0;

// creare un carosello. Mostrare immagine a video
for (let i = 0; i < items.length; i++) {
   /*  let singleImg = items[i]; */
   
    jumboElement.insertAdjacentHTML("beforeend", 
    `<div class="jumbo_container">
     <img class="img_jumbo" src="${items[i]}" alt="">
    <div class="text">
    <p class ="title"> ${title[i]} </p>
    <p class ="text_item">${text[i]}</p>
    </div>
    </div>`
    )
    
    
    rightImgElement.insertAdjacentHTML("beforeend",  `
    <div class="single_img">
    <img class="hidden" src="${items[i]}" alt="">
    </div>
    `
)

}

document.getElementsByClassName("jumbo_container")[contatore].className += " visible";
document.getElementsByClassName("hidden")[contatore].className += " visible_right_img";
/* console.log(contatore); */

// evento click up
document.getElementById("up").addEventListener("click", function(){

    //decrementa il contatore prima
    if (contatore > 0) {
    --contatore;
   /*  console.log(contatore); */

    // incrementa quando arriva all'inizio
    } else if (contatore <= items.length ){
        contatore = 3;
        ++contatore;
        /* console.log(contatore); */
    }

    document.querySelector(".visible").classList.remove("visible");
    document.getElementsByClassName("jumbo_container")[contatore].className += " visible";
    /* console.log(document.querySelector(".visible").classList); */

    document.querySelector(".visible_right_img").classList.remove("visible_right_img");
   document.getElementsByClassName("hidden")[contatore].className += " visible_right_img";
     
 }
)

// evento click down
document.getElementById("down").addEventListener("click", function(){  
    //incrementa il contatore prima
    if (contatore < items.length -1){
        ++contatore;
       /*  console.log(contatore); */
    // decrementa quando arriva alla fine
    } else if (contatore <= items.length) {
        contatore = 1       
        --contatore;
        /* console.log(contatore); */
       
    }
     

    document.querySelector(".visible").classList.remove("visible");
    document.getElementsByClassName("jumbo_container")[contatore].className += " visible";
    /* console.log(document.querySelector(".visible").classList); */

    document.querySelector(".visible_right_img").classList.remove("visible_right_img");
   document.getElementsByClassName("hidden")[contatore].className += " visible_right_img";
     
 }
)