FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

ENV NODE_ENV=production
ENV SERVER_PORT=10000

EXPOSE 10000

CMD ["npm", "start"]