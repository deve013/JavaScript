// function addNum(num1,num2){ //() values inside () is called parameters

//     console.log(num1+num2);
// }
function addNum(num1,num2){ 

    // let result= num1+num2;
    // return result;
    return num1+num2; 

}

const result= addNum(3,5); //inside () is called arguments

// console.log("result:", result);

function loginUserMessage(username = "sam"){
    if(!username){ //is same as username===undefined
        console.log("pls enter username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("deve"))
// console.log(loginUserMessage()) // if() empty then sam is printed if "name" then name is printed and sam is overwritten

//when we dont know how mant parameter are there ex when adding item to cart

function calculateCartPrice(val1,val2,...num1){ // ...rest operator and spread operator
//... means we can pass multiple value  without... only 200 is printed
    return num1;
} 
// console.log(calculateCartPrice(200,200,340,300));

const user={
    username:"deve",
    price:200
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}.`);
}
handleObject(user)

const myNewArray=[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
