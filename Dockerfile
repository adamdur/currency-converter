FROM node:18.16.1-slim
WORKDIR /app
COPY package.json package-lock.json ./
COPY ./dist ./dist
RUN npm ci --production
EXPOSE 8000
CMD ["node", "dist/server/index.js"]
