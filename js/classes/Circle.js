import { Shape } from "./Shape.js";

export class Circle extends Shape {
    constructor( x, y, radius, color ) {
        super(x, y, color);
        this.radius = radius;
    }

    draw( context ) {
        context.beginPath();
        context.arc( this.x, this.y, this.radius, 0, Math.PI * 2 );
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    } 
}