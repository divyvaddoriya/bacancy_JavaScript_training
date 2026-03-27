// Assignment 2: any vs unknown
// Create a function that accepts any and performs operations without checks

function checkAny(a : any) {
    console.log(a + 5)
    console.log(a.toLowerCase())
}

// Create the same function using unknown and add proper type guards

function checkUnknown(a : unknown ) {
    
    if(typeof a === "number")
    console.log(a + 5);

    else if(typeof a === "string")
    console.log(a.toLowerCase())

    else
    return "it is any other type of data"
}

// Compare the compiler behavior and runtime safety



// Create one variable using any
const anyVar : any = 5 
// Create another variable using unknown
const unknownVar : unknown = 5 

// Try calling methods directly on 

// in any u will be able to directly call the method cause it does not do type checking on the variable so it will do it and will not gave error before compiling

anyVar.LowerCase()

// in unknown mean u does not know the data type currently but u will handle it later so 
// it means whenever u try to apply method on it it will first ask u to specify which type of data it is and if it string then it will let u have the string method 

if(typeof unknownVar === "string")
    unknownVar.toLocaleLowerCase()

// Which one forces you to write safer code?

// unknown will force u to write the safer code