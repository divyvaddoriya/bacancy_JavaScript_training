// Assignment 4
// Create a constant adminUser .
// Create a type from it using typeof .
// Add a new property and observe how the type changes automatically.


const AdminUser = {
    name: "divy",
    age: 18,
    email: "divy@gmail.com",
    permission: ['read' , 'write'],
    role: 'admin'
}


type AdminType = typeof AdminUser


// const AdminUser = {
//     name: "divy",
//     age: 18,
//     email: "divy@gmail.com",
//     permission: ['read' , 'write'],
//     role: 'admin'
//      password: "123456" 
// }

// the type will also change like this


// type AdminType = {
//     name: string;
//     age: number;
//     email: string;
//     permission: string[];
//     role: string;
    // password: string
// }
