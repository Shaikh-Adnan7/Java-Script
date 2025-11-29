// call()
// call() is a method available on all JavaScript functions that allows you to invoke a function immediately and explicitly set the value of this inside that function. It also lets you pass arguments one by one to the function.

function UserName(name) {
  this.name = name;
}

function User(name, email, id) {
  this.UserName()   // 

  this.email = email;
  this.id = id;

}

const user1 = new User("Ana", "ana@example.com", 101);
console.log(user1);
