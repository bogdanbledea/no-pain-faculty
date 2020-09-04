import React from 'react';
import Router from './Router/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './commons/theme/theme';
// import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';
// import { useUsersQuery, useByeQuery } from 'generated/graphql';
import jwtDecode from 'jwt-decode';

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
  let decodedToken: any;
  try {
    decodedToken = jwtDecode(user!);
    console.log(decodedToken);
  } catch (err) {
    console.log({ error: 'Invalid token provided! Clearing the token!' });
    localStorage.removeItem('user');
  }

  const [state, setState] = React.useState({
    isLoggedIn: user ? true : false,
    email: decodedToken ? decodedToken.email : null,
    userId: decodedToken ? decodedToken.userId : null,
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
