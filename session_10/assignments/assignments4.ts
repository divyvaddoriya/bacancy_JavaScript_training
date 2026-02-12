// Assignment 4: Intersection Types

// Create an Order using intersection ( & )

type OrderBase = {
orderId: number;
amount: number;
};

type Auditable = {
createdAt: Date;
createdBy: string;
};

type Order = OrderBase & Auditable;

// Create the same model using interfaces and extends

interface BaseOrder {
orderId: number;
amount: number;
}

interface AuditedOrder extends BaseOrder {
createdAt: Date;
createdBy: string;
}

// Remove one required property and observe the compiler error

// Decide which approach feels clearer and why

// Create two small object types and combine them using intersection ( & )

// Create the same structure using interfaces and extends

// Try removing a required property and observe the compiler error

// Identify when intersection is better than union


// interface are better when u have big application and u want to use declaration merging 

// interface will define the contracts 
// type will define the objects

// in interface u can not define union properly 
// in type u can use | or &




// Use interface when:
// Defining the shape of an object or public API for a library, allowing others to extend it via declaration merging.


// Use type when:
// Defining union types (e.g., type Status = 'success' | 'error').
// Creating complex types using mapped types, conditional types, or tuples.