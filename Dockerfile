# Use Node.js official image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies including nodemon for development
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code
COPY . .

# Copy the entrypoint script
COPY entrypoint.sh /app/entrypoint.sh

# Make sure the entrypoint script is executable
RUN chmod +x /app/entrypoint.sh
# Expose the port
EXPOSE 8080

# Set the default command to run your app with nodemon
ENTRYPOINT ["/app/entrypoint.sh"]