
import axios from 'axios';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post('https://kingdoms-financial-be.onrender.com/api/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Invalid username or password');
  }
};
