
// Variables

const houseNo = 51;
let houseName = "Father's Love";
let houseCity = "surat";
let houseState;
//prefer not to use var 
//beacuse of issue in block scope and functional scope
//houseNo=52; can not assign bacause of this variable decalre by constant
//console.table([houseNo,houseName,houseCity,houseState]);


// Type Conversion
let age = undefined;
let type = Number(age);
//console.log(type);

//"33"-> 33
//"kevin123" -> NaN
//undefined  -> NaN

let isLoggedIn = 1;
let type1 = Boolean(isLoggedIn);
console.log(type1);

//1=>true,0->false
//""->false,"kevin"->true