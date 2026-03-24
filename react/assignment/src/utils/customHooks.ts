import { useEffect , useState } from "react"


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

export {useFetch}