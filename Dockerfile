FROM node

WORKDIR /app

ADD . /app

CMD node src/index.mjs
