import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import OptimizedHome from './pages/OptimizedHome'


const router = createBrowserRouter([
  {
    path: "/",
    element: <OptimizedHome/>,
  }
])

const App = () => {
  return (
      <RouterProvider router={router}>
    </RouterProvider>
  )
}


export default App