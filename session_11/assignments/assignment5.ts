// Assignment 5
// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.



const defaultUser = {
id: "0",
name: "Guest",
email: "guest@test.com",
role: "CUSTOMER",
isActive: false
}

type NewUser = {
id: string,
name: string,
email: string,
role: string,
isActive: false
}

// this will create new type which will be useful to create user with readonly each property

type readonlyUser = {
    readonly [k in keyof NewUser] : NewUser[k] 
} 

// this will create new type which will be useful to create user with  each property have string type 


type Stringified = {
    [k in keyof NewUser] : string
}


// this will create new type which will be useful to create user with  each property have string type 


type OptionalAndNullableUser = {
    [k in keyof NewUser]? : NewUser[k] | null
}