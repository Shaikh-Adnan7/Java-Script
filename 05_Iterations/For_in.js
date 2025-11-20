// FOR IN


// syntax 
// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
 
// }

// The for...in loop in JavaScript is used to iterate over the enumerable property keys of an object.
// It works on objects, arrays, and other objects with enumerable properties—but it iterates keys, not values.

const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key, obj[key]);
}


const arr = ['x', 'y', 'z'];

for (const index in arr) {
  console.log(index, arr[index]);
}
