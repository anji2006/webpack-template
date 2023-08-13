import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/*
    NOTE :--- 
    
    * In HTTPService Object every method can take config
    * config Includes params,headers,maxContentLength,responseType ....etc
    * EX:- config = {
        headers : {},
        params : {},
        responseType : 'html'
        ....etc
    }
*/

const API = {
  get: (url, config) => AXIOS.get(url, config),
  post: (url, data, config) => AXIOS.post(url, data, config),
  put: (url, data, config) => AXIOS.put(url, data, config),
  delete: (url, config) => AXIOS.delete(url, config),
};

export default API;
