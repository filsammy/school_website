## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the project.

## Tech Stack

### Core Framework:

- Next.js 14 (App Router)
- TypeScript

### Styling & UI:

- Tailwind CSS
- shadcn/ui
- Lucide Icons

### State & Data:

- React Server Components (RSC) – default in Next.js
- TanStack Query (React Query) (later)
- Zod

### Forms:

- React Hook Form
- Integrated with Zod

### Auth (Future):

- NextAuth.js / Auth.js

### Database (Future-Ready):

- PostgreSQL + Prisma

### AI Integration:

- [TO BE FILLED BY @JayR]
- Use cases:
  - AI school assistant chatbot
  - Automated announcements
  - Student Q&A
  - Learning recommendations

### Deployment:

- Vercel (best for Next.js)
- OR [TO BE FILLED BY @JayR]

## Project Structure

```bash
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── ui/
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Key Files:

**app/layout.tsx**

- Root layout
- SEO metadata
- Shared UI (navbar/footer)

**app/page.tsx**

- Homepage
- Server Component by default

**app/globals.css**

- Tailwind base styles

## How to Add Backgrounds

Each page supports custom backgrounds via the `backgroundElement` prop:

### Video background

```tsx
<PageWrapper
  title="Your Title"
  backgroundElement={
    <video
      src="/videos/your-video.mp4"
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover"
    />
  }
>
  {/* Your content */}
</PageWrapper>
```

### Image background

```tsx
<PageWrapper
  title="Your Title"
  backgroundElement={
    <Image
      src="/images/your-bg.jpg"
      alt="Background"
      fill
      className="object-cover"
    />
  }
>
  {/* Your content */}
</PageWrapper>
```

### Gradient background

```tsx
<PageWrapper
  title="Your Title"
  backgroundElement={
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
  }
>
  {/* Your content */}
</PageWrapper>
```
