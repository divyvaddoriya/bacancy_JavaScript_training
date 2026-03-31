// Assignment 2

// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .


type FirstArgument<T> = T extends ( A : infer U , ...args : any []) => any  ? U : never


type FunctionWithIdandActive = (id: number , active: boolean) => any


let a : FirstArgument<FunctionWithIdandActive> = 5
