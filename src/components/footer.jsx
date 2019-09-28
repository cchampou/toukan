import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Row, Item } from '../utils/flex';
import Logo from '../atoms/logo';

const Background = styled(Row)`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  bottom: 0;
  position: absolute;
  width: 100vw;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 2rem;
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Background padded>
      <Item><Link to="/legal">{t('legal')}</Link></Item>
      <Item><Logo width="1rem" light /></Item>
      <Item><Link to="/contact">{t('contact.title')}</Link></Item>
    </Background>
  );
};

export default Footer;
