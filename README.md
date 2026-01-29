

# Bradley Wong — Portfolio Website

Welcome! This is the source code for my personal portfolio, designed to showcase a broad range of skills and projects across software engineering, hardware design, robotics, firmware, and machine learning. Built with a modern, flexible tech stack, this site demonstrates my ability to deliver robust solutions and creative work across multiple domains.



## 🚀 Highlights

- **Versatile Project Showcase**: Software, hardware, robotics, firmware, and ML projects
- **Modern Web Stack**: Next.js, React, TypeScript, Framer Motion
- **Responsive & Accessible**: Mobile-first, accessible, and visually appealing
- **Performance & SEO**: Fast load times, server-side rendering, and image optimization
- **Professional UI/UX**: Custom components, smooth transitions, and consistent branding
- **Dynamic Content**: Easily add and update projects, skills, and photography
- **Contact API**: Secure, serverless contact form with email integration



## 🗂️ Project Structure

```
src/
   app/           # App router, pages, API routes
   components/    # Reusable React components
   data/          # Portfolio/project/skills data (software, hardware, ML, etc.)
   styles/        # CSS modules & global styles
   types/         # TypeScript types
public/          # Static assets (images, backgrounds, diagrams)
```


## 🛠️ Getting Started

**Requirements:**
- Node.js 18+
- npm or yarn

**Setup:**
1. Clone this repo:
   ```bash
   git clone https://github.com/bradleywong/portfolio.git
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Visit [http://localhost:3000](http://localhost:3000)


## 📦 Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Run production build
- `npm run lint` — Lint code



## 🎨 Customization

**Personalize your site:**
- Update your bio, skills, education, and projects in `src/data/index.ts` (supports software, hardware, robotics, ML, and more)
- Add images, diagrams, or hardware photos to `public/photos/` and update project data
- Adjust color palette, fonts, and layout in `src/styles/globals.css`



## ☁️ Deployment

Optimized for [Vercel](https://vercel.com) — just import your repo and deploy. Supports other Node.js hosts as well.

**Contact Form:**
To enable email, set these environment variables:
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`



## 📄 License

MIT — see [LICENSE](LICENSE)

---

## 👋 Contact & Links

**Bradley Wong**  
[bradley.wong@example.com](mailto:bradley.wong@example.com)  
[GitHub](https://github.com/bradleywong) • [LinkedIn](https://linkedin.com/in/bradleywong)

---

<p align="center"><b>Thank you for visiting! If you have feedback or opportunities in software, hardware, robotics, firmware, or machine learning, feel free to reach out.</b></p>
