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
//   // base case
//   const location = str.indexOf(separator);
//   console.log(location);
//   if(location < 0){
//     return [str];
//   }

//   // take out the first word and then also split(str, separator)
//   let leftovers = str.slice(location + 1) ;
//   //console.log(leftovers);
//   return [str.slice(0, location),  ...split(leftovers, separator)];
// };

// const _str = 'hello its me'; 
// console.log(split(_str, ' '));

/* Binary Representation */ 

// input: num
// output binary representation
// What is the input to each recursive calls = num/2
// What is the output of each recursive calls = num%2
// 

// const binary = (num) => {
//   if (num === 0){
//     return '';
//   }
//   return binary(Math.floor(num/2)) + (num%2);
// };

// console.log(binary(38));

/* === FACTORIAL === */

// input: num
// output: factorial of num
// What is the input to each recursive calls = num -1
// What is the output of each recursive calls = num * num -1

// const factorial = (num) => {
//   if(num === 1){
//     return num;
//   }
//   // console.log(num);
//   return num * factorial(num-1);
// };

// console.log(factorial(5));

/* === FIBONNACI === */

// input: num
// output: fibonacci of at num
// What is the input to each recursive calls = num + 1
// What is the output of each recursive calls = num + fib(num +1)
// const fibonacci = (num) => {
//   let array = [0]
//    if (array.length === num ){
//      return array[num]

//    }
   
//    for (let i = 1; i <num; i++) {
//      array.push(array[i] + array[i+1])
//    }
//   //  console.log(array);
//   //  return [...array, 0, 1 ] fibonacci([...array 1]) 
//  }

//  0 1 1 2 3 5
// fibonacci(n -1) + fibonacci(n -2) 
// console.log(fibonacci(7));


// const fib = (num) => {
//   //base case
//   if(num <= 1){
//     return num;
//   }
//   //recursive
//   return fib(num -1) + fib(num -2);
// };

// console.log(fib(3));

/* ===== Anagrams ===== */
// input: string 'east'
// output: 24 permutations 
// recursive input: 'ast' rest of string
// recursive output: string.slice(1) + 'ast'

const anagrams = (str) => {
  const array = [];
  if(str.length === 1){
    array.push(str);
    // return str[0];
    return array;
  }
  
  // console.log(str.split(''));
  const prefix = str[0];
  const substring = str.slice(1);
  console.log(substring);

  // ast, sat, sta, tas, tsa, ats
  // split into characters and rearrage them [e,a,s,t]
  // index of each character const unchanging = [e, a, s, t];
  // unchanging[0] + unchanging[2] + unchanging[1] + unchanging[3]

  // for(let i=0; i<substring.length; i++){
  //   const something = substring[i] + substring[i +1];
  //   console.log(something);
  // }
  
  // console.log(substring);
  // console.log(prefix);
  //substring needs to be different each recursion
  array.push(anagrams(substring) + prefix);
  return array;
};

console.log(anagrams('east'));