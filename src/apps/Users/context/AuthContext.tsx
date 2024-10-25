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
  switchAuthPage: boolean;
  handleAuthPage: () => void;
  login: (user: IUserToken) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContextType>({
  auth: undefined,
  switchAuthPage: true,
  handleAuthPage: () => {},
  login() {},
  logout() {},
});

type TProviderChildren = React.FC<{ children: React.ReactNode }>;
export const AuthProvider: TProviderChildren = ({ children }) => {
  const token: string | null = localStorage.getItem(TOKEN);

  const [auth, setAuth] = useState<undefined | IUserToken>(undefined);
  const [switchAuthPage, setSwitchAuthPage] = useState(true);

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

  const handleAuthPage = () => setSwitchAuthPage(!switchAuthPage);

  // `useMemo` to optimize re-renders if authData is passed to other components.
  const value: IAuthContextType = useMemo(
    () => ({
      auth,
      switchAuthPage,

      login,
      logout,
      handleAuthPage,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth, switchAuthPage]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
