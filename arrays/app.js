let numbers = [1,2,3,4,5,6,5,7]

console.log("original array", numbers)

//length
// console.log(numbers.length);

//add element at the end of array
// numbers.push(8)
// console.log("after push array", numbers)



//remove element at the end of array
// numbers.pop()
// console.log("after pop array", numbers)

//add element at the start of array
// numbers.shift()
// console.log("array after shift", numbers)

//remove element at the start of array
// numbers.unshift(8)
// console.log("array after unshift", numbers)

//sort array
// numbers.sort()
// console.log("array after sort: ", numbers)

//check if something exists in array
// exists = numbers.includes(5)
// console.log(exists)

//find index of soemthing (-1 means does not exist)
// console.log(numbers.indexOf(5))

//find last index of soemthing (-1 means does not exist)
// console.log(numbers.lastIndexOf(5))

// let greaterThan3 = numbers.filter(x => x>3)
// console.log(greaterThan3)

//get some part of the array
// console.log(numbers.slice(2,5))

// . When a new person checks in, check if their name exists in the array:

// 1. If their name exists, log their seat number (index in the array).

// 2. If their name doesn’t exist, add them to the end of the array, then log their new seat number (index in the array).

// Test this with the name "David" (a new entry) and "Alice" (an existing entry).

let ticketHolders = ["Alice", "Bob", "Charlie"];

//my software
let newPerson = "demo name"

if(ticketHolders.includes(newPerson)){
    //exists
    console.log(ticketHolders.indexOf(newPerson));
}
else{
    //not exist
    ticketHolders.push(newPerson);
    console.log(ticketHolders.indexOf(newPerson))
}