import React, { useEffect, useState } from 'react'
import Product from '../component/Product'

const InfinteScrolling = () => {

    const [products , setProducts] = useState<any[]>([])
 
    useEffect(() => {
        async function fetchData() {
            const data = await fetch("https://dummyjson.com/products")

            const result = await data.json()

            setProducts(result.products)
        }    
        fetchData()
} , [])



  return (
    <div style={{display: "flex" , justifyContent: "space-between" , flexWrap: "wrap", gap:"15px" }}>
        
    {products.map((product) => (
        <Product product = {product}/>
    ))}

    </div>
  )
}

export default InfinteScrolling