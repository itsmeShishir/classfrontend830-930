// Array -> an array is a list like object used to store multiple values
//  Array -> 0- start form 0 n-1
let arr = [
    'apple', 'banana', 'orage', 'grapes'
  ]
  console.log(arr);
  
  // old approach
  let fruits = new Array('apple', 'banana', 'orage', 'grapes')
  console.log(fruits);
  
  // Accessing into the array using index
  console.log(arr[3]);
  console.log(arr[0]);
  
  // Array methods in js
  // push(), pop(), unshift(), shift(), splice()
  // add muliple element at last 
  arr.push("trangrine", 'pineapple')
  console.log(arr);
  // pop() -> remove an item fomr last
  arr.pop()
  console.log(arr);
  // unshift-> first multiple value
  arr.unshift("0", 1, 2)
  console.log(arr);
  // remove the first element
  arr.shift()
  console.log(arr);
  // splice -> rmove and add element at any given index
  arr.splice(2,2, "hello")
  console.log(arr);
  
  // Array iterations -> foreach, map, filter, reduce, find, some, every
  // return , 
  let fruit = new Array('apple', 'banana', 'orage', 'grapes')
  
  fruit.forEach((item)=> {
    console.log(item)
  })
  
  // map
  fruit.map((item)=> {
    console.log(item)
  })
  
  // return
  fruitsa = fruit.filter((item) => {
    return item.length > 5
  }) 
  
  console.log(fruitsa);
  
  fruitsfind = fruit.find((item) => {
    return item.length > 5
  }) 
  
  console.log(fruitsfind);
  
fruitreducer = fruit.reduce((acc, item) => {
    return acc + item.length ,0
})  