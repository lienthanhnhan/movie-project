import axios, { AxiosResponse } from 'axios';

const API_KEY = '31ac8c902a032df31facff60af04cc46';
const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  config.params = { ...config.params, api_key: API_KEY };
  return config;
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    // Handle error globally
    console.error('API Error:', error);
    throw error;
  }
);

export default instance;
