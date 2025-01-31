/* Libs */
import { toast } from 'react-toastify';

/* Components */
import { Errors } from '@/shared';

/* Hooks  */
import { usePubContext } from '../usePubContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Services */
import { postActions } from '@/apps/Posts/services';

export const useAddComment = () => {
  const { selectedPublication } = usePubContext();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['add', 'comment', selectedPublication.code],
    mutationFn: postActions.comments.addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments', selectedPublication.code],
      });
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
