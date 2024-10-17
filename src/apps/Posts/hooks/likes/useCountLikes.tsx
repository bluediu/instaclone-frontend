/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { postActions } from '../../services';

/* Constants */
import { STALE_TIME } from '../../../../constants';

export const useCountLikes = (code: string) => {
  const query = useQuery({
    queryKey: ['countLikes', code],
    queryFn: () => postActions.likes.countLikes(code),
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
