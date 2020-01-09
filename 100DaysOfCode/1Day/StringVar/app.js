//* Variables - String

/*
?   "your name" es llamado un String Literal, Es un String porque es una 
?   Serie de 0 o mas caracteres encerrado en comillas simples o dobles
*/

var myFirstName = 'Angel';
var myLastName = 'Martinez';

/*
?   Cuando definimos un String, empezamos y terminamos con comillas (simples o dobles)
?   Pero, ¿que pasa si usamos comillas dentro? Esto, provocaria un error en el codigo
?   Sin embargo, JS provee una solucion que llamamos escape o escapar, con la cual usaremos
?   el backslash ( \ )
*/

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";

console.log(myStr); // I am a "double quoted" string inside "double quotes"

/*
? En JavaScript, las comillas dobles y sencillas trabajan de la misma forma
? Sin embargo, si comienzas con una comilla simple, debes terminar con una comilla simple.
? De esta manera, si usamos un tipo de comilla para englobar nuestro String
? Ya no es necesario escapar las comillas dentro (siempre y cuando no sean del mismo tipo)
*/

var my2Str = '<a href="http://www.example.com" target="_blank">Link</a>';

/*
?   Las comillas no son los unicos caracteres que se pueden escapar
    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \r	carriage return
    \t	tab
    \b	word boundary
    \f	form feed
*/

var my3Str = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(my3Str);
// FirstLine
// 	\SecondLine
// ThirdLine

/*
? Los Strings pueden ser concatenedos con el operador +=
? Esto puede ser de ayuda cuando se trata de multiples lineas que concatenar
*/

var my4Str = "This is the first sentence. ";

my4Str += "This is the second sentence.";

/*
    Construyendo Cadenas de Texto
*/

var my5Str = "My name is " + myFirstName + " and I am Well!";

console.log(my5Str)

/*
? Anexando Cadenas de texot
*/

var someAdjective = 'Amazing';
var someText = 'Learning JavaScript is ';

someText += someAdjective;