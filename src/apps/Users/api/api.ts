import axios, { InternalAxiosRequestConfig } from 'axios';

/* Constants */
import { TOKEN } from '../../../constants';

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/`,
  headers: {},
});

export const userApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/users/user`,
  headers: {},
});

userApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(TOKEN);
  if (token) config.headers.set('Authorization', `Bearer ${token}`);
  return config;
});
