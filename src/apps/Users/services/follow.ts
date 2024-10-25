/* Api */
import { followApi } from '../api';

/* Interfaces */
import { IsFollowing, IFollowCount, IFollow } from '../interfaces';

export const isFollowing = async (username: string): Promise<IsFollowing> => {
  const { data } = await followApi.get<IsFollowing>(
    `/${username}/is_following/`
  );
  return data;
};

export const followCount = async (username: string): Promise<IFollowCount> => {
  const { data } = await followApi.get<IFollowCount>(`/${username}/count/`);
  return data;
};

export const getFollowers = async (username: string): Promise<IFollow[]> => {
  const { data } = await followApi.get<IFollow[]>(
    `/${username}/get_followers/`
  );
  return data;
};

export const getFollowing = async (username: string): Promise<IFollow[]> => {
  const { data } = await followApi.get<IFollow[]>(
    `/${username}/get_following/`
  );
  return data;
};

export const addFollow = async (username: string): Promise<void> => {
  await followApi.post(`/${username}/add_follow/`);
};

export const unfollow = async (username: string): Promise<void> => {
  await followApi.delete(`/${username}/unfollow/`);
};
