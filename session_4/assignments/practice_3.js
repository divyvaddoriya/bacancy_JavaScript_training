function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");
// console.log(myPhone);

console.log(myPhone.brand);    // generic 
console.log(myPhone.getBrand); // undefined

// When a function is called with new:

// A new object is created.

// Its internal [[Prototype]] is set to the constructor’s prototype.

// this is bound to that new object.

// The function body executes.

// If the constructor explicitly returns an object (non-primitive), that object becomes the result of new. Otherwise, the newly created object (this) is returned.

// because function returns the object it will completely lost the prototype method and it will be replaced by the new objects
