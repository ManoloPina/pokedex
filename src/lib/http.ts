import axios from 'axios';
import { BASE_URL } from './constants';

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
