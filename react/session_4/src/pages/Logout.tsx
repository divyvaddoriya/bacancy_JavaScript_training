import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Logout = () => {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  const logout = () => {
    
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("isAuthenticated");

    navigate("/");
  };

  return (
    <div>
      <button onClick={logout}> LogOut </button>
    </div>
  );
};

export default Logout;
