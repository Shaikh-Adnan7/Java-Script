const user = {
    username: "Beast",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
        //this refers to a cuurent context here in the above examole we create an object literals 
        // Object literal is simply an object {} with properties and methods 
        // methods are nothing a but a function related to its object meeans a function inside object
    }



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Beast", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);


// in the above example we undestand it about the constructor function 
// A constructor function is a regular function that is called with the new keyword to create objects.

// now lets understand it why it is neseccary understand it with an example
// When you call:
// new Person("Beast", 25);
// 1. Creates a new empty object
// let obj = {};
// 2. Sets this inside the function to point to that new object
// 3. Adds the properties/methods to the object
// 4. Returns the object automatically
// So new Person(...) returns a new object each time.

// Why use constructor functions?

// Because they let you create multiple similar objects quickly:
// if dont use the new key word means just call with regular function then the values are being overrides with the new values because the this will replace it the golbal context
