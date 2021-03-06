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
import Corpo from './pages/corpo';
import Clip from './pages/clip';
import Individual from './pages/individual';
import Portfolio from './pages/portfolio';
import Legal from './pages/legal';
import Marbre from '../assets/marbre.otf';
import MarbreBold from '../assets/marbre_bold.otf';
import Poppins from '../assets/Poppins-Regular.ttf';
import PortfolioDetails from './pages/portfolioDetails';
import ScrollToTop from './utils/scrollToTop';

const globalStyles = css`
  @font-face {
    src: url("${Marbre}");
    font-family: "Marbre";
  }
  @font-face {
    src: url("${Poppins}");
    font-family: "Poppins";
  }
  @font-face {
    src: url("${MarbreBold}");
    font-family: "Marbre Bold";
  }

  body {
    margin: 0;
    font-family: "Lato";  
    min-height: 100vh;
    // letter-spacing: 0.1rem;
    overflow-x:hidden;
  }
  
  #root {
    overflow-x:hidden;
    min-height: calc(100vh - 10rem);
    position: relative;
    padding-top: 4rem;
    padding-bottom: 6rem;
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
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/portfolio/:id" component={PortfolioDetails} />
        <Route exact path="/corporate" component={Corpo} />
        <Route exact path="/clip" component={Clip} />
        <Route exact path="/individual" component={Individual} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/legal" component={Legal} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
