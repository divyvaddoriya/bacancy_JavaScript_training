import React, { useState } from 'react'

const Todo = ({todo , dispatch}) => {

      const [open , setOpen] = useState<boolean>(false)
    const [msg , setMsg] = useState<string>(todo.data)


  return (
   <div>

<td>{todo.id}</td>
            <td style={{textDecoration:  todo.status === "completed"?  "line-through" : "none"}}>{todo.data}</td>
            <td>{todo.status}</td>
            <button disabled={open && status == "completed"} onClick={() => dispatch({type:"toggle" , payload: {id: todo.id , status: todo.status=="completed" ? "pending" : "completed" , data: todo.data}})}>{todo.status}</button> 
            <button >

            {
               todo.status =="pending" && open ? (
                    
                    <div>
                    <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='hi how are you'/>
                    <button  onClick={()=> {
 dispatch({type: "update" , payload: {id: todo.id , data: msg , status: todo.status}})
 setOpen(false)
 }} >update</button>
                    </div>

                ) : (
                    <button onClick={() => setOpen(true)}>
                        update
                    </button>
                )
            }

            </button>
            <button onClick={() => dispatch({type: "delete" , payload: todo})
            }>DELETE</button>
            </div>
  )
}

export default Todo