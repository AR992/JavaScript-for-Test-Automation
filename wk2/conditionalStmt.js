/**
 * Conditional statements use cases:
 * 1. Just if statement
 * 2. if (!)
 * 3. if and else
 */

// Use case 1: Just if - handling a random popup
let popupExist = true
if (popupExist === true) {
    console.log(`>>> Perform click action`)
}

if (popupExist === true) console.log(`>>> Perform click action`)  // the way how you can use if statement


// Use case 2: Just if (NOT) - Checking for falsy value
let data = "test"
if (!data) {
    throw Error("No valid data provided")
}

// Use case 3: if...else: If file exist read the file, else crate the file
let fileExist = "N"
if (fileExist === "Y") {
    console.log("Read the file")
} else {
    console.log("Create the file")
}

// Use case 4: if else if....Nested conditions... Act based on list of conditions
let err = "Ajdin"

if (err === "Error") {
    console.log("Retry...")
} else if (err === "AssertionError") {
    console.log("Fail to test")
} else if (err === "DataValdiation") {
    console.log("Read the test data file")
} else {
    console.log("Print the error message")
}

// Use case 5: If else [Inner conditions]: Quering a database for test data
let isSuccess = false

if (isSuccess === true) {
    console.log('String the value')
} else {
    console.log('No data recived')
    let errorCode = "ACCEPT7"
    if (errorCode === "ACCEPT") {
        console.log('Continue the execution')
    } else {
        console.log('Fail the test')
    }
}

// Use case 6: if in loops

for (let i = 1; i <= 10; i++) {
    if (i === 6) break
    console.log(i)
}