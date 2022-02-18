FROM node

WORKDIR /app

ADD . /app

RUN cd lib && npm i

RUN cd lib && npx tsc
