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