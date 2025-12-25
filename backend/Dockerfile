# Use the official PHP CLI image
FROM php:8.2-cli

# Set working directory inside the container
WORKDIR /app

# Copy all backend files into the container
COPY . .

# Expose port 10000 (Render uses this internally)
EXPOSE 10000

# Start PHP built-in server on port 10000
CMD ["php", "-S", "0.0.0.0:10000", "-t", "."]
