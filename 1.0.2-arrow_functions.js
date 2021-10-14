/* Arrow Functions */

/* ES5 */
function hello() {
    return "Hello World!";
}

/* ES6 */
hello = () => "Hello World!"


/* ==================================== */


/* ES5 */
let sum = function (x, y) {
	return x + y;
};
console.log(sum(10, 20)); // 30

/* ES6 */
let sum = (x, y) => x + y;
console.log(sum(10, 20)); // 30;
console.log(typeof sum); // function
console.log(hello instanceof Function); // true /* instanceof operatörü bir objenin belirli bir sınıfa ait olup olmadığını kontrol eder. */


/* ==================================== */


/* ES5 */
let a = 4;
let b = 2;
function (){
  return a + b + 10;
} // 16 

/* ES6 */
let a = 4;
let b = 2;
() => a + b + 10; // 16 


/* ==================================== */


/* ES5 */
let numbers = [4,2,6];
numbers.sort(function(a,b){ 
    return b - a; 
});
console.log(numbers); // [6,4,2]

/* ES6 */
let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers); // [6,4,2]


/* ==================================== */


/* ES5 */
var arr = [1, 2, 3];
var squares = arr.map(function (x) { return x * x }); // [1,4,9]

/* ES6 */
const arr = [1, 2, 3];
const squares = arr.map(x => x * x); // [1,4,9]


/* ==================================== */


/* ES5 */
const kisiler = [{name: 'ali', age: 30}, {name: 'veli', age: 5}, {name: 'ayşe', age: 9}];
const isimler = kisiler.map(function (kisi) {
  return kisi.name
});
console.log(isimler); // ["ali", "veli", "ayşe"]

/* ES6 */
const kisiler = [{name: 'ali', age: 30}, {name: 'veli', age: 5}, {name: 'ayşe', age: 9}];
const isimler = kisiler.filter(kisi => kisi.name);
console.log(isimler); // ["ali", "veli", "ayşe"]


/* ==================================== */


/* ES5 */
function Component() {
  var _this = this; 
  var button = document.getElementById('myButton');
  button.addEventListener('click', function () {
    console.log('CLICK');
    _this.handleClick();
  });
}
Component.prototype.handleClick = function () { };

/* ES6 */
function Component() {
  var button = document.getElementById('myButton');
  button.addEventListener('click', () => {
    console.log('CLICK');
    this.handleClick();
  });
}
