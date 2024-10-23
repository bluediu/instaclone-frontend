/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { userActions } from '../../services';

export const useFollowing = (username: string) => {
  const query = useQuery({
    queryKey: ['following', username],
    queryFn: () => userActions.follows.getFollowing(username),
    refetchOnWindowFocus: false,
  });

  return query;
};
