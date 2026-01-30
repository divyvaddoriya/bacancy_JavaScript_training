//  assignment - 1

let n = 4 ;
const check_number = (n) => {
    if(n === 0) return "zero"
    else if(n < 0) return "negative"
    else return "positive"
}
console.log(check_number());

// assignment -2 

const print_even_odd_range = () => 
    {
    for(let i =1  ; i <= 20 ; i++) console.log( i , "->",  i%2 === 0 ? "even" : "odd"); 

}

// assignment - 3 

const check_role = (role) => {
    // switch(role) {
    //     case "ADMIN" : console.log("FULL ACCESS"); break;
    //     case "USER" : console.log("LIMITED ACCESS"); break;
    //     case "MANAGER" : console.log("MODERATE ACEESS"); break;
    //     default : console.log("INVALID ROLE"); break;
    // }

    let roles = {
        "ADMIN" : "FULL ACCESSS",
        "USER" : "LIMITED ACCESSS",
        "MANAGER" : "MODERATE ACCESSS",
        "DEFAULT" : "INVALID ROLE"
    }

    return roles[role];
}

console.log(check_role("ADMIN"));

// assignment - 4 

const calculateTotalPrice = (price , quantity) => {
    return price*quantity;
}

// assignment - 5 

const applyCoupon = (amount , couponCode) => {
    switch (couponCode) {
        case "SAVE10" : return amount - amount*0.10;
        case "SAVE20" : return amount - amount*0.20;
        case "NONE" : return amount ;
        default : return amount;
    }
}

