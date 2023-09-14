//
// Data Types
//
// Primitive Types: Stored directly in the "stack", where it is accessed from
// String | Number | Boolean | Null | Undefined | Symbol | BigInt
//
// Reference Types: Stored in the heap and accessed by reference
// Arrays | Functions | Objects


// Values are stored on the stack
const name = "John";
const age = 30;

// Reference values are stored on the heap
const person = {
    name: "Tutku",
    age: 34
};

let newName = name;
newName = "Johnathan";

let newPerson = person;
newPerson.name = "Bradley";

console.log(name, newName);
console.log(person, newPerson);