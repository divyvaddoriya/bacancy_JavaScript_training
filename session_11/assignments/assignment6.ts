// Assignment 6

// Create a type UserPublicProfile without email and isActive .
// Create a Record that maps user IDs (string) to User objects.


type User1 =  {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}


type UserPublicProfile = Omit<User1 , "email" |"isActive">


type mappingIDsTOUseObject = Record<User1["id"] , User1>