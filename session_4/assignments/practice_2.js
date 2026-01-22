function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype; 

Dog.prototype.bark = function() {
    console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // Why does this happen?
// this happen because it is js prototype error like when we do 
// Dog.prototype = Animal.prototype; 
// it does not do dog inherits the animal but it does is like both dog and animal share the same prototype 


// cause when we write the following
// Dog.prototype = Animal.prototype;
// it also copies the constructor from animal to so the both constructor will points to the same animal
// to solve this write
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?