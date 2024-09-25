/* Api */
import { fn } from '../../../utils';
import { userApi } from '../api';

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

/* ==== Avatar ==== */
export const uploadAvatar = async (
  username: string,
  avatar: IUploadAvatar
): Promise<IUser> => {
  const formData = fn.createFormData(avatar);
  console.log(formData);

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
