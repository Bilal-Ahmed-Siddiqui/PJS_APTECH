function addition(a, b){
 let c = a+b
 return c
}


const adddtionArrow = (a, b) =>{
  return  a+b
}

const adddtionArrow2 = (a, b) => a+b

// let result = addition(5, 8)

// console.log(result)


let valueA = prompt("enter value A: ")
let valueB = prompt("enter value B: ")

let result = adddtionArrow2(parseInt(valueA), parseInt(valueB));
console.log(result)
