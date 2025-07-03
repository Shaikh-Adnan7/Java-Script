var a = 10;
const b = 20;
let c = 30;

console.log(a); // 10, var is function scoped and accessible anywhere in the function
console.log(b); // 20, const is block scoped but accessible here because it's defined in the same scope
console.log(c);  // 30, let is block scoped but accessible here because it's defined in the same scope



// ---------------------------------------

if (true) {
    let a = 77 
    let d = 40; // let is block scoped 
    const e = 50; // const is block scoped
    var f = 60; // var is function scoped
    console.log("iner value of a " , a); // 77, because a is block scoped and defined in this block
}

console.log(d); // ReferenceError: d is not defined, because d is block scoped
console.log(e); // ReferenceError: e is not defined, because e is block scoped
console.log(f); // 60, because f is function scoped and accessible outside the block


// Block scope and Gloabal scope
console.log("outer value of a " , a); // 10, because a is function scoped and accessible outside the block refering feom the top value of a 

// Gloabal SCope 
// Variables declared outside of any function or block are in the global scope 
// and can be accessed from anywhere in your code.

let globalVar = "I'm global";

function greet() {
    console.log(globalVar); // ✅ Accessible
}

greet();
console.log(globalVar); // ✅ Accessible

// Risks of Global Scope:
// Can lead to naming collisions (multiple variables with the same name).

// Makes debugging harder.

// Should be avoided unless truly necessary.

// Local Scope
// Variables declared inside a function or block {} are local 
// to that function/block and cannot be accessed outside of it.
function example() {
    let localVar = "I'm local";
    console.log(localVar); // ✅ Accessible
}

example();
console.log(localVar); // ❌ Error: localVar is not defined
