// Variables

var a; // declaration
var b = 'b'; // declaration and initialization
b = 'bb'; // reassignment
var a = 'aa'; // redeclaration and reinitialization


// Global scope
var fruit = 'Apple'; // global variable

function bestFruit() {
  console.log(fruit); // Apple
};

bestFruit();


function countries() {
  country = 'DR'; // global variable
  console.log(country); // DR
};

countries();
console.log(country);