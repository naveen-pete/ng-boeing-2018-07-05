// sayHi('naveen');
// sayHi('bengaluru');

// function sayHi(name) {
//   console.log('Hello! ' + name);
// }

// function square(num) {
//   console.log(num * num);
// }

// square(10);

// function area(length, width) {
//   return length * width;
// }

// var a = area(5, 4);

// console.log('return value:', a);

// function capitalize(str) {
//   if (typeof str === 'number') {
//     return 'Not a string';
//   }
//   return str.charAt(0).toUpperCase() +
//     str.slice(1);
// }

// var capitalize = function (str) {
//   if (typeof str === 'number') {
//     return 'Not a string';
//   }

//   var a = 2500;

//   return str.charAt(0).toUpperCase() +
//     str.slice(1);
// }

// var s = capitalize('naveen');
// console.log(s);

// s = capitalize('boeing');
// console.log(s);

// console.log(typeof capitalize);

var numbers = [1, 2, 3, 4, 5];

// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

sum = numbers.reduce(function (total, n) {
  return total + n;
}, 0)

console.log('sum:', sum);

// What? sum
// How?