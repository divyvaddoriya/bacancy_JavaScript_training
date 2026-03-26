import React, { useReducer, useState } from 'react'
import Todo from './Todo'

type Todo = {
  id: number , 
  data : string , 
  status : "pending" | "completed" 
}


const App = () => {


  const initialstate : Todo[]= [] 

  function reducer(state : Todo[], action : {type: string , payload: Todo}){
      switch (action.type) {
        case "add":
          return [...state , action.payload]
       
        case "delete" : {
          return state.filter((todo) => todo.id !== action.payload.id)
        }
       
        case "update" : {
          const findTodo = state.find((todo) => todo.id === action.payload.id)
          
          if(findTodo){
            findTodo.data = action.payload.data
          }

          return [...state]
        }
         case "toggle" : {
          const findTodo = state.find((todo) => todo.id === action.payload.id)
          
            if(findTodo)
            findTodo.status = action.payload.status 
          console.log(state);
          console.log(findTodo);          
          return [...state]
          }

          default :
          return state
        }
        }

  

  const [state , dispatch] = useReducer(reducer , initialstate)
  const [msg , setMsg] = useState<string>("")

  return (
    <div>
      <input type="text" value={msg} placeholder='Add your Todo task' onChange={(e) => setMsg(e.target.value)}/>
      <button onClick={() => dispatch({type: "add" , payload: {id: Date.now() , data: msg , status: "pending"}})}> Add</button>


      <table style={{border: "1" , }}>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>STATUS</td>
            <td>UPDATE</td>
            <td>DELETE</td>
          </tr>
        </thead>
<tbody>


      {state?.map((todo) => (
<div key={todo.id}>
<Todo todo={todo} dispatch={dispatch} />
      </div>
      ))}
      </tbody>
      </table>
    </div>
  )
}

export default App