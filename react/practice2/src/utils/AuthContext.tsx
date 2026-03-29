import { createContext, useState } from "react"

type AuthContextType = {
  user: string , 
  setUser :  React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<AuthContextType | null>(null)


export default function AuthProvider({children} : {children : React.ReactElement}){
 
    const  [user , setUser] = useState<string>("")

  return <AuthContext.Provider value={{user , setUser}}>
        {children}
  </AuthContext.Provider>

}

export { AuthContext }

