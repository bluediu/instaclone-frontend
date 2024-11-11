/* Libs */
import { toast } from 'react-toastify';

/* Components */
import { Errors } from '../../../../shared';

/* Hooks  */
import { usePubContext } from '../usePubContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Services */
import { postActions } from '../../services';

export const useRemoveComment = () => {
  const { selectedPublication } = usePubContext();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['remove', 'comment'],
    mutationFn: postActions.comments.removeComment,
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
