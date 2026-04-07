FROM node:22-alpine3.21

# Add basics first
RUN apk update && apk upgrade && apk add --no-cache \
    bash \
    nano \
    curl \
    ca-certificates \
    tzdata \
    git \
    iputils \
    openssh 
    
# ADD GIT HUB SSH KEY SCAN FOR COMPOSER
RUN mkdir /root/.ssh/
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

RUN mkdir /var/app

# UPDATE NPM
RUN cd /var/app && npm update

EXPOSE 80

RUN apk update && apk upgrade

WORKDIR /var/app