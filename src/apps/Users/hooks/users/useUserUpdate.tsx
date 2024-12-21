/* Libs */
import { toast } from 'react-toastify';

/* Components  */
import { Errors } from '@/shared';

/* Hooks  */
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Interfaces */
import { IUpdateUser } from '@/apps/Users/interfaces';

/* Services */
import { userActions } from '@/apps/Users/services';

export const useUserUpdate = (username: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['userUpdate', username],
    mutationFn: (user: IUpdateUser) =>
      userActions.users.updateUser(username, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', username] });
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
