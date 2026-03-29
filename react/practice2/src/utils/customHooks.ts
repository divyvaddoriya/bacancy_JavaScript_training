import { use, useEffect, useRef, useState } from "react"

const useAuth = () => {
    const [user , setUser] = useState({
        name: "divy",
        age: 20 , 
        role : "admin"
    })

    return {user , setUser }
}

const useFetch = (url : string) => {
 
    const [data , setData] = useState(null)
    const [error , setError] = useState(null)

    useEffect(()=>{

        const fetchData = async () => {
            
    try {
        
        const data = await fetch(url)
        const result = await data.json()
        
        setData(result)

    } catch (error : any) {
       setError(error.message)
    }
        }

        fetchData()

    } , [url])

    return {data , error}
}

const useDebounce = (value , delay) => {
    const [name , setName] = useState(value)

    useEffect(() => {

        const timer = setTimeout(()=>{
            setName(value)
        }, delay)

        return ()=>{
            clearTimeout(timer)
        }
    } , [value , delay])
    return name
}

const useThrottle = (value , delay : number ) => {

    const [name , setName] = useState("")
    const lastUser = useRef<number>(0)
    const timeRef = useRef<any>(null)


    useEffect(() => {

        if(Number(Date.now - lastUser.current) >= delay ) {
            setName(value)
            lastUser.current  = Date.now()
        }else{

            if(timeRef.current){
                clearTimeout(timeRef.current)
            }

         timeRef.current =  setTimeout(()=> {
                setName(value)
                lastUser.current  = Date.now()
            } , lastUser.current + delay - Date.now())
        }

    } , [value , delay])

    return name

}

export { useAuth , useFetch}