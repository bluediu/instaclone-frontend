/* Libs */
import { toast } from 'react-toastify';

/* Components  */
import { Errors } from '@/shared';

/* Hooks  */
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Interfaces */
import { IUploadAvatar } from '@/apps/Users/interfaces';

/* Services */
import { userActions } from '@/apps/Users/services';

export const useUploadAvatar = (username: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['userUploadAvatar', username],
    mutationFn: (data: IUploadAvatar) =>
      userActions.users.uploadAvatar(username, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', username] });
      // Show success message.
      toast.success('Avatar Uploaded');
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
