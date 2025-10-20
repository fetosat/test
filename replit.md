# Daleel Balady - Local Services Directory Platform

## Overview
Daleel Balady is a modern, bilingual (Arabic/English) local services directory and platform built to help users discover and connect with trusted service providers. The application features a beautiful, animated UI with glassmorphism design, dark/light themes, and advanced search capabilities.

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + Node.js
- **UI Framework**: TailwindCSS + Shadcn/UI components
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack React Query
- **Routing**: Wouter
- **Database ORM**: Drizzle ORM (configured for PostgreSQL)
- **Themes**: next-themes (dark/light mode support)

## Project Structure
```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── contexts/    # Language and Theme contexts
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions and mock data
│   │   └── pages/       # Page components (Home, Find, etc.)
│   └── index.html       # HTML entry point
├── server/              # Backend Express server
│   ├── index.ts        # Main server entry
│   ├── routes.ts       # API route handlers
│   ├── vite.ts         # Vite dev server integration
│   └── storage.ts      # Database storage interface
├── shared/              # Shared TypeScript schemas
└── attached_assets/     # Generated images and design assets
```

## Development Setup

### Running the Application
The application runs on port 5000 and serves both the frontend and backend:

```bash
npm run dev
```

This starts the Express server with Vite middleware for hot module replacement in development.

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

## Key Features
1. **Bilingual Support**: Full Arabic (RTL) and English (LTR) support with language context
2. **Dark/Light Themes**: Animated theme switching with next-themes
3. **Modern UI**: Glassmorphism design with Framer Motion animations
4. **Service Discovery**: Advanced search and filtering for local services
5. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
6. **Component Library**: Extensive Shadcn/UI components (40+ components)

## Environment Configuration
- **Port**: 5000 (configured to bind to 0.0.0.0 for Replit environment)
- **Vite Dev Server**: Configured with `allowedHosts: true` for Replit proxy compatibility
- **Node.js**: v20.19.3
- **npm**: v10.8.2

## Deployment
The application is configured for Replit's autoscale deployment:
- **Build**: `npm run build` (compiles both frontend and backend)
- **Start**: `npm start` (serves the built application)
- **Deployment Type**: Autoscale (stateless web application)

## Recent Changes
- **2025-10-20**: Initial setup for Replit environment
  - Configured server to bind to 0.0.0.0:5000
  - Set up workflow for development server
  - Configured deployment for autoscale
  - Verified Vite dev server allows all hosts for proxy compatibility

## Architecture Notes
- The Express server uses middleware mode with Vite for seamless HMR in development
- In production, the server serves pre-built static assets from `dist/public`
- All API routes should be prefixed with `/api` (configured in routes.ts)
- The storage layer is abstracted for easy database integration

## Design Guidelines
See `design_guidelines.md` for detailed design specifications including:
- Color palette and gradients
- Typography guidelines
- Animation patterns
- Glassmorphism effects
- Component styling conventions
