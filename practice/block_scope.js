var a = 100
{
    // compond statement 
    var a = 10; //global scope
    console.log(a);
    
    let b = 20; // block scope
    const c = 30; //block scope

}

console.log(a); // 10
console.log(b);
console.log(c);