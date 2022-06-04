
/**
* Variables rules:
1. Variable name should start with a letter, or underscore (_), or dollar sign ($)
2. System reserved keywords can't be used: if, else, throw, break
3. Varaible names are case-sensitive
4. Can't have same name for other types (function name, object name)
5. Multiple variables can be declated in single line (separated by comma)
6. When you just declare a varaible, the data type will be undefined
 */

let greeting = "Hello World!", newVariable = "This is string"
console.log(greeting, newVariable)


let newName
console.log(newName)  //here will be undefind

/**
 * var, let and const use cases
 */

// let
let val = 0
val = "ten"
console.log("The val is "+val)

// const  --> generaly should be capitalized
const APP_URL = "https://test.com"
console.log(APP_URL)

let count = 0

if(true) {
    let count = 10
    console.log(count)
}
console.log(count)