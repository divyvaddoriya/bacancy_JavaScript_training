// Assignment 5

// Create a constructor type for UserRepository .

// Create a callable type that formats User name.


// this callable function which is function with some parameters

type UserRepository = {
    (name: string) : string,
    age: number,
    isActive : boolean
}

const userRepo  : UserRepository = (name: string) => name.trim().toUpperCase()

userRepo.age = 20
userRepo.isActive = true

