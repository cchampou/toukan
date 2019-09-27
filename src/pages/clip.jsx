import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import { Item, Row } from '../utils/flex';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header noWrap bgColor="red" color="white" />
      <Row padded>
        <Item>
          <h1>{t('clip.title')}</h1>
          <p>{t('clip.para1')}</p>
          <p>{t('clip.para2')}</p>
          <p>{t('clip.para3')}</p>
        </Item>
        <Item />
      </Row>
    </>
  );
};
export default Contact;
