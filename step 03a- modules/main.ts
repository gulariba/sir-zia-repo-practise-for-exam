// main.ts
import { add, subtract, PI } from './first.ts';

const result1 = add(5, 3);
console.log(`5 + 3 = ${result1}`); // Output: 5 + 3 = 8

const result2 = subtract(5, 3);
console.log(`5 - 3 = ${result2}`); // Output: 5 - 3 = 2

console.log(`Value of PI is ${PI}`); // Output: Value of PI is 3
//In this file, we use the import keyword to bring in the add, 
//subtract, and PI exports from the mathUtils.ts module. Then, 
//we use these imports to perform some calculations and print the results.

//Using Default Exports
// A module can also have a default export. Default exports are
// useful when a module exports a single main functionality.

// main.ts
import multiply from './first.ts';

const result = multiply(5, 3);
console.log(`5 * 3 = ${result}`); // Output: 5 * 3 = 15

//Modules in TypeScript help in organizing and reusing code efficiently.
