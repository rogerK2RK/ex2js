import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
    constructor( x, y, width, height, color ) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }

    draw( context ) {
        context.fillStyle = this.color;
        context.fillRect( this.x, this.y, this.width, this.height );
    } 
}