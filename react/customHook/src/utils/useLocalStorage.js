// export function useLocalStorage(key , value){
//      localStorage.setItem(key , value)
//     return function (){
//         return localStorage.getItem(key)
//     }
// }

import { useEffect, useState } from "react"


// how to use the custom debounce and how to create based on two values 

export function useLocalStorage(key , initValue){

    const [value , setValue] = useState(localStorage.getItem(key) | initValue)

    useEffect(()=>{
        localStorage.setItem(value)
    },[value])
    
    return {value , setValue}
}
