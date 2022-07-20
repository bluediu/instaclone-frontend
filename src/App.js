/* GraphQL */
import { ApolloProvider } from '@apollo/client';

/* utils */
import {
  decodeToken,
  getToken,
  removeToken,
} from './utils/token';

import { ToastContainer } from 'react-toastify';
import { useEffect, useState, useMemo } from 'react';
import AuthContext from './context/AuthContext';
import client from './config/apollo';
import Navigation from './routes/Navigation';
import Auth from './pages/Auth';

function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();

    if (!token) {
      setAuth(null);
    } else {
      /* Decode token */
      const validateToken = decodeToken(token) || '';

      /* Check If current date is greater than expiry date of token  */
      if (Date.now() >= validateToken?.exp * 1000) {
        // Token has expired
        logout();
        setAuth(null);
      } else {
        // Token is valid
        setAuth(validateToken);
      }
      //setAuth(decodeToken(token));
    }
  }, []);

  const logout = () => {
    removeToken();
    setAuth(null);
  };

  const setUser = (user) => {
    setAuth(user);
  };

  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        {!auth ? <Auth /> : <Navigation />}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
