# Daleel Balady - Local Services Marketplace

## Overview
A full-stack local services marketplace platform that connects users with service providers in their area. The application allows users to search, discover, and connect with trusted local service providers.

**Current State:** Fully functional and running on Replit
**Last Updated:** October 21, 2025

## Tech Stack

### Frontend
- React 18.3.1 with TypeScript
- Vite 5.4.20 (build tool and dev server)
- Tailwind CSS 3.4.17 (styling)
- Wouter 3.3.5 (routing)
- React Hook Form + Zod (form validation)
- Radix UI components (UI primitives)
- React Query (data fetching)
- Leaflet + React Leaflet (maps)

### Backend
- Node.js with Express 4.21.2
- TypeScript 5.6.3
- PostgreSQL (Neon-backed Replit database)
- Drizzle ORM 0.39.1
- Passport.js (authentication)
- Express Session

## Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── contexts/      # React contexts (Language, Theme)
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and helpers
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── vite.ts           # Vite middleware setup
│   └── storage.ts        # Database connection
├── shared/               # Shared code between client/server
│   └── schema.ts         # Drizzle database schema
├── attached_assets/      # Static assets
└── migrations/           # Database migrations
```

## Development Setup

### Environment Variables
The application uses the following Replit-provided environment variables:
- `DATABASE_URL` - PostgreSQL connection string (auto-configured)
- `PORT` - Server port (defaults to 5000)

### Running Locally
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm start            # Start production server
npm run db:push      # Push database schema changes
npm run check        # TypeScript type checking
```

### Database Schema
The database currently includes:
- **users** table with username/password authentication

## Deployment Configuration
- **Target:** Autoscale (stateless web application)
- **Build:** `npm run build`
- **Run:** `npm start`
- **Port:** 5000 (frontend + backend on same port)

## Important Configuration Notes

### Vite Development Server
- Configured with `allowedHosts: true` to work with Replit's proxy
- Server binds to `0.0.0.0:5000` for proper Replit integration
- HMR (Hot Module Reload) enabled for development

### Server Configuration
- Single Express server serves both frontend and API
- API routes under `/api` prefix
- Frontend served via Vite middleware in dev, static files in production
- Proper cache control headers configured

## Recent Changes
- **Oct 21, 2025:** Initial import and setup in Replit environment
  - Installed all dependencies
  - Created PostgreSQL database
  - Pushed database schema
  - Configured development workflow
  - Set up deployment configuration
  - Verified application runs successfully

## Features
Based on the visible components, the application includes:
- Hero section with service search
- Categories browsing
- Local service provider listings
- User authentication (login/signup)
- Multi-language support
- Theme switching (light/dark mode)
- Company information pages
- Blog functionality
- Pricing information
- Interactive map integration for location-based services
