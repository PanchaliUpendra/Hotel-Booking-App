FROM node:lts-alpine

WORKDIR /hotelbackend

COPY  package*.json ./

RUN npm install --production

COPY . .
EXPOSE 8080

CMD ["npm","start"]