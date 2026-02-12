// Assignment 3: Union Types

// Add one more role (e.g. Guest ) to the User union
type Admin = {
role: 'admin';
permissions: string[];
};

interface AdminInterface {
    role: 'admin';
    permissions: string[];
}

type Customer = {
role: 'customer';
purchaseHistory: number[];
};

interface CustomerInterface {
    role: 'customer';
    purchaseHistory: number[];
}

type Guest = {
    role: "guest",
    poducts: "laptop"
}

type User = Admin | Customer | Guest; 

type UserInterFace = AdminInterface | CustomerInterface

// Write a function that accepts User

// Use the role field to safely narrow the type

function check(user: User) {
    if(user.role === "admin"){
        console.log(user.permissions)
    }
    else if(user.role === "customer"){
        console.log(user.purchaseHistory)
    }
    else{
        console.log(user.poducts)
    }
}
function checkInterface(user: UserInterFace) {
    
    if(user.role === "admin"){
    
        console.log(user.permissions)
    
    }
    
    else {
    
        console.log(user.purchaseHistory)
    
    }
}

// Observe how TypeScript prevents invalid property access

// Create a union type for two different user roles using type

// Create another union using two interfaces

// Write a function that accepts the union and narrows the type safely