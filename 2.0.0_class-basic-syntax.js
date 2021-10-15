/* Class basic syntax */

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}


/* ==================================== */

  
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
let user = new User("John");
user.sayHi(); // John
console.log(typeof User); // function
console.log(User === User.prototype.constructor); // true


/* ==================================== */

               
function makeClass(name) {
  return class {
    sayHi() {
      console.log(name);
    }
  };
}
let User = makeClass("Hello");
new User().sayHi(); // Hello
             

/* ==================================== */

               
class User {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}
let user = new User("John");
console.log(user.name); // John
user = new User(""); // Name is too short.
