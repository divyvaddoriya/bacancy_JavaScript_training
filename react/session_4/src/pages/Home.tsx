import { NavLink } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Home = () => {

  const {isAuthenticated}= useAuth()
console.log(isAuthenticated);

  return (
    <div>
      {isAuthenticated ? 
      <div>
<NavLink to={'/logout'}>logout</NavLink>
<NavLink to={'/profile'}>Profile</NavLink>
      </div>
   : 
<NavLink to={'/login'}>Login</NavLink>
   }
<br></br>
<NavLink to={'/about'} >About</NavLink>
<br></br>
<NavLink to={'/dashboard'} >Dashboard</NavLink>
    </div>
  )
}

export default Home