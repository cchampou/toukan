import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Row, Item } from '../utils/flex';
import Logo from '../atoms/logo';

const Background = styled(Row)`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  bottom: 0;
  position: absolute;
  width: 100vw;
  text-align: center;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Background>
      <Item>{t('legal')}</Item>
      <Item><Logo width="10rem" /></Item>
      <Item>{t('legal')}</Item>
    </Background>
  );
};

export default Footer;
