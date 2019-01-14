'use strict';

/* ========= COUNTING SHEEP ========= */
/* 

What is the input to the program = number 
What is the output of the program = 3 - Another sheep jump over the fence

What is the input to each recursive calls = num - 1
What is the output of each recursive calls 
(num) - Another sheep jump over the fence
*/

const countSheep = (num) => {
  //Base Case
  if (num === 0){
    return;
  }
  //Recursive Case
  //num - 1 
  console.log(`${num} - Another sheep jump over the fence`);
  //  console.log(num,'Another sheep jump over the fence');

  return countSheep(num - 1);
};

countSheep(3);

// Array Double

// What is the input to the program = [numbers] 
// What is the output of the program =  [2xnumbers] 

// What is the input to each recursive calls = 2num
// What is the output of each recursive calls ...nums

const arrayDubs = (array) => {
  //base case
  if (array.length === 0) {
    return [];
  }
  //  const newArray = 2 * array[0];
  const newArray = [2 * array[0], ...arrayDubs(array.slice(1)) ];
  //  console.log(newArray);
  return newArray;
};

console.log(arrayDubs([1, 2, 3]));