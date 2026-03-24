import React, { useEffect, useState } from 'react'

type FilterType = {
  currentSearchType  : "inputsearch" | "category" | "filtersearch",
  category : string ,
  filtersearch : {
    limit: number , 
    skip: number,
    sortBy: "price" | "rating"| "",
    order: "asc" | "desc" | ""
  }
}

const useDebounce = (value : string , delay : number) => {
  const [name , setName] = useState("")

  useEffect(() => {
   const timer =  setTimeout(() => {
setName(value)
    } , delay)

    return () => {
      clearTimeout(timer)
    }
  },[value , delay])
  return name
}

const OptimizedHome = () => {
  
  const [products , setProducts] = useState<any[]>([])
  const [category , setCategory] = useState<any[]>([])
  const [inputSearch , setInputSearch] = useState<string>("")
  const [filters , setFilters] = useState<FilterType>({
    currentSearchType: "filtersearch",
    category: "",
    filtersearch: {
      limit: 20,
      skip: 0,
      sortBy : "",
      order: ""
    }
  })
  const debouncedInput = useDebounce(inputSearch , 500)
  
  const changeUrl = (filters :FilterType) => {
    
    let dummy = "https://dummyjson.com/products"
    
    if(filters.currentSearchType == "category") {
      dummy += "/category/"
      dummy+= filters.category
    }
    
    if(filters.currentSearchType == "inputsearch"){
      dummy += `/search?q=${debouncedInput}`
    }

    if(filters.currentSearchType !== "inputsearch" )
        
      dummy+="?"
    else{
      dummy+="&"
    }
     dummy+= Object.entries(filters.filtersearch).filter(([_ , value]) =>  typeof value == "string" && value == ""  ? false : true ).map((arr) => arr.join("=")).join("&")

    console.log(filters)
    console.log(dummy)
    
    return dummy
  }

  const url = changeUrl(filters)

  useEffect(()=>{
   async  function fetchData  () {

      const data = await fetch(`https://dummyjson.com/products/category-list/`)

      const result = await data.json()

      setCategory(result)
  
    }

    fetchData()
  
  } , [])


  useEffect(
    ()=>{

      async function fetchData() {
        const data = await fetch(url)
        const result = await data.json()
        setProducts(result.products)
      }

      fetchData()

    } , [url , debouncedInput])

  

  return (
   
    <div>
<select name="Category" onChange={(e) => { 
  
  setFilters((prev) => ({...prev , currentSearchType: "category" , category:e.target.value} ))
  
   }} value={filters.category} id="categry">

{category?.map((categor) => {

return <option value={categor}>{categor}</option>
})
      
}

      

      </select>


<select name="Sorting By" onChange={(e) => setFilters((prev ) => { return {...prev , filtersearch : {...prev.filtersearch , sortBy: e.target.value  }}} )} value={filters.filtersearch.sortBy
} id="categry">

<option value={"price"}> price</option>
<option value={"rating"}>rating</option>

      </select>

  <button onClick={(e) =>{ setFilters((prev) => 
    ({...prev  , filtersearch : { ...prev.filtersearch , order:"asc" }}))}}>
    asc
    </button>
  <button onClick={ (e) => { setFilters((prev) => {  return  {...prev , filtersearch : { ...prev.filtersearch , order: "desc" }}})}}>desc</button>

    <input type="text" value={inputSearch} placeholder='search the product' onChange={(e) => {
      if(e.target.value !== ""){
        setFilters((prev) => ({...prev , currentSearchType:"inputsearch"}))
      }else{
        setFilters((prev) => ({...prev , currentSearchType:"filtersearch"}))
      }
      setInputSearch(e.target.value)
    } } /> 

    <div>{products.map((product) => (
      <div key={product.id} >
        <img src={product.thumbnail} width={'100px'} height={'100px'} alt="" />
        <div >
          {product.title}
        </div>
        <div>{product.description}</div>
        <div>{product.id}</div>
        <div>
          {product.category}
        </div>
      </div>
      
    ))}</div>

      <div>


      <button onClick={() => { setFilters((prev) => ({...prev, filtersearch : { ...prev.filtersearch , skip: prev.filtersearch.skip - prev.filtersearch.limit}}))}}  disabled={filters.filtersearch.skip==0}> prev </button>
      <button onClick={() =>{setFilters((prev) => ( {...prev, filtersearch : { ...prev.filtersearch , skip: prev.filtersearch.skip + prev.filtersearch.limit}} ))}}>next</button>

      <div>Current Page : {(filters.filtersearch.skip/filters.filtersearch.limit) + 1}</div>

      </div>

      {/* <select name="page no" onChange={(e)=> setPageNo(Number(e.target.value))} value={pageno} id="">

      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>

      </select> */}

    </div>
  )
}

export default OptimizedHome