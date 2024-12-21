/* Libs */
import { toast } from 'react-toastify';

/* Components */
import { Errors } from '@/shared';

/* Hooks  */
import { useAuth } from '@/apps/Users/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Services */
import { postActions } from '@/apps/Posts/services';

export const useCreatePub = () => {
  const { auth } = useAuth();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['createPub'],
    mutationFn: postActions.pubs.createPublication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pubs', auth?.username] });
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
