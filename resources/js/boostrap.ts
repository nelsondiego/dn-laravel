import axios from 'axios';

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 419) {
      await axios.get('/sanctum/csrf-cookie');

      return axios(error.config);
    }

    return Promise.reject(error);
  },
);