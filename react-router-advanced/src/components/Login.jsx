import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Set user as authenticated
    navigate("/profile"); // Redirect to the profile page
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
