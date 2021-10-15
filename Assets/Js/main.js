/* creare un carosello. Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre. */

/* Strumenti
-array
-eventListener
-for
-getElementById/querySelector

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

// mostrare immagine a video
let jumboElement = document.getElementById("jumbo");
jumboElement.src = items[0];

let imgOneElement = document.getElementById("lake");
imgOneElement.src = items[0];


let imgTwoElement = document.getElementById("sweden");
imgTwoElement.src = items[1];

let imgThreeElement = document.getElementById("london");
imgThreeElement.src = items[2];

let imgFourElement = document.getElementById("city");
imgFourElement.src = items[3];

let imgFiveElement = document.getElementById("paradise");
imgFiveElement.src = items[4];

let imagesElement = [jumboElement, imgOneElement, imgTwoElement, imgThreeElement, imgFourElement, imgFiveElement];




document.getElementById("up").addEventListener("click", function(){

    console.log("cliccato");



     for (let i = 0; i< imagesElement.length; i++) {
        const singleImage = imagesElement[i];
        console.log(singleImage);
    
}
     
    /*  document.getElementById("jumbo").src = singleImg;*/
    
     /* console.log(singleImg);  */
     
 }
)