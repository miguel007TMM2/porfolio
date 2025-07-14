# My Personal Portfolio 🚀

A modern and responsive portfolio built with the latest web technologies to showcase my skills and projects as a Full Stack developer.

## ✨ Features

- **Modern Design**: Elegant and professional interface with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Theme switching with automatic system preference detection
- **Multilingual**: Complete support for Spanish and English with React Context
- **Smooth Animations**: Transitions and visual effects with Framer Motion
- **Smooth Navigation**: Smooth scrolling between sections
- **Contact Form**: Interactive contact system
- **SEO Optimized**: Optimized metadata for search engines
- **Automatic Deployment**: CI/CD with GitHub Actions and GitHub Pages

## 🚀 Quick Deploy

### Deploy to GitHub Pages

1. **Fork** this repository
2. Go to **Settings** → **Pages**
3. Select **Source**: **GitHub Actions**
4. The site will deploy automatically on each push to `main`

### Site URL
Your portfolio will be available at: `https://your-username.github.io/porfolio`

### Troubleshooting
If you encounter Jekyll errors, check [TROUBLESHOOTING.md](TROUBLESHOOTING.md).

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist Sans & Geist Mono](https://vercel.com/font)

## 📱 Portfolio Sections

### 🏠 Home (Hero)
- Personal introduction with call-to-action buttons
- Elegant entrance animations
- Quick navigation to main sections

### 👨‍💻 About Me
- Personal and professional story
- Main technical skills
- Values and passions

### 💼 Projects
- **Featured Projects**: Complete showcase with technical details
- **Other Projects**: Compact view of additional projects
- Links to GitHub repositories and live demos
- Filtering by technologies used

### 🎯 Skills
- Categorization by areas (Frontend, Backend, Database, etc.)
- Animated progress bars showing competency levels
- Professional experience statistics

### 📞 Contact
- Interactive contact form
- Direct contact information
- Professional social media links
- Real-time form validation

## 🚀 Installation and Usage

### Prerequisites
- Node.js 18+ installed
- npm or yarn as package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── favicon.ico        # Site icon
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Main layout
│   └── page.tsx           # Main page
├── components/            # Reusable components
│   ├── About.tsx         # About Me section
│   ├── Contact.tsx       # Contact section
│   ├── Footer.tsx        # Footer
│   ├── Header.tsx        # Main navigation
│   ├── Hero.tsx          # Home section
│   ├── Projects.tsx      # Projects section
│   └── Skills.tsx        # Skills section
├── locales/              # Internationalization
│   ├── en.ts            # English translations
│   ├── es.ts            # Spanish translations
│   └── index.ts         # Locale configuration
public/                    # Static files
```

## 🎨 Customization

### Colors and Themes
Main colors are defined in `globals.css`. You can customize:
- Brand gradients
- Dark/light mode colors
- Accent colors for buttons and links

### Personal Content
Update information in each component:
- **Hero**: Name, title, and personal description
- **About**: Story, skills, and experience
- **Projects**: Your real projects with links
- **Skills**: Your technologies and competency levels
- **Contact**: Your real contact information

### Animations
Animations are configured with Framer Motion and can be adjusted in each component according to your preferences.

## 📊 Included Optimizations

- **Performance**: Lazy loading of components and image optimization
- **SEO**: Optimized metadata and semantic structure
- **Accessibility**: Keyboard navigation and ARIA labels
- **Core Web Vitals**: Optimized for Google's performance metrics

## 🌐 Deployment

### GitHub Pages (Current Setup)
1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Ensure Pages is set to use "GitHub Actions" as source

### Vercel (Recommended Alternative)
1. Connect your repository to [Vercel](https://vercel.com)
2. Deployment will be automatic on each push

### Netlify
1. Upload your repository to [Netlify](https://netlify.com)
2. Configure build command: `npm run build`
3. Publish directory: `out`

### Other Providers
The project is compatible with any provider that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server

# Building
npm run build           # Standard build
npm run build:prod      # Production build with env vars
npm run export          # Alias for build

# Testing & Deployment
npm run preview         # Preview built site locally
npm run deploy:check    # Run deployment verification
npm run clean          # Clean build directories

# Code Quality
npm run lint           # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! If you have ideas to improve the portfolio:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 💡 Expansion Ideas

- **Blog**: Integrate a blog system with MDX
- **CMS**: Connect with a headless CMS (Contentful, Strapi)
- **Analytics**: Add Google Analytics or similar
- **Testing**: Add unit and integration tests
- **Storybook**: Document components
- **PWA**: Add Progressive Web App features

## 📞 Contact

If you have questions about this project or want to collaborate:

- **Email**: miguel.mateo@example.com
- **LinkedIn**: [linkedin.com/in/miguelmateo](https://linkedin.com/in/miguelmateo)
- **GitHub**: [github.com/miguelmateo](https://github.com/miguelmateo)

---

**⭐ If you like this project, give it a star on GitHub!**

## 🌍 Language Versions

- [🇪🇸 Español](README.md)
- [🇺🇸 English](README.en.md) (This file)
