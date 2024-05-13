FROM node:12-stretch

USER node

# create the folder as node user so you can modify it and use the npm install
RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node . .

RUN npm ci

CMD [ "node", "index.js" ]
