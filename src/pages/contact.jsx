import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import Input, { TextArea } from '../atoms/input';
import Button from '../atoms/button';
import { Column, Item, Row } from '../utils/flex';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header noWrap color="purple" />
      <Row padded>
        <h1>{t('contact.project')}</h1>
      </Row>
      <Row padded>
        <Item>
          <h2>{t('contact.information')}</h2>
          {/* <p> */}
          {/*  {t('contact.address1')} */}
          {/*  <br /> */}
          {/*  {t('contact.address2')} */}
          {/* </p> */}
          <p>{t('contact.phone')}</p>
          <p>{t('contact.email')}</p>
          <p>{t('contact.website')}</p>
        </Item>
        <Item>
          <Column>
            <h2>{t('contact.demand')}</h2>
            <Input placeholder="Votre prénom..." />
            <Input placeholder="Votre adresse e-mail..." />
            <Input placeholder="Votre numéro de téléphone..." type="tel" />
            <TextArea placeholder="Votre projet en quelques lignes..."/>
            <Button type="submit">Envoyer</Button>
          </Column>
        </Item>
      </Row>
    </>
  );
};
export default Contact;
