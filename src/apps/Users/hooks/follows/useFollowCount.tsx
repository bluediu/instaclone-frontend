/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { userActions } from '../../services';

/* Constants */
import { STALE_TIME } from '../../../../constants';

export const useFollowCount = (username: string) => {
  const query = useQuery({
    queryKey: ['followCount', username],
    queryFn: () => userActions.follows.followCount(username),
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
