"use strict";
// Modules in TypeScript allow you to organize code into separate 
//files and reuse them across your project. They enable better structure, 
//maintainability, and encapsulation of code. TypeScript follows the ES6
// module system, which uses import and export keywords.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = exports.subtract = exports.add = void 0;
// first.ts 
// in this program we use function method
function add(a, b) {
    return a + b;
}
exports.add = add;
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
exports.PI = 3;
//in this file, we are exporting two functions (add and subtract) 
//and a constant (PI). The export keyword makes them available for
// import in other files.
function multiply(a, b) {
    return a * b;
}
exports.default = multiply;
