const myarray = [1, 2, 3, 4, 5];
console.log(myarray); // Outputs: [1, 2, 3, 4, 5]
console.log(myarray.length); // Outputs: 5
console.log(myarray[0]); // Outputs: 1
console.log(myarray[myarray.length - 1]); // Outputs: 5
console.log(myarray[myarray.length]); // Outputs: undefined (out of bounds)
console.log(myarray[myarray.length - 2]); // Outputs: 4 (second last element)       


// array methods

myarray.push(6); // Adds 6 to the end of the array
console.log(myarray); // Outputs: [1, 2, 3, 4, 5, 6]

myarray.pop(); // Removes the last element (6)
console.log(myarray); // Outputs: [1, 2, 3, 4, 5]

myarray.unshift(0); // Adds 0 to the beginning of the array
console.log(myarray); // Outputs: [0, 1, 2, 3, 4, 5]

myarray.shift(); // Removes the first element (0)
console.log(myarray); // Outputs: [1, 2, 3, 4, 5]       

console.log(myarray.includes(3)); // Outputs: true (3 is in the array)
console.log(myarray.includes(6)); // Outputs: false (6 is not in the array)

const newArray = myarray.join(", "); // Joins elements into a string
console.log(newArray); // Outputs: "1, 2, 3, 4
//returns a string with all elements separated by ", "

// Slice and Splice
const slicedArray = myarray.slice(1, 4); // Slices elements from index 1 to 3 (4 is not included)
console.log(slicedArray); // Outputs: [2, 3, 4]

const splicedArray = myarray.splice(1, 2); // Removes 2 elements starting from index 1
console.log(splicedArray); // Outputs: [2, 3] (removed elements)    

console.log(myarray); // Outputs: [1, 4, 5] (remaining elements after splice)   


// Slice returns a new array without modifying the original array.
// Splice modifies the original array and returns the removed elements.

