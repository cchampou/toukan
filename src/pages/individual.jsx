import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import { Item, Row } from '../utils/flex';
import { withAnalyticsPageView } from '../utils/analytics';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header noWrap bgColor="yellow" color="white" />
      <Row padded>
        <Item>
          <h1>{t('individual.title')}</h1>
          <p>{t('individual.para1')}</p>
          <p>{t('individual.para2')}</p>
          <p>{t('individual.para3')}</p>
        </Item>
        <Item />
      </Row>
    </>
  );
};
export default withAnalyticsPageView(Contact);
