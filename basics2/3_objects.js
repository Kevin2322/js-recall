
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
 
// interview question symbol datatype ne object in under declare kari ne log the object
// object literals method to create object 
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//symbol datatype use karva mate 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) object ni keys ne access method 1 
// console.log(JsUser["email"]) object ni keys ne access method 2 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // symbol datatype ne access karva

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)//use this method you can not change the objects
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
