// String 
//  -> methods 

let ab = "hello world"
console.log(ab.split(""));
console.log(ab.toUpperCase());
console.log(ab.toLowerCase());
console.log(ab.slice(4,8));
console.log(ab.replace("hello", "hi"));
console.log(ab.includes("hello"));
console.log(ab.indexOf("o"));
console.log(ab.concat("hello"));


//  type conversion in js -> 
// String -> Number, number -> bool 
// String -> Number
absi = "20"
// Type of  -> it check what its type is 
console.log(typeof(ab));
num = Number(absi)
console.log(typeof(num));

str = String(num)
console.log(typeof(str));

bools = Boolean(str)
console.log(typeof(bools));


// Number -> int, float
let num1 = 10
let num2 = 20.50
console.log(num1+num2);
console.log(num1-num2);
// divide
//  2 int value 10, 30
console.log(30/10); // -> 3

// bool 
let one = true
let two = false

console.log(typeof(one));

// null
let abs = null
console.log(abs)

// undefine
let abse = undefined
console.log(abse);

// symbols
abse = Symbol("hello")
console.log(abse);

// non primitive
let arr = [1,2,3,4,5]
console.log(arr);

//object
let obj1 = {
    "name": "shishir",
    "age": 27
}
console.log(obj1);

// random 
let randoms = Math.random()
console.log("Random = " + randoms* 100);

// Date in js
const now = new Date();
console.log("Todauy = "+ now);
console.log("Todauy = "+ now.toDateString());
console.log("Todauy = "+ now.toLocaleDateString());
console.log("Todauy = "+ now.toISOString());
console.log("Todauy = "+ now.getDay()); // -> 0 sunday 6 -> saturday
console.log("Todauy = "+ now.getMonth()); // -> 0 sunday 6 -> saturday
console.log("Todauy = "+ now.getUTCDate());
console.log("Todauy = "+ now.getUTCDay());

// Operators and operands 
// Arthmetic -> +, -, /, *, % -> reminder 
console.log(5+5);
console.log(5-5);
console.log(5/5);
console.log(5*5);
console.log(5%5); 

// Comparison Operator -> >,<, >=,<= ==, ===, != , =True,  =Fasle
console.log(5>5);
console.log(5<5);
console.log(5>=5);
console.log(5<5);
console.log(5==5);
console.log(5==="5");
console.log(5!=6);

// Assignment Operatos -> =, +=, -=, /=, *=, %=
a = 5
console.log(a+=1);
console.log(a-=1);
console.log(a/=1);
console.log(a*=5);
console.log(a%=5); 

// Logical Operator -> &&, || , !
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
//  both operator need to be true other wise false

// ||
console.log(true|| true);
console.log(false || true);
console.log(true || false);
console.log(false|| false);
//  if both statement are false then only the output is false if any other are true the its true

// !
console.log(!true);
console.log(!false);
//  if true return false if false return true

// Ternary Operator  -> simple if else statement but in the same line ok 
// -> condition ? true : false
//  wap to check if the user is male or female using ternary operators 
let users = "Female"
let output = users ==="male"? "he is male " : "she is female"
console.log(output);

// BitWise Operators -> &, |, ^, ~, <<, >>
//  Bitwise AND -> &
//  Bitwise OR -> |
//  Bitwise XOR -> ^
//  Bitwise NOT -> ~
//  Bitwise Left Shift -> <<
//  Bitwise Right Shift -> >>
// how it works -> 32 bit binary value 
// 10 -> 1010
// 20 -> 10100
// 30 -> 11110
//  log(10 & 20); // 2
console.log(10 & 20); // -> 2
console.log(10 | 20); // -> 30
console.log(10 ^ 20); // -> 30
console.log(~10); // -> -11
console.log(10 << 2); // -> 40
console.log(10 >> 2); // -> 2

// 






















