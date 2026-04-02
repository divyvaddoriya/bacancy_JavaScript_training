// import Task1 from './components/Task1'
// import Task2 from './components/Task2'
// import Task3 from './components/Task3'
// import Task4 from './components/Task4'
// import Task5 from './components/Task5'
import Task6 from './components/Task6'
import { userContext, type User } from './components/context'

const App = () => {

const user : User  = {
  name: "Divy Vaddoriya",
  age: 20,
  email: "divy@gmail.com"
}


  return (
<userContext.Provider value={user}>
<div>
{/* <Task1 />
<Task2 />
<Task3 /> */}
{/* <Task4 /> */}
    {/* <Task5 /> */}
<Task6 />
    </div>
</userContext.Provider>
  )
}

export default App