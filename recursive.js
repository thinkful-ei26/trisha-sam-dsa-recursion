'use strict';

// /* ========= COUNTING SHEEP ========= */
// /* 

// What is the input to the program = number 
// What is the output of the program = 3 - Another sheep jump over the fence

// What is the input to each recursive calls = num - 1
// What is the output of each recursive calls 
// (num) - Another sheep jump over the fence
// */

// const countSheep = (num) => {
//   //Base Case
//   if (num === 0){
//     return;
//   }
//   //Recursive Case
//   //num - 1 
//   console.log(`${num} - Another sheep jump over the fence`);
//   //  console.log(num,'Another sheep jump over the fence');

//   return countSheep(num - 1);
// };

// countSheep(3);

// // Array Double

// // What is the input to the program = [numbers] 
// // What is the output of the program =  [2xnumbers] 

// // What is the input to each recursive calls = 2num
// // What is the output of each recursive calls ...nums

// const arrayDubs = (array) => {
//   //base case
//   if (array.length === 0) {
//     return [];
//   }
//   //  const newArray = 2 * array[0];
//   const newArray = [2 * array[0], ...arrayDubs(array.slice(1)) ];
//   //  console.log(newArray);
//   return newArray;
// };

// console.log(arrayDubs([1, 2, 3]));

// //Reverse String
// // What is the input to the program = string
// // What is the output of the program =  gnirts 

// // What is the input to each recursive calls = 'tring'
// // What is the output of each recursive calls string[0] + Reverse(string.slice(1))

// const reverse = (str) => {
//   //base case
//   if(str === ''){
//     return '';
//   }
//   //recursive case
//   const newStr = reverse(str.slice(1)) + str[0];
//   // console.log(newStr);
//   return newStr;
// };

// reverse('hello');

// //nth Triangular Number
// // What is the input to the program = num
// // What is the output of the program =  how many dots in triangles 
// // What is the input to each recursive calls = 'tring'
// // What is the output of each recursive calls string[0] + Reverse(string.slice(1))

// /* 
// n + n -1

// */

// const triangle = (num) => {
//   //base case
//   if (num === 0) {
//     return 0;
//   }
//   //recursive case
//   return num + triangle(num-1);
// };

// console.log(triangle(5));
// console.log(triangle(7));

//String Splitter
// What is the input to the program = string
// What is the output of the program =  's', 't'
// What is the input to each recursive calls = 'tring'
// What is the output of each recursive calls string[0] + Reverse(string.slice(1))

/* var str = 'How are you doing today?';
var res = str.split(' ');
console.log(res); // [ 'How', 'are', 'you', 'doing', 'today?' ] */

// const split = (str, separator) => {
//   //base case
//   if(!str.length){
//     return []; 
//   }
//   if (separator(str[0])) {
//     return [str[0], ...split(str.slice(1), separator)]; 
//   }
//   //recursive case
//   return split(str.slice(1), separator);
// };

// const _str = 'hello  asdfasdfasdfas llasdfalasdkhjlsdl'; 
// console.log(split(_str, char => char === ' '));

const split = (str, separator) => {
  //base case
  if(!str.length){
    return []; 
  }
  if (str[0] === separator) {
    return [str[0], ...split(str.slice(1), separator)]; 
  }
  //recursive case
  return str[0] + split(str.slice(1), separator);
};

const _str = 'hello  asdfasdfasdfas llasdfalasdkhjlsdl'; 
console.log(split(_str, 'l'));