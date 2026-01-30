class Counter {

  static count = 0; 
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();


//  it will get the variable directly from the 10 
console.log(c1.getCount());  // 10

// it will access the static variable of the class and not the other variable declared to object and each time the constructor is called it will update the static value
console.log(Counter.getStaticCount()); // 2


// static function is called only with the class and not with the object so it will show the it is not a function error
console.log(c1.getStaticCount());  // it is not a function 
