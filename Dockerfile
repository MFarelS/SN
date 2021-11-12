FROM buildkite/puppeteer:latest

RUN apt update
RUN apt install ffmpeg -y

RUN npm install
CMD ["npm", "start"]
EXPOSE 8080
