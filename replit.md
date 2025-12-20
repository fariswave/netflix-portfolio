# Netflix Portfolio

## Overview
A portfolio website styled after Netflix's interface, built with React and TypeScript. The site features a Netflix-style intro, profile selection, and various pages for work experience, skills, projects, and more. All content is managed through static data files.

## Tech Stack
- React 18 with TypeScript
- React Router for navigation
- Create React App (CRA) build system
- Static data (no external CMS required)

## Project Structure
```
src/
├── App.tsx           - Main routing configuration
├── NetflixTitle.tsx  - Netflix-style intro animation
├── Layout.tsx        - Common layout wrapper
├── browse/           - Profile selection page
├── components/       - Reusable UI components
├── pages/            - Individual page components
├── profilePage/      - Profile page components
├── queries/          - Data query functions (returns static data)
└── images/           - Static images
```

## Static Data Files
All data is stored as static data within query functions:
- `src/queries/getSkills.ts` - Skills data
- `src/queries/getProjects.ts` - Projects data
- `src/queries/getCertifications.ts` - Certifications data
- `src/queries/getTimeline.ts` - Work experience & education timeline
- `src/queries/getContactMe.ts` - Contact information
- `src/queries/getWorkPermit.ts` - Work permit information
- `src/queries/getProfileBanner.ts` - Profile banner data

## Running the App
- Development: `npm start` (runs on port 5000)
- Build: `npm run build`
- Test: `npm test`

## How to Update Content
Edit the data directly in the query files under `src/queries/`. Each file contains a static data object that you can modify.

## Features
- Netflix-style intro animation on landing page
- Profile selection page with four profiles
- Multiple content pages (Skills, Projects, Experience, etc.)
- Fully static - no API calls or external dependencies
- Responsive design
