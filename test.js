/*
console.log("Deve");
console.log("first js code");
let age= 20;
let name= "Tony Stark";
console.log(name);
console.log(age);
let price= 199.9;
console.log(price);
x=null;
y= undefined;
let isFollow= false;
console.log(isFollow);

typeof price;
typeof isFollow;

const student={
    name: "ram",
    age: 20,
    isPass:true,
};
console.log(student);
console.log(student.name);
console.log(student["name"]);
student.age= student.age + 1;
console.log(student.age);

const product={
    name:"parker pen",
    price:270,
    rating:2,
    offer:100,
};
console.log(product);

const profile={
    name:"ram",
    isFollow:true,
    post:195+" posts",
    followers: 555+" followers",
    following:5+" following",

};
console.log(profile);
console.log(typeof profile);
console.log(typeof profile.name);

*/

/* 
double line  comment
 */
//single line comment

let a = 5;
let b = 2;
console.log("a ** b =", a**b); //5^2= 25

//condiotional statements
//if statement

// let age= 12;
// if(age >=18){
//     console.log("YOu can vote");
// }else{
//     console.log("You can't vote,");

// }

let mode= "dark";
let color;

if(mode== "dark"){
    color="black";
}
if (mode=="light"){
    color="white";
}
console.log(color);

//ternary operator

let age= 25;
if(age>18 ? console.log("adult"): console.log("not adult"));

// let age= 25;
// let result =age>18 ? "adult": "not adult";
// console.log(result);

//mdn documentation documents on html,css and js

//practice question

/* alert("hello");//one time msg
// prompt("hello"); asks for user input

let num = prompt("Enter any number.");
if(num%5===0){
    console.log(num," is multiple of 5 ");

}else {
    console.log(num," is not multiple of 5");
}
*/
//Q) To enter marks and tell the grade the you got.
/*let num= prompt("Enter your marks:");

if(num >=90 && num <=100){
    console.log("A");
}else if (num >=80 && num<=89){
    console.log("B");

}
else if (num >=70 && num<=79){
    console.log("C");
    
}else if (num >=60 && num<=69){
    console.log("D");
    
}else if (num >=0 && num<=59){
    console.log("F");
    
}
*/

//for of loop
/*let str= "comedy";
let size=0;

for(let i of str){
    console.log(i);
    size++;

}
console.log("string size = ",size);

//for in loop
let student={
    name:"ram",
    age:20,
    class:10,
};
for (let key in student){
    console.log("key=",key,"value=",student[key]);

}*/

//practice question loop
//even
/*let num1=0;
for(i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);

    }

}

//game number and guess the number

let gameNum= 25;
let ques =prompt("Enter any number:");

while(ques!=gameNum){
    ques= prompt("You have entered the wrong number. Guess again.");
}
console.log("You have entered the right number.");
*/

let str= "hello";
/*
console.log(str.length);
console.log(str[4]);
*/

//template literals
let specialString=`special string`;
console.log(specialString);

let obj={
    item:"pen",
    price:35,
};
console.log("cost of",obj.item,"is",obj.price,"ruppee"); //normally
let output= `the cost of ${obj.item} is ${obj.price} ruppee`; //template literals, sprecial string
console.log(output);

console.log("Hello\nWorld!!!"); //break
console.log("Hello\tWorld!!!"); //tab
//str.toUpperCase()
//str.toLowerCase()
//str.trim() to remove whitespace
//str.slice(start,end?) // returns part of string   a b c d e f start 1 and end 4 then b c d is printed
//srt1.concat(str2); joins string 1 and 2
//srt.replace (searchVal,newVal) to replace old value with new value
//srt.charAt(idx) prints the index character  hello  (3) then l is printed

//practice question
//for printing fullname with @ at beginning and length of name at the end
/*let st= prompt("Enter your fullname name");
console.log("@"+st+st.length);
*/

//practice question
//print average marks
/*let marks=[20,30,40,50,60];
let sum= 0;
for (let val of marks){
    console.log(val);
    sum= sum+ val;

}
let avg= sum/marks.length;
console.log(avg);
*/

//applying 10%discount on the given prices
/*let price=[100,200,300,400,500];
let discount=0;
for(let dis of price){
    discount=dis-(10/100)*dis;
    console.log(`The final offer after discounted is ${discount} ruppee`);

}
*/

//push pop and toString()
//unshift() and shift ()
//unshift adds from start and shift deletes from start.

/*let foodItems=["apple","banana","mango","ramen","'coke"];
foodItems.push("Chips","chocolate");
console.log(foodItems);

foodItems.pop(); //deletes item for the last position.
console.log(foodItems);
console.log(foodItems.toString());*/

//slice() = slice(start index, end index)
// console.log(foodItems.slice(1,3)); 
//prints banana and mango only
//splice()= splice(add,remove,replace)
//splice(start index, del count, add new element)

// console.log(foodItems.splice(1,2,"pineapple","cauli"));

//function
/*function myFunction(msg,n){ //parameter --> input
    console.log(msg,n);
}
myFunction("function",100); */// "function" --> argument

function asum(x,y){
    s= x+y;
    return s;
    console.log("after return"); //after return code doesnt get executed
}
//asum(3,5); have to write this code in console
//this is calling the formula

//fucnction sum
function sum(a,b){
    console.log(a+b);
}
sum(4,5);

//arrow function sum
const arrowSum = (a,b) =>{
    console.log(a+b);
}
arrowSum(4,3);

//multiplication arrow function
const mul=(a,b)=>{
    return a*b;
}
console.log(mul(4,3));

//function to count vowels

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char==="a"||
        char==="e"||
        char==="i" || 
        char==="o" || 
        char==="u"){
            count++;
        }  
    }
    console.log(count);
}

const countVow= (str)=>{
    let count = 0;
    for(const char of str){
        if(char==="a"||
        char==="e"||
        char==="i" || 
        char==="o" || 
        char==="u"){
            count++;
        }  
    }
    return count;
}