FROM node:20-slim

#User default with id 1000
USER node
#User directory with id 1000
WORKDIR /home/node/app

#Given permission to user node
#COPY --chown=node:node package*.json ./
#RUN npm install
CMD ["/home/node/app/.docker/start.sh"]
