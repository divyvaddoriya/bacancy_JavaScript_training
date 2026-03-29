import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../utils/customHooks'

const Home = ( { allowedRoles } : {allowedRoles : string []}) => {

    
    const {user} = useAuth()

    if(!allowedRoles.includes(user.role)){
        return <Navigate to={'/login'} />
    }

  return (
    <div>
    <div>Home</div>
    <Outlet /> 
    </div>
)
}

export default Home