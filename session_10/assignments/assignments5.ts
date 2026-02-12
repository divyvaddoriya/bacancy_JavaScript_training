
// Assignment 5: Type Aliases


type Order1 = {
orderId: number;
amount: number;
};

type Auditable1 = {
createdAt: Date;
createdBy: string;
};

type Intersection = Order1 & Auditable1;

// this is intersection 
// it will combine both type
const ex1 : Intersection = {
    orderId: 1,
    amount : 5,
    createdAt: new Date(),
    createdBy: "me"
}

type Union = Order1 | Auditable1


// this is what union is
// this will just give us option like either this or this 
const ex2 : Union = {
    orderId: 2,
    amount: 5,
}


// Create reusable aliases for union and intersection types

// Refactor earlier assignments to use these aliases


// Observe how readability improves
// Create a type alias for string | number
// Use it in two variables
// How does this improve readability?

type sn = string | number 

const i : sn = "Divy Vaddoriya"

const b : sn = 54

// because of this union we knoow that anny variable which have sn type will only have string or number as their type so it improve readability and we know that through this we can do this 


