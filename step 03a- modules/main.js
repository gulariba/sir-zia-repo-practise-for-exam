"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var first_ts_1 = require("./first.ts");
var result1 = (0, first_ts_1.add)(5, 3);
console.log("5 + 3 = ".concat(result1)); // Output: 5 + 3 = 8
var result2 = (0, first_ts_1.subtract)(5, 3);
console.log("5 - 3 = ".concat(result2)); // Output: 5 - 3 = 2
console.log("Value of PI is ".concat(first_ts_1.PI)); // Output: Value of PI is 3
//In this file, we use the import keyword to bring in the add, 
//subtract, and PI exports from the mathUtils.ts module. Then, 
//we use these imports to perform some calculations and print the results.
//Using Default Exports
// A module can also have a default export. Default exports are
// useful when a module exports a single main functionality.
// main.ts
var first_ts_2 = require("./first.ts");
var result = (0, first_ts_2.default)(5, 3);
console.log("5 * 3 = ".concat(result)); // Output: 5 * 3 = 15
