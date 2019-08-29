import React, { useState } from 'react';
import styled from '@emotion/styled';
import { withTranslation } from 'react-i18next';
import background from '../../assets/images/background-building.webp';
import logo from '../../assets/images/logo.webp';
import Header from '../components/header';

const Background = styled('div')`
  height: 100vh;
  width: 100vw;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  position: relative;
  top: 0;
  z-index: -1;
`;

const Logo = styled('img')`
  margin: auto;
  width: 400px;
  display: block;
  top: 40vh;
  max-width: 70vw;
  position: relative;
  opacity: ${({ scrolled }) => (scrolled ? 0 : 1)};
  transition: all 0.5s ease-in-out;
  transform: translateY(-50%);
`;

const Description = styled('p')`
  font-family: "Libre Baskerville", serif;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-style: italic;
  font-weight: bold;
  margin: 0;
  padding: 3rem 10vw;
  display: block;
`;

const Home = ({ t }) => {
  const [scrolled, setSrolled] = useState(false);

  if (process.env.BUILD_TARGET === 'client') {
    window.addEventListener('scroll', () => {
      setSrolled(window.scrollY > 10);
    });
  }
  return (
    <>
      <Header />
      <Background><Logo src={logo} alt="Logo Toukan" scrolled={scrolled} /></Background>
      <Description>{t('description')}</Description>
    </>
  );
}

export default withTranslation()(Home);
