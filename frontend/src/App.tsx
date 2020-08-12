import React from 'react';
import Router from './Router/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './commons/theme/theme';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useUsersQuery, useByeQuery } from 'generated/graphql';
import jwt_decode from 'jwt-decode';

type ContextProps = {
  state: any;
  setState: any;
};

export const Context = React.createContext<ContextProps>({
  state: undefined,
  setState: undefined,
});

function App() {
  //TODO: refactor authentication mechanism, create auth functions

  // get user token from local storage
  const user = localStorage.getItem('user');
  //if we get token from localstorage, try to decode it
  let decoded_token: any;
  try {
    decoded_token = jwt_decode(user!);
    console.log(decoded_token);
  } catch (err) {
    console.log({ error: 'Invalid token provided! Clearing the token!' });
    localStorage.removeItem('user');
  }

  const [state, setState] = React.useState({
    isLoggedIn: user ? true : false,
    email: decoded_token ? decoded_token.email : null,
    userId: decoded_token ? decoded_token.userId : null,
  });

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ state: state, setState: setState }}>
        <Context.Consumer>
          {(value) => {
            return <Router />;
          }}
        </Context.Consumer>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
