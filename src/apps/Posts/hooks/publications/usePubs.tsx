/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { postActions } from '../../services';

/* Constants */
import { STALE_TIME } from '../../../../constants';

export const usePubs = (username: string) => {
  const query = useQuery({
    queryKey: ['pubs', username],
    queryFn: () => postActions.pubs.listPubs(username),
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
