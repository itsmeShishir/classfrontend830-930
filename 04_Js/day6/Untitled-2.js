// OOP > Object Oriented Programming
// prototype -base approach for oop
//  object la inherit properties, and methods form other object
// Programming Paradigm based on the concept of object which can containes data and properties
// OOP -> aims to implement real world entities like inheritance, encapsulation, abs, poloy

// 4 Pillars of oop
// 1. Encapsulation -> data bundling , methods 
// 2 . Abstraction-> hide complex implematation
// 3. Inheritance -> parent class ko properties chile class 
// 4. Polymorphism -> single interface to represend different data type

// class -> Class is a blue print for a object, properties and methods, to create a object
// object -> instace of a class, behaviours 

//  Defining a class
class Person{
  // properties
  a = 10
  b = 20
  
  // this keywords -> to refers 
  c = this.a + this.b

  // sum is a methods or a function -> not fully function
  sum(){
    console.log(this.a + this.b);
  }
}
// console.log(Person.c());

const ram = new Person()
console.log(ram.c);
console.log(ram.sum());

const shyam = new Person()
console.log(shyam.c);
console.log(shyam.sum());

// constructor -> es6 
class Prajwol{
  constructor(name, age){
    this.name = name;
    this.age = age;
    console.log("runs automatically", age, name);
  }
  // details (){log(my name is [prajwol sharma], age is 23)}
  details(){
    console.log(`my name is ${this.name} and age is ${this.age}`);
    
  }
}
prajwol = new Prajwol("pwajwol sharma", 30);
prajwol.details()

prajwol2 = new Prajwol("pwajwol khadka", 3);
prajwol2.details()

prajwol3 = new Prajwol("pwajwol khanal", 23);
prajwol3.details()

// Encapsulation -> the process of keeping fields within a class
// java -> private, public , protected 
// js -> #m -> properties
class BankAccount{
  #balance;

  constructor(accountNumber, balance){
    this.accountNumber = accountNumber;
    this.#balance = balance;
  }
  getBalance(){
    return this.#balance
  }
  depoite(amount){
    if(amount > 0){
      this.#balance +=amount;
      console.log("Deposite Successfully" , this.#balance);
    }else{
      console.log("invalid Depoite amount");
      
    }
  }
}

const account1 = new BankAccount(123456, 4000);
console.log(account1.getBalance());
// console.log(account1.#balance);
account1.depoite(500);
console.log(account1.getBalance());






