import  { useEffect, useState } from 'react'

const Task2 = () => {


    // question 2. **useEffect + cleanup**
    
    // Create a component that starts asetInterval`when it mounts, updates a counter every second, and clears the interval in a useEffect`cleanup. Unmount the component (e.g. toggle with a button) and confirm the interval stops (no console errors or extra ticks).

    const [count , setCount] = useState<number>(0)

    const [show , setShow] = useState<boolean>(true)

    console.log("re render")
    
    useEffect(()=>{
        
        console.log("use effect run")
        
        if(!show) return
        
        const timer = setInterval(()=>{
            setCount(count => count + 1)
        } , 1000)
        
        return ()=>{
            clearInterval(timer)
        }

    } ,[show])

    return (
    <div>
        <button onClick={()=> setShow(!show)}> hvgfhbjnkmlmjnhgvfhnjmkl,mjnhbgvfbhnjmk,mjnhbgvfhnjmk,mnjhbgvfbhnjmk,lkmnjhbgyvftvgyhujikojminhubgytfvgybtoggle counter</button>
        <h1>count: {count}</h1>
    </div>
  )
}

export default Task2