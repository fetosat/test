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
- **Oct 21, 2025:** Massive dashboard feature expansion
  - Extended database schema with providers, listings, services, bookings, reviews, payments, messages, and categories tables
  - Built complete Admin Dashboard with 10 pages:
    - Overview with KPIs, charts, and analytics
    - Users management with filters and actions
    - Providers management with approval workflow
    - Bookings management with calendar view
    - Payments tracking
    - Reviews moderation
    - Analytics with comprehensive charts
    - System settings
    - Services management
    - Listings management
  - Built complete Provider Dashboard with 9 pages:
    - Business overview with metrics
    - My Listings with CRUD operations
    - Services management
    - Bookings with calendar and list views
    - Customers management
    - Earnings tracking with charts
    - Reviews management with reply functionality
    - Real-time messaging interface
    - Business settings
  - Created reusable dashboard components:
    - KPI cards with animations
    - Data tables with pagination
    - Status badges
    - Responsive sidebar navigation
    - Top bar with search, notifications, and user menu
  - Implemented authentication system with passport.js
  - Added role-based access control (admin/provider/user)
  - Created backend API routes for all dashboard operations
  - Added comprehensive Arabic/English translations for all dashboard features
  - Integrated Recharts for beautiful analytics visualizations
  - Configured session management with PostgreSQL store

- **Oct 21, 2025:** Initial import and setup in Replit environment
  - Installed all dependencies
  - Created PostgreSQL database
  - Pushed database schema
  - Configured development workflow
  - Set up deployment configuration
  - Verified application runs successfully

## Features

### Public Features
- Hero section with service search
- Categories browsing
- Local service provider listings
- User authentication (login/signup)
- Multi-language support (Arabic/English)
- Theme switching (light/dark mode)
- Company information pages
- Blog functionality
- Pricing information
- Interactive map integration for location-based services

### Admin Dashboard Features
- **Overview**: Real-time KPIs, revenue charts, activity timeline
- **Users Management**: Full CRUD, role management, status controls
- **Providers Management**: Approval workflow, verification system
- **Bookings**: Calendar view, status management, filtering
- **Payments**: Transaction tracking, payment methods
- **Reviews**: Moderation, category filtering
- **Analytics**: Revenue trends, category performance, user growth, provider statistics
- **Settings**: Platform configuration, system management
- **Comprehensive charts**: Line, bar, pie, area charts with Recharts
- **Responsive design**: Mobile-first, glassmorphism effects
- **Real-time updates**: Live data with Framer Motion animations

### Provider Dashboard Features
- **Business Overview**: Earnings, bookings, customer metrics, rating statistics
- **My Listings**: Create/edit/delete listings, nested services management
- **Services**: Price, duration, status management per listing
- **Bookings Calendar**: Visual calendar with color-coded status, list view with filters
- **Customers**: Client history, contact info, booking patterns
- **Earnings**: Monthly trends, transaction history, payout tracking
- **Reviews**: Rating distribution, customer feedback, reply functionality
- **Messages**: Real-time chat interface with customers
- **Settings**: Business info, availability, payment preferences
- **Beautiful charts**: Trend analysis, performance metrics
- **Mobile responsive**: Works perfectly on all devices
