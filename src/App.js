import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';
import Auth from './pages/auth';
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(undefined);

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth /> : <h1>Logeado</h1>}
    </ApolloProvider>
  );
}

export default App;
