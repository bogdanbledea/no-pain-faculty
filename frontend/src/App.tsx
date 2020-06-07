import React from 'react';
import Router from './Router/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './commons/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
