let num = 10;
console.log(num);
num = 20;
console.log(num);

const number = 30;
console.log(number);
// number = 50;
// cannot assign to constant variable

num = 10.8;
console.log(num);
console.log(Math.round(num));

let strNum = '10.8';
// String to Number
console.log(Number(strNum));
// String to Integer
console.log(parseInt(strNum));
console.log(typeof strNum);

// Strings
let str = 'abc';
console.log(str + 10);
console.log(str === 'abc');

console.log(`Result: ${str}`);
console.log(str[0]);
console.log(str.charAt(0));
console.log(str.includes('a'));
console.log(str.startsWith('a'));
console.log(str.endsWith('c'));
console.log(str.slice(1, 3));
// if str is not 10 character it adds dash to start of str
console.log(str.padStart(10, '-'));
console.log(str.padEnd(10, '-'));

console.log(str.split('b'));

// objects
const person = {
  name: 'Tutku',
  course: 'JavaScript Crash Course'
};
console.log(person);
console.log(JSON.stringify(person));
// type person to String and then convert it to object
console.log(JSON.parse(JSON.stringify(person)));
console.log(person.name);
person.name = 'John';
console.log(person.name);

const map = new Map();
map.set(123, 'hello');
console.log(map.get(123));

const set = new Set();
set.add('hello');
set.add('hello');
set.add('world');
console.log(set);
console.log(set.has('hello world'));
console.log(set.size);
set.delete('hello');
console.log(set);
console.log(set.has('hello'));
console.log(set.size);

// array
const arr = [1, 2, 3];
console.log(arr.length);
arr.push(4);

// functions
function addTwo(num = 6) {
    return num + 2;
}
console.log(addTwo());

function callFunc(func, param) {
    console.log(func(param));
}
callFunc(addTwo, 10);

console.log('-------------LOOPING-------------');
// looping
for (let i = 0; i < 4; i++) {
    console.log(i);
}

let index = 0;
while(index < 4) {
    console.log(index);
    index++;
}

const obj = {
    name: 'tutku',
    surname: 'ince',
    profession: 'Java Developer'
}
for (const key in obj) {
    console.log(key, obj[key]);
}

[1, 2, 3].forEach(function (value) {
   console.log(value);
});