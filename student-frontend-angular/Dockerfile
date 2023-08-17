# FROM node:14.21.3 as base
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# FROM base as build
# COPY . .
# RUN npm run build

# FROM nginx:latest
# COPY --from=build /app/dist/student-frontend-angular /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


FROM node:14.21.3 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM httpd:latest
COPY --from=build /app/dist/student-frontend-angular/ /usr/local/apache2/htdocs/
EXPOSE 80


# # Use an official Node.js runtime as the base image
# FROM node:14

# # Set the working directory inside the container
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install application dependencies
# RUN npm install

# # Copy the built Angular application to the container
# COPY . .

# # Expose the port your Angular application will run on
# EXPOSE 80

# # Command to start the Angular application
# CMD [ "npm", "start" ]