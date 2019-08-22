import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { css, Global } from '@emotion/core';
import Home from './pages/Home';

const globalStyles = css`
  body {
    margin: 0;
  }
`;

const App = () => (
  <>
    <Global styles={globalStyles} />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
);

export default App;
