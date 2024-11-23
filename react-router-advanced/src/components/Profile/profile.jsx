/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const profile = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />
      <h1>Profile Page</h1>
      <p>Welcome to your profile!</p>
      <button onClick={logout}>Logout</button>
      {/* Renders child components */}
      <Outlet />
    </div>
  );
};

export default profile;
