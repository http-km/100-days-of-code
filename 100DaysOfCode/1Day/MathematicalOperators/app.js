//* Operadores Matematicos

//? El tipo de dato Number represante un dato numerico, con el cual se pueden hacer operaciones matematicas

/*
? Add two numbers ( + )
? Substract One Number from Another ( - )
? Multiply two Numbers ( * )
? Divide One Number by Another ( / )
? Increment a Number ( ++ )
? Decrement a Number ( -- )
? Remainder Operator ( % )
? Compound Assignment With Augmented AdditionPassed ( += )
? Compound Assignment With Augmented Subtraction ( -= )
? Compound Assignment With Augmented MultiplicationPassed ( *= )
? Compound Assignment With Augmented DivisionPassed ( /= )
*/


// Add two numbers
var sum = 10 + 10;
console.log(sum); // 20

// Substract One Number from Another
var difference = 45 - 33;
console.log(difference); // 12

// Multiply Two Numbers
var product = 8 * 10;
console.log(product); // 80

var secondProduct = 2.0 * 2.5;
console.log(secondProduct); // 5.0

// Divide One Number by Another 
var quotient = 66 / 33;
console.log(quotient); // 2

var secondQuotient = 4.4 / 2.0;
console.log(secondQuotient); // 2.2

// Increment a Number
var myVar = 87;
myVar++;
console.log(myVar); // 88

// Decrement a Number
var mySecondVar = 11;
mySecondVar--;
console.log(mySecondVar); // 10

// Remainder Operator (restante de una division)
var remainder = 11 % 3; 
console.log(remainder); // 2

// Compound Assignment With Augmented AdditionPassed
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9 ;
c += 7;

// Compound Assignment With Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented MultiplicationPassed
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// Compound Assignment With Augmented Division
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;