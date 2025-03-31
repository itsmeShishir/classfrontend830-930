// Condtion and loops
//  COndtiotn -> True ya false -> 
// Wap to check if the given user age is above 18
// pseudo code : ask input from the user, check true  = log("he or she is above 18") or False: ("he is below 18")

// JS Conditions type -> if, else, switch, elif
// Wap to check if the given user age is above 18
// if conditions
age = 19

if (false){
  console.log("he is male");
}else{
  console.log("she is Female");
}

// 
if(age > 18){
  console.log("he or she is above 18");
}
if(age < 20){
  console.log("he ir she is less than 20");
}
if(age > 20){
  console.log("he ir she is less than 20");
}else{
  console.log("he or she is not greater than 20");
}

// to check the multiple condition you need to write else if(condition)
// wap to chek if the given user is > 18 and <20 he is between 18 to 20 and check if the user is 20 to 30 
//  he is between 20 to 30 , age > 30 and < 60 -> he is greater than 30 and less than 60 finally >60 dead
condition = 50
if(condition > 1  && condition < 20){
  console.log("he or she is less then 20");
}
else if(condition > 20 && condition < 30){
  console.log("he or she is less then 30");
}else if(condition > 30 && condition < 40){
  console.log("he or she is less then 40");
}else if(condition > 40 && condition < 60){
  console.log("he or she is less then 60");
}else{
  console.log("he died");
  
} 

// Switch case -> it is like if else if else
// switch(condition){
    //  case 1:
    // console.log("he is 1");
    // break;
    // case 2:
    // console.log("he is 2");
    // break;
    // case 3:
    // console.log("he is 3");
    // break;
    // case 4:
    // console.log("he is 4");
    // break;
    // default:
    // console.log("he is default");
// }
//  wap to check what day is today using switch case
today = "Monday"

switch(today){
  case "Sunday":
    console.log("today is sunday");
    break;
  case "Monday":
    console.log("Today is monday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  default:
    console.log("none of the above");
}

//  wap to check what day is today using if else
//  wap to check it the given value is even or odd using if else (value %2 ==0)
//  wap to check if the given year is leap year of not
//  (wap to check if if the user is less then 18 print he cannot drive, 
//  if the user is 18 print he can drive, if the user is 21 print he can drive and vote, 
//  if the user is 25 print he can drive, vote and work)
//  wap to check if he an drink or not 
//  wap to check the marks in the grader system using if else and else if 
//  wap to check the marks in the grader system using switch case