FROM node:14.16

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "app:dev" ]