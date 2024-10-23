/* Libs */
import { toast } from 'react-toastify';

/* Components */
import { Errors } from '../../../../shared';

/* Hooks  */
import { useAuth } from '../useAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Services */
import { userActions } from '../../services';

export const useUnfollow = (username: string) => {
  const { auth } = useAuth();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['unfollow', username],
    mutationFn: () => userActions.follows.unfollow(username),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['isFollowing', auth?.username],
      });
      queryClient.invalidateQueries({
        queryKey: ['followCount', auth?.username],
      });

      queryClient.invalidateQueries({ queryKey: ['isFollowing', username] });
      queryClient.invalidateQueries({ queryKey: ['followCount', username] });
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
