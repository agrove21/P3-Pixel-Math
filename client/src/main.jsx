import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import './index.css'
import App from './App.jsx'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App /> 
    </ApolloProvider>
  </StrictMode>,
)