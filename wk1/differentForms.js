/**
 * A data type can be represented in one of these forms:
 * 1. Literals
 * 2. Variable
 * 3. Expression
 */

// string
console.log("hello")        // Literals
let str = "Hello"          // Variable
console.log("He" + "llo") // Expression

// boolean
console.log(true)    // literal
let bool = true     // variable
console.log(bool)
console.log(typeof (5 < 10))// expression

// functions
function sum(num1, num2) {
    return num1 + num2     // return type is a number
}

console.log(sum(2, 2))          // 4
console.log(typeof(sum(2, 2)))  //number