// While 

// Syntax 
// while (condition) {
    
// }

let number = 0
while (number <= 20) {
    // console.log(`vlaue ${number}`);
    number = number + 2
}

let myArray = ['ironman', 'superman', 'flash']

let arr = 0 
while (arr < myArray.length){
    console.log(`value of array is ${myArray[arr]}`);
    arr = arr + 1    
}


// do while
//  do {
    
// } while (condition);
let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
// The do { ... } block runs first, no matter what.
// After it finishes once, JavaScript checks the while (condition).
// If the condition is true, the loop repeats.
// If the condition is false, the loop stops.
// here the do execute and print 11 even if the condition is false 