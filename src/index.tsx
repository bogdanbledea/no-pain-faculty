import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as serviceWorker from './serviceWorker';
import './index.css';
import axios from 'axios';
import { concat } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import App from './App';
import { GRAPHQL_URL, REFRESH_TOKEN_URL } from 'lib/env';

const cache = new InMemoryCache();

const middlewareAuthLink = setContext(async (req, { headers }) => {
  await axios
    .post(REFRESH_TOKEN_URL, {}, { withCredentials: true })
    .then(async ({ data }) => {
      await localStorage.setItem('user', data.accessToken);
    });
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem('user') || null}`,
    },
  };
});

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
  credentials: 'include',
});

const client = new ApolloClient({
  link: concat(middlewareAuthLink, httpLink),
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
