# Re:Build - The State of Software 2026

An interactive visualization that compares current software development practices (2026) to future standards, using architectural metaphors to illustrate the evolution of software engineering.

## Overview

**Re:Build** (Digital City Builder) is an educational tool that demonstrates the progression from chaotic, ad-hoc software development practices to well-structured, standardized engineering approaches. The application uses the metaphor of city building—from Wild West wooden structures to modern industrial buildings—to illustrate software architecture principles.

## Key Features

- **Dual Mode Visualization**: Toggle between "Current Reality (2026)" and "Future Standard" views
- **Interactive Layers**: Explore different aspects of software architecture:
  - Foundation (Infrastructure)
  - Construction (Development Process)
  - Power (Testing & Quality)
  - Aesthetics (UI/UX)
  - Safety (Security & Compliance)
  - Inspection (Observability)
- **Educational Content**: Each layer includes historical analogies, current problems, and actionable solutions

## Live Demo

Visit the live application: [https://voku.github.io/TheStateOfSoftware2026/](https://voku.github.io/TheStateOfSoftware2026/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/voku/TheStateOfSoftware2026.git
   cd TheStateOfSoftware2026
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. Every push to the main branch triggers a build and deployment.

### Manual Deployment

If you need to deploy manually:

1. Build the project: `npm run build`
2. Deploy the `dist` directory to your hosting service

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)
- **Lucide React** - Icon library

## Project Structure

```
.
├── App.tsx                 # Main application component
├── index.tsx              # Application entry point
├── index.html             # HTML template
├── constants.tsx          # Layer data and configuration
├── types.ts               # TypeScript type definitions
├── components/
│   ├── BuildingVisualizer.tsx  # 3D-style building visualization
│   └── InfoPanel.tsx          # Information panel for layers
├── vite.config.ts         # Vite configuration
└── package.json          # Project dependencies
```

## Key Files Detector Helper Prompt

When working with this codebase, use this prompt to help AI assistants understand the project structure:

```
This is Re:Build (Digital City Builder), an educational visualization comparing software development practices across time using architectural metaphors.

Key files and their purposes:
- App.tsx: Main component with mode switching and layer selection logic
- constants.tsx: All layer data including descriptions, analogies, and visual components
- components/BuildingVisualizer.tsx: Renders the interactive 3D-style city buildings
- components/InfoPanel.tsx: Displays detailed information for selected layers
- types.ts: TypeScript definitions for BuildMode and LayerData
- vite.config.ts: Build configuration with GitHub Pages support

The app has two modes:
1. WILD_WEST (Current Reality 2026): Shows problematic practices
2. INDUSTRIAL (Future Standard): Shows ideal practices

Each layer represents a software architecture concern with:
- Historical analogy
- Current problem description
- Future solution
- Visual representation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

Built to illustrate the evolution of software engineering practices and promote better standards in the industry.
