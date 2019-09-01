import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Home from './pages/home';
import { themes } from '../config';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

const globalStyles = css`
  body {
    margin: 0;
    font-family: "Lato";
    min-height: 100vh;
  }
  
  #root {
    min-height: calc(100vh - 5rem);
    position: relative;
    padding-bottom: 5rem;
  }
  
  a {
    text-decoration: inherit;
    color: inherit;
  }
`;

const App = () => (
  <ThemeProvider theme={themes[0]}>
    <Global styles={globalStyles} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    <Footer />
  </ThemeProvider>
);

export default App;
