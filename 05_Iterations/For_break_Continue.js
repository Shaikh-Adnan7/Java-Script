// For loop 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];    
// }

for (let index = 0 ; index < 10 ; index ++ ){
    const element = index
    // console.log(element);
}



for (let i = 0; i < 10 ; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 0; j < 10 ; j++) {
        // console.log(`inner loop ${j}`);
    }
    
}

// Outer loop (i) starts
// i = 0 It logs: outer loop 0
// Inner loop (j) runs completely
// For the current value of i, the j loop runs from 0 to 9
// Logs:
// outer loop 0
// outer loop 1
// ...
// outer loop 9
// Inner loop finishes, then the outer loop continues
// Now i increments: i = 1
// Logs: outer loop 1
// Then again the inner loop (j = 0 → 9) runs completely
// This continues until:
// i reaches 9 and inner loop runs one last time
// When i = 10, the outer loop stops

const myArray = ['CR7', 'LM10', 'NJ'];

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}