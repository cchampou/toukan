import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import background from '../../assets/images/background-homepage.webp';
import logo from '../../assets/images/logo.webp';

const Background = styled('div')`
  height: 100vh;
  width: 100vw;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  position: relative;
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

const Home = () => {
  const { t } = useTranslation();

  return (
    <Background>
      <Logo src={logo} alt="Logo Toukan" />
      {t('home')}
    </Background>
  );
};

export default Home;
