const user = {
    username: 'abx',
    age: 12,

    anotherusername: function() {
        console.log(`${this.username}, welcome`);
    }
};

user.anotherusername(); // Output: "abx, welcome"
console.log(this)



// this keyword represents the context of current 

// Arrow function doesn't create its own this

// It inherits this from the outer scope (in this case, the global scope)
const obj = {
  name: "chai",
  greet: function () {
    console.log(this.name); // ✅ "chai"
  }
};
obj.greet(); // `this` refers to `obj`

// In Node.js, this.name is undefined in the global scope

// In browser, same thing unless name is a global variable


//Baic arow function 
const addtwo = (num1 ,  num2) =>{
    return num1 + num2
}
 
console.log(addtwo(7,7))


// Implicit arrow function 
const addthree = (num1, num2, num3) => num1 + num2 + num3 
console.log(addthree(1,2,3))




