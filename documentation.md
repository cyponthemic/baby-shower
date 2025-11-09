# Baby Shower RSVP - Architecture & Process Documentation

## Overview

A lightweight, single-page React application for collecting baby shower RSVPs. The app uses Netlify Forms for form submission handling and provides a calendar invite download after RSVP submission.

## Technology Stack

- **Frontend Framework:** React 19.1.1 with TypeScript
- **Build Tool:** Vite 7.1.7
- **Styling:** CSS (no framework)
- **Form Handling:** Netlify Forms (serverless)
- **Deployment:** Netlify
- **Node.js:** v22.17.1 (managed via nvm)

## Project Structure

```
baby-shower-rsvp/
├── public/
│   ├── baby-shower.ics      # Calendar invite file (iCalendar format)
│   ├── thanks.html          # Thank you page (static HTML)
│   └── vite.svg             # Favicon
├── src/
│   ├── App.tsx              # Main React component (RSVP form)
│   ├── App.css              # Component styles
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML entry point (Vite requirement)
├── vite.config.ts           # Vite configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Architecture

### Frontend Architecture

**Single-Page Application (SPA)**
- React SPA served via Vite dev server
- Main component (`App.tsx`) renders the invitation and RSVP form
- Static thank you page (`thanks.html`) served separately after form submission

**Component Structure:**
- `App.tsx`: Main component containing:
  - Event details display
  - RSVP form with Netlify form integration
  - Form fields: name, email, food requirements

### Form Submission Flow

1. **User fills out RSVP form** (`App.tsx`)
   - Required fields: name, email
   - Optional: food requirements/notes

2. **Form submission** (POST to `/thanks.html`)
   - Form uses `data-netlify="true"` attribute
   - Hidden field `form-name="baby-shower-rsvp"` required by Netlify
   - Action redirects to `/thanks.html` after submission

3. **Netlify Forms processing** (serverless)
   - Netlify automatically processes form submissions
   - Submissions stored in Netlify dashboard
   - No backend code required

4. **Thank you page** (`public/thanks.html`)
   - Static HTML page with confirmation message
   - Download link for calendar invite (`/baby-shower.ics`)
   - Event details reminder

5. **Calendar invite** (`public/baby-shower.ics`)
   - iCalendar format (.ics file)
   - Contains event details: date, time, location
   - Downloadable for adding to calendar apps

## Key Files

### `src/App.tsx`
Main React component that renders:
- Baby shower invitation header
- Event details (date, time, location)
- RSVP form with Netlify integration

**Form Configuration:**
- Form name: `baby-shower-rsvp`
- Method: POST
- Action: `/thanks.html`
- Netlify attribute: `data-netlify="true"`

### `public/thanks.html`
Static HTML thank you page:
- Confirmation message
- Calendar invite download link
- Event details display

### `public/baby-shower.ics`
iCalendar file containing:
- Event: Baby Shower
- Date: December 1, 2025
- Time: 11:00am - 2:00pm (11:00-14:00 UTC)
- Location: Eddy Gardens, Melbourne

### `vite.config.ts`
Minimal Vite configuration:
- React plugin enabled
- No special build configuration needed

## Development Workflow

### Prerequisites
- Node.js 22.17.1 (managed via nvm)
- npm package manager

### Available Scripts

```bash
# Start Vite dev server (standard React development)
npm run dev
# Runs on http://localhost:5173

# Start Netlify dev server (simulates Netlify environment)
npm run dev:netlify
# Runs on http://localhost:8888 (proxies to Vite)

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Development Process

1. **Local Development:**
   - Use `npm run dev` for standard React development
   - Use `npm run dev:netlify` to test Netlify Forms locally
   - Netlify dev server simulates production environment

2. **Testing Form Submission:**
   - Netlify dev server processes forms locally
   - Submissions can be viewed in Netlify dashboard (when deployed)
   - Form validation handled by HTML5 and Netlify

3. **Building:**
   - `npm run build` creates production build in `dist/`
   - TypeScript compilation + Vite bundling
   - Static assets copied to build output

## Deployment Process

### Netlify Deployment

1. **Build Configuration:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 22 (via `.nvmrc` or Netlify settings)

2. **Netlify Forms:**
   - Automatically detected via `data-netlify="true"` attribute
   - Form name: `baby-shower-rsvp`
   - Submissions accessible in Netlify dashboard

3. **Static Files:**
   - `public/thanks.html` → `/thanks.html`
   - `public/baby-shower.ics` → `/baby-shower.ics`
   - Both served as static assets

### Deployment Flow

1. Push code to Git repository
2. Netlify detects changes (via Git integration)
3. Runs `npm run build`
4. Deploys `dist/` directory
5. Forms automatically configured and ready

## Form Data Structure

**Form Name:** `baby-shower-rsvp`

**Fields:**
- `name` (text, required)
- `email` (email, required)
- `food_requirements` (textarea, optional)

**Submission Storage:**
- Stored in Netlify dashboard
- Accessible via Netlify UI
- Can be exported or integrated with other services

## Styling Approach

- **No CSS Framework:** Pure CSS with modern features
- **Design System:**
  - System fonts (system-ui stack)
  - Color palette: grays, blue gradient accents
  - Card-based layout with rounded corners
  - Responsive design (mobile-first)

## Event Details

- **Date:** Monday 1 December 2025
- **Time:** 11:00am – 2:00pm
- **Location:** Eddy Gardens, Melbourne

*Note: Update year in `baby-shower.ics` if event date changes.*

## Key Features

1. **Lightweight:** No unnecessary dependencies
2. **Serverless Forms:** Netlify Forms handles submissions
3. **Calendar Integration:** iCalendar file for easy calendar addition
4. **Responsive:** Works on mobile and desktop
5. **Accessible:** Semantic HTML and ARIA labels
6. **Fast:** Vite for quick development and optimized builds

## Future Enhancements (Potential)

- Email notifications on form submission
- RSVP list display (if needed)
- Event countdown timer
- Map integration for location
- Multiple language support

