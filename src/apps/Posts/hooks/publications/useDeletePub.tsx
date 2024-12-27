/* Libs */
import { toast } from 'react-toastify';

/* Components */
import { Errors } from '@/shared';

/* Hooks  */
import { useAuth } from '@/apps/Users/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Services */
import { postActions } from '@/apps/Posts/services';

export const useDeletePub = (code: string) => {
  const { auth } = useAuth();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['deletePub', code],
    mutationFn: () => postActions.pubs.deletePublication(code),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pubs', auth?.username] });
      toast.success('Publication deleted');
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
