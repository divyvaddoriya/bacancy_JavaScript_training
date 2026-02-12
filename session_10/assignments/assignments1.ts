// Assignment 1: Type Inference

// Declare variables using let and const with initial values and observe inferred types
// Try reassigning incompatible values and note the compiler errors
// Write a function without a return type and inspect what TypeScript infers

const a1 = 5 // it will take number as inference
const a2 = "hi hello" // it will take string as inference

// now if i do the resassigning to the different 
// value it gives the 
// type error
// a2 = 5


function add(a: number ,b : number) {
    return a + b
}

// here it will infer to the number

function greet() {
    return "hi"
}
// this function will be infered as string in output 