import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");

    const handleInputChange = (event) => {
      setUsername(event.target.value);
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      setError(""); // Clear previous error
      setUserData(null); // Clear previous data
      setLoading(true); // Set loading state

      try {
        const data = await fetchUserData(username); // Fetch user data
        setUserData(data); // Set user data
      } catch (err) {
        setError("Looks like we can't find the user."); // Set error message
      } finally {
        setLoading(false); // Stop loading state
      }
    };

    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="search"
            value={username}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
        {/* Conditional rendering */}
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {userData && (
          <div className="user-info">
            <img
              src={userData.avatar_url}
              alt={userData.name || "GitHub User"}
              width="100"
              style={{ borderRadius: "50%" }}
            />
            <h2>{userData.name || "No name available"}</h2>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    );
  };
};

export default Search;
