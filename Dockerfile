# Use the official Node.js image as the base image
FROM node:14-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the remaining application files into the container
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Use a smaller image for serving the Angular application
FROM nginx:alpine

# Copy the built Angular app from the previous stage into the nginx image
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]

