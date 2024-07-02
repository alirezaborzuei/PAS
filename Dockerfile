# Stage 1: Build the project
FROM node:18.17.0-alpine AS builder

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Stage 2: Run the built project
FROM node:18.17.0-alpine

WORKDIR /usr/src/app

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm install --force --production

# Copy the build output from the builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.js ./next.config.js
COPY --from=builder /usr/src/app/tailwind.config.js ./tailwind.config.js 
COPY --from=builder /usr/src/app/postcss.config.js ./postcss.config.js

# Expose the port the app runs on
EXPOSE 5000

# Run the app with 'next start'
CMD ["npx", "next", "start", "-p", "5000"]