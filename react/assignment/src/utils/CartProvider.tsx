import React, { createContext, useCallback, useState } from "react";
import { cartcontext } from "./context";
type CartItem = {
  id: number;
  title: string;
  stock: number;
  price: number;
  quantity: number;
};

type InitialvalueType = {
  cart: CartItem[];
  addCartItem: (item: CartItem) => void;
  removeCartItem: (id: number) => void;
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

    const increaseQuantity = useCallback(function increaseQuantity(id) {
    setCart((prev) => {
      const data = prev.map((item) => {
        if (item.id == id) {
          item.quantity += 1;
          return {...item}
        }
        // return true;
        return item
      });
      return data   });
  },[])

const addCartItem = useCallback((item: CartItem) => {
  setCart((prev) => {
    const existing = prev.find((data) => data.id === item.id);

    if (existing) {
      return prev.map((i) =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    }

    return [...prev, item];
  });
}, []);
  const removeCartItem=useCallback(function removeCartItem(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));
    return;
  },[])




 const decreseQuantity = useCallback((id: number) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
}, []);

  function clearCart() {
    setCart([]);
  }

  const initialValue: InitialvalueType = {
    cart: cart,
    addCartItem: addCartItem,
    removeCartItem: removeCartItem,
  };

  return (
    <cartcontext.Provider
      value={{
        ...initialValue,
        increaseQuantity,
        decreseQuantity,
        clearCart,
      }}
    >
      {children}
    </cartcontext.Provider>
  );
};

export default CartProvider;
