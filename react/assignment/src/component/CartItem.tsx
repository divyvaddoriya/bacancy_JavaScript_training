import React from 'react'


const CartItem =React.memo(({item , decreseQuantity , increaseQuantity , removeCartItem}) => {

    console.log("hi from cart");
    

  return (
   <div style={{border: "1px solid black" , overflowY:"auto"}} >
    <div>id : {item.id}</div>
    <div>title :{item.title}</div>
    <div>price: {item.price}</div>
    <div>stock : {item.stock}</div>
    <div style={{display:"flex" , alignContent:"center" , justifyContent:'center'}}>
    <button onClick={() => decreseQuantity(item.id)}>-</button>
    <div>quantity: {item.quantity}</div>
    <button onClick={() => increaseQuantity(item.id)}>+</button>
    </div>
    <button onClick={() => removeCartItem(item.id)}>remove Item</button>
  </div>
  )
})

export default CartItem