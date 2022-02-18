FROM node:17.5-alpine

WORKDIR /workspace

ADD . /workspace

RUN cd hello-ts && npm i

RUN cd hello-ts && npx tsc

CMD cd hello-ts && node --experimental-specifier-resolution=node dist/index.js
