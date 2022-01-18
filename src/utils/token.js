import jwtDecode from 'jwt-decode';
import { TOKEN } from './constants';

export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const decodeToken = (token) => {
  return jwtDecode(token);
};

export const removeToken = () => {
  return localStorage.removeItem(TOKEN);
};
