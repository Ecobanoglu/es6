/* Template Literal backtick( ` ) */

const name = "Ali";
console.log(`Merhaba ${name}`);
// Merhaba Ali

/* ==================================== */

const obj = {
    name: "Ali "
};
console.log(`Merhaba ${obj.name}`);
// Merhaba Ali

/* ==================================== */

const getName = () => { return "Ali" }
console.log(`Merhaba ${getName()}`);
// Merhaba Ali

/* ==================================== */

function selamla(str, nameArg) { // str: ["Merhaba ",""]
    return `selamlar! hoşgeldin ${nameArg}`;
}
let name = "Ali";
selamla`Merhaba ${name}`;
// selamlar! hoşgeldin Ali

/* ==================================== */

var a = 5;
var b = 10;
console.log (`${a}+${b} toplam.:"${a+b}"`);
//5 + 10 toplamı..:"15"
