FROM node:20-buster AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine3.19
COPY --from=build /app/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
