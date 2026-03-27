// Create a variable prices as an array of numbers
// Write a function calculateTotal that:
// Accepts a number array
// Returns the total sum
// Write another function that:
// Accepts two numbers
// Returns a string if the result is greater than 100

let prices : number[] = [200 , 500 , 150]

function calculateTotal(arr: number[]) : number{

 let total : number = arr.reduce((acc, val) =>{
acc += val
return acc
    } , 0)

    return total
}

function sumOfTwo(a: number , b : number) : number | string {
    if(a + b >= 100 ) return "sum of number greater than 100"
    else
        return a + b
}
