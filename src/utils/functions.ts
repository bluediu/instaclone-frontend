/* Libs */
import { JwtPayload, jwtDecode } from 'jwt-decode';

/* Interfaces */
import { IUserToken } from '../apps/Users/interfaces';

type TJwtPayload = JwtPayload & IUserToken;

/**
 * Return a client jwt payload as object.
 */
export const decodeToken = (token: string): TJwtPayload => jwtDecode(token);

/**
 * Return a url with the params replaced.
 */
export const generateUrl = (
  template: string,
  params: Record<string, string | number>
): string => {
  let url = template;

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      url = url.replace(`:${key}`, String(params[key]));
    }
  }

  return url;
};

/**
 * Convert a object data to a form data object.
 */
export const createFormData = <T>(data: T): FormData => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data as Record<string, Blob>)) {
    formData.append(key, value);
  }

  return formData;
};

/**
 * Generate a URL-encoded query string from an object of key-value pairs.
 */
export const generateUrlParams = (
  items: Record<string, string | number | undefined>
): string => {
  // Params management.
  const params = new URLSearchParams();

  for (const prop in items) {
    const value = items[prop];
    if (value) params.append(prop, value.toString());
  }

  return `?${params.toString()}`;
};
