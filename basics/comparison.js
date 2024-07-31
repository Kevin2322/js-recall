// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //because of we use (==)loosely equality operator in this case, null is only loosely equal to undefined, and not to 0.
console.log(null >= 0); //true
//In javascript  null converts into 0 value

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);