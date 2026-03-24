import React, { useEffect, useState } from 'react'

const Home = ( ) => {

  const [page , setPage] = useState(1)
  const [searchInput , setSearchInput] = useState<string>("")

  const [products , setProducts] = useState<any | [] > ([])

  const [sortOn , setSortOn] = useState("price")
  const [sort , setSort] = useState("asc")

  const [category , setCategory] = useState<any | []>([])

  const [currentCategory , setCurrentCategory] = useState<string>("beauty")

  useEffect(() => {

    if(searchInput != "") return ;

 async  function fetchData  () {

      const data = await fetch(`https://dummyjson.com/products?limit=${10}&skip=${(page - 1)*10}&sortBy=${sortOn}&order=${sort}`)

      const result = await data.json()

      setProducts(result.products)
  console.log(result);
  
    }

    fetchData()
  
  }, [page , searchInput, sort , sortOn])

  useEffect(() => {

 async  function fetchData  () {

 
  if(searchInput === "") return ;

      const data = await fetch(`https://dummyjson.com/products/search?q=${searchInput}`)

      const result = await data.json()

      setProducts(result.products)
    }
    fetchData()
  
  } , [searchInput])


  useEffect(() => {

 async  function fetchData  () {

      const data = await fetch(`https://dummyjson.com/products/category-list/`)

      const result = await data.json()

      setCategory(result)
  
    }

    fetchData()
  
  } , [])

  useEffect(() => {

 async  function fetchData  () {

      const data = await fetch(`https://dummyjson.com/products/category/${currentCategory}`)

      const result = await data.json()

      setProducts(result.products)
      console.log(result);
  
    }
    fetchData()
  
  } , [currentCategory])

  return (

    <div>
<select name="page no" onChange={(e)=> setCurrentCategory(e.target.value)} value={currentCategory} id="categry">

{category?.map((categor) => {

return <option value={categor}>{categor}</option>
})
      
}

      

      </select>


<select name="Sorting By" onChange={(e)=> setSortOn(e.target.value)} value={sortOn} id="categry">

<option value={"price"}>price</option>
<option value={"rating"}>rating</option>

      </select>

  <button onClick={() => setSort("asc")}>asc</button>
  <button onClick={() =>setSort("desc")}>desc</button>


    <input type="text" placeholder='search the product' onChange={(e) => setSearchInput(e.target.value)} /> 

    

    <div>{products.map((product) => (
      <div key={product.id} >
        <img src={product.thumbnail} width={'100px'} height={'100px'} alt="" />
        <div >
          {product.title}
        </div>
        <div>
          {product.category}
        </div>
      </div>
      
    ))}</div>

      <div>


      <button onClick={() => setPage(prev => prev - 1)}>prev</button>

      <div>Current Page : {page}</div>

       <button onClick={() => setPage(prev => prev + 1)}>next</button>

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

export default Home