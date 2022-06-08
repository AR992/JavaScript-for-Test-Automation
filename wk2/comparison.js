/**
 * Comparison operator
 * ==  (Checks only the value)
 * === (Strick equality operator: value + type)
 * !=
 * !==
 * >
 * >=
 * <
 * <=
 * @returns boolean
 * 
 * @rule:
 * In most cases, if the two operands are not of the same type, JS attempts to convert them to an appropriate type of the comparison.
 * This behaviour generally results in comparing the operands numerically
 * 
 */

// Use case 1: Strict equality (===, !==)

let a = "Test"
let b = 1

console.log(a == b)
console.log(a === b)

// Not equal

console.log(1 !== 2)


