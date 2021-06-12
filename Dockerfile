FROM node:12.18-alpine as builder
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/
