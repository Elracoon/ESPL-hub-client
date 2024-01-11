
FROM node:21

WORKDIR /dist

COPY /dist /dist

EXPOSE 5173

CMD [ "npm", "run", "prod" ]

