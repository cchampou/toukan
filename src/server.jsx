import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import compression from 'compression';
import i18nextMiddleware from 'i18next-express-middleware';
import { renderToString } from 'react-dom/server';
import bodyParser from 'body-parser';
import i18n from './i18n';
import App from './App';
import { sendMail } from './server/mail.utils';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(compression())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(i18nextMiddleware.handle(i18n))
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .post('/api/mail', async (req, res) => {
    try {
      await sendMail(req.body);
      return res.status(200).send('OK');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      return res.status(500).send(e);
    }
  })
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>,
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="fr">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Toukan Cinema</title>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000">
        <meta name="Description" content="Toukan Cinema, production audiovisuelle sur Lyon.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Lato|Libre+Baskerville&display=swap" rel="stylesheet">
        ${
  assets.client.css
    ? `<link rel="stylesheet" href="${assets.client.css}">`
    : ''
}
        ${
  process.env.NODE_ENV === 'production'
    ? `<script src="${assets.client.js}" defer></script>`
    : `<script src="${assets.client.js}" defer crossorigin></script>`
}
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`,
      );
    }
  });

export default server;
