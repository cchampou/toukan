import React from 'react';
import Header from '../components/header';
import Input from '../atoms/input';
import Button from '../atoms/button';

const Contact = () => (
  <>
    <Header noWrap />
    <Input placeholder="Votre prénom..." />
    <Input placeholder="Votre adresse e-mail..." />
    <Button>Envoyer</Button>
  </>
);
export default Contact;
