// Declare a Symbol
const msym = Symbol("this is a symbol");

// Create an object with various properties
const object = {
  name: "John",
  age: 30,
  city: "New York",
  isloggedIn: false,
  workingdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  "full name": "John Cena",
  [msym]: "This is a symbol property", // Symbol key
  
};

// Log the object (symbol property won't show in normal console.log)
console.log(object); // Symbol property is hidden

// Accessing regular properties
console.log(object.city);           // Outputs: "New York"
console.log(object["full name"]);   // Outputs: "John Cena"
console.log(object.name);           // Outputs: "John"

// Accessing the symbol property
console.log(object[msym]);          // Outputs: "This is a symbol property"

// Checking types
console.log(typeof msym);           // Outputs: "symbol"
console.log(typeof object[msym]);   // Outputs: "string"

// to change the property of an object

object.email = "jhoncena@chatgpt.com"; // Adding a new property
console.log(object.email);  //jhoncena@chatgpt.com


// Object.freeze(object); // Freezing the object to prevent further modifications
// object["full name"] = "The Rock"; // This won't change the value
// console.log(object["full name"]); // Still prints: "John Cena"

object.greeting = function() {
  return `Hello, my name is ${this.name}`;
}
console.log(object.greeting()); // Outputs: "Hello, my name is John"


