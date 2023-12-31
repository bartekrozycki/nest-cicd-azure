FROM node:18-alpine
ENV NODE_ENV production

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Bundle app source
COPY ./dist ./dist

# Install dependencies
RUN npm ci --only=production

# Set the command to run the application when the container starts
CMD [ "npm", "run", "start:prod" ]

EXPOSE 3000
