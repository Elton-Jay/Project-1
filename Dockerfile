#clear instruction what is happening when using docker


# 1. Start with a pre-made Node.js environment
FROM node:18

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy your 'parts list' and install dependencies
COPY package*.json ./
COPY package-lock.json* ./
RUN npm install

# 4. Copy the rest of your code
COPY . .

# 5. Tell the container which port to open
EXPOSE 3000

# 6. The command to run your app
CMD ["node", "server.js"]

ENV PORT=3000

# FROM nginx:alpine

# # Remove default nginx site
# RUN rm -rf /usr/share/nginx/html/*

# # Copy your website files
# COPY site/ /usr/share/nginx/html/

# EXPOSE 80