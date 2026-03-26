import { useDebounce, useThrottle } from './utils/useDebounce'

const App = () => {

  // const {value , setValue} = useLocalStorage("page1" , "divy")
  const [name , setName] = useThrottle(fetchData , 2000);
  

  function fetchData (name) {
    console.log("fetch data called");
    setTimeout(()=>{
      console.log(name)
      // fetching data 
    },1000)
}


return (

    <div>

    <input type="text" value={name} onChange={(e)=>{
setName(e.target.value)
    }} />
    <div>{name}</div>
    
    </div> 
)
}

export default App