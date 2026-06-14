# Stage 1: Test
FROM node:24-alpine AS test-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run lint
RUN npm run test

# Stage 2: Production
FROM node:24-alpine AS prod-stage

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=test-stage /app/src ./src

CMD ["npm", "run", "cron"]