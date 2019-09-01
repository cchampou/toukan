import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Home from './pages/home';
import { themes } from '../config';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Legal from './pages/legal';
import styled from '@emotion/styled';

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

const DarkButton = styled('button')`

`;


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={themes[0]}>
      <DarkButton></DarkButton>
      <Global styles={globalStyles} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/legal" component={Legal} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
