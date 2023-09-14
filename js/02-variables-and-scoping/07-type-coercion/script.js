let x;

x = 5 + '5';    // String
x = 5 + Number("5");
x = 5 * "5";    // Number

x = 5 + null; // Null is actually coerced into a zero
x = Number(null);   // x = 0;
x = Number(true);   // x = 1;
x = Number(false);   // x = 0;

x = 5 + true; // x = 6;
x = 5 + false; // x = 0;

// If we add anything to undefined then we are going to get NaN
x = 5 + undefined; // x = NaN (Not a number)


console.log(x, typeof x);