// const tinderUser = new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="SAm"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"deve",
            lastname:"lama"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1: "a",2:"b"}
const obj2={3: "a",4:"b"}

// const obj3= {obj1, obj2}
// const obj3 =Object.assign({},obj1, obj2)
// {} is the target and obj1 and obj2 stores in {}

const obj3= {...obj1, ...obj2}
// console.log(obj3);

const users= [
    {
        id:1,
        email:"h@gmail;,.com"
    },
    {
        id:2,
        email:"h@gmail;,.com"
    },
    {
        id:3,
        email:"h@gmail;,.com"
    }
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//to check if the given keys is in the object
// console.log(tinderUser.hasOwnProperty(`isLoggedIn`));


const course= {
    name:"js",
    price:"999",
    instructor:"hitesh"
}

//deconstructor
// course.instructor
const {instructor: inst}= course

console.log(inst);

//api
//this is json can be writeen in object like below or in array 
// {
//     "name":"hi",
//     "price":"free"
// }
// another method to wirte api
// [
//     {},
//     {}
// ]

