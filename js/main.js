import { Rectangle } from './classes/Rectangle.js';

//DOM de CANVA et son contexte
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// console.log(canvas);

/** Les instances des formes **/

    //Rectangle
const rect1 = new Rectangle(50, 50, 150, 100, "blue");
const rect2 = new Rectangle(300, 100, 200, 150, "green");
rect1.draw(context);
rect2.draw(context);


