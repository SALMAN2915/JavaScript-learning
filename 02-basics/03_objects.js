// singleton
// object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Salman",
    "full name" : "Salman Ali",
    [mySym]: "mykey1",
    age: 23,
    location: "Lucknow",
    email: "salman@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "salmanali@gmail.com"
Object.freeze(JsUser)
JsUser.email = "salman@microsoftr.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
  console.log(`Hello Js user, ${this.name}`);
}
// console.log(JsUser.greeting);
// console.log(JsUser.greetingTwo);

JsUser.greeting();       
JsUser.greetingTwo();   


