import axios from "axios";

// Base URL for the GitHub API
const GITHUB_API_URL = "https://api.github.com/users/";

/**
 * Fetch user data from GitHub API based on the username
 * @param {string} username - The GitHub username to search for
 * @returns {Promise<Object>} - A promise that resolves to the user data
 */
export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Construct the search query
    let query = `user:${username}`;

    // Add location filter if provided
    if (location) {
      query += ` location:${location}`;
    }

    // Add minimum repositories filter if provided
    if (minRepos) {
      query += ` repos:>${minRepos}`;
    }

    ("https://api.github.com/search/users?q");

    // Perform API request
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query, // Search query string
      },
    });

    // Check if we got any results
    const users = response.data.items;
    if (users.length === 0) {
      throw new Error("No users found matching the criteria.");
    }

    // Fetch detailed information for the first user in the result
    const userResponse = await axios.get(users[0].url);
    return userResponse.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch user data."
    );
  }
};
