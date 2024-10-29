/* Api */
import { pubApi } from '../api';

/* Interfaces */
import { ICreatePub, IUpdatePub, IPublication } from '../interfaces';

/* Utils */
import { fn } from '../../../utils';

/* ==== Publications ==== */
export const listPubs = async (username: string): Promise<IPublication[]> => {
  const { data } = await pubApi.get<IPublication[]>(`/${username}/list/`);
  return data;
};

interface IQueryProps {
  pageParam: number;
}

export const getPublicationsFeed = async ({
  pageParam,
}: IQueryProps): Promise<IPublication[]> => {
  const params = fn.generateUrlParams({ page: pageParam || '' });

  const { data } = await pubApi.get<IPublication[]>(`/get_feed/${params}`);
  return data;
};

export const createPublication = async (
  pub: ICreatePub
): Promise<IPublication> => {
  const formData = fn.createFormData(pub);
  const { data } = await pubApi.post<IPublication>('/create/', formData);
  return data;
};

export const updatePublication = async (
  code: string,
  pub: IUpdatePub
): Promise<IPublication> => {
  const formData = fn.createFormData(pub);
  const { data } = await pubApi.put<IPublication>(`/${code}/update/`, formData);

  return data;
};

export const deletePublication = async (code: string): Promise<void> => {
  await pubApi.delete(`/${code}/delete/`);
};
