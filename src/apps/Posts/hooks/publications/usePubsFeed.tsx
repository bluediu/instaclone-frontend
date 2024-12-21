/* Hooks */
import { useInfiniteQuery } from '@tanstack/react-query';

/* Services */
import { postActions } from '@/apps/Posts/services';

/* Constants */
import { STALE_TIME } from '@/constants';

interface IProps {
  page: number;
}

export const usePubsFeed = ({ page }: IProps) => {
  const query = useInfiniteQuery({
    queryKey: ['publications', 'feed', { page }],
    queryFn: (data) => postActions.pubs.getPublicationsFeed(data),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const nextPage = lastPage.length ? pages.length + 1 : undefined;
      return nextPage;
    },
    refetchOnWindowFocus: false,
    staleTime: STALE_TIME,
  });

  return query;
};
