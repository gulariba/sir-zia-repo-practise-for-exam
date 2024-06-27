// Modules in TypeScript allow you to organize code into separate 
//files and reuse them across your project. They enable better structure, 
//maintainability, and encapsulation of code. TypeScript follows the ES6
// module system, which uses import and export keywords.

// first.ts 
// in this program we use function method
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export const PI = 3;
//in this file, we are exporting two functions (add and subtract) 
//and a constant (PI). The export keyword makes them available for
// import in other files.

function multiply(a: number, b: number): number {
    return a * b;
}

export default multiply;

