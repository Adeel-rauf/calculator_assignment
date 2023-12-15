"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let n1 = parseInt(prompt("enter a number"));
let n2 = parseInt(prompt("enter a second number"));
let op = prompt("enter the operator (+,-,*,/): ");
switch (op) {
    case "+": {
        console.log(`The sum of ${n1} & ${n2} is: `, n1 + n2);
        break;
    }
    case "-": {
        console.log(`The difference of ${n1} & ${n2} is: `, n1 - n2);
        break;
    }
    case "*": {
        console.log(`The product of ${n1} & ${n2} is: `, n1 * n2);
        break;
    }
    case "/": {
        console.log(`The division between ${n1} & ${n2} will get: `, n1 / n2);
        break;
    }
}
