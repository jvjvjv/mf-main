# MF Main - Next.js 15 Dashboard with Module Federation

A modern dashboard application built with Next.js 15, Material-UI, and Module Federation support.

![Dashboard Screenshot](https://github.com/user-attachments/assets/9fabbebc-c24a-4272-a856-6035bae13912)

## Features

- ✅ **Next.js 15** - Latest version with Pages Router
- ✅ **Material-UI v6** - Modern, responsive UI components
- ✅ **Module Federation Ready** - Configured with @module-federation/nextjs-mf
- ✅ **TypeScript** - Full type safety
- ✅ **Dashboard Layout** - Responsive sidebar navigation with statistics cards
- ✅ **Professional Design** - Clean, modern interface with Material Design

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: @mui/material v6
- **Icons**: @mui/icons-material
- **Styling**: Emotion (CSS-in-JS)
- **Module Federation**: @module-federation/nextjs-mf
- **Language**: TypeScript

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build

```bash
npm run build
```

### Production

```bash
npm run build
npm start
```

## Dashboard Components

The dashboard includes:

- **Statistics Cards**: Display key metrics (Revenue, Sales, Users, Growth)
- **Sidebar Navigation**: Responsive navigation with Dashboard, Users, Analytics, and Settings
- **Activity Panel**: Area for charts and activity feeds
- **Quick Stats**: Additional statistics display
- **Mobile Responsive**: Drawer navigation for mobile devices

## Module Federation

This application is configured to work with Module Federation, allowing it to:
- Expose its Dashboard component to other applications
- Consume remote modules from other federated applications

The Module Federation configuration is ready in `next.config.js` but currently commented out. See `MODULE_FEDERATION.md` for details on activating and using Module Federation.

## Project Structure

```
├── components/          # Reusable React components
│   ├── Dashboard.tsx   # Main dashboard component
│   ├── theme.ts        # Material-UI theme configuration
│   └── createEmotionCache.ts
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper with theme provider
│   ├── _document.tsx  # Document with Emotion setup
│   └── index.tsx      # Home page
├── styles/            # Global styles
│   └── globals.css
└── next.config.js     # Next.js configuration with MF ready

```

## License

MIT
