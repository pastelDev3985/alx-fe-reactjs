/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

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
      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default profile;
