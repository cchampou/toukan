FROM node:latest

COPY . .

RUN yarn
RUN PUBLIC_PATH=https://toukancinemalyon.fr/ yarn build

EXPOSE 3000

CMD PUBLIC_PATH=https://toukancinemalyon.fr/ yarn start:prod
