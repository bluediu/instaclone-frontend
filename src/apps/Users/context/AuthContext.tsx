import { createContext, useLayoutEffect, useMemo, useState } from 'react';

/* Libs */
import { toast } from 'react-toastify';

/* Utils */
import { fn } from '../../../utils';

/* Interfaces */
import { IUserToken } from '../interfaces';

/* Constants */
import { TOKEN } from '../../../constants';

interface IAuthContextType {
  auth: undefined | IUserToken;
  login: (user: IUserToken) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContextType>({
  auth: undefined,
  login() {},
  logout() {},
});

type TProviderChildren = React.FC<{ children: React.ReactNode }>;
export const AuthProvider: TProviderChildren = ({ children }) => {
  const token: string | null = localStorage.getItem(TOKEN);

  const [auth, setAuth] = useState<undefined | IUserToken>(undefined);

  useLayoutEffect(() => {
    try {
      if (token) {
        const decodedToken = fn.decodeToken(token);
        const expirationTime: number = decodedToken.exp! * 1000;

        if (Date.now() >= expirationTime) {
          logout();
          toast.error('Session Expired: Please log in again.');
        } else {
          login(decodedToken);
        }
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      // Treat invalid token as expired, logout the user
      logout();
    }
  }, [token]);

  const login = async (user: IUserToken) => {
    setAuth(user);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN);
    setAuth(undefined);
  };

  // `useMemo` to optimize re-renders if authData is passed to other components.
  const value: IAuthContextType = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
