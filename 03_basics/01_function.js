// the basic defination of function in java script
// function is a block of code that performs a specific task

const { use } = require("react");

// console.log("A");
// console.log("D");
// console.log("N");
// console.log("A");
// console.log("N");

// to use this or copy this code more than 2-3 time it will be a tedious task,
//  so we can use function to do this task

function printName(){
console.log("A");
console.log("D");
console.log("N");
console.log("A");
console.log("N");   
}

printName(); // calling the function // this the refrence of the function used this to print as many as time



// 2) Paramaterized Function
function AddTwoNumbers(num1, num2){    //(num1, num2) are parameters
    console.log(num1 + num2);
}   
AddTwoNumbers(10, 20); // calling the function with arguments these arguments are passed to the parameters
const result  = AddTwoNumbers(100, 200); // calling the function with different arguments   
console.log(result); // undefined because the function does not return anything



// 3) Function with return statement

function AddTwoNumbersWithReturn(num1, num2){
    return (
        num1 + num2
     ) 
     console.log("This will not be printed"); // this line will not be executed because the function has already returned    

}
const resultWithReturn = AddTwoNumbersWithReturn(500, 200); // calling the function with different arguments    
console.log(resultWithReturn); // 300, this will print the sum of the two numbers


function AddToCart (val1 , val2 , ...rest){
    return  [val1, val2, ...rest]
}
console.log(AddToCart(10,20,30,40,50));

// passing object and array to a function

const user = {
    name: "John",
    age: 30,
    city: "New York",
};

function Getobject(AnyObject) {
    console.log(`The username is ${AnyObject.name} and the age is ${AnyObject.age}`);
}

Getobject(user);



// passing array to a function
const AnArray = [1, 2, 3, 4, 5];    

function GetArray(AnyArray) {
    console.log(`The first element of the array is ${AnyArray[0]} and the second element is ${AnyArray[1]}`);
}   
GetArray(AnArray);

