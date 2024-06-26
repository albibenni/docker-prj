FROM node:20-buster
RUN npm i -g nodemon
USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY --chown=node:node package*.json ./ 
RUN npm ci
COPY --chown=node:node . .
CMD [ "nodemon", "index.js" ]
