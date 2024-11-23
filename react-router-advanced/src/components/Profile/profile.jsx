/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, Link } from "react-router-dom";

const profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />
      {/* Renders child components */}
      <Outlet />
    </div>
  );
};

export default profile;
