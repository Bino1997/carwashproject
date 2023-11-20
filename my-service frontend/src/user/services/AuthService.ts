
import axios from 'axios';

export const UserService = {
  // Function to set the token in local storage
  setUserToken:  (newToken:any) => {
    localStorage.setItem('userToken', newToken);
  },

  // Function to get the user token from local storage
  getUserToken: () => {
    return localStorage.getItem('userToken');
  },


  // Function to remove the user token from local storage
  removeUserToken: () => {
    localStorage.removeItem('userToken');
  },



  async login(email: string, password: string) {
    try {
      const response = await axios.post('http://localhost:4000/api/userlogin/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const newToken = response.data.token;
        UserService.setUserToken(newToken); // Store the token in local storage
      }
    } catch (error) {
      console.error('User login error:', error);
      alert('Incorrect username and password');
      throw error;
    }
  },

  async fetchUserProfile() {
    const token = UserService.getUserToken();

    if (!token) {
      throw new Error('User token not found');
    }

    try {
      const response = await axios.get('http://localhost:4000/api/userlogin/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        return response.data;
      } else if (response.status === 401) {
        UserService.removeUserToken(); // Remove the token if it's invalid
        throw new Error('Unauthorized');
      }
    } catch (error) {
      console.error('User profile fetch error:', error);
      throw error;
    }
  },


};
