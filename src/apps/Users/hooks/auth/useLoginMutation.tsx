/* Components  */
import { Errors } from '../../../../shared';

/* Hooks  */
import { useAuth } from '../useAuth';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

/* Services */
import { userActions } from '../../services';

/* Constants */
import { TOKEN } from '../../../../constants';

export const useLoginMutation = () => {
  const { login } = useAuth();

  const mutate = useMutation({
    mutationKey: ['authLogin'],
    mutationFn: userActions.auth.login,
    onSuccess: (data) => {
      // Save user token on login.
      localStorage.setItem(TOKEN, data.access);

      // Save user auth info in context API.
      login(data);
      // Show authentication message.
      toast.success('Login successful.');
    },
    onError: (error) => {
      toast.error(<Errors error={error} />);
    },
  });

  return mutate;
};
