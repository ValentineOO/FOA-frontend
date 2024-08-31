# Set the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the frontend
RUN yarn build

# Use a lightweight server to serve the built files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5000

# Start the server
CMD ["serve", "-s", "dist"]
