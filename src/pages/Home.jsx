import React from 'react';
import styled from '@emotion/styled';
import background from '../../assets/images/background-homepage.webp';
import logo from '../../assets/images/logo.webp';
import { withTranslation } from 'react-i18next';

const Background = styled('div')`
  height: 100vh;
  width: 100vw;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: -1;
`;

const Logo = styled('img')`
  margin: auto;
  width: 400px;
  display: block;
  top: 40vh;
  max-width: 70vw;
  position: relative;
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

const Home = ({ t }) => (
  <>
    <Background><Logo src={logo} alt="Logo Toukan" /></Background>
    <Description>{t('description')}</Description>
  </>
);

export default withTranslation()(Home);
