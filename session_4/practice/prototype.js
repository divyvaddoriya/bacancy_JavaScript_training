// excersice - predict the output of the 
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  return `Hi, I am ${this.name}`;
};

const user1 = new User("Divy");
const user2 = new User("Ayush");

user1.sayHi = function (){
    return "hello"
}
// it just store all prototypes reference link here 
// so beacuse of which u dont add function to each object but just those who need to use it and because of which it becomes highly sufficiants
// console.log(user1.__proto__);

// console.log(user1.__proto__ === user2.__proto__);
// return true 
// cause it will store the same reference links in the object but when u try to use it it will create new object property for it so mutating that will not mutate whole thing

// javascript does what is that everytime there is new object it will have 


// excersice - 2

function Vehicle (make){
    this.make = make
}

Vehicle.prototype.start = function (){
    console.log(`${this.make} engine started`);
}

function Car(make , model) {
    Vehicle.call(this , make)
    this.model = model
}

Car.prototype = Object.create(Vehicle.prototype)

// here if we dont add this line it will point to the new Vehicle class cause we are assigning constructor from the vehicle also to the car 
//  so here we explicitly have to tell them that it still need to be pointed to the car ( constructor )
Car.prototype.constructor = Car

let c =new Car("toyota" , "elevander")
// c.start()



// concept - 2

// scenario - 1
// function Player() {}
// Player.prototype.inventory = []; // Array on the prototype

// const p1 = new Player();
// const p2 = new Player();

// p1.inventory.push("Sword");

// scenario - 2
// function Player() {
//   this.inventory = []; // Array in the constructor
// }

// const p1 = new Player();
// const p2 = new Player();

// p1.inventory.push("Sword");


// output in both case for p2.inventory will be different 



// special type of object in the javascript 

// null object 

// this all will have inner propertys which are inbuilt 
const obj = {}
const obj1 = new Object()

// this will create an object which have zero prototypes 
// it will create objec6 with zero prototype
const specialObj = Object.create(null)

// console.log(specialObj.toString());
// console.log(obj.toString());



// __proto__ vs prototype

function Person() {}
const p = new Person();

// here Person has the protoype 

// here p does not have the prototype it will show undefined

// Person.prototype: This is a property of the Function.
// p.__proto__: This is a property of the Instance. , it does link back to the main blueprint

function Users() {
  this.name = "Divy";
}

Users.prototype.isAdmin = false;

const me = new Users();


// it will check if name property is inside the me or not
console.log("name" in me);
console.log("isAdmin" in me);


// How do I write a check that returns true for name but false for isAdmin?

for(let i in me){
    if(me.hasOwnProperty(i)){
        console.log(i + " this property is of the object");
    }else{
        console.log(i + " class property");
    }
}


// excersice - 11 

function Counter(){
    this.count = 0
}

Counter.prototype.increment = function () {
    this.count++;
}

const c1 = new Counter()
const c2 = new Counter()

c1.increment()
// console.log(c1.count) // 1
// console.log(c2.count) // 0 

// cause here this will refer to individual and it will increment this of its own object 

// excersce - 12

function User2() {}
User2.prototype.points = 10;

const player1 = new User2();
const player2 = new User2();

// Here is the action:
player1.points = player1.points + 5;

console.log(player1.points); // 15
console.log(player2.points); // 10

// The Logic: When you ran player1.points = ..., JavaScript did a "get" (finding 10 on the prototype) and then a "set
// A "set" operation on an instance always creates the property on that instance. This is the definition of Shadowing



// theory in javascript 

let arr = ["divy" , "vaddoriya"]
let object = {
    name: "divy",
    city : "ahmedabad",
    getInfo : function (){
        console.log(this.name + " from " + this.city);
    }
}


function Animal(name) {
    this.name = name
}
function Dog (name) {
    this.name = name 
}


Dog.prototype = Animal.prototype


Dog.prototype.greet = () => {
    console.log("hello dog");
}
let a =new Animal("divy")
a.greet()