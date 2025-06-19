const accountID = 12345
let email = "something@gmail.com"
var city = "above the sky "


console.table([accountID, email, city]);


// Keyword	    Scope	    Reassignable	Hoisted	Best Use
// var	        Function	✅ Yes	        ✅ Yes	Legacy code, avoid in modern JS
// let	        Block	    ✅ Yes	        ❌ No	Variables that change in value
// const	    Block	    ❌ No	        ❌ No	Constants, arrays, objects that won’t be reassigned