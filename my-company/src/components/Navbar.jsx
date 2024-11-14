import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ backgroundColor: "pink", justifyContent: "center" }}>
      <h1>Navbar</h1>
      <div
        style={{
          display: "flex",
          listStyle: "none",
          gap: "4px",
        }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/About">About</NavLink>
        </li>

        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/Services">Services</NavLink>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
