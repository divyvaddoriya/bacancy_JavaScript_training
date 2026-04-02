import { useReducer, useRef,  } from 'react'


// 6. **Self-study hooks (useRef, useReducer)**
    
//     Add these to your assignment: build at least one small example using**useRef**(e.g. focus an input, or store a value that doesn’t need to trigger re-renders) and one using**useReducer**(e.g. a simple counter or form with multiple fields). See the*Self-study: more hooks**section above for a short description of each.

type Value = "success" | "pending" | "failed"

type State = {
  value: Value
  message: string
  success: boolean
}


// in use reducer which state u pass as arguent is return from the reducer so its structure is not changed
// through action u can update the value
function reducer(state: State, action: Value) : State{

  switch (action) {

    case "success":
      return {
        value: "success",
        success: true,
        message: "your request is success"
      }

    case "pending":
      return {
        value: "pending",
        success: false,
        message: "your request is pending"
      }

    case "failed":
      return {
        value: "failed",
        success: false,
        message: "your request failed"
      }

    default:
      return state
  }
}

const initialState : State = {
  value: "pending",
  message: "",
  success: false
}

const Task6 = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const nameRef = useRef<HTMLInputElement| null>(null)

  return (
    <div>

      <button onClick={() => dispatch("success")}>
        success
      </button>

      <button onClick={() => dispatch("pending")}>
        pending
      </button>

      <button onClick={() => dispatch("failed")}>
        failed
      </button>

      <h3>Status: {state.value}</h3>
      <p>{state.message}</p>


        <input type="text" ref={nameRef} name='username' placeholder='username' />
        
    </div>
  )
}

export default Task6