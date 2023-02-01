import axios from 'axios';

const heroesManagerAPI = axios.create({
  baseURL: import.meta.env.VITE_HEROES_MANAGER_API_BASE_URL,
});

export default heroesManagerAPI;
