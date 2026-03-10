import { useAuth } from "./utils/AuthContext"


const App = () => {
 
  const user = useAuth()

  console.log(user);
  
  return (
    <div>
    {user.name}
    {user.role}      
    </div>
  )
}

export default App