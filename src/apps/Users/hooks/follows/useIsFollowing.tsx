/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { userActions } from '@/apps/Users/services';

/* Constants */
import { STALE_TIME } from '@/constants';

export const useIsFollowing = (username: string) => {
  const query = useQuery({
    queryKey: ['isFollowing', username],
    queryFn: () => userActions.follows.isFollowing(username),
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
