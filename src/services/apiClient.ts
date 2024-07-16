import axios from 'axios';

const apiClientConfig = {
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const apiClient = axios.create(apiClientConfig);

apiClient.interceptors.response.use(
  function (response) {
    console.log({response})
    return response;
  },
  function (error) {
    console.log({error})
    return Promise.reject(error);
  },
);
