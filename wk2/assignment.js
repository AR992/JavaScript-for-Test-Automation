/**
 * Assignment operator
 * =, +=, -=, *=, /=
 */

// Use case 1: Basic
let a = 1  // assign value

// Use case 2: Chaining
let x = y = 1
console.log(x)
console.log(y)

// Use case3: +=
let start = 5
for (let i = 1; i <= 5; i++){
    start = start + i  // the same output like in line 18
    start += i
    console.log(start)
}