/* Destruction Assignments */

/* ES5 */
var kisi = {
        isim: 'Ahmet',
        soyisim: 'Yılmaz'
    };
var isim = kisi.isim,
soyisim = kisi.soyisim;
console.log(isim);      // 'Ahmet'
console.log(soyisim);   // 'Yılmaz'

/* ES6 */
var kisi = {
        isim: 'Ahmet',
        soyisim: 'Yılmaz'
    };
var {isim, soyisim} = kisi;
console.log(isim);      // 'Ahmet'
console.log(soyisim);   // 'Yılmaz'


/* ==================================== */


var kisi = {
        isim: 'Ahmet',
        soyisim: 'Yılmaz'
    },
    isim = 'Ecma',
    soyisim = 'Script';
console.log(isim);      // 'Ecma'
console.log(soyisim);   // 'Script'
({isim, soyisim} = kisi);
console.log(isim);      // 'Ahmet'
console.log(soyisim);   // 'Yılmaz


/* ==================================== */


/* Default Variable */

var kisi = {
        isim: 'Ahmet',
        soyisim: 'Yılmaz'
    };
var {isim, soyisim, yas = 24} = kisi;
console.log(isim);      // 'Ahmet'
console.log(soyisim);   // 'Yılmaz'
console.log(yas);       // 24


/* ==================================== */


/* Default Variable */

const kisi = {
        isim: 'Ahmet',
        soyisim: 'Yılmaz'
    };
const {isim: ad, soyisim: soyad} = kisi;
console.log(ad);      // 'Ahmet'
console.log(soyad);   // 'Yılmaz'


/* ==================================== */


/* Nested Variable */

const kisi = {
        isim: 'Ahmet',
        soyisim: 'Yılmaz',
        yetenekler: {
            kosu: {
                mesafe: '10 km'
            },
            yuruyus: {
                mesafe: '20 km'
            }
        }
    };
var { yetenekler: {kosu} } = kisi;
console.log(kosu.mesafe);      // '10 km'


/* ==================================== */


/* Array Variable */

var renkler = ['white', 'gray', 'black'];
var [beyaz, ...diger] = renkler;
console.log(beyaz);         // 'white'
console.log(diger.length);  // 2
console.log(diger[0]);      // 'gray'
console.log(diger[1]);      // 'blue'


/* ==================================== */


/* Rest Array Variable */

var renkler = ['white', 'gray', 'black'];
var [...klonRenkler] = renkler;
console.log(klonRenkler);       // "['white', 'gray', 'black']"


/* ==================================== */


/* Functions */

var kisi= {adi: "Ahmet", yas:24, email:"crazyboy_01_92@hotmail.com"};
function emailBilgisi({email}){
return email;
}
console.log(emailBilgisi(kisi));            // crazyboy_01_92@hotmail.com
function adiVeYasGoster({adi,yas: yasi}){
return `${adi}'in yaşı ${yasi}`;
}
console.log(adiVeYasGoster(kisi));          // Ahmet'in yaşı 24 


/* ==================================== */


var arabaUret = function (marka, model, { vites, yakit, jant, parkSensoru }) {
        // Burada arabayi yukaridaki seceneklerle ureten kod olacak
};
arabaUret('audi', 'a3', {
    vites: 'otomatik',
    yakit: 'dizel',
    jant: 'çelik'
});
