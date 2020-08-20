'use strict'
/*
class person {
  construct(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log('${this.name}: hello');
  }
}

const ellie = new person('ellie', 13);
ellie.speak();
*/
class User
{

  constructor(firstname, lastname, age)
  {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
  }
  get age ()
  {
    return this._age;
  }
  set age (value)
  {
    this._age = value;
  }
}
const p1 = new User("seukim",'kim', 12);
console.log(p1.firstname);
