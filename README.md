# Portfolio

A modern, interactive portfolio website built with React. Display your projects and skills with a flexible, data-driven architecture.

## Overview

This is a customizable portfolio website with:

- **Dynamic Project Management**: Projects are defined in JSON, making it easy to add or update projects without touching code
- **Interactive UI**: Smooth animations and interactive components for an engaging user experience
- **Responsive Design**: Works seamlessly across all devices
- **Modular Architecture**: Component-based structure for easy maintenance and extension

## Features

- Responsive design with smooth animations
- Interactive project carousel
- Real-time text animation effects
- JSON-based project configuration for easy updates
- Dark mode support
- Contact section

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Available Scripts

#### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes, and you may see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder. The build is optimized and minified, ready for deployment.

#### `npm test`

Launches the test runner in interactive watch mode.

## Technologies Used

- **Frontend**: React with component-based architecture
- **Styling**: CSS3 with responsive design
- **Data Management**: JSON-based project configuration

## GitHub Actions Workflow

This project includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

- **Automatically builds** the React application whenever code is pushed to the `main` branch
- **Runs on Ubuntu** with Node.js v24
- **Installs dependencies** using npm with caching for faster builds
- **Builds the production bundle** optimized and minified for performance
- **Deploys to GitHub Pages** automatically after a successful build

## Project Structure

```
src/
  ├── component/          # React components (Navbar, Header, About, Projects, Contact)
  ├── App.js              # Main application component
  ├── App.css             # Global styles
  └── index.js            # Entry point

public/
  ├── index.html          # HTML template
  ├── projects/
  │   ├── info.json       # Project metadata
  │   ├── descriptions/   # Detailed project descriptions
  │   └── images/         # Project images
  └── robots.txt
```

## Adding New Projects

Projects are managed through `public/projects/info.json`. To add a new project:

1. Add a new entry to the `info.json` array with your project details
2. Create an HTML file in `public/projects/descriptions/` for the detailed description
3. Add your project image to `public/projects/images/`

No code changes required!

## License

This project is open source and available for personal use and modification.

## Contact

For inquiries, please use the contact form included in the portfolio website.
