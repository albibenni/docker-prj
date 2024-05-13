FROM node:12-stretch

USER node

# create the folder as node user so you can modify it and use the npm install
RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node package-lock.json package.json ./

RUN npm cache clean --force
RUN npm install

COPY --chown=node:node . .

CMD [ "node", "index.js" ]
