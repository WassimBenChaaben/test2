import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com', // Replace with your base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;