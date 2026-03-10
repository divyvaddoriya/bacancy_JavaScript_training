import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const Unauthorized = () => {

  const location = useLocation()

  return (
      <Navigate
      state={{from: location}}
      to={'/login'}
      replace
      />
      
  )
}

export default Unauthorized