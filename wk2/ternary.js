/** 
 * Ternary operator (?)
 * @syntax:
 * <expression> ? "val1" : "val2"
 * 
*/

// Use case: Set log level for different run environment

// Basic use
let runner = "local"
let logLevel = runner === "local" ? "Info" : "Error"
console.log(logLevel)


// Advanced use
let logLevel2 = runner === "local" ? "Info" : runner === "cloud" ? "Silent" : "Error" 
console.log(logLevel2)