FROM jenkins/jenkins:lts

USER root

RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    software-properties-common \
    apt-transport-https \
    ca-certificates \
    lsb-release \ 

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest \

RUN curl -fsSL https://get.docker.com | sh

RUN curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose \

RUN usermod -aG docker jenkins

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

USER jenkins