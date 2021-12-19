import { Button } from 'semantic-ui-react';
import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Hola</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
