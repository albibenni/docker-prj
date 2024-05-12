FROM node:12-stretch

# to avoid using root user
USER node

COPY --chown=node:node index.js index.js


CMD [ "node", "index.js" ]
