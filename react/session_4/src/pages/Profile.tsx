import React from 'react'
import { useAuth } from '../utils/AuthContext'

const Profile = () => {

    const user = useAuth()

  return (
    <div>
        <div>{user.name}</div>
        <div>{user.role}</div>
        <div>{user.password}</div>
        <div>{user.isAuthenticated}</div>
    </div>
  )
}

export default Profile