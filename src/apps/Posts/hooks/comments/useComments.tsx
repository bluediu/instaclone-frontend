/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { postActions } from '../../services';

/* Constants */
import { STALE_TIME } from '../../../../constants';

export const useComments = (code: string) => {
  const query = useQuery({
    queryKey: ['comments', code],
    queryFn: () => postActions.comments.listComments(code),
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
