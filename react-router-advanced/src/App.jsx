/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import ProfileDetails from "./components/Profile/ProfileDetails";
import ProfileSettings from "./components/Profile/ProfileSettings";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <hr />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to the Home Page</h1>
            </div>
          }
        ></Route>
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
