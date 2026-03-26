// Assignment 2
// Create a function activateUser that accepts only objects having isActive: boolean .
// Create another function that requires both id and email .
// Try passing invalid objects and observe TypeScript errors.


function activateUser<T extends {isActive: boolean}>(x : T){
    console.log("this object is accepting with isActive" , x)
}

function activateUserUsingIDandEmail<T extends {id :number, email:string }>(x : T){
    console.log("this object is accepting object with only id and email " , x)
}

// assignments/assignment2.ts:10:15 - error TS2353: Object literal may only specify known properties, and 'namee' does not exist in type '{ isActive: boolean; }'.

// activateUser({namee: "divy"})
activateUser({name: "divy" , isActive: true})

activateUserUsingIDandEmail({name: "divy" ,id: 4,email:"divy@gmail.com", isActive: true})
