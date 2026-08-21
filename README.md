# davdav.tech

Personal professional platform for **Carlos David Duarte** — Senior Software Engineer, Technical Lead & Application Owner.

## Stack

- **Next.js 16** — App Router, static export
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4**
- **MDX** — blog content

## Requirements

- Node.js 24+ (use `nvm use 24`)
- npm 11+

## Getting Started

```bash
nvm use 24
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
```

Generates `/out` — upload its contents via FTP to the HostGator hosting root.

## Project Structure

```
src/
  app/          # Pages (App Router)
  components/   # UI, layout, sections
  content/blog/ # MDX blog posts
  lib/          # Utilities
public/
  cv/           # Resume PDF
contact.php     # Contact form mailer (PHP + PHPMailer)
plan/           # Architecture and requirements documents
```

## Linting

```bash
npm run lint
```
