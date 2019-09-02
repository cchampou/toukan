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
  margin-top: -5rem;
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

const Description = styled('div')`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding: 3rem 10vw;
  display: block;
  
  p {
    font-family: "Libre Baskerville", open-sans;
    font-style: italic;
  }
`;

const Services = styled('ul')`
  list-style: number;
  text-align: center;
  
  li {
    line-height: 2rem;
  }
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
      <Header color="white" />
      <Background><ExtendLogo scrolled={scrolled} /></Background>
      <Description>
        <h2>{t('heading1')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('paragraph1') }} />
        <Services>
          <li dangerouslySetInnerHTML={{ __html: t('service1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('service2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('service3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('service4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('service5') }} />
        </Services>
      </Description>
    </>
  );
};

export default Home;
