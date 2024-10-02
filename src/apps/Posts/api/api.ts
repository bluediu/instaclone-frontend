import axios, { InternalAxiosRequestConfig } from 'axios';

/* Constants */
import { TOKEN } from '../../../constants';

export const pubApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/posts/publication`,
  headers: {},
});

pubApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(TOKEN);
  if (token) config.headers.set('Authorization', `Bearer ${token}`);
  return config;
});
