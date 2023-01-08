# ==============================
# BUILDER
# ==============================
FROM node:12.17.0-alpine as builder

WORKDIR /home/src

COPY package.json ./
COPY tsconfig.json ./
COPY tslint.json ./

COPY .env ./
COPY src ./src

RUN npm install
RUN npm run build


# ==============================
# RUNNER
# ==============================

FROM node:12.17.0-alpine

ARG ARG_VERSION=local

ENV VERSION=${ARG_VERSION}
ENV SERVER_HOST=0.0.0.0
ENV SERVER_PORT=8080
ENV NODE_ENV=production
ENV TZ America/Argentina/Buenos_Aires

WORKDIR /home/src

COPY package.json ./
RUN npm install --only=production

COPY --from=builder /home/src/dist ./dist
COPY .env ./

EXPOSE 8080

CMD ["node","."]