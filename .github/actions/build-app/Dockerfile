FROM node:10-alpine
LABEL author="Bruno Paulino"
LABEL version="1.0.0"
RUN apk add --no-cache git
COPY entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]