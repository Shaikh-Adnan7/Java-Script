// “In JavaScript, every object has an internal link to another object called its prototype. A prototype is an object from which other objects inherit properties and methods. This allows JavaScript to implement inheritance and share functionality efficiently without duplicating it for each object.” 
 
 
 let username = 'applr     '
 const fruite = 'asdjl;fkjads     '
//  console.log(username.length)
 
 String.prototype.trimstring = function (){
    console.log(`true trim string is ${this.trim().length}`)
 }
 
username.trimstring()
fruite.trimstring()



// let myName = "BEAST     "
// let mychannel = "CodeMaster     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

// Change prototype methods
Object.prototype.BEAST = function() {
    console.log(`BEAST is present in all objects`);
}

Array.prototype.heyBEAST = function() {
    console.log(`BEAST says hello`);
}

// heroPower.BEAST()
// myHeros.BEAST()
// myHeros.heyBEAST()
// heroPower.heyBEAST()

// inheritance
const tt = {
    name :'adnan'
}
const ttt = {
    id:'123',
    __proto__:tt
}

console.log(tt.name)


const User = {
    name: "CodeMaster",
    email: "codemaster@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "CodeMasterAurCode     ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"BEAST".trueLength();
"iceTea".trueLength();
