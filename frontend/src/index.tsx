import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000/graphql';
console.log(API_URL);

const client = new ApolloClient({
  uri: API_URL,
  credentials: 'include',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${localStorage.getItem('user')}`,
      },
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
