
// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties
// Write a function that accepts BaseUser
// Pass both Admin and Customer objects to the function

interface Person {
    name : string,
    age: number,
    hobby: string[],
}

interface Admin1 extends Person {
    role : "Admin",
    totalCustomers: number,
    totalOrder: number
}

interface Customer1 extends Person {
    role : "Customer",
    order: string,
    quantity: number
}

type BaseUser = Admin1 | Customer1

function checkUser(user : BaseUser){
    if(user.role === "Admin"){
        console.log("this is Admin");
        console.log(user.totalCustomers + "total customer")
        console.log(user.totalOrder + "total orders")
    } else {
        console.log("this is customer")
        console.log("I have ordered this order "+ user.order);
        console.log("I have ordered this much Quantity "+ user.quantity);
        
    }
}

const p1 : Admin1= {
    role: "Admin",
    name: "p1",
    age: 15,
    hobby: ["reading"],
    totalCustomers: 5,
    totalOrder:10
} 
const p2 : Customer1= {
    role: "Customer",
    name: "p1",
    age: 15,
    hobby: ["reading"],
    order: "laptop",
    quantity: 2
} 

checkUser(p1)
checkUser(p2)


// Design an interface for an API response object
// Create a function that accepts this interface as a parameter
// Extend the interface and reuse it

interface ApiResponse {
    data : string,
    status : number,
    error ?: string,
    statusCode: number

}

function checkResponse(res: ApiResponse){
    if(res.error){
        console.log("there has been error in the " + res.error)
        console.log("your response come with the  this status code " + res.statusCode)
    }else{
        console.log("your api response is successfully");
        console.log(res.data);
        console.log("statuse code"+res.statusCode);
        
    }

}


// Create an interface for a Product
// Create a variable that follows this interface

interface Product {
    name: string,
    quantity: number ,
    description : string, 
    review: string[],
    rating: number,
    orderTillNow: number,
    specifications: string[]
}

const product1 : Product= {
    name: "laptop",
    quantity: 4 ,
    description: "this is laptop",
    review: ["good" , "excellent"],
    rating: 3.7,
    orderTillNow: 5,
    specifications: ["8 GB ram", "512 GB storage"],
} 

// Why are interfaces preferred in large projects?

// interface is prefered in large project cause they give them the declaration merging feature through which they can extend the interface which is already existing with out addind any extra type 