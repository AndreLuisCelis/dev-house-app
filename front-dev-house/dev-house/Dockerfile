FROM node:18-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build 
EXPOSE 4000
CMD [ "node", "/app/src/dist/dev-house/server/server.mjs" ]

# FROM node:18-alpine
# WORKDIR /usr/app
# COPY --from=build /app/src/dist/dev-house/server ./
# CMD node server.mjs
# EXPOSE 4000
