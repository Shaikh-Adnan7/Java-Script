let str1 = "Hello"
let str2 = "World"

// console.log(`string1 is : ${str1.toUpperCase} and string2  is : ${str2}` );


// console.log(typeof str1);
const gameCounter = new String("another string");
// console.log(gameCounter);
// console.log(`typeof gameCounter is :${typeof gameCounter}`);


// console.log(gameCounter.__proto__length); // Accessing the length property of the String object
// console.log(gameCounter.length); // Accessing the length property of the String object directly
// console.log(gameCounter.toUpperCase()); // Calling the toUpperCase method on the String object

const anotherstring = "             trimmethod       ";
console.log(anotherstring); // Original string with leading and trailing whitespace
console.log(anotherstring.trim()); // Using the trim method to remove whitespace from both ends of the string

const url = "https://www.example.com/path/to/resource?query=string#fragment";
console.log(url.replace("=", "-")); // Replacing the # fragment identifier with --


console.log(gameCounter.split("#")); // Splitting the string into an array of substrings based on spaces


