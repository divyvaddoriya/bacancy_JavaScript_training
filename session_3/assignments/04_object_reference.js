// Exercise 7: The "this" Detective

// Scenario: The code below is broken (it logs undefined).

// Explain why it fails.

// Fix it so it logs "Hello, Alex".

// JavaScript

// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();

// here greet is trying to access the name using the this key word so to access which will try to access it using global object because it is using arrow function if it uses the normal function it will not fail 

const user = {
    name: "Alex",
    greet : function ()  {
        console.log("Hello, " + this.name);
    }
};

user.greet();

// Exercise 8: The Safe Update

// Scenario: You need to update a user's theme setting without mutating the original object.

// Input:
// JavaScript
const settings = { theme: "light", notifications: true };


// Task:
// Create a new variable newSettings.
// Use the Spread Operator (...) to copy the properties from settings.
// Overwrite the theme to "dark" inside the new 
// object.
// Verify settings.theme is still "light" (Immutable Check).
const newSettings = {...settings , theme: "dark"}

console.log(settings.theme); //light

// Exercise 9

// Combine everything you learned into one function.

// Scenario: You have an inventory list.
// Filter out items that are out of stock (stock: 0).
// Map the remaining items to calculate their total value (price * stock).
// Reduce to find the total value of the entire inventory.

// Data:
// JavaScript

const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

// Expected Output: 5500

function inventory_list(inventory){

 return inventory.filter((i) => i['stock'] > 0).map((d) => ( {...d , totalValue : d['price']*d['stock'] })).reduce((acc , val) => {
        acc+=val['totalValue']
        return acc;
    } , 0)
    
}

console.log(inventory_list(inventory));
