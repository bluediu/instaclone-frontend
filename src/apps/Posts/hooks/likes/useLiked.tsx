/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { postActions } from '@/apps/Posts/services';

/* Constants */
import { STALE_TIME } from '@/constants';

export const useLiked = (code: string) => {
  const query = useQuery({
    queryKey: ['liked', code],
    queryFn: () => postActions.likes.isLiked(code),
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
