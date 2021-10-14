/* Array Functions */

/* forEach() */

var array = ['a', 'b', 'c'];
array.forEach(function(element) {
  console.log(element);
});
// "a"
// "b"
// "c"

array.forEach(function(element, index) {
  console.log(index + ': ' + element);
});
// 0: "a"
// 1: "b"
// 2: "c"


/* ==================================== */


/* includes() */
/* Dizi içerisinde herhangi bir elemanın içerip içermediğini kontrol eder. True/False değerini döndürür. */

var pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // true
console.log(pets.includes('at'));  // false


/* ==================================== */


/* filter() */
/* Belirlenen kurala göre diziyi kontrol eder ve yeni bir dizi oluşturur. */

const numbers = [1, 2, 3, 4, 5, 6];
const filtered = numbers.filter(num => num > 3); /* array dizisinde bulunan 3'ten büyük sayıları getir */
console.log(numbers);       // ekran çıktısı: [1, 2, 3, 4, 5, 6]
console.log(filtered);  // ekran çıktısı: [4, 5, 6]


/* ==================================== */


/* map() */
/* Dizide değişiklik yapılarak yeni bir dizi oluşturulur. Dizi olarak geri döner */

const numbers = [1, 2, 3, 4, 5, 6];
const oneAdded = numbers.map(num => num + 1);
console.log(numbers);   // [1, 2, 3, 4, 5, 6]
console.log(oneAdded);  // [2, 3, 4, 5, 6, 7]


/* ==================================== */


/* recude(method, val=0) */

const numbers = [1, 2, 3, 4, 5];
const islemYapanMetod = (toplam, simdikiDeger) => toplam + simdikiDeger; // 1 + 2 + 3 + 4 + 5
console.log(numbers.reduce(islemYapanMetod)); // 15

const numbers = [1, 2, 3, 4, 5];
const islemYapanMetod = (toplam, simdikiDeger) => toplam+ simdikiDeger; // 5 + 1 + 2 + 3 + 4 + 5
console.log(array.reduce(islemYapanMetod, 5)); // 20


/* ==================================== */


/* some(method) */
/* Dizide bulunan elemanlardan herhangi biri belirlenen kurala uyuyorsa TRUE, hiç biri uymuyorsa FALSE döndürür. */

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [12, 24, 31, 40, 50];
const isLarge = (element, index, array) => element > 10;
numbers1.some(isLarge);  // false
numbers2.some(isLarge);  // true


/* ==================================== */


/* every(method) */
/* Dizide bulunan elemanlardan tamamı belirlenen kurala uyuyorsa TRUE, hiç biri uymuyorsa FALSE döndürür. */

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [12, 24, 31, 40, 50];
const isLarge = (element, index, array) => element > 10;
numbers1.every(isLarge);  // false
numbers2.every(isLarge);  // true


/* ==================================== */


/* sort(method) */
/* Dizide bulunan elemanlardan tamamı belirlenen kurala uyuyorsa TRUE, hiç biri uymuyorsa FALSE döndürür. */

const numbers = [12,6,3,16,8];
const toSmall = (a,b) => a-b;
const toLarge = (a,b) => b-a;
numbers.sort(toSmall);  // [3,6,8,12,16] /* Küçükten büyüğe */
numbers.sort(toLarge);  // [3,6,8,12,16] /* Büyükten küçüğe */


/* ==================================== */


/* find(method) */
/* Dizide Arama yapar. */

var users = [
  {
    id: 1,
    name: 'alpcan'
  },
  {
    id: 2,
    name: 'hasan'
  },
  {
    id: 3,
    name: 'burak'
  }
]
users.find(x => x.name === 'burak'); // { id: 3, name: 'burak' }
users.find(x => x.name === 'burak').id; // 3


/* ==================================== */


/* Array.From() */
/* belirli parametre ile dizi oluşturmayı sağlar. */

Array.from({ length: 10 }, (value,index) => index*2)  // [0,2,4,6,8,10,12,14,16,18]

let text = "birşey";
Array.from(text); ["b","i","r","ş","e","y"]


