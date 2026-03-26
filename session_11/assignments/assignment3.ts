// Assignment 3
// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.

function updateField<T , k extends keyof T>(object :T , key : k , value : T[k]){
    object[key] = value
    return object
}

type User = {
    fullname: string
    age: number
}

const user : User = {
    fullname: "divy",
    age: 18
}


// Argument of type '"name124"' is not assignable to parameter of type 'keyof User'.ts(2345)
// ⚠ Error (TS2345)  | 

// Argument of type 
//  is not assignable to parameter of type 
//  . 

// updateField(user , "name124" , "hi")



// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// ⚠ Error (TS2345)  | 

// Argument of type 
//  is not assignable to parameter of type 


// updateField(user , "fullname" , 18)


updateField(user , "fullname" , "new name")
