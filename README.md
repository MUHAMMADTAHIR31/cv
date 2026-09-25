# Muhammad Tahir Korejo — Engineering Portfolio

A recruiter-focused portfolio for Java and Spring Boot software engineering roles.

## Content source

The September 2026 CV (`Muhammad-Tahir-CV-2026-Sept.pdf`) is the primary source. The portfolio distinguishes professional healthcare work, academic research, personal AI prototypes, and the in-progress CVE agent. Language proficiency is retained from the previous portfolio. The CV PDF is linked directly and is not replaced by a printout of the website.

## Features

- Responsive layout with selected projects, career history, skills, and education
- English and Italian content with a device-local language preference
- Direct CV download, email, phone, GitHub, LinkedIn, and Upwork links
- Keyboard focus, skip link, reduced-motion support, and print styles
- Static English content remains accessible without JavaScript
- No external fonts, tracking scripts, or runtime dependencies

## Local preview and build

Open `index.html` in a browser, or run `python -m http.server 4173 --bind 127.0.0.1` and visit `http://127.0.0.1:4173`.

Run `npm run build` to copy only the five intended public files into `dist/`. Draft CVs, source documents, and temporary files are excluded from that build.

## Editing

- `index.html`: English content, Italian translations in `data-it`, links, and metadata
- `styles.css`: responsive layout, theme, accessibility, and print rules
- `portfolio.js`: language selection and print control
- `build.js`: public asset allowlist

When replacing the CV, update all download links and the build allowlist together. Preserve factual dates and distinguish prototypes from production work.

## Hosting

The existing public portfolio is at https://muhammadtahir31.github.io/cv/ . Local changes do not update it until pushed and deployed through GitHub Pages.

## Print export

Use the website's **Print / Save PDF** button for a portfolio printout. `npm run pdf` can also generate a portfolio PDF when Puppeteer and its browser are installed. GitHub Actions installs Puppeteer for that workflow. This export is separate from the downloadable September 2026 CV.
