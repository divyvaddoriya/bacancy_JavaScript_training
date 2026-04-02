import { createContext, useContext } from "react"

export type User = {
  name: string
  age: number
  email: string
}

export const userContext = createContext<User | null>(null)

export function useUserContext(){
    
  const user = useContext(userContext)

    if(user){
      return user
    }
    else{
      throw new Error("user does not exist")
    }
  
}