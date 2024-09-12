/* Api */
import { api } from '../api';

/* Interfaces */
import { IAuthUser, ILogin, ISignUp } from '../interfaces';

const AUTH = '/users/auth';
const USER = '/users/user';

export const login = async (user: ILogin): Promise<IAuthUser> => {
  const { data } = await api.post<IAuthUser>(`${AUTH}/login/`, user);
  return data;
};

export const signUp = async (user: ISignUp): Promise<IAuthUser> => {
  const { data } = await api.post<IAuthUser>(`${USER}/create/`, user);
  return data;
};
