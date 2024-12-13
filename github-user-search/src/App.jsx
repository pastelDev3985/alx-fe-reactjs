import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is the home page of the app.</p>
  </div>
);

const About = () => (
  <div>
    <h1>About Us</h1>
    <p>Learn more about our app here.</p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Us</h1>
    <p>Get in touch through this page.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/about" style={{ marginRight: "15px" }}>
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
