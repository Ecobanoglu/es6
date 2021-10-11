/* VAR: Global Variable */

var name = "Global Variable";

function Func() {
    var name = "Local Variable";
    console.log(name); // Local Variable
}
console.log(name); // Global Variable


/* ==================================== */


var name2 = "Global Variable";
console.log(name2); // Global Variable

function Func2() {
    name2 = "Local Variable";
    console.log(name2); 
}
Func2(); // Local Variable
console.log(name2); // Local Variable


/* ==================================== */


/* CONST: Constant Variable */

const pi = 3;
console.log(pi); // 3

pi = 3.14; 
console.log(pi); // ERROR: Uncaught TypeError: Assignment to constant variable. (Sabit değişken olduğu için değer atanamaz)


/* ==================================== */


const pi2 = 3;
console.log(pi2); // 3

const pi2 = 3.14; 
console.log(pi2); // ERROR: Uncaught SyntaxError: Identifier 'pi' has already been declared (Daha önce tanımlandı, dolayısıyla tekrar tanımlanamaz. )


/* ==================================== */


/* LET: Block-Scope Variable */


let age = 15;
console.log(age); // 15

age = 20;
console.log(age); // 20


/* ==================================== */


let arr = 15;
console.log(age2); // 15

let age2 = 20;
console.log(age2); // ERROR: Uncaught SyntaxError: Identifier 'age' has already been declared (Daha önce tanımlandı, dolayısıyla tekrar tanımlanamaz. )


/* ==================================== */


for(let i = 0; i < 5; i++){
   console.log(i);
   // 0, 1, 2, 3, 4
}
console.log(i);
//  i is not defined


