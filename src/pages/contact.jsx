import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Header from '../components/header';
import Input, { TextArea } from '../atoms/input';
import Button from '../atoms/button';
import { Column, Item, Row } from '../utils/flex';
import Alert from '../atoms/alert';
import { withAnalyticsPageView } from '../utils/analytics';

const Contact = () => {
  const { t } = useTranslation();
  const initialData = {
    name: '',
    email: '',
    tel: '',
    message: '',
  };
  const initialMessage = { content: null, level: '' };
  const [contactData, setContactData] = useState(initialData);
  const [message, setMessage] = useState(initialMessage);

  const inputHandler = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setMessage({ content: 'Votre message est en cours d\'envoi...', level: 'warning' });
    try {
      await axios({
        method: 'post',
        url: '/api/mail',
        data: contactData,
      });
      setMessage({ content: 'Message envoyé avec succès !', level: 'success' });
      setContactData(initialData);
    } catch (e) {
      setMessage({ content: 'Échec de l\'envoi, veuillez reessayer', level: 'fail' });
    }
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
          <p>{t('contact.phone')}</p>
          <p>{t('contact.email')}</p>
          <p>{t('contact.website')}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1153.872146032346!2d4.870434441689313!3d45.74505070477156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1dfb764fa15%3A0x447233ce057d4c!2sPlace%20Ambroise%20Courtois!5e0!3m2!1sfr!2sfr!4v1569612916943!5m2!1sfr!2sfr"
            width="600" height="450" frameBorder="0" style={{ border:0 }} allowFullScreen=""></iframe>
        </Item>
        <Item>
          <form onSubmit={submit}>
            <Column>
              <h2>{t('contact.demand')}</h2>
              <Input placeholder="Votre nom ou raison sociale..." name="name" type="text" value={contactData.name} onChange={inputHandler} required="true" />
              <Input placeholder="Votre adresse e-mail..." name="email" type="email" value={contactData.email} onChange={inputHandler} required="true" />
              <Input placeholder="Votre numéro de téléphone..." name="tel" type="tel" value={contactData.tel} onChange={inputHandler} />
              <TextArea placeholder="Votre projet en quelques lignes..." name="message" rows={5} value={contactData.message} onChange={inputHandler} required="true" />
              <Button type="submit" color="darkGrey">Envoyer</Button>
              <Alert level={message.level}>{message.content}</Alert>
            </Column>
          </form>
        </Item>
      </Row>
    </>
  );
};

export default withAnalyticsPageView(Contact);
