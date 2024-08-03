
// Immediately Invoked Function Expressions (IIFE)

// immedialtely excute thay ae mate iife use thay
// global scope variable pollution prevent karva 

(function kevin(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


//if you have to run two iife function then you have to end first iife function with
//semicolon(;) otherwise you will have error

//just revision purpose

// let val1 = 10;
// let val2 = 5;
// function addnum(num1,num2){
//     let total = num1 + num2;
//     return total;
// }

//  let res1 = addnum(val1,val2);
//  let res2 = addnum(10,2);
//  console.log([res1,res2]);