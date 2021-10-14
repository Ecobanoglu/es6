/* for & forEach’ten for-of’a */

/* ES5 */
var arr = ['a', 'b', 'c'];
for (var i=0; i<arr.length; i++) {
    var elem = arr[i];
    console.log(elem);
} 
// "a"
// "b"
// "c"

arr.forEach(function (elem) {
    console.log(elem);
});
// "a"
// "b"
// "c"

/* ES6 */
const arr = ['a', 'b', 'c'];
for (const elem of arr) {
    console.log(elem);
}
// "a"
// "b"
// "c"

for (const [index, elem] of arr.entries()) {
    console.log(index+'. '+elem);
}
// 0. "a"
// 1. "b"
// 2. "c"


/* ==================================== */


const me={
  name:"Onur", 
  age:39, 
  height:180
};
for(let key in me) console.log(key+":"+me[key]); 
// name: Onur
// age: 39
// height: 180

for(let key of Object.keys(me)) console.log(key);
// name
// age
// height

for(let keyVal of Object.entries(me)) console.log(keyVal);
// Onur
// 39
// 180
