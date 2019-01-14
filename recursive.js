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