import React, { useState } from "react";

const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

// Handling form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const { username, email, password } = formData;
};

// Handles state error
const [error, setError] = useState("");

// Validation to check that the fields aren't empty when submitting
if (!username || !email || !password) {
  setError("All fields are required!");
  return;
}

// Clears error when validation passes
setError("");

function RegistrationForm() {
  return (
    <>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />

        {error && <p>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default RegistrationForm;
