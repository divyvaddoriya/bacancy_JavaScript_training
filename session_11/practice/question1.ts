// Question 1 — Implement MyPartial<T>

// TypeScript already has Partial<T>.

// You must implement your own version.


type MyPartial<T> = {
    [k in keyof T] ?: T[k]
} 

type User = {
  id: string
  name: string
  age: number
}

type MyPartialUser = MyPartial<User> 
