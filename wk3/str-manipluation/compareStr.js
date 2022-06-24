/**
 * Compare string
 * 1. Full match
 * 2. Partial match
 *  - includes()
 *  - startsWith()
 *  - endsWith()
 * 
 * @questions:
 * 1. Is this a case sensitive comparison?
 * 2. Does the string need to be trimmed?
 * 
 */

let fileName = "invoice_123.pdf"

// Full match
if(fileName.toUpperCase() === "INVOICE_123.PDF"){
    console.log(`The filename matches...`)
}

// Partial comparison

if (fileName.startsWith("invoice")) {
    console.log(`yes it starts with invoice...`)
}

if (fileName.endsWith("pdf")) {
    console.log(`yes it ends with pdf...`)
}