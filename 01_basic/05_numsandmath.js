const score = 100;
// console.log(score);
// console.log(typeof score); 

const anotherScore = new Number(100);
// console.log(typeof anotherScore);
// console.log(anotherScore); // Outputs: [Number: 100]

// console.log(anotherScore.toFixed(2)); // Outputs: 100.00

// console.log(anotherScore.toPrecision(1)); // Outputs: 1e+2



// ----------------------------Math-------------------------------





// console.log(Math)// Outputs: [Math: Math]

const mathnum = 105;
// console.log(mathnum.absolute = Math.abs(-mathnum)); // Outputs: 1000

// console.log(mathnum.ceil = Math.ceil(99.1)); // Outputs: 100
// console.log(mathnum.floor = Math.floor(99.9)); // Outputs: 99
// console.log(mathnum.round = Math.round(99.5)); // Outputs: 100

// console.log(Math.round(105.5)); // Outputs: 106

const rounded = Math.round(mathnum);
// console.log(rounded); // Outputs: 106




const randomNum = Math.random();
// console.log(randomNum); // Outputs: A random number between 0 and 1

console.log(randomNum * 10); // Outputs: A random number between 0 and 10
const forfixed = (randomNum * 100); // Outputs: A random number between 0 and 100
console.log(forfixed.toFixed(2)); // Outputs: A random number between 0 and 100 with 2 decimal places

const min = 10;
const max = 20;

const randomrange = mathnum.floor(Math.random() * (max - min) + min);   // Outputs: A random number between 10 and 20
console.log(randomrange); // Outputs: A random number between 10 and 20