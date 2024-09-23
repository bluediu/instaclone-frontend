/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { userActions } from '../../services';

/* Constants */
import { STALE_TIME } from '../../../../constants';

export const useUser = (username: string) => {
  const query = useQuery({
    queryKey: ['user', username],
    queryFn: () => userActions.users.getUser(username),
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
