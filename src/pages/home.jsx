import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';
import Logo from '../atoms/logo';
import NewBackground from '../components/background';
import block1 from '../../assets/images/corpo.png';
import block2 from '../../assets/images/sdefdfvrdfv.jpg';
import block3 from '../../assets/images/sxqzedc.jpg';

import Header from '../components/header';
import Materiel from '../components/materiel';
import { withAnalyticsPageView } from '../utils/analytics';

const ExtendLogo = styled(Logo)`
  margin: auto;
  height: auto;
  display: block;
  top: 40vh;
  left: 50%;
  max-width: 90vw;
  position: absolute;
  z-index: 10;
  transition: all 0.5s ease-in-out;
  transform: translate(-50%, -50%);
`;

const Description = styled('div')`
  text-align: center;
  background-color: white;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 10px 20px black;
  margin: 0;
  padding: 3rem 10vw;
  display: block;
  letter-spacing: 1px;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
  }
  
  p {
    font-style: italic;
    font-family: serif;
    line-height: 1.4rem;
    font-size: 1.1rem;
    padding: 0rem 10rem;
  }
  
  @media(max-width: 1024px) {
    p {
      padding: 0;
    }
  }

`;

const Services = styled('ul')`
  list-style: none;
  text-align: center;
  
  li {
    line-height: 2rem;
  }
`;

const Inter = styled('h2')`
  margin: 0; 
  padding: 5rem 0;
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  &:hover div:not(:hover) h3, &:hover div:not(:hover) h4 {
    opacity: 0;
  }
`;

const Block = styled(Link)`
  font-family: "marbre";
  font-size: 1.8rem;
  background-image: url("${block1}");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 12rem 0;
  height: 12rem;
  background-size: 100vw auto;
  background-position: center;
  color: white;
  text-align: center;
  flex: 1 0 15rem;
  transition: flex 0.5s ease-in-out;
  
  @media(max-width: 1024px) {
    flex: 1 0 20rem;  
    padding: 3rem 0;
    height: 4rem;
  }
  
  &:hover {
    flex: 20 0 15rem;
  }
  
  h3, h4 {
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
    margin: 0;
    transition: all 0.25s;
  }
  h4 {
    font-family: "marbre bold";
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    text-transform: uppercase;
    margin-bottom: 8rem;
  }
`;

const Block2 = styled(Block)`
  background-image: url("${block2}");
`;

const Block3 = styled(Block)`
  background-image: url("${block3}");
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
      <Header bgColor="white" color="black" />
      <NewBackground><ExtendLogo scrolled={scrolled} /></NewBackground>
      <Description>
        <h2>{t('heading1')}</h2>
        <br />
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
        <Block to="/corporate">
          <h3>{t('homepage.service1.title')}</h3>
          <h4>{t('homepage.service1.target')}</h4>
        </Block>
        <Block2 to="/clip">
          <h3>{t('homepage.service2.title')}</h3>
          <h4>{t('homepage.service2.target')}</h4>
        </Block2>
        <Block3 to="/individual">
          <h3>{t('homepage.service3.title')}</h3>
          <h4>{t('homepage.service3.target')}</h4>
        </Block3>
      </Wrapper>
      <Inter>{t('tools')}</Inter>
      <Materiel />
    </>
  );
};

export default withAnalyticsPageView(Home);
