import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation, withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import background1 from '../../assets/images/background-building.webp';
import background2 from '../../assets/images/background-homepage.webp';

import logo from '../../assets/images/logo.webp';
import Header from '../components/header';
import Footer from '../components/footer';

const backgrounds = [background1, background2];

const Background = styled('div')`
  height: 100vh;
  width: 100vw;
  background-image: url("${({ theme }) => backgrounds[theme.index]}");
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

const Home = () => {
  const [scrolled, setSrolled] = useState(false);
  const { t } = useTranslation();

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
      <Footer />
    </>
  );
};

export default Home;
