/* REST Operator */

/* ES5 */
function sum(a, b){
    return a + b;
}
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 3  

/* ES6 */
function sum(...input){
    let total = 0;
    for (let i of input) total += i;
    return total;
}
console.log(sum(1,2)); //3
console.log(sum(1,2,3)); //6
console.log(sum(1,2,3,4,5)); //15  


/* ==================================== */


function sum(...numbers){
   let total=0; numbers.forEach(el=>total+=el);return total; 
}
console.log(sum(2,4,6,5))   // 17


/* ==================================== */


function myFunc(a, b, ...moreArgs) {
  console.log("a", a)                 // one
  console.log("b", b)                 // two
  console.log("moreArgs", moreArgs)   // three four five six
  console.log(moreArgs.length);       // 4
}

myFunc("one", "two", "three", "four", "five", "six")


/* SPREAD Operator */

console.log(Math.max(3, 5, 1)); // 5

let arr = [3, 5, 1];
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 5


/* ==================================== */


let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(...arr1, ...arr2));            // 8
console.log(Math.max(1, ...arr1, 2, ...arr2, 25));  // 25


/* ==================================== */


let str = "Hello";
console.log( [...str] ); // [H,e,l,l,o]


/* ==================================== */

/* ARRAY Copy */

let arr = [1, 2, 3];
let arrCopy = [...arr]; 
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
console.log(arr === arrCopy); // false

