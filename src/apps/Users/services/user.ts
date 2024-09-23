/* Api */
import { userApi } from '../api';

/* Interfaces */
import { IUpdateUser, IUser } from '../interfaces';

/* ==== User ==== */
export const getUser = async (username: string): Promise<IUser> => {
  const { data } = await userApi.get<IUser>(`/${username}/get/`);
  return data;
};

export const updateUser = async (
  username: string,
  user: IUpdateUser
): Promise<IUser> => {
  const { data } = await userApi.put<IUser>(`/${username}/update/`, user);
  return data;
};
