/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { userActions } from '@/apps/Users/services';

export const useFollowers = (username: string) => {
  const query = useQuery({
    queryKey: ['followers', username],
    queryFn: () => userActions.follows.getFollowers(username),
    refetchOnWindowFocus: false,
  });

  return query;
};
