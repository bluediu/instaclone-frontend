/* Libs */
import { toast } from 'react-toastify';

/* Components */
import { Errors } from '@/shared';

/* Hooks  */
import { useAuth } from '@/apps/Users/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Interfaces */
import { IUpdatePub } from '@/apps/Posts/interfaces';

/* Services */
import { postActions } from '@/apps/Posts/services';

export const useUpdatePub = (code: string) => {
  const { auth } = useAuth();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['updatePub', code],
    mutationFn: (data: IUpdatePub) =>
      postActions.pubs.updatePublication(code, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pubs', auth?.username] });
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
