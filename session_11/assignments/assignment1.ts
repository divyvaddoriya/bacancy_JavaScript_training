// Assignment 1
// Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.
// Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number


function wrapInArray<T>( x:T ) : T[]{
    return [x]
}

console.log(wrapInArray<String>("string"))
console.log(wrapInArray<Number>(5))

interface PaginatedResponse<T> {
    items: T[]
    number: number
}


const stringResponse : PaginatedResponse<String>= {
    items: ["first "],
    number: 1
} 


const numberResponse : PaginatedResponse<number> = {
    items: [1],
    number: 1
}
