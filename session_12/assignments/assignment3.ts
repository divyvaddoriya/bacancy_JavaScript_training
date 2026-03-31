// Assignment 3

// Create overloads for a function format that:

// Accepts number → returns string

// Accepts Date → returns string

function formatter(a : number) : string
function formatter(a : Date) : string;
function formatter(a : number | Date) : string {
    return "params will be converted to string"
}


// now formatter is the constructor function which accept both number and date as an argument

formatter(5)

formatter(new Date("5-4-25"))


// ḥere beacause it is having same return type we can just write the union 

function formatter2(a : number| Date) : string {
    return "this is second formatter which returns the string"
}
