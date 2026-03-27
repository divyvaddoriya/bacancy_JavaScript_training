// Assignment 8: Typed Functions

// Write a function with required and optional parameters



// Define return types explicitly

// Create a small utility function that would exist in a real project

function sendEmail(sender: string , reciever: string , data? : string): void{
    console.log("seding email from " + sender + "to the " + reciever + data ? "data exist" + "data" : "no data");
}
// Write a function with one required and one optional parameter

// Call it with and without the optional argument

sendEmail("divy" , "dhruv" , "data is here")
sendEmail("divy" , "dhruv" )

// How does TypeScript enforce correctness here?