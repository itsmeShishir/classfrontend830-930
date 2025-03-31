// Loops in Js 
// Loops -> Continue the process until and unless the condition is not satisfied or
// 3 types -> for loop , while loop and do while
// break statement -> break, and continue
// for loop -> most used loop in js -> for keyword 
// for(initialized; condition; inc/dec){
  // body
// }
//  wap to print the number 10 types
for(let i = 0; i<=10; i++){
    console.log(i);
  }
  // wap to to print the name 100 times
  for(let i = 0; i<= 100; i++){
    console.log("shishir");
  }
  // wap to to print multiplication tabel of 5 
  for(let i = 0; i<=10; i++){
    console.log(`5 * ${i} =  ${5*i}`);
  }
  // wap to print the sum of natural number upto 50
  let sum = 0
  for(let i = 0; i<=50; i++){
    sum += i
  }
  console.log(sum);
  
  //  While Loop
  // banking application -> 
  // while(condition){
    // inc/dec
    // body
  // }
  
  // wap to check or print the value from 1 to 100 using while loop
  let i = 0
  while(i<100){
    i++
    console.log(i);
  }
  
  // do while loop in js -> 
  // do {body}while(conditions)
  //  wap to print the multiplication table of 5
  let a= 0
  do{
    console.log(5*a);
    a++
  }while(a<=10)
  
  
  // Breaking statement -> break and continue
  // continue -> if condition satisfied -> tyo iteration lai ignore garna 
  for(let i = 0; i<=10; i++){
    if(i==5){
      continue;
    }
    console.log(i);
  }
  // break -> until the break statement does not satisfied run if satisfied then stop or exit the program
  for(let i = 0; i<=10; i++){
    if(i==5){
      break;
    }
    console.log(i);
  }
  
  // nested loop in js 
  for(let i = 0; i<=10; i++){
    for (let j = 0; j<=10; j++){
      console.log(`${i} * ${j} =  ${j*i}`);
    }
  }
  
// Wap to print the multiplication table of 5 using nested loop
// wap to print the all the even numbers from 1 to 100
// wap to print the all the odd numbers from 1 to 100
// wap to print the all the prime numbers from 1 to 100
//  wap to print the list of student  = ["hari", "shyam", "laxman", "mirdul", "ram"]
//  wap to print the year from 2000 to 2022 all the month 
// *
// **
// ***
// **** 
// *****

//  function in js ->
  
  
  
  
  