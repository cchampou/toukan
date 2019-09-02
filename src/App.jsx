import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import Home from './pages/home';
import { themes } from '../config';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Legal from './pages/legal';

const globalStyles = css`
  body {
    margin: 0;
    font-family: "Lato";
    min-height: 100vh;
  }
  
  #root {
    min-height: calc(100vh - 12rem);
    position: relative;
    padding-top: 5rem;
    padding-bottom: 7rem;
  }
  
  a {
    text-decoration: inherit;
    color: inherit;
  }
`;

const DarkButton = styled('button')`
  position: fixed;
  right: 1rem;
  top: 40vh;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

const darkModeHandler = (theme, darkMode) => (darkMode
  ? { ...theme, colors: { ...theme.colors, white: theme.colors.black, black: theme.colors.white } }
  : theme);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <ThemeProvider theme={darkModeHandler(themes[1], darkMode)}>
      {/* <DarkButton onClick={toggleDarkMode}><FontAwesomeIcon icon={faMoon} /></DarkButton> */}
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
