FROM node:15
WORKDIR /client
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
	then yarn install; \
	else yarn install --only=production; \
	fi
COPY . ./
EXPOSE 5000
CMD ["yarn", "run", "dev"]

