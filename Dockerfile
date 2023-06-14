FROM node:18-alpine
ENV NODE_ENV production

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production


# Copy the rest of the application code to the container
COPY . .

# Expose the port that the NestJS application listens on
EXPOSE 3000

USER node
# Set the command to run the application when the container starts
CMD [ "npm", "run", "start:prod" ]
