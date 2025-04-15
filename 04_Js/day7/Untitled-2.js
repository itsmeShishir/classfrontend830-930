// inheritace -> the process of inherit properties and methods from another class
// class Parent{ greet()} -> class Child extends Parent

class Person{
  constructor(lastname, age){
    this.lastname  = lastname;
    this.age = age;
  }

  greet(){
    console.log(`Hello ${this.lastname} and ${this.age}`);
  }
}
class Child extends Person{
  constructor(lastname, age, firstName){
    super(lastname, age)
    this.firstName = firstName
  }
  fulldetails(){
    console.log(`${this.firstName} and ${this.lastname} and age is ${this.age}`);
  }
}

const child1 = new Child("bhandari", 27, "Shishir")
child1.greet()
child1.fulldetails();


// polymorphism

class Persons{
  speaks(){
    console.log("I am speaking");
  }
}
// java , c++ -> methods overloading 
class Women extends Persons{
  speaks(){
    console.log("I am speaking as a women");
  }
}

class Men extends Persons{
  speaks(){
    console.log("I am speaking as a Men");
  }
}

const women1 = new Women();
women1.speaks()

const men1 = new Men();
men1.speaks()

// Abstaction -> process of hidding important information in a class
class B{
  #balanc;

  constructor(B1){
    this.#balanc = B1;
  }

  deposite(amount){
    this.#balanc += amount;
    console.log(amount);
  }
  get balances(){
    return this.#balanc;
  }

  set balancess(value){
    this.#balanc = value;
  }

  getB(){
    return this.#balanc
  }
}

const a1 = new B(1000);
a1.deposite(500)
console.log(a1.balances);
a1.balancess = 6000

console.log(a1.getB());

//  prototype  -> advance topic
function GetAll(name, age){
  this.name = name;
  this.age = age;
}
GetAll.prototype.greet = function (){
  console.log("hello "+ this.name + " " + this.age);
}

const info = new GetAll("shishir", 28)
info.greet()

