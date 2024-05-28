FROM node:22-alpine3.18

WORKDIR /app

# Install Git using apk
RUN apk add --no-cache git
#Install thirdweb
RUN npm i -g thirdweb

# Create web3 app
COPY ./web3 ./web3

WORKDIR /app/web3

RUN npm i


#Create client app
WORKDIR /app

COPY ./client ./client

WORKDIR /app/client

RUN npm i

EXPOSE 5173

CMD ["npm", "run", "dev"]
