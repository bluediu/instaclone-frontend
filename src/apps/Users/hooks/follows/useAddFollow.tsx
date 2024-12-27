/* Libs */
import { toast } from 'react-toastify';

/* Components */
import { Errors } from '@/shared';

/* Hooks  */
import { useAuth } from '../useAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Services */
import { userActions } from '@/apps/Users/services';

export const useAddFollow = (username: string) => {
  const { auth } = useAuth();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['addFollow', username],
    mutationFn: () => userActions.follows.addFollow(username),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['isFollowing', auth?.username],
      });
      queryClient.invalidateQueries({
        queryKey: ['followCount', auth?.username],
      });

      queryClient.invalidateQueries({ queryKey: ['isFollowing', username] });
      queryClient.invalidateQueries({ queryKey: ['followCount', username] });
      queryClient.invalidateQueries({ queryKey: ['publications', 'feed'] });
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
