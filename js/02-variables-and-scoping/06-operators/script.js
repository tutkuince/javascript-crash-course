// 1. Arithmetic Operators
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 % 5;
x = 7 % 5;

// Concatenation
x = "Hello" + " World";

// Exponent
x = 2 ** 3;

// Increment
x = 1;
// x = x + 1;
x++;

// Decrement
// x = x - 1;
x--;

// Assignment Operators
x = 2;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators
x = 2 == '2';     // double equal does not test the type. It only tests the actual value inside
x = 2 === 2;      // triple equal not only evaluates the value, but it evaluates the type as well.
x = 2 !== 2;

x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 5 >= 10;

console.log(x);