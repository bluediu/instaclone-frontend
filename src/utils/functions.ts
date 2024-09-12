/* Libs */
import { JwtPayload, jwtDecode } from 'jwt-decode';

/* Interfaces */
import { IUserToken } from '../apps/Users/interfaces';

type TJwtPayload = JwtPayload & IUserToken;

/**
 * Return a client jwt payload as object.
 */
export const decodeToken = (token: string): TJwtPayload => jwtDecode(token);
