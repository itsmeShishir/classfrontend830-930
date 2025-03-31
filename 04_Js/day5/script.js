//  function -> a block of code runs when it is called 
//  why to use function -> code readibility, code strucute, wirte once called anytime
//  type of functions -> 2 types -> inbuild function, userdefine function
//  log(), print(), string(), number(), date(), 
//  Userdefine function -> 
// function FunctionName() { body }
//  function name should be written in camelCase

// wap to that use function to print the name
function printName(){
    console.log("My name is Shishir Bhandari");
  } 
  printName()
  printName()
  printName()
  
  // function ma parameter and agruments -> 
  function printNames(name){
    console.log("My name is " + name);
  } 
  printNames("Shishir Bhandari")
  printNames("prashotam ")
  
  // function with parameter 
  function FWP(name){
    console.log("My name is " + name);
  } 
  FWP("Shishir Bhandari")
  FWP("prashotam ")
  // function with no parameter
  function FWNP(){
    console.log("My name is Shishir Bhandari");
  } 
  FWNP()
  //  function with no parameter but have the return type
  function FWNPBHRT(){
   return `"My name is Shishir Bhandari`
  } 
  console.log(FWNPBHRT());
  //  function paramete also have return type
  function FWPART(name){
    return `My name is ${name}`
   } 
  console.log(FWPART("Shishir Bhandari"));
  
  //  function -> parameters type types in js 
  // default parameter, name parramenter
  function ABCD(a,b = 60){
    console.log(a+b);
  }
  ABCD(30,40)
  ABCD(30)
  
  // named paramenter
  function ABC(a,b){
    console.log(a+b);
  }
  ABC(30,40)
  
  // ...rest parameter
  function ABCDE(...abc){
    console.log(abc);
  }
  ABCDE(30,40, 50, 60, 70)
  
  // Annonormous Function -> function name, we call a variable while makeing this function
  let ABCDEF = function () {
    console.log("hello World");
  }
  ABCDEF()
  ABCDEF()
  
  let ABCDEFG = function (name) {
    console.log("hello World " +name);
  }
  ABCDEFG("shsihir")
  ABCDEFG("Ram")
  
  // Arrow Function -> function =>
  
  let arrow = () =>{
    console.log("Hello ");
  }
  arrow()
  
  let arrows = (name) =>{
    console.log("Hello " + name);
  }

  arrows("Prashatom")

// wap to print the all the even number between 2 to 60 using function
//  wap to print the user specific table using function
// wap to check if the give numbe is odd or even using function
// wap to check given year is leap year of not
// wap to check if the given user is male or female
// wap to print the number in loop using function form 0 to 100 but not 50


  
  