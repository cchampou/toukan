import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Logo from '../atoms/logo'

import background1 from '../../assets/images/background-building.webp';
import background2 from '../../assets/images/background-homepage.webp';

import Header from '../components/header';

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

const ExtendLogo = styled(Logo)`
  margin: auto;
  width: 400px;
  height: auto;
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
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const toggle = () => setScrolled(window.scrollY > 10);

  useEffect(() => {
    window.addEventListener('scroll', toggle);
    return () => {
      window.removeEventListener('scroll', toggle);
    };
  }, []);
  return (
    <>
      <Header />
      <Background><ExtendLogo scrolled={scrolled} /></Background>
      <Description>{t('description')}</Description>
    </>
  );
};

export default Home;