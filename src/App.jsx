import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Home from './pages/home';
import { theme } from '../config';

const globalStyles = css`
  body {
    margin: 0;
    font-family: "Lato";
  }
  
  a {
    text-decoration: inherit;
    color: inherit;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </ThemeProvider>
);

export default App;
