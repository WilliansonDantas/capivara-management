FROM node:16

WORKDIR /app

COPY capivara-management/package*.json ./

RUN npm install

COPY capivara-management/ .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]