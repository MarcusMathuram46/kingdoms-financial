import axios from "axios";

export const loginUser = async (username, password) => {
  try {
    // Perform login API call
    const response = await axios.post('https://kingdoms-financial-be.onrender.com/api/login', {
      username,
      password,
    });
    return response.data; // Return the response data if successful
  } catch (error) {
    // Handle different error types
    if (error.response) {
      // Server responded with a status code that falls out of the range of 2xx
      if (error.response.status === 401) {
        console.error('Invalid credentials provided.'); // Enhanced logging
        throw new Error('Invalid username or password');
      } else if (error.response.status === 403) {
        console.error('Unauthorized access attempt.'); // Enhanced logging
        throw new Error('Unauthorized access. Only admins can log in.');
      } else {
        console.error('Server error:', error.response.data); // Log the server error for debugging
        throw new Error('Server error. Please try again later.');
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Network error:', error.message); // Log the network error for debugging
      throw new Error('Network error. Please check your connection.');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message); // Log any other error for debugging
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};
