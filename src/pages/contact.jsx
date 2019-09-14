import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header';
import Input, { TextArea } from '../atoms/input';
import Button from '../atoms/button';
import { Column, Item, Row } from '../utils/flex';

const Contact = () => {
  const { t } = useTranslation();
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
  });

  const inputHandler = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header noWrap bgColor="purple" color="white" />
      <Row padded>
        <h1>{t('contact.project')}</h1>
      </Row>
      <Row padded wrap>
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
            <Input placeholder="Votre prénom..." name="name" value={contactData.name} onChange={inputHandler} />
            <Input placeholder="Votre adresse e-mail..." name="email" value={contactData.email} onChange={inputHandler} />
            <Input placeholder="Votre numéro de téléphone..." name="tel" type="tel" value={contactData.tel} onChange={inputHandler} />
            <TextArea placeholder="Votre projet en quelques lignes..." name="message" rows={5} value={contactData.message} onChange={inputHandler} />
            <Button type="submit">Envoyer</Button>
          </Column>
        </Item>
      </Row>
    </>
  );
};
export default Contact;
