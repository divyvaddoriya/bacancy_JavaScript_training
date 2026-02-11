// Q1. Simple Object Context

const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};

const myBrand = laptop.getBrand();

// console.log(myBrand); // "DELL"

// the funcition depend on how it is called here it is called with laptop object so output will be 



// Q2. Basic Promise Flow



// console.log(1);

Promise.resolve().then(() => {
    // console.log(2);
});

// console.log(3);

// promise will go into the micro task when exected synchronously 

// output : 1 , 3 ,2


// Q3. The Broken Chain


// Promise.reject("Error Occurred")
    // .then(() => console.log("Success"))
    // .catch((err) => console.log(err));

    // here reject will send the data in the "Error Occurred"




// Q4. Global vs. Local Scope



var status = "Offline";


const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};


// console.log(server.getStatus()); // online
//  here it is just calling the range 


//  q5 - math in promises

Promise.resolve(10)
    .then((num) => num * 2)
    // .then((result) => console.log(result));
// 200

// Q6. The "Lost" Context


const user = {
    name: "Alex",
    printName() {
        // console.log(this.name);
    }
};

const print = user.printName;
print(); // undefined
// it will give undefined 
// cause  normal function see how and where it is called , so it will be undefined


// Q7. Event Loop Basic Race

// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End")

// start , end , promise , timeout


// Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        // console.log(this.title);
    }
};

group.getTitle(); // undefined
//  it arrow function see the outer function scope for this evaluation 
//  so for outer there are no outer scope so it will see global scope


// Q 9. Chaining Returns


 Promise.resolve(5)
    .then((val) => {
        // console.log(val); // 5
        return val + 5;
    })
    // .then((val) => console.log(val)); // 10


// Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        // console.log(err); // fail
        return "Recovered";
    })
    // .then((res) => console.log(res)); // recoverd


// Q11. The Nested Timeout

// console.log('A');

setTimeout(() => {
    // console.log('B');
}, 0);

Promise.resolve().then(() => {
    // console.log('C');
    // Promise.resolve().then(() => console.log('D'));
});

// console.log('E');

// A , E , C , D , B 

// Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    // console.log(this.id);
}

showId.call(agent); // 101 
showId.apply(null); //undefined



// Q13. Promise.all Failure

// Promise.all([
//     Promise.resolve("Success 1"),
//     Promise.reject("Error 1"),
//     Promise.resolve("Success 2")
// ])
// .then(res => console.log("Result:", res))
// .catch(err => console.log("Caught:", err));

// it will print "caught : error 1"

// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            // console.log(this.score);
        }, 100);
    }
};

player.updateScore(); // undefined

// Q15. Throwing Inside a Chain


Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        // console.log("Caught Error");
        return 10;
    })
    // .then(x => console.log(x));

// output :
// "caught error"
// "10"


// Q16. Async Function Order

async function foo() {
    // console.log("A");
    await Promise.resolve();
    // console.log("B");
}

// console.log("C");
foo();
// console.log("D");

//  c , a , d , b 


// Q - 17 


// Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        // console.log("Cleanup");
        return "Modified?";
    })
    // .then(res => console.log(res));
// "cleanup" 
// "done"


// Q18. Variable Hoisting & Promises

// console.log(a); // undefined

var a = 5;

Promise.resolve().then(() => {
    // console.log(a); // 10
});

a = 10;




// Q19. Microtask vs Macrotask Interleaving



setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

// output 

// end , p1 , p2 , t1 , t2



// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");

const p = m.print;

p(); // sarah