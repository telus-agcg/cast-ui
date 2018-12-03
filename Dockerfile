# base layer
FROM node:11-alpine AS base

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# development layer, no dependencies, handled in bin/setup for development
FROM base AS development

COPY . /usr/src/app

CMD npm run storybook

# test layer, all dependencies
FROM base AS test

RUN \
  apk add --no-cache git openssh && \
    npm install

COPY . /usr/src/app

CMD npm test

# release layer, production related dependencies
FROM base AS release

COPY . /usr/src/app

RUN \
  npm install --production && \
  npm cache clean --force && \
  rm -rf ~/.npm

COPY . /usr/src/app

CMD npm run release
