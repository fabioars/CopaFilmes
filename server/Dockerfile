FROM node:alpine

RUN apk add yarn

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

ENV NODE_ENV=production
ENV MOVIE_API=https://copadosfilmes.azurewebsites.net
ENV APP_PORT=5000

COPY . .

EXPOSE 5000

ENTRYPOINT ["sh", "run.sh"]
