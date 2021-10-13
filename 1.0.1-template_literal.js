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
