// Assignment 1

// Create a type IsNumber<T> .
// Create a type ExtractEmail<T> that extracts email type if present.


type isNumber<T> = T extends number ? true : false


// here x will infer value false

// this will throw error like true is not assignable to false
// let x : isNumber<string> = true
let x : isNumber<string> = false



type ExtractEmail<T> = T extends {email : infer U} ? U : never


type EmailContainer = {
    id: string , 
    email: string
}

// THIS WILL INFER EMAILS TYPE FROM EMAIL CONTAINER

// which is string 
type newEmail = ExtractEmail<EmailContainer>