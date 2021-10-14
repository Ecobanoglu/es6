/* Default Parameters */

const sum = (a = 10, b = 2) => a+b;
sum (2,2) // 4
sum ()    // 12
sum (3)   // 5


/* ==================================== */


const arr = (x=1,y) => [x,y];
arr()     // [1, undefined]
arr(2)    // [2, undefined]
arr(2,3)  // [2, 3]


/* ==================================== */


const arr = (x,y=1) => [x,y];
arr()     // [undefined,1]
arr(3)    // [3,1] 
arr(3,4)  // [3,4] 
