/* Libs */
import { toast } from 'react-toastify';

/* Components  */
import { Errors } from '@/shared';

/* Hooks  */
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Services */
import { userActions } from '@/apps/Users/services';

export const useRemoveAvatar = (username: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['userRemoveAvatar', username],
    mutationFn: () => userActions.users.removeAvatar(username),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', username] });
      // Show success message.
      toast.success('Avatar Removed');
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
