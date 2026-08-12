# PAS — Emergency SMS System 🚨

PAS is a **personal portfolio project for an emergency SMS and alert management system**. The application is designed around the idea of quickly managing emergency alerts, locations, and recipients through a modern web interface.

> This repository is a personal sample project and is intended to demonstrate frontend engineering, state management, mapping, responsive UI, and integration patterns. It does not contain company source code or confidential business data.

## What this project demonstrates

- 🚨 Emergency alert / SMS workflow concepts
- 📍 Location and map-based functionality
- 🗺️ Map integration with Mapbox / MapLibre and Map.ir components
- 🔄 Global state management with Redux Toolkit
- 🌐 HTTP/API integration with Axios
- 📱 Responsive web application design
- ⚡ Next.js application architecture
- 📦 Progressive Web App support with `next-pwa`
- 🎨 Tailwind CSS and reusable React UI components

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 14 |
| UI | React 18 |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit / React Redux |
| API Client | Axios |
| Maps | Mapbox GL, MapLibre GL, Map.ir |
| Mapping UI | react-map-gl |
| PWA | next-pwa |
| Icons | React Icons |

## Architecture & Engineering Focus

The project is structured as a modern React/Next.js application with a focus on separating UI concerns from application state and external API integrations.

The main engineering areas demonstrated by this project are:

- Component-based frontend development
- Centralized application state
- API communication and asynchronous operations
- Geospatial UI and map rendering
- Responsive layouts
- PWA-oriented frontend configuration
- Production-oriented Next.js configuration

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/alirezaborzuei/PAS.git
cd PAS
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application is configured to run on port `8085`.

Open:

```text
http://localhost:8085
```

### Production build

```bash
npm run build
npm start
```

## Portfolio Note

PAS was built as a **personal demonstration project** to show how a real-world emergency communication concept can be represented in a modern web application.

For a production emergency communication platform, the backend, SMS provider, authentication, authorization, audit logging, rate limiting, delivery tracking, monitoring, and security controls would need to be implemented and hardened according to the deployment requirements.

## Author

**Alireza Borzouei**

- GitHub: https://github.com/alirezaborzuei
