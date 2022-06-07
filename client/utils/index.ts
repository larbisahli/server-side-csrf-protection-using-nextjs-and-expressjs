const ENV = process.env;
const PRODUCTION_ENV = ENV.NODE_ENV === 'production';

export const apiURL = PRODUCTION_ENV
  ? process.env.API_URL
  : 'http://127.0.0.1:5000';
