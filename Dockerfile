FROM node:14-alpine

ARG PUBLIC_PATH
ENV PUBLIC_PATH $PUBLIC_PATH

COPY package.json .
COPY yarn.lock .

RUN yarn --network-timeout 3600000

COPY . .

RUN PUBLIC_PATH=$PUBLIC_PATH yarn build

EXPOSE 3000

CMD PUBLIC_PATH=$PUBLIC_PATH yarn start:prod
