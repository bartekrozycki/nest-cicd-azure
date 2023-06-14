FROM node:18-alpine
ENV NODE_ENV production
ENV DOCKER_REGISTRY_SERVER_USERNAME bartekrozycki
ENV DOCKER_REGISTRY_SERVER_PASSWORD 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

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Bundle app source
COPY ./dist ./dist

# Install dependencies
RUN npm ci --only=production


# Expose the port that the NestJS application listens on
EXPOSE 3000

# Set the command to run the application when the container starts
CMD [ "npm", "run", "start:prod" ]
