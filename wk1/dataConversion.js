let val1 = "5"
let val2 = "5.5"

console.log(`The type of val1: ${typeof val1}`)  // string
console.log(`The type of val2: ${typeof val2}`)  // string

// Conversion string into number
numVal1= parseInt(val1)  // number
numVal2= parseFloat(val2)  // number

console.log(`The type of numVal1: ${typeof numVal1}, and the value is ${numVal1}`)  // number
console.log(`The type of numVal2: ${typeof numVal2}, and the value is ${numVal2}`)  // number

// Unary plus
numVal3= +val1  // number
numVal4= +val2  // number

console.log(`The type of numVal1: ${typeof numVal3}, and the value is ${numVal3}`)  // number
console.log(`The type of numVal2: ${typeof numVal4}, and the value is ${numVal4}`)  // number

// Convert to a string
console.log(typeof(numVal3.toString()))