# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing web development projects and ICT expertise.

## Features

- Modern and responsive design
- Fast performance with Next.js
- Smooth animations with Framer Motion
- Mobile-first approach
- Dark mode support (coming soon)
- Interactive skill progress bars
- Contact form
- SEO optimized

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React
- ESLint

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       └── Contact.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
└── package.json
```

## Customization

1. Update the content in each section component under `app/components/sections/`
2. Modify the styling in `globals.css` and component files
3. Add your images to the `public` directory
4. Update metadata in `app/layout.tsx`

## Deployment

The site can be easily deployed on Vercel:

1. Push your code to GitHub
2. Import the repository on Vercel
3. Deploy!
