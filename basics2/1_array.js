
// array
// Shallow Copy: Creates a new array (or object) with the same top-level values or references. Changes to nested objects are reflected in both the original and the copy.
// Deep Copy: Creates a new array (or object) with completely independent values, including nested objects. Changes to the copy do not affect the original.



const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr);
console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

const myArr3 = [0, 1, 2, 3, 4, 5]
const myn2 = myArr3.splice(1, 3)
console.log("C ", myArr3);
console.log(myn2);
