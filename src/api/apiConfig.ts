import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.fbAPp77B3g8kVfrLSwYrPeeCmbAN9wKmqdUVbGqjSJORJ0aqPdslOcLJ_CX9',
  },
});
