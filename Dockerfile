FROM node:24.18.0

WORKDIR /myapp
COPY package.json .
RUN npm install

COPY . .
CMD npm start

