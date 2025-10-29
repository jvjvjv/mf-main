# Module Federation Configuration

This application is set up to use Module Federation with Next.js 15.

## Installed Dependencies

- `@module-federation/nextjs-mf`: Module Federation integration for Next.js
- `@mui/material`: Material-UI component library
- `@mui/icons-material`: Material-UI icons

## Module Federation Setup

The application is configured as a federated module that can:
1. Expose its Dashboard component to other applications
2. Consume remote modules from other federated applications

### Configuration

The Module Federation plugin is installed and ready to be configured in `next.config.js`.

To activate Module Federation, uncomment the webpack configuration in `next.config.js` that includes:
- **Name**: `main` - identifies this application in the federation
- **Exposes**: `./dashboard` - exposes the Dashboard component
- **Shared modules**: React and React-DOM are configured as singletons

### Usage

The Dashboard component (`app/components/Dashboard.tsx`) is designed to be:
- Used locally in this application
- Exposed to other federated applications via Module Federation

## Dashboard Features

The dashboard includes:
- Responsive sidebar navigation
- Material-UI themed components
- Statistics cards showing key metrics
- Activity and stats panels
- Mobile-responsive design

## Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
```
