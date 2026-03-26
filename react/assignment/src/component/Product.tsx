import React, { useContext } from 'react'
import { cartcontext } from '../utils/context';

const Product =React.memo(({product , addTocart , isAlreadyInCart , decreaseQunatity , increaseQuantity}) => {
  
    const {id , title , desctiption , category ,images, price , rating , stock} = product 
    console.log(
      "hi"
    );    


    return (
    <div style={{display: "flex" , flexDirection: "column" , alignContent: "center" , justifyContent: "center" , border:"1px solid white" , padding: "15px"}}>

        <div> ID :{id}</div>
        <div>TITLE : {title}</div>

        <img src={images[0]} width={"250px"} height={"250px"} alt="" />

        <div> DESCRIPTION {desctiption}</div>
        <div>CATEGORY {category}</div>
        <div>PRICE : {price}</div>
        <div>RATING : {rating}</div>
        <div>STOCK : {stock}</div>

        {!isAlreadyInCart ? 
        <button onClick={() => 
          addTocart({...product , quantity : 1})}>Add to Cart</button>
          : <div style={{display: "flex" , alignItems:"center", justifyContent:"center"}}>

  <button onClick={()=>decreaseQunatity(id)}>-</button>

  <div>{isAlreadyInCart.quantity}</div>

  <button onClick={()=>increaseQuantity(id)}>+</button>

</div>
      }
    </div>
  )
})

export default Product