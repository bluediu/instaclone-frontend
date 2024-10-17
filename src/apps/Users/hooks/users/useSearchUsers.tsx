/* Hooks */
import { useQuery } from '@tanstack/react-query';

/* Services */
import { userActions } from '../../services';

interface IProps {
  search: string;
  enabled: boolean;
}

export const useSearchUsers = (props: IProps) => {
  const { search, enabled } = props;

  const query = useQuery({
    queryKey: ['search', search],
    queryFn: () => userActions.users.searchUsers(search),
    refetchOnWindowFocus: false,
    enabled,
  });

  return query;
};
