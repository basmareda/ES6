import * as ourVar from "./second.js";
// import {rectangle,square,circle} from "./second.js";

let square = new ourVar.Square(5);
console.log(square.toString());

let rect = new ourVar.Rectangle(4, 5);
console.log(rect.toString());

let cir = new ourVar.Circle(3);
console.log(cir.toString());

