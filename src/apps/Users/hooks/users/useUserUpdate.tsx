/* Libs */
import { toast } from 'react-toastify';

/* Components  */
import { Errors } from '../../../../shared';

/* Hooks  */
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Interfaces */
import { IUpdateUser } from '../../interfaces';

/* Services */
import { userActions } from '../../services';

export const useUserUpdate = (username: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['userUpdate', username],
    mutationFn: (user: IUpdateUser) =>
      userActions.users.updateUser(username, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', username] });
      // Show success message.
      toast.success('Profile successfully updated.');
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
