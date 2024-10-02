/* Api */
import { pubApi } from '../api';

/* Interfaces */
import { IPublication } from '../interfaces';

/* ==== Publications ==== */
export const listPubs = async (username: string): Promise<IPublication[]> => {
  const { data } = await pubApi.get<IPublication[]>(`/${username}/list/`);
  return data;
};
