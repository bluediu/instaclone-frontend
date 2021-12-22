import {
  ApolloClient,
  //createHttpLink,
  InMemoryCache,
} from '@apollo/client';

/* 
  Deprecado
  const httpLink = createHttpLink({
    url: 'http://localhost:4000/',
  });
*/
const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/',
  //  link: httpLink ,
});

export default client;
