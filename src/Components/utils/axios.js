// // src/utils/axiosInstance.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4070d67a427af1839e91c6c5cef412f4',
    language: 'en-US',
    include_adult: false,
    include_video: false,
  },
});

export default api;
