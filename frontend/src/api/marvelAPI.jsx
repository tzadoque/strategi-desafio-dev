import axios from 'axios';
import md5 from 'md5';

const ts = new Date().getTime();
const marvel_api_public_key = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
const marvel_api_private_key = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
const hash = md5(ts + marvel_api_private_key + marvel_api_public_key);

const marvelAPI = axios.create({
  baseURL: import.meta.env.VITE_MARVEL_API_BASE_URL,
  params: {
    ts: ts,
    apikey: marvel_api_public_key,
    hash: hash,
  },
});

export default marvelAPI;
