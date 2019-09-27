import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import {
  Item, Row, SpacedItem, Spacer,
} from '../utils/flex';
import clipVideo from '../../assets/videos/clipVideo.mp4';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header noWrap bgColor="red" color="white" />
      <Spacer />
      <Row padded>
        <SpacedItem>
          <h1>{t('clip.title')}</h1>
          <p>{t('clip.para1')}</p>
          <p>{t('clip.para2')}</p>
          <p>{t('clip.para3')}</p>
        </SpacedItem>
        <SpacedItem>
          <video src={clipVideo} width="100%" autoPlay loop controls muted>
            <source src={clipVideo} />
          </video>
        </SpacedItem>
      </Row>
    </>
  );
};
export default Contact;
