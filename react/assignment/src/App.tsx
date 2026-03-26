import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import OptimizedHome from './pages/OptimizedHome'
import InfinteScrolling from './pages/InfinteScrolling'
import CartProvider from './utils/CartProvider'


const router = createBrowserRouter([
  {
    path: "/",
    element: <OptimizedHome/>,
    // element: <InfinteScrolling />,
  }
])


const App = () => {
  return (
<CartProvider>
<RouterProvider router={router}>
    </RouterProvider>
</CartProvider>
  )
}


export default App