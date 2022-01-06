import { ApolloProvider } from '@apollo/client';
import { decodeToken, getToken } from './utils/token';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState, useMemo } from 'react';
import Auth from './pages/Auth';
import AuthContext from './context/AuthContext';
import client from './config/apollo';
import Navigation from './routes/Navigation';

function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();

    if (!token) {
      setAuth(null);
    } else {
      setAuth(decodeToken(token));
    }
  }, []);

  const logout = () => {
    console.log('Cerar');
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
