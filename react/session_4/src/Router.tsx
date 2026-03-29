import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Unauthorized from "./pages/Unauthorized";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

export const router = createBrowserRouter([
{path: "/", element: <Home />}  
,   {
    path: "/",
    element : <ProtectedRoute allowedroles={["User" , "Admin"]}/>,
    children: [
        {   path: '/logout' , element: <Logout />},
        {    path: 'dashboard' , element: <Dashboard /> },
        {path: "admin", element: <ProtectedRoute allowedroles={["Admin"]}/> ,
         children: [
            {index: true , element: <Admin /> }
        ]} , 
        {path: "profile", element: <Profile />} 
    ],
}
,{path: "unauthorized", element: <Unauthorized />}  
,{path: "login", element: <Login />}  
,{path: "about", element: <About />}  
,{path: "*", element: <Unauthorized />} , 
])