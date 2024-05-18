# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Install dependencies
# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Step 4: Copy the rest of the application code
COPY . .

# Step 5: Build the application
RUN npm run build

# Step 6: Use a minimal base image for the final stage
FROM node:18-alpine AS runtime

# Step 7: Set the working directory
WORKDIR /app

# Step 8: Copy the built application from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

# Step 9: Set environment variables
ENV NODE_ENV=production

# Step 10: Expose the port the app runs on
EXPOSE 3000

# Step 11: Define the command to run the application
CMD ["node", "dist/main"]

