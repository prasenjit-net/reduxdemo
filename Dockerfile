FROM node:latest as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# RUN npm install -g parcel@nightly
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/
