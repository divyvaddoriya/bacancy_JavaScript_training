// Assignment 4

// Create abstract class Service<T> with abstract method execute() .

// Extend it with UserService .


abstract class Service<T> {
    abstract execute(name: string , id : number ) : T 
}

class UserService extends Service<string>{

    execute(name: string, id: number): string {
        return `the name of the use is ${name} and id is ${id}`
    }

}

let newUser = new UserService()

console.log(newUser.execute("divy" , 20))