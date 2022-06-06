/**
 * 1. string
 * 2. number
 * 3. boolean
 * 4. Object
 * 5. Array
 * 6. Regexp
 * 7. undefined and null
 */

// string
let str = 'hello'
let str1 = "hello"
let str2 = `${str}, World!`    // more details you can find here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
console.log(str2)

// number
let num = 5
let num2 = 5.5

// boolean
let bool = true

// Object
let obj = {}

// Array
let arr = []

// Regexp
let re = /abc/

// undefined, null
let val1
let tempObj = null

console.log(`The type of str is: ${typeof str}`)
console.log(`The type of number is: ${typeof(num)}`)
console.log(`The type of boolean is: ${typeof bool}`)
console.log(`The type of Object is: ${typeof(obj)}`)
console.log(`The type of Array is: ${typeof arr}`)
console.log(`The type of Regegp is: ${typeof(re)}`)
console.log(`The type of Undefined is: ${typeof val1}`)
console.log(`The type of NUll is: ${typeof(tempObj)}`)
