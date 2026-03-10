import  {  useRef } from 'react'
import { Navigate, replace, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Login = () => {
    const { isAuthenticated } = useAuth()
    
    const nameref = useRef<HTMLInputElement | null>(null)
    const roleref = useRef<HTMLSelectElement | null >(null)
    const passwordref = useRef<HTMLInputElement | null>(null)

    const navigate = useNavigate()
    const {state} = useLocation()

    const from = state?.from?.pathname ?? "/dashboard"

    if(isAuthenticated){
        return <Navigate to={'/'}/>
    }
    
    const handleSubmit = () => {

        if(nameref.current?.value)
            localStorage.setItem('name' , nameref.current?.value)
        if(passwordref.current?.value)
            localStorage.setItem('password' , passwordref.current?.value)
        if(roleref.current?.value)
            localStorage.setItem('role' , roleref.current?.value)
        
        localStorage.setItem('isAuthenticated' , 'true')

        navigate(from , {replace: true })

    }
  
    return (
    <div>
        Name:
        <input type="text" ref={nameref} name='name'/>
       
        <br />
        Role :

        <select name="role" ref={roleref} defaultValue={"User"}  id="role">
            <option value="User" >User</option>
            <option value="Admin">Admin</option>
        </select>
        <br />
        Password :
        <input type="text" ref={passwordref} name='password'/>
        <br />
        <button type="submit" onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default Login