import { useAuth } from '../utils/AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ allowedroles }) => {
  
  const { role, isAuthenticated } = useAuth()
const location = useLocation()

  if (!isAuthenticated) {
    
    return <Navigate to="/login" 
    state={{from: location }}
    replace />
  }

  if (!allowedroles.includes(role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return <Outlet />
}

export default ProtectedRoute