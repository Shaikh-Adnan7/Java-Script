// const userobj = new Object(); 
// userobj.name = "John";

// single tern object declaration

const userDetails = {
  name: "John",
  age: 30,
  userFullname:{
    firstname:"Cena",
    lastname:"John"
  }
}

console.log(userDetails.userFullname); // for accessing nested object



const obj1 = {1: "one", 2: "two", 3: "three"};  
const obj2 = {4: "four", 5: "five", 6: "six"};

// Merging two objects using Object.assign
const mergedObject = Object.assign({}, obj1, obj2);
console.log(mergedObject); // Outputs: {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six"}     
// the first argument is an empty object to avoid modifying the original objects    
// the second and third arguments are the objects to be merged




// Merging two objects using spread operator
const obj3 = {...obj1, ...obj2};


console.log((`The merged objects are ${JSON.stringify(obj3)}`)); 
// Outputs: The merged objects are {"1":"one","2":"two","3":"three","4":"four","5":"five","6":"six"}
// to interpolate the object or array in a string, we use JASON.stringify() methos
// if you try to interpolate the object or array without using JSON.stringify() method, it will give you [object Object] or [object object or array ] respectively


// to take out the keys or values of an Object, we can use object.keys(objectname) or 
// Object.values(objectname) methods

const keys = Object.keys(mergedObject);
console.log(keys);

const values = Object.values(mergedObject);
console.log(values);


// to convert an object to an Array, we use object.enteries(objectname) method
const myArray = Object.entries(mergedObject);
console.log(myArray); // Outputs: [[1, "one"], [2, "two"], [3, "three"], [4, "four"], [5, "five"], [6, "six"]]
// this method returns an array of arrays, where each inner array contains the key and value of the object
// to convert it back to an object, we can use Object.fromEntries(myArray);
const myObject = Object.fromEntries(myArray);
console.log(myObject); // Outputs: {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six"}
// this method returns an object from an array of arrays, where each inner array contains the key and value of the object   



// Object Destructuring
const person = {
    name:"Cr7",
    age: "39",
    address :"Lisbon",
    club:"Al Nassr",
    skills: ["Dribbling", "Shooting", "Heading"],
}

const {skills} = person;
console.log(skills); // Outputs: ["Dribbling", "Shooting", "Heading"]
// this is called object destructuring, where we can extract the properties of an object into variables


