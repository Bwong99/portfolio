# Bradley Wong Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, and TypeScript. This portfolio showcases Bradley Wong's work in software development, photography, and hardware projects.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, and TypeScript
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion for beautiful page transitions and micro-interactions
- **SEO Optimized**: Server-side rendering and static generation for optimal SEO
- **Image Optimization**: Next.js Image component for automatic optimization
- **Contact Form**: Functional contact form with API route handling
- **Dynamic Routing**: Individual project pages with dynamic routing

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── contact/           # Contact page
│   ├── projects/          # Projects listing & detail pages
│   │   └── [id]/          # Dynamic project pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── AboutSection.tsx   # About page content
│   ├── ContactForm.tsx    # Contact form component
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── Navbar.tsx         # Navigation bar
│   ├── PageTransition.tsx # Page transition wrapper
│   └── ProjectsGrid.tsx   # Projects gallery grid
├── data/                  # Static data
│   └── index.ts           # Projects, skills, education data
├── styles/                # CSS modules
│   ├── globals.css        # Global styles & CSS variables
│   ├── About.module.css   # About page styles
│   ├── Contact.module.css # Contact page styles
│   ├── Footer.module.css  # Footer styles
│   ├── Hero.module.css    # Hero section styles
│   ├── Navbar.module.css  # Navigation styles
│   └── Projects.module.css # Projects page styles
└── types/                 # TypeScript type definitions
    └── index.ts           # Shared types
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bradleywong/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information
Edit `src/data/index.ts` to update:
- `aboutMe` - Personal bio, location, and title
- `skills` - Technical skills with proficiency levels
- `education` - Educational background
- `projects` - Portfolio projects
- `socialLinks` - GitHub, LinkedIn, and email

### Styling
The site uses CSS custom properties defined in `src/styles/globals.css`:
- Color palette (primary, secondary, accent colors)
- Typography (fonts, sizes)
- Spacing and layout variables
- Shadows and transitions

### Adding Projects
Add new projects to the `projects` array in `src/data/index.ts`:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Title',
  category: 'coding', // photography | software | coding | hardware
  description: 'Short description',
  longDescription: 'Detailed description',
  technologies: ['React', 'TypeScript'],
  thumbnail: 'image-url',
  images: ['image-1', 'image-2'],
  link: 'https://live-site.com', // optional
  github: 'https://github.com/...', // optional
}
```

## 🚀 Deployment

This portfolio is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Vercel will automatically detect Next.js and configure the build

### Environment Variables (Optional)
For the contact form to send emails, you can add:
- `SMTP_HOST` - Email server host
- `SMTP_USER` - Email username
- `SMTP_PASS` - Email password

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

Bradley Wong - [bradley.wong@example.com](mailto:bradley.wong@example.com)

- GitHub: [@bradleywong](https://github.com/bradleywong)
- LinkedIn: [Bradley Wong](https://linkedin.com/in/bradleywong)
