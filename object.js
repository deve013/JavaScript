//singleton constructor bata banyo vane singleton
//Object.create => this is constructor methid


//object lietrals
const sym= Symbol("key1")

const JsUser={
    name:"Dev",
    "full name":"Dvendra lama",
    [sym]:"mykey1",
    age:21,
    address:"hattiban",
    email:"dev@add.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Tuesday"]

}
console.log(JsUser.name)
// console.log(JsUser.full name)

// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[sym])

// JsUser.email="devendra@beforefreeze.com"

// Object.freeze(JsUser)  connot change the content after freeze
// JsUser.email="devendra@gmail.com"
// console.log(JsUser);

JsUser.greeting =function(){
    console.log("hello js user");
}
JsUser.greetingTwo =function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());