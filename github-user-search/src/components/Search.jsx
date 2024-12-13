import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    if (username.trim()) {
      onSearch(username); // Pass the username to the parent component or API
      setUsername(""); // Clear the input after submission
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
    </div>
  );
};

export default Search;
