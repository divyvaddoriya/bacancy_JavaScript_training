// // questio - 1


// function deepClone(obj) {
//     if(obj === null || typeof obj !== "object" ) return obj;

//     if(Array.isArray(obj)) {
//         let y = []
//         let len = obj.length
//         for(let i = 0 ; i < len ; i++ ){
//             y[i] = deepClone(obj[i]);
//         }
//         return y;
//     }

//     let y = {}
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             y[key] = deepClone(obj[key])
//         }
//     }
//     return y;
// }

// //  excersise - 2

// function greet(name) {
//   console.log("Hello", name);
// }

// function debounce(fn, delay) {
//     let timer;

//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => fn.apply(this, args), delay);
//     };
// }


// const debouncedGreet = debounce(greet, 1000);


// debouncedGreet("Divy");
// debouncedGreet("Divy");
// debouncedGreet("Divy");

// // excersice - 3

// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 20 },
//   { name: "C", age: 21 },
//   { name: "D", age: 22 },
//   { name: "E", age: 21 }
// ];

// function groupBy(users , elem){

//     let x = users.reduce((acc , val) => {
//         if(!acc[val[elem]]) {
//             acc[val[elem]] = []
//         }
//         acc[val[elem]].push(val) 
//         return acc
//     } , {})
//     return x;
// }

// console.log(groupBy(users , "age"))


// excersice - 4

function greet(name) {
  console.log("Hello", name);
}


function once(fn) {
    let time = 0;
    return function  (...args) {
        if(time !== 0) return;
        else {
            time++;
            return fn.apply(this , args)
        }
    }
}

const greetOnce = once(greet);


greetOnce("Divy");   // should print: Hello Divy
greetOnce("World");  // should NOT print anything
greetOnce("JS");     // should NOT print anything



// // excersce - 5 

// // function add(a){
// //     return function (b){
// //         return function(c){
// //             return a + b + c
// //         }
// //     }
// // }

// function add(...args) {
//     if(args.length >= 3) {
//         return args.slice(0,3).reduce((acc , val)=>{
//             acc+=val
//             return acc;
//         } , 0)
//     }

//     return function ( ...next) {
//         return add(...args , ...next)
//     }

// }

// console.log(add(2)(3)(5));
// console.log(add(2,3)(5));


// excersice -6

// function myPromiseAll(args){
//     let resolved = []
//     let rejected = []
    
//     args.map((p) => p.then((e) => resolved.push(e) ).catch((e) => rejected.push(e)) )

//     if(rejected.length !== 0 ) return  Promise.reject("not")
//     else 
//     return  Promise.resolve(resolved)
// }

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.reject(3);

// myPromiseAll([p1, p2, p3])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));


// function myPromiseAll(promises) {
//     return new Promise((resolve, reject) => {

//         if (promises.length === 0) {
//             resolve([]);
//             return;
//         }

//         const results = [];
//         let completed = 0;

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//                 .then(value => {
//                     results[index] = value;
//                     completed++;

//                     if (completed === promises.length) {
//                         resolve(results);
//                     }
//                 })
//                 .catch(error => {
//                     reject(error);
//                 });
//         });

//     });
// }


class BankAccount{

    #initialBalance;

    constructor(accountHolder , balance){
            this.accountHolder = accountHolder
            this.#initialBalance = balance
    }

    deposit(amount){
        if(amount < 0) throw new Error("amount must be positive")
        this.#initialBalance += amount
        return this.#initialBalance; 
    }

    withdraw(amount) {
        if(amount > this.#initialBalance) throw new Error("u cant withdraw more than acctual balance")

        this.#initialBalance -= amount;
        return this.#initialBalance;
    }

    getBalance(){
        return this.#initialBalance
    }

    transfer(amount , otherAccount){
            if(amount > this.getBalance()) throw new Error("u cant transfer more than u have in your account")

            this.withdraw(amount)
            otherAccount.deposit(amount)
        return "transfer success"
}

}

const acc1 = new BankAccount("Divy", 1000);
const acc2 = new BankAccount("Alex", 500);

acc1.deposit(200);
// acc1.withdraw(300);
acc1.transfer(200, acc2);

console.log(acc1.getBalance());
console.log(acc2.getBalance());
