FROM node:18-alpine AS build
WORKDIR /app

COPY . .
ARG API_URL
ENV API_URL=${API_URL}

RUN npm install

RUN npm run build

# # PARA USAR SERVIDOR DE DESENVOLVIMENTO DO ANGULAR
# RUN npm install -g @angular/cli
# EXPOSE 80
# CMD ["ng","serve","--host","0.0.0.0", "--disable-host-check", "--port","80"]


# Serve Application using Nginx Server
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build /app/dist/dev-house/ /usr/share/nginx/html
EXPOSE 80







# FROM node:18-alpine as build
# WORKDIR /app/src
# COPY package*.json ./
# RUN npm ci
# COPY . ./
# RUN npm run build
# EXPOSE 4200
# CMD [ "npm", "start" ]

# EXPOSE 4000
# CMD [ "node", "/app/src/dist/dev-house/server/server.mjs" ]

# FROM node:18-alpine
# WORKDIR /usr/app
# COPY --from=build /app/src/dist/dev-house/server ./
# CMD node server.mjs
# EXPOSE 4000
