/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { userActions } from '../../services';

/* Constants */
import { STALE_TIME } from '../../../../constants';

export const useNotFollowing = () => {
  const query = useQuery({
    queryKey: ['notFollowing'],
    queryFn: userActions.follows.getNotFollowing,
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
