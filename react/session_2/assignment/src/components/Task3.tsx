import  { useEffect, useState } from 'react'

const Task3 = () => {


    // question 3. **useEffect dependency**
    
    // Build a small “user by ID” viewer: one state for`userId`, one for`user`. Use`useEffect`to fetch when`userId`changes. Include cleanup so that if the request finishes after`userId`changed or the component unmounted, you don’t call`setUser`.

    type User = {
        name: string,
        age : number
    }

    const [user , setUser] = useState<User | null>(null)
    const [userId , setUserId] = useState<number>(1)


    useEffect(()=>{
                
        async function fetchData(){
            
            const data = await fetch(`https://dummyjson.com/user/${userId}`)
            const result = await data.json()
            setUser({name: result.firstName , age: result.age})
        }

        fetchData()

    }, [userId])  

  return (
    <div>
      
        <input type="number" value={userId} onChange={(e) => setUserId(Number(e.target.value))} />

        <div>
            name : {user?.name}
        </div>
        <div>
        age : {user?.age}
        </div>
    </div>
  )
}

export default Task3