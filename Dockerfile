FROM node:lts-buster-slim

WORKDIR /app

COPY . /app

RUN npm install

ENV NODE_ENV production
 
RUN npm run build

EXPOSE 3000
 
CMD [ "npm", "start" ]