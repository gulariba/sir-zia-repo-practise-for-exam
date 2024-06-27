//With TypeScript being an extension of JavaScript, the language 
//naturally supports let and const.
let myIdname :string = "Areeba Ahmed Khan";
console.log(myIdname);  // in let we change value my times and reassign value also

const myaccountnumber ="012345678";
console.log(myaccountnumber);  // in const we not change vriable value 

//In TypeScript, let and const are used similarly to how they are used 
//in JavaScript. They provide block-scoping and are preferred over var
// for better code clarity and avoiding scope-related issues.

//let in TypeScript
//Scope: Block-scoped.
//Reassignment: Can be reassigned.

let count: number = 0;
console.log(count); // Output: 0

count = 5;
console.log(count); // Output: 5

if (true) {
  let count: number = 10; // This `count` is different from the outer one
  console.log(count); // Output: 10
}

console.log(count); // Output: 5
//const in TypeScript
//Scope: Block-scoped.
//Reassignment: Cannot be reassigned.

const name1: string = "John";
console.log(name1); // Output: John

// Trying to reassign a new value to `name` will cause an error
// name = "Doe"; // Error: Cannot assign to 'name' because it is a constant.

if (true) {
  const name: string = "Jane"; // This `name` is different from the outer one
  console.log(name); // Output: Jane
}

console.log(name1); // Output: John


const person: { firstName: string; lastName: string } = { firstName: "John", lastName: "Doe" };
console.log(person); // Output: { firstName: "John", lastName: "Doe" }

person.firstName = "Jane"; 
console.log(person); // Output: { firstName: "Jane", lastName: "Doe" }

// However, trying to reassign a new object to `person` will cause an error
// person = { firstName: "Alice", lastName: "Smith" }; // Error: Cannot assign to 'person' because it is a constant.

