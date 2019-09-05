import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import Logo from '../atoms/logo';
import background1 from '../../assets/images/background-building.webp';
import background2 from '../../assets/images/background-homepage.webp';
import blackMagic from '../../assets/images/blackmagic.webp';
import adobe from '../../assets/images/adobe.webp';
import tickets from '../../assets/images/tickets.webp';
import block1 from '../../assets/images/dzedzfz.jpg';
import block2 from '../../assets/images/sdefdfvrdfv.jpg';
import block3 from '../../assets/images/sxqzedc.jpg';

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
  height: auto;
  display: block;
  top: 40vh;
  max-width: 90vw;
  position: relative;
  // opacity: ${({ scrolled }) => (scrolled ? 0 : 1)};
  transition: all 0.5s ease-in-out;
  transform: translateY(-50%);
`;

const Description = styled('div')`
  text-align: center;
  background-color: white;
  // background: linear-gradient(transparent, white 10%);
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 10px 20px black;
  margin: 0;
  padding: 3rem 10vw;
  display: block;
  p {
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
  margin: 0; 
  padding: 5rem 0;
  // background-image: url("${tickets}");
  backgroud-color: black;
  color: ${({ theme }) => theme.colors.black};
  font-weight: lighter;
  font-size: 2rem;
  text-align: center;
  background-position: center;
  background-attachment: fixed;
  text-transform: uppercase;
`;

const Wrapper = styled('div')`
  position: relative;
  height: 40rem;
`;

const Block = styled('div')`
  font-family: "marbre";
  font-size: 1.8rem;
  background-image: url("${block1}");
  background-color: ${({ theme }) => theme.colors.black};
  padding: 6rem 0;
  background-size: 100vw auto;
  background-position: center;
  color: white;
  text-align: center;
  width: 33.33%;
  float: left;
  position: absolute;
  transition: width 0.5s ease-in-out, z-index 0.5s step-end;
  
  &:hover {
    transition: width 0.5s ease-in-out, z-index 0.5s step-start;
    width: 100%;
    left: 0;
    z-index: 11;
  }
  
  h3 {
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
    margin: 0;
  }
  h4 {
    font-family: "marbre bold";
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    text-transform: uppercase;
    margin-bottom: 8rem;
  }
`;

const Block2 = styled(Block)`
  background-image: url("${block2}");
  left: 33.33%;
`;

const Block3 = styled(Block)`
  background-image: url("${block3}");
  left: 66.66%;
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
      <Wrapper>
        <Block>
          <h3>{t('homepage.service1.title')}</h3>
          <h4>{t('homepage.service1.target')}</h4>
        </Block>
        <Block2>
          <h3>{t('homepage.service2.title')}</h3>
          <h4>{t('homepage.service2.target')}</h4>
        </Block2>
        <Block3>
          <h3>{t('homepage.service3.title')}</h3>
          <h4>{t('homepage.service3.target')}</h4>
        </Block3>
      </Wrapper>
      <Inter>{t('tools')}</Inter>
      <Row padded>
        <Item textAlign="center">
          <img src={blackMagic} alt="blackmagic" id="blackmagic" width="80%" />
          <h3 dangerouslySetInnerHTML={{ __html: t('powerredByMagic') }}/>
        </Item>
        <Item alignSelf="center">
          <img src={adobe} alt="Adobe" id="adobe" width="80%" />
          <h3 dangerouslySetInnerHTML={{ __html: t('powerredByAdobe') }}/>
        </Item>
      </Row>
      {/*<Inter2>{t('homepage.services')}</Inter2>*/}
    </>
  );
};

export default Home;
