import { useEffect, useState } from "react";

// export function useDebounce(fn , delay){

//     const [name,setName]=useState("");
//     console.log("debounce run");

//     useEffect(()=>{
//         const timer = setTimeout(()=>{
//             fn(name)
//         }, delay)
//        return () => clearTimeout(timer)
//     },[name, delay , fn])

//     return [name,setName];
// }
export function useDebounce(fn ,params , delay){

    const [name,setName]=useState("");
    console.log("debounce run");

    useEffect(()=>{
        const timer = setTimeout(()=>{
            fn(params)
        }, delay)
       return () => clearTimeout(timer)
    },[name, delay , params  , fn])

    return [name,setName];
}
export function useDebounceValue(value , delay) {
    const [name , setName] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => setName(value), delay)
        return ()=>{
            clearTimeout(timer)
        }
    } , [value , delay])
    return [name , setName]
}
// export function useThrottle(fn ,flag , delay){
//     const [name,setName]=useState("");
//     // const [flag,setFlag]=useState(false);
//     console.log("throttle run");

//     let flag = false;
    
//     if(flag) return 
        
//     flag = true;
    
//     setTimeout(() => {
//         flag = false
//         fn(name)
//     }, delay)

//     return [name,setName];
// }