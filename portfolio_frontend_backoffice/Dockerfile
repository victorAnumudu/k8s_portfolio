
# Stage 1: Build the React application
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency information
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the React project source code
COPY . .

# Build the production application
RUN npm run build

# Collect the output from either Vite or Create React App
RUN mkdir -p /out && \
    if [ -d dist ]; then \
      cp -a dist/. /out/; \
    elif [ -d build ]; then \
      cp -a build/. /out/; \
    else \
      echo "Build output not found: expected dist/ or build/" && exit 1; \
    fi

# Stage 2: Serve the production files
FROM nginx:alpine

COPY --from=builder /out/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
