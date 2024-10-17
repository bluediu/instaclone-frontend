/* Api */
import { likeApi } from '../api';

/* Interfaces */
import { ICountLike, ILiked } from '../interfaces';

export const isLiked = async (code: string): Promise<ILiked> => {
  const { data } = await likeApi.get<ILiked>(`/${code}/liked/`);
  return data;
};

export const countLikes = async (code: string): Promise<ICountLike> => {
  const { data } = await likeApi.get<ICountLike>(`/${code}/count/`);
  return data;
};

export const addLike = async (code: string): Promise<void> => {
  await likeApi.post(`/${code}/add/`);
};

export const removeLike = async (code: string): Promise<void> => {
  await likeApi.delete(`/${code}/remove/`);
};
