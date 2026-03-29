import React, { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Hi from './pages/Hi'
import AuthProvider from './utils/AuthContext'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home allowedRoles={["admin"]} />,
    children : [
      { path: "/hi" , element: <Hi />  }
    ]
  }, {
    path: "/login" ,
    element: <Login />
  }
])


const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}>
    </RouterProvider>
    </AuthProvider>
  )
}


export default App