import axios from 'axios';
import md5 from 'md5';

const timestamp = new Date().getSeconds();
const public_api_key = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
const private_api_key = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;

const hash = md5(`${timestamp}${private_api_key}${public_api_key}`);

const marvelAPI = axios.create({
  baseURL: import.meta.env.VITE_MARVEL_API,
  params: {
    ts: timestamp,
    apikey: public_api_key,
    hash: hash,
    limit: 10,
  },
});

export default marvelAPI;
