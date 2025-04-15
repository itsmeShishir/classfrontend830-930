// let and const 
let name = "shishir"
const age = 20
console.log(name, age);

// arrow function
let arrow = () => {
    console.log("hello world");
}
arrow()
// templates literal
let name1 = "shishir"
let name2 = "hari"
console.log(`hello ${name1} and ${name2}`);

// spread operator
let arr = [1,2,3,4]
let arr2 = [...arr, 5]
console.log(arr2);

// function -> default parameter
function ABCD(a,b = 60){
  console.log(a+b);
}
ABCD(30,40)
ABCD(30) //90

// Classes -> constructior -> only one constructor in a class
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
    console.log("runs automatically", age, name);
  }
}
let shishir = new Person("shishir", 20)
// promises -> Async
const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success")
  }, 2000);
})
promises.then((value) => {
  console.log(value);
})

// modules -> import and export
// map , set
const map = new Map()
// set
map.set("name", "shishir")
map.set("age", 20)
// get 
console.log(map.get("name"));
console.log(map.get("age"));
// delete 
map.delete("name")
// size
console.log(map.size);
// has
console.log(map.has("age"));
// clear
map.clear()

// Symbols
const sym = Symbol("shishir")
console.log(sym);
