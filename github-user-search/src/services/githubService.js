import axios from "axios";

// Base URL for the GitHub API
const GITHUB_API_URL = "https://api.github.com/users/";

/**
 * Fetch user data from GitHub API based on the username
 * @param {string} username - The GitHub username to search for
 * @returns {Promise<Object>} - A promise that resolves to the user data
 */
export const fetchUserData = async (username) => {
  try {
    // Send GET request to GitHub API
    const response = await axios.get(`${GITHUB_API_URL}${username}`);

    // Return the user data
    return response.data;
  } catch (error) {
    // Handle errors (e.g., user not found or API rate limit exceeded)
    if (error.response && error.response.status === 404) {
      throw new Error("User not found.");
    } else {
      throw new Error("An error occurred while fetching user data.");
    }
  }
};
