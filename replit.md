# Netflix Portfolio

## Overview
A portfolio website styled after Netflix's interface, built with React and TypeScript. The site features a Netflix-style intro, profile selection, and various pages for work experience, skills, projects, and more.

## Tech Stack
- React 18 with TypeScript
- React Router for navigation
- GraphQL with DatoCMS for content management
- Create React App (CRA) build system

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
├── queries/          - DatoCMS GraphQL queries
└── images/           - Static images
```

## Running the App
- Development: `npm start` (runs on port 5000)
- Build: `npm run build`
- Test: `npm test`

## Environment Variables
- `REACT_APP_DATOCMS_ROR_TOKEN` - DatoCMS API token (optional, for dynamic content)

## Notes
- The app uses DatoCMS for content management. Without the API token, content from CMS will be empty but the app will still function with static elements.
- The landing page shows a Netflix-style intro that plays a sound and animates when clicked.
