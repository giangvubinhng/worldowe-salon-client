FROM node:16
WORKDIR /client
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
	then yarn install; \
	else yarn install --only=production; \
	fi
COPY . ./
EXPOSE 3000
CMD ["yarn", "run", "dev"]

