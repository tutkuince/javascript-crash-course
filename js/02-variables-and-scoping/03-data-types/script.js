//
// Primitive Data Types
//
// String - Sequence of characters. Must be in quotes or backticks
// Number - Integers as well as floating-point numbers
// Boolean - Logical entity / true or false
// Null - Intentional absence of any object value
// Undefined - A Variable that has not yet been defined / assigned
// Symbol - Built-in object whose constructor returns a unique symbol
// BigInt - Numbers that are greater than the "Number" type can handle

// String
const firstName = 'Sara';
console.log(firstName, typeof firstName);

// Number
const age = 30;
const temp = 9.8;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;
const output = aptNumber;
console.log(output, typeof output);

// undefined
let score;
console.log(score, typeof score);

// Symbol
const id = Symbol('id');
console.log(id);

// BigInt
const n = 90007199254740991n;
console.log(n);

//
// Reference Types (Objects)
//
// Reference types or "objects" are a non-primitive value and when assigned to a variable,
// the variable is given a reference to that value.
// Object literals, arrays and functions are all reference types

// Array
const numbers = [1, 2, 3, 4];
// Object
const person = {
    name: "Tutku"
};
// functions
function sayHello() {
    console.log("Hello");
}


//
// Static Typing vs Dynamic Types
//
// JavaScript is a dynamically-typed language. This means, we do not explicitly define the types for our variables.
// Many other languages are statically-typed such as C, C++ and Java
//
// TypeScript is a superset of JavaScript, which allows static-typing. This can make your code more verbose and less prone to errors.
// TypeScript may be something you want to look into later on.


