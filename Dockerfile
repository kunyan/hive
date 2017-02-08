FROM node:argon

RUN npm install -g yarn

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

RUN yarn install --pure-lockfile

EXPOSE 8080
CMD [ "npm", "start" ]
