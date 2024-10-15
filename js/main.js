import { Rectangle } from './classes/Rectangle.js';
import { Circle } from './classes/Circle.js';


//DOM de CANVA et son contexte
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

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


