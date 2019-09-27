import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import { Row, SpacedItem, Spacer } from '../utils/flex';
import corpoVideo from '../../assets/videos/corpoVideo.mp4';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header noWrap bgColor="deepPurple" color="white" />
      <Spacer />
      <Row padded wrap>
        <SpacedItem>
          <h1>{t('corpo.title')}</h1>
          <p>{t('corpo.para1')}</p>
          <p>{t('corpo.para2')}</p>
          <p>{t('corpo.para3')}</p>
        </SpacedItem>
        <SpacedItem>
          <video src={corpoVideo} width="100%" autoPlay loop controls muted>
            <source src={corpoVideo} />
          </video>
        </SpacedItem>
      </Row>
    </>
  );
};
export default Contact;
