import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import Logo from '../atoms/logo';
import background1 from '../../assets/images/background-building.webp';
import background2 from '../../assets/images/background-homepage.webp';
import blackMagic from '../../assets/images/blackmagic.webp';
import adobe from '../../assets/images/adobe.webp';
import tickets from '../../assets/images/tickets.webp';

import Header from '../components/header';
import { Item, Row } from '../utils/flex';

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

const Inter = styled('h2')`
  padding: 10rem 0;
  background-image: url("${tickets}");
  backgroud-color: black;
  color: ${({ theme }) => theme.colors.white};
  font-weight: lighter;
  font-size: 2rem;
  text-align: center;
  background-position: center;
  background-attachment: fixed;
  text-transform: uppercase;
`;

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const toggle = () => setScrolled(window.scrollY > 10);

  if (process.env.BUILD_TARGET === 'client') {
    const ScrollReveal = require('scrollreveal').default;
    ScrollReveal().reveal('#blackmagic', { delay: 200, reset: true, distance: '5rem', duration: 1000, origin: 'left' });
    ScrollReveal().reveal('#adobe', { delay: 200, reset: true, distance: '5rem', duration: 1000, origin: 'right' });
  }
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
        <h2>{t('heading1')}</h2><br /><br />
        <p dangerouslySetInnerHTML={{ __html: t('paragraph1') }} />
        <Services>
          <li dangerouslySetInnerHTML={{ __html: t('service1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('service2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('service3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('service4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('service5') }} />
        </Services>
      </Description>
      <Inter>{t('tools')}</Inter>
      <Row padded>
        <Item textAlign="center">
          <img src={blackMagic} alt="blackmagic" id="blackmagic" width="80%" />
        </Item>
        <Item alignSelf="center">
          <h3 dangerouslySetInnerHTML={{ __html: t('powerredByMagic') }}/>
        </Item>
      </Row>
      <Row padded>
        <Item alignSelf="center">
          <h3 dangerouslySetInnerHTML={{ __html: t('powerredByAdobe') }}/>
        </Item>
        <Item textAlign="center">
          <img src={adobe} alt="Adobe" id="adobe" width="80%" />
        </Item>
      </Row>
    </>
  );
};

export default Home;
