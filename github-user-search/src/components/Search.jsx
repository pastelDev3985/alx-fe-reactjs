import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  login;
  ("Looks like we cant find the user");
  map;

  const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      setError(""); // Clear previous error
      setUserData(null); // Clear previous data
      setLoading(true); // Set loading state

      try {
        const response = await fetchUserData(
          formData.username,
          formData.location,
          formData.minRepos,
          1 // Fetch the first page
        );

        setUsers(response.items);
        setHasMore(response.total_count > response.items.length); // Check if there are more results
      } catch (err) {
        setError(err.message || "An error occurred while fetching user data.");
      } finally {
        setLoading(false);
      }
    };

    // Load more results
    const handleLoadMore = async () => {
      setLoading(true);
      const nextPage = page + 1;

      try {
        const response = await fetchUserData(
          formData.username,
          formData.location,
          formData.minRepos,
          nextPage
        );

        setUsers((prevUsers) => [...prevUsers, ...response.items]);
        setPage(nextPage);
        setHasMore(response.total_count > users.length + response.items.length); // Check if there are more results
      } catch (err) {
        setError("Failed to load more results.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="max-w-xl mx-auto mt-10 p-5 bg-gray-100 rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-5">
          GitHub Advanced Search
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              GitHub Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., octocat"
              required
            />
          </div>

          {/* Location Field */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location (optional)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., San Francisco"
            />
          </div>

          {/* Minimum Repositories Field */}
          <div>
            <label
              htmlFor="minRepos"
              className="block text-sm font-medium text-gray-700"
            >
              Minimum Repositories (optional)
            </label>
            <input
              type="number"
              id="minRepos"
              name="minRepos"
              value={formData.minRepos}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 10"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200"
          >
            Search
          </button>
        </form>

        {/* Conditional Rendering */}
        <div className="mt-5">
          {loading && <p className="text-blue-500">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {userData && (
            <div className="mt-5 bg-white p-4 rounded shadow">
              <img
                src={userData.avatar_url}
                alt={userData.name || "GitHub User"}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-xl font-semibold text-center mt-2">
                {userData.name || "No name available"}
              </h2>
              <p className="text-center text-gray-600">
                {userData.location || "No location available"}
              </p>
              <p className="text-center text-gray-600">
                Public Repositories: {userData.public_repos}
              </p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-500 mt-2 underline"
              >
                View GitHub Profile
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };
};

export default Search;
