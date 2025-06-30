const marvel_heroes = ["thor", "ironman", "hulk", "black widow", "captain america"];
const dc_heroes = ["superman", "batman", "flash", "wonderwomen", "aquaman"];

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); // ["thor", "ironman", "hulk", "black widow", "captain america", "superman", "batman", "flash", "wonderwomen", "aquaman"]  
// The concat() method is used to merge two or more arrays. It does not change the existing arrays but instead returns a new array.
// you need to hold the result in a new variable as concate method returns a new array.

// spread operator
const all_heroes_spread = [...marvel_heroes, ...dc_heroes];
console.log(all_heroes_spread); // ["thor", "ironman", "hulk", "black widow", "captain america", "superman", "batman", "flash", "wonderwomen", "aquaman"]
// The spread operator (...) is used to expand an iterable (like an array) into its elements. It can be used to merge arrays or to create a new array with elements from existing arrays.
// It is a more concise and modern way to achieve the same result as concat().


const object = {  name: "John",
  age: 30,
  city: "New York" };


console.log(Array.from(object, ([key, value]) => `${key}: ${value}`)); // Outputs: ["name: John", "age: 30", "city: New York"]
// The Array.from() method creates a new array from an array-like or iterable object.
// In this case, it converts the object into an array of strings where each string is a key-value pair formatted as "key: value".
// The second argument is a mapping function that formats each key-value pair into a string.
// Note: The object is treated as an iterable of key-value pairs, which is why it works with Array.from().
// If you want to convert an object to an array of its values, you can use Object.values(object) or Object.entries(object) for key-value pairs.
//// Example of Object.values() and Object.entries():
console.log(Object.values(object)); // Outputs: ["John", 30, "New York"]
console.log(Object.entries(object)); // Outputs: [["name", "John"], ["age", 30], ["city", "New York"]]
// Object.values    


