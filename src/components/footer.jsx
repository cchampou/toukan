import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Item } from '../utils/flex';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Row>
      <Item>{t('legal')}</Item>
      <Item>{t('legal')}</Item>
      <Item>{t('legal')}</Item>
    </Row>
  );
};

export default Footer;
