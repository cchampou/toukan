import { createTransport } from 'nodemailer';

const transporter = createTransport({
  host: 'ssl0.ovh.net',
  port: 465,
  secure: true,
  auth: {
    user: 'toukanmailer@champouillon.com',
    pass: 'ZVyrZQPfmQu_oiK3Hp7M',
  },
});

transporter.verify((error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
});

const sendMail = async (data) => {
  const message = {
    from: 'toukanmailer@champouillon.com',
    to: 'toukan.cinemalyon@gmail.com',
    subject: 'Toukan Cinema contact',
    text: `De la part de : ${data.name}\nEmail : ${data.email}\nTéléphone : ${data.tel}\nMessage : ${data.message}`,
  };
  try {
    await transporter.sendMail(message);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

export default sendMail;
