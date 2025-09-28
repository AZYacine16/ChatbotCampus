FROM node:18
WORKDIR /app
COPY . /app
RUN apt-get update && apt-get install -y curl && npm install express
CMD ["node", "app.js"]