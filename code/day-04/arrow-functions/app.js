// Normal JavaScript function
// function a() {
//   console.log('a()');
// }

// Function expression syntax
// var b = function () {
//   console.log('b()');
// };

// a();
// b();

// Arrow Functions
// ---------------
// Syntax #1
// var double = (n) => {
//   return n * 2;
// }

// Syntax #2
// var double = n => {
//   return n * 2;
// }

// Syntax #3
var double = n => n * 2;

console.log('double:', double(10));

// See this url for more details
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions