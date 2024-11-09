/* Api */
import { commentApi } from '../api';

/* Interfaces */
import { IAddComment, IComment } from '../interfaces';

export const listComments = async (code: string): Promise<IComment[]> => {
  const { data } = await commentApi.get<IComment[]>(`/${code}/list/`);
  return data;
};

export const addComment = async (comment: IAddComment): Promise<IComment[]> => {
  const { data } = await commentApi.post<IComment[]>(`/add/`, comment);
  return data;
};

export const removeComment = async (id: number): Promise<void> => {
  await commentApi.delete(`/${id}/remove/`);
};
