FROM node:19.0.1-bullseye-slim

RUN mkdir /myapp
WORKDIR /myapp
COPY . /myapp/
RUN npm ci
