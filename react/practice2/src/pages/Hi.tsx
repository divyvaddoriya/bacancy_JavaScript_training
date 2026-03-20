import React, { useContext } from 'react'
import { AuthContext } from '../utils/AuthContext'

const Hi = () => {

    const {user} = useContext(AuthContext)


  return (
    <div>{user}</div>
  )
}

export default Hi