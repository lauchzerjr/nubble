import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.PlC-SLgnnFWDhnfDdmn4AXX4btY83wAsZJdTg2mnbp-GAmfkwC5CjZNnGOMl',
  },
});
