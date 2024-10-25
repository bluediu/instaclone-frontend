/* Api */
import { userApi } from '../api';

/* Utils */
import { fn } from '../../../utils';

/* Interfaces */
import { IUpdateUser, IUploadAvatar, IUser } from '../interfaces';

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

export const searchUsers = async (search: string): Promise<IUser[]> => {
  const params = fn.generateUrlParams({ search: search || '' });

  const { data } = await userApi.get<IUser[]>(`/search/${params}`);
  return data;
};

/* ==== Avatar ==== */
export const uploadAvatar = async (
  username: string,
  avatar: IUploadAvatar
): Promise<IUser> => {
  const formData = fn.createFormData(avatar);

  const { data } = await userApi.put<IUser>(
    `/${username}/upload_avatar/`,
    formData
  );

  return data;
};

export const removeAvatar = async (username: string): Promise<IUser> => {
  const { data } = await userApi.delete<IUser>(`/${username}/remove_avatar/`);
  return data;
};
