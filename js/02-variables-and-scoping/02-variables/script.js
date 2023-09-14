// Ways to declare a variable
// var, let , const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Re-assigning values
age = 31;
console.log(age);

let score;
console.log(score); // undefined
score = 1;
console.log(score); // 1


// Const's declaration must be initialized
// const x;

const x = 10;

const arr = [1, 2, 3, 4];
// arr = [1, 2, 3, 4, 5];
arr.push(5);
console.log(arr);

const person = {
    name: 'Tutku'
};
person.name = 'John';
person.email = 'tutku@tutku.com';
console.log(person);

// Declare multiple values at once
let a, b, c;
const d = 10, e = 20, f = 30;
console.log(d);