import React, { useState } from "react";

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

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
const [error, setErrors] = useState("");

// Validation to check that the fields aren't empty when submitting
const newErrors = {};
if (!username) newErrors.username = "Username is required,";
if (!email) newErrors.email = "Email is required!";
if (!password) newErrors.password = "Password is required!";

// Clears error when validation passes
setErrors("");

function RegistrationForm() {
  return (
    <>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        />

        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="text"
          name="password"
          value={password}
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
