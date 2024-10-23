/* Libs */
import { toast } from 'react-toastify';

/* Components */
import { Errors } from '../../../../shared';

/* Hooks  */
import { useMutation, useQueryClient } from '@tanstack/react-query';

/* Services */
import { postActions } from '../../services';

export const useLike = (code: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['like', code],
    mutationFn: () => postActions.likes.addLike(code),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['liked', code] });
      queryClient.invalidateQueries({ queryKey: ['countLikes', code] });
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};