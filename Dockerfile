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

# gemini powered nginx here :P
RUN apk add --no-cache nginx

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=test-stage /app/src ./src

RUN echo 'server { \
  listen 80; \
  location / { \
  root /app/out; \
  try_files $uri $uri/ =404; \
  } \
  }' > /etc/nginx/http.d/default.conf

CMD nginx && npm run cron