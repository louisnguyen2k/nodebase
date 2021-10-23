FROM node:12.18-alpine as builder
# ENV NODE_ENV=production

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .

ENV PATH=$PATH:./node_modules/.bin
RUN echo $PATH

RUN yarn build
EXPOSE 2024
CMD ["yarn", "start"]

