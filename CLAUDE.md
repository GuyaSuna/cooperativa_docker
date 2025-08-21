# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docker configuration repository for a cooperative management Next.js application. The repository contains Docker Compose configurations for both development and production environments with MySQL database integration.

## Architecture

- **Frontend**: Next.js application with Prisma ORM for database operations
- **Database**: MySQL database for data persistence
- **Containerization**: Docker with separate development and production configurations
- **Development Setup**: Hot reload enabled with volume mounting for the frontend code

## Development Commands

### Environment Setup
```bash
# Copy environment variables template
cp .env.example .env
```

### Development Environment
```bash
# Start development environment with hot reload
docker compose up -d

# Initialize database structure (run after containers are up)
docker compose exec cooperativa_nextjs_app npx prisma migrate dev
```

### Production Environment
```bash
# Start production environment
NODE_ENV=production docker compose -f docker-compose.yml -f docker-compose.prod.yml up
```

### Container Management
```bash
# Connect to the Next.js app container
docker exec -it cooperativa_nextjs_app bash

# View container logs
docker compose logs nextjs

# Stop all services
docker compose down
```

## Important Notes

- The frontend source code should be mounted in a `./frontend` directory (not present in this repository)
- Database migrations are handled through Prisma CLI within the container
- Development environment uses volume mounting for live code updates
- Production environment builds the Next.js application inside the container
- MySQL credentials and configuration are managed through environment variables

## Container Structure

- **nextjs**: Next.js application container running on port 3000
- **database**: MySQL container (implied from environment variables)
- Development uses `npm run dev` command
- Production uses `npm run start` command after building