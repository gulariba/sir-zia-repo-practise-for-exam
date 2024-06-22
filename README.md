Hello World Steps:

Install Node.js from https://nodejs.org/

Install TypeScript 4.9+ using Node Package Manager command (https://www.typescriptlang.org/download):

 	npm install -g typescript
Install VSCode from https://code.visualstudio.com/Download

Read: https://bobbyhadz.com/blog/typescript-generate-tsconfig-json

Read: https://www.typescripttutorial.net/typescript-tutorial/typescript-hello-world/

Generate tsconfig.json by giving this command:

 tsc --init
If you want to run TypeScript tsc command in Windows Powershell:

Open Powershell in Adminstrator mode

Run command:

 Set-ExecutionPolicy RemoteSigned
Policy updated and now you can run tsc command in powershell.

For more Details Check this out

Make it a Node.js project by giving the following command:

 npm init -y
Install types for Node.js

 npm i @types/node -D
Create .gitignore file

Create file app.ts

We have used string type to store and print the message.

Note that the most basic types in TypeScript correspond to the seven basic kinds of primitives in JavaScript:

1. null
2. undefined
3. boolean // true or false
4. string // "", "Hello World"
5. number // 0, 5.1, -9
6. bigint // 0n, 5n, -10n
7. symbol // Symbol(), Symbol("hi"),
Transpile JavaScript by running:

 tsc
Run transpiled javascript by running the following command:

node



// step00a json objects

JSON ( Javascript Object Notation )
JSON stands for Javascript Object Notation.

JSON is a text-based data format that is used to store and transfer data.

// JSON syntax

{

 "name": "Vipin",

 "age": 21,

 "gender": "male",
}

But wait, Is JSON is similar to javaScript objects?

The Answer is No.

JavaScript objects can contain functions but JSON not.
JavaScript objects can only be used in JavaScript but JSON can be created and used by other programming languages.
JSON Data
JSON data consists of key/value pairs similar to JavaScript object properties.
The key and values are written in double quotes separated by a :.
Example :
// JSON data

    "name": "Vipin"
JSON data requires double quotes for the key.
JSON Object
The JSON object is written inside curly braces { }.

JSON objects can contain multiple key/value pairs.

Example :

 // JSON object

 { "name": "Vipin", "age": 21 }
JSON Array
JSON array is written inside square brackets [ ].

Example :

 // JSON array

 [ "Vipin", "Ankit", "Raj"]
Accessing JSON Data
We can access JSON data using the dot notation.

Example :

 // JSON object

 const detail = { "name": "Vipin", "age": 21 }

 // accessing JSON object

 console.log(detail. name); // Vipin
We can also use square bracket syntax [] to access JSON data.

Example :

 // JSON object

 const detail = {

     "name": "Vipin",

     "age": 21
 }
// accessing JSON object

console.log(detail["age"]); // Vipin

Use of JSON
JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa.
JSON data are very easy to parse and use.
JSON is language independent(We can create and use JSON in other programming languages too).
Examples of JSON
package.json
tsconfig.json
Reference Twitter Post on JSON
