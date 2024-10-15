import { Rectangle } from './classes/Rectangle.js';
import { Circle } from './classes/Circle.js';
import { getRandomNumber, getRandomColor } from './utils/random.js';

let btnCirc = false ;
let btnRect = false ;

//DOM de CANVA et son contexte
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const circleCheckbox = document.getElementById('circle');  // Récupère la checkbox circle
const rectCheckbox = document.getElementById('rectangle');

// console.log(canvas);

/** Les instances des formes **/

    //Rectangles
const rect1 = new Rectangle(50, 50, 150, 100, "blue");
const rect2 = new Rectangle(300, 100, 200, 150, "green");


    //Cercles
const circ1 = new Circle(200, 400, 150, "yellow");
const circ2 = new Circle(500, 300, 50,"red");

rect1.draw(context);
rect2.draw(context);
circ1.draw(context);
circ2.draw(context);

//Button de form à generer


const checkboxes = document.querySelectorAll('.single-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        checkboxes.forEach(box => {
            if (box !== this) {
                box.checked = false;
            }
        });
        // Met à jour les variables en fonction de la checkbox cochée
        if (circleCheckbox.checked) {
            btnCirc = true;
            btnRect = false;
        } else if (rectCheckbox.checked) {
            btnCirc = false;
            btnRect = true;
        } else {
            btnCirc = false;
            btnRect = false;
        }
    });
});


// Ajout d'un circle au click
canvas.addEventListener('click', (e) => {
    if( btnCirc === true ) {
        console.log("Hello Roger");

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const randomRadius = getRandomNumber(10, 120);
        const randomColor = getRandomColor();

        const newCircle = new Circle(x, y, randomRadius, randomColor);

        newCircle.draw(context);
    }
    if (btnRect === true) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const randomWidth = getRandomNumber(50, 200);
        const randomHeight = getRandomNumber(50, 150);
        const randomColor = getRandomColor();

        const newRect = new Rectangle(x, y, randomWidth, randomHeight, randomColor);
        newRect.draw(context);
    }
});
