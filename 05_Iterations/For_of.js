// for of loop
// The for...of loop in JavaScript is used to iterate over iterable objects.
// It does not iterate plain objects unless you make them iterable.

// syntax
// for (const element of object) {
    
// }

const arr = [1,2,3,4,5,6,7,8,9]

for (const number of arr ){
    // console.log(number);
    
}

const String  = "java script"

for (const str of String ){
    // console.log(str);
    
}

const map = new Map([
  ['a', 1],
  ['b', 2]
]);

for (const [key, value] of map) {
//   console.log(key, value);
}


const obj = { a: 1, b: 2 };

for (const x of obj) {}  // ❌ TypeError: obj is not iterable

// for...of → works on anything iterable (arrays, strings, maps, sets, etc.)
// NOT on plain objects unless you convert them or add an iterator.
