/* Libs */
import { toast } from 'react-toastify';

/* Components */
import { Errors } from '../../../../shared';

/* Hooks  */
import { useAuth } from '../useAuth';
import { useMutation } from '@tanstack/react-query';

/* Services */
import { userActions } from '../../services';

/* Constants */
import { TOKEN } from '../../../../constants';

export const useSignUpMutation = () => {
  const { login } = useAuth();

  const mutation = useMutation({
    mutationKey: ['userCreate'],
    mutationFn: userActions.auth.signUp,
    onSuccess: (data) => {
      // Save user token on login.
      localStorage.setItem(TOKEN, data.access);

      // Save user auth info in context API.
      login(data);

      // Show success message.
      toast.success('User successfully created.');
    },
    onError: (error) => {
      toast.error(<Errors error={error} />, { autoClose: false });
    },
  });

  return mutation;
};
