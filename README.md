# Ruiyuan Bai / Roi Portfolio

Personal HCI / interaction design portfolio for Ruiyuan Bai / 白蕊源 / Roi.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

For a stable local static preview of the built `dist` folder:

```bash
npm run serve:dist -- 5177
```

## Project Structure

- `src/data/projects.ts` contains the editable project data.
- `src/routes/` contains page-level routes.
- `src/components/` contains shared UI components.
- `public/images/` is for final project images and cover assets.
- `public/experiments/wall/` and `public/experiments/space/` contain imported static creative-coding demos.
- `incoming-assets/` is the drop folder for new photos, covers, gallery images, and videos before they are renamed and copied into `public/`.

## Adding Projects

Add or edit project entries in `src/data/projects.ts`. Projects can be typed as:

- `research`
- `art`
- `game`
- `ongoing`
- `tangible`
- `spatial-computing`

Use `route` to connect a project to a page, and place final media in `public/images/`.

## Image Drop Folder

Put new media in these folders first:

- `incoming-assets/project-covers/`
- `incoming-assets/project-galleries/`
- `incoming-assets/plog/`
- `incoming-assets/videos/`

Processed public files should then be copied into short, web-friendly paths such as `public/images/<project-id>/`, `public/images/plog/`, or `public/videos/<project-id>/`.

## Deployment Notes

This is a Vite React single-page app and is ready for Vercel or Netlify.

For Vercel, `vercel.json` rewrites all routes to `index.html` so refresh works on routes such as `/zoi`, `/tangible/with-me`, `/art/wall`, and `/games/loofa-man`.

For Netlify, add this redirect if needed:

```txt
/* /index.html 200
```

The final domain `ruiyuanbai.com` can be connected later in the hosting provider dashboard. Do not assume the domain is already connected.

Large videos should usually stay on Drive, Vimeo, or another video host and be linked or embedded lazily. The local MOMO documentary file is useful for development, but it is about 228 MB and may be too large for a comfortable Vercel deployment.

## Assets To Add

Add final images when available:

- `public/images/personamail-placeholder.jpg`
- `public/images/cologene-placeholder.jpg`
- `public/images/ambulance-rush-cover.png`
- `public/images/loofa-man-cover.png`
- `public/images/wall-cover.png`
- `public/images/space-cover.png`
- `public/images/tarot-cover.png`
- `public/images/zoi-cover.png`
- `public/images/with-me-cover.png`
- `public/images/monster-between-us-cover.png`
- `public/images/killing-brain-cover.png`

The UI renders polished fallbacks if these files are missing.

## Security Notes

Do not hardcode OpenAI, Supabase, or proxy API keys in source code. Use `.env.local` for local-only secrets, user-provided API keys for public demos, or a backend proxy with rate limits.

## Interaction References

The interaction language is locally implemented for this portfolio, with patterns adapted from open-source React/Tailwind component libraries:

- Magic UI: https://github.com/magicuidesign/magicui
- React Bits: https://github.com/DavidHDev/react-bits
