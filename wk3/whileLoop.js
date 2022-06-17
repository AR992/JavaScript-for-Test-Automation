/**
 * While loop
 * @when to use?
 *  - Until a condition is met (or when the end condition is not known)
 *  - e.g. Retry until you get a response
 * 
 * Scenario:
 *  Waiting for an API reponse, retry max of 10 times * 
 * 
 */

// Syntax
let count = 1
let isDataReturned = false
while (isDataReturned === false && count <= 10) {
    console.log(count)
    if (count == 5){
        // we got some response
        isDataReturned = true
    }
    count ++
}