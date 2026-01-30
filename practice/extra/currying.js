// currying

function sum(a){
   return function (b){
    if(b !== undefined) 
        return sum(a + b);
    return a;
}
}

console.log(sum(1)(2)(3)())

// prototype

Array.prototype.myMap = function(callback) {
  // 1. Create a new array to hold the results
  const newArray = [];

  // 2. Iterate over 'this' (which refers to the array calling the method)
  for (let i = 0; i < this.length; i++) {
    // 3. Execute the callback for each element
    // Standard map passes: current element, index, and the full array
    const result = callback(this[i], i, this);
    
    // 4. Push the result to the new array
    newArray.push(result);
  }

  // 5. Return the new array
  return newArray;
};

// exection order

console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// 1 & 4 are synchronous, so they run immediately.

// 3 (Promise) goes into the Microtask Queue.

// 2 (setTimeout) goes into the Macrotask (Task) Queue.

// The Event Loop always clears the Microtask Queue completely before moving on to the next Macrotask.


function* idGenrator(){
    let id = 1;

    while(true){
        yield id;
        id+=1;
    }
}

let gene = idGenrator()
console.log(gene.next());
console.log(gene.next());
console.log(gene.next());


// convert es6 into es5 

function Dog(name) {
    this.name = name;
    return this
}

function guardDog(name){
    this.name = name
}


Dog.prototype.bark = function(){
    console.log(this.name  + 'says woof' );
}

guardDog.prototype = Dog.prototype

guardDog.prototype.attack = function(){
    console.log(this.name + 'attacks');
}

let d1 =new Dog("buddy")
let d2 = new guardDog("hello")
d2.bark()
d2.attack()