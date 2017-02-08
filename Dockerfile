FROM node:argon

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
ENTRYPOINT ["sh", "./entrypoint.sh"]
CMD [ "npm", "start" ]
