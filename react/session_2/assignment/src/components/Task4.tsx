
import { useUserContext } from './context'

const Task4 = () => {

    // question 4. **useContext**
    
    // In the sandbox, add a context (e.g.`ThemeContext`or`UserContext`), wrap part of the app in a Provider, and build a child component that reads the value with useContext and displays it (e.g. theme name or user name).

  const user = useUserContext()

  return (
    <div>
        <div>{user?.age}</div>
        <div>{user?.name}</div>
        <div>{user?.email}</div>
    </div>
  )
}

export default Task4