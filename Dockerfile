FROM node:carbon
ARG NODE_ENV

ENV NODE_ENV ${NODE_ENV}

# Create app directory
WORKDIR /app
# Bundle app source
COPY . /app

RUN npm install
RUN npm run build

CMD [ "npm", "start" ]
