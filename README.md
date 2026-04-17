# MacOS Portfolio UI

A polished React portfolio that recreates the feel of a macOS desktop and turns a personal site into an interactive product experience. Visitors can open draggable windows, preview projects, explore a terminal-style profile, view a resume, launch external links, and move through the portfolio like a mini operating system.

https://github.com/user-attachments/assets/58240e24-67d1-48a6-bd2c-1e8498a7133a

## Why This Project Stands Out

Instead of a standard scrolling portfolio, this project presents personal branding inside a familiar desktop metaphor. The result feels playful, memorable, and professional at the same time, making it a strong showcase piece for frontend skills, interaction design, and component-based UI architecture.

## Experience Highlights

- macOS-inspired desktop layout with a top navigation bar and bottom dock
- Draggable app windows powered by reusable window components
- Project showcase panel fed by JSON data
- Terminal-style portfolio section with custom commands
- Embedded resume preview
- Spotify playlist window for personality and brand depth
- Quick actions for email, LinkedIn, and Calendar
- Live date and time display in the navigation bar

## Built With

- React 19
- Vite
- SCSS
- `react-rnd`
- `react-console-emulator`
- `react-syntax-highlighter`
- `react-markdown`

## Project Structure

```text
src/
  App.jsx
  app.scss
  assets/
    github.json
  components/
    Nav.jsx
    Dock.jsx
    DateTime.jsx
    windows/
      MacWindow.jsx
      Github.jsx
      Note.jsx
      Resume.jsx
      Spotify.jsx
      Cli.jsx

public/
  doc-icons/
  navbar-icons/
  note.txt
  resume.pdf
  mac-wallpaper*.jpg
```

## Key Features

### 1. Reusable Window System

Every major panel is rendered inside a shared `MacWindow` component, which keeps the UI consistent and makes it easy to add more desktop apps later.

### 2. Interactive Portfolio Content

The dock opens focused content windows for projects, notes, resume, music, and terminal interactions, giving the portfolio a richer feel than a static landing page.

### 3. Data-Driven Project Section

Projects are loaded from `src/assets/github.json`, so updating the showcase does not require changing component logic.

### 4. Terminal-Inspired Personal Branding

The CLI window introduces a more technical, developer-friendly way to present skills, experience, projects, and contact details.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local Vite URL shown in your terminal, typically:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Customization Guide

Update these files to personalize the portfolio quickly:

- `src/assets/github.json` for project cards
- `public/note.txt` for the note/code window content
- `public/resume.pdf` for the resume preview
- `src/components/windows/Cli.jsx` for terminal commands and personal info
- `src/components/Nav.jsx` for the name shown in the top bar
- `src/components/Dock.jsx` for social links, email, and quick actions

## Design Goals

This project was built to demonstrate:

- component reusability
- interactive UI thinking
- creative portfolio presentation
- React state management for desktop-style windows
- blending personality with professional presentation

## Potential Improvements

- Add mobile-specific interaction patterns for smaller screens
- Improve accessibility for keyboard navigation and screen readers
- Persist window positions and open states
- Replace placeholder project links with production portfolio entries
- Add animations for opening and minimizing windows
- Introduce theme switching or wallpaper selection

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## License

This project is available for personal learning, inspiration, and portfolio customization.

## Author

**Saumya Sindhu**

If you use this project as a base, make sure to replace the personal content, resume, links, and contact details with your own.
