/* STRING Methods */

/* includes(string, pozisyon) */
/*
Parametrenin String'de olup olmadığını kontrol eder. 
Büyük/Küçük harfe duyarlıdır. 
2. parametre olarak başlangıç değerini alır.
True/False değerini döndürür.
*/

const konu = 'ES6 String İşlemleri';
console.log(konu.includes('ES6'))     // true
console.log(konu.includes('es6'))     // false
console.log(konu.includes('ES6',1)) // false /* Started with 0 */


/* ==================================== */


/* startsWith(string, pozisyon) */
/*
String'in arama kelimesi ile başlayıp başlamadığını kontrol eder. 
Büyük/Küçük harfe duyarlıdır. 
2. parametre olarak başlangıç değerini alır.
True/False değerini döndürür.
*/

const konu = 'ES6 String İşlemleri';
console.log(konu.startsWith('ES6'))     // true
console.log(konu.startsWith('es6'))     // false
console.log(konu.startsWith('ES6',1))   // false /* Started with 0 */


/* ==================================== */


/* endsWith(string, pozisyon) */
/*
String'in arama kelimesi ile bitip bitmediğini kontrol eder. 
Büyük/Küçük harfe duyarlıdır. 
2. parametre olarak bitiş değerini alır.
True/False değerini döndürür.
*/

const konu = 'ES6 String İşlemleri';
console.log(konu.endsWith('İşlemleri'))     // true
console.log(konu.endsWith('İşlemleri',1))   // false /* Started with 0 */


/* ==================================== */


/* repeat(adet) */
/*
String'e verilen parametre kadar tekrar eder
*/

const konu = 'ES6';
console.log(konu.repeat(3)) // ES6ES6ES6


/* ==================================== */


/* slice(başlangıç, bitiş) */
/*
String'de belirlenen parametre arasındaki sayı kadar karakterleri döndürür. 
*/

const str = 'stringify';
console.log(str.slice(2));      // ringify
console.log(str.slice(0, 5));   // strin
console.log(str.slice(0, 1));   // s
console.log(str.slice(-4, -1)); // 'gif' /* Sağdan 4. karakterden başla, sağdan 1. karakterde bitir */


/* ==================================== */


/* substring(başlangıç, bitiş) */
/*
String'de belirlenen parametre arasındaki sayı kadar karakterleri döndürür. 
"slice" ile hemen hemen aynıdır, sadece başlangıç değerinin son değerden daha büyük olmasına izin verir.
Negatif değere izin verilmez
Bitiş değeri verilmez ise, sona kadar karakterleri döndürür
*/

const str = 'stringify';
console.log(str.substring(2));        // ringify
console.log(str.substring(2,6));      // ring
console.log(str.substring(6,2));      // ring


/* ==================================== */


/* substr(başlangıç, adet) */

const str = 'stringify';
console.log(str.substr(2));       // ringify
console.log(str.substr(2,4));     // 'ring', 
console.log(str.substr(-4, 2));   // 'gi'


/* ==================================== */


/* replace(string, new string) */

const konu = 'ES5 String İşlemleri';
console.log(konu.replace('ES5',"ES6"))     // ES6 String İşlemleri


/* ==================================== */


/* split(karakter) */

const konu = 'ES6 String İşlemleri';
console.log(konu.split(" "))     // ["ES6" ,"String", "İşlemleri"]


/* ==================================== */


/* contact(str) */ 
/* Çoklu string ekleme yapılabilir. Bunun için her bir string virgül(,) ile ayrılması yeterlidir */

const konu = 'ES6';
console.log(konu.concat(" ","String İşlemleri"));     // ES6 String İşlemleri
