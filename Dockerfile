FROM node:20.15.0
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD npm run build && npm run preview
EXPOSE 3000
EXPOSE 4173
