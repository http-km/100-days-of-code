//* Entendiendo las variables no inicializadas

/*
? Cuando las variables de JavaScript son declaradas, tienen un valor inicial de undefined
? Si quieres realizar operaciones matematicas con variables undefined, el resultado sera NaN (Not a Number)
? Si tu cocatenas un String con una variable Undefined, el resultado sera un String con la palabra literal "undefined"
*/

// Initialize these three variables
var a = 5;
var b = 10;
var c = 'I am a';

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";