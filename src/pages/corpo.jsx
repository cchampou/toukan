import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import { Item, Row } from '../utils/flex';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header noWrap bgColor="deepPurple" color="white" />
      <Row padded>
        <Item>
          <h1>{t('corpo.title')}</h1>
          <p>{t('corpo.para1')}</p>
          <p>{t('corpo.para2')}</p>
          <p>{t('corpo.para3')}</p>
        </Item>
        <Item />
      </Row>
    </>
  );
};
export default Contact;
