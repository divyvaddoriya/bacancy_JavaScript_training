// Assignment 9: Access Modifiers
// Create a service class exposing only required public methods

class BankService {
  private balance: number = 0;   // internal data

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}



// Keep internal data private
// Explain which members should be accessible and why

// balance is privatr cannot be accessed outside the class 
// deposit () and getBalance() are public required user to access 

// Create a class with public, private, and protected members

class Example {
    
  public publicVar: string = "Public";
  protected protectedVar: string = "Protected";
  private privateVar: string = "Private";

  public publicMethod() {
    console.log("Public method");
  }

  protected protectedMethod() {
    console.log("Protected method");
  }

  private privateMethod() {
    console.log("Private method" + this.privateVar);
  }
}

const obj = new Example();

console.log(obj.publicVar);

obj.publicMethod();        

// Try accessing them outside the class

// Which members should be exposed and why?
// here only the public method and var will be accessible outside of the class cause they are public 
//  protected can be only used inside the other extended class and 
// private can be only accessed within the 