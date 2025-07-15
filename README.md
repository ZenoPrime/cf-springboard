# 🚀 Springboard - Your Launchpad for Digital Innovation

<div align="center">
  <img src="/icons/icon-512x512.png" alt="Springboard Logo" width="120" height="120">
  
  **Discover vetted Web3 project ideas, builder kits, and hackathon opportunities**
  
  [![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://springboard-web3.vercel.app)
  [![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=flat&logo=next.js)](https://nextjs.org)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
  [![PWA](https://img.shields.io/badge/PWA-Enabled-purple?style=flat)](https://web.dev/progressive-web-apps/)
</div>

---

## 🌟 What is Springboard?

Springboard is a comprehensive platform designed to accelerate Web3 innovation by providing entrepreneurs, developers, and builders with:

- **🎯 Vetted Project Ideas**: Curated blockchain and Web3 project concepts with detailed PRDs
- **🛠️ Builder Kits**: Complete resource packages with guides, templates, and tools
- **🏆 Hackathon Hub**: Information about upcoming events and opportunities
- **📚 Resource Center**: Comprehensive guides, documentation, and learning materials

## ✨ Key Features

### 💡 Idea Hub
- **20+ Project Ideas** across 9+ categories (DeFi, NFTs, DAOs, DePIN, Gaming, etc.)
- **Detailed PRDs** with technical specifications, market analysis, and implementation guides
- **Difficulty Ratings** from Beginner to Expert
- **Advanced Search & Filtering** by category, difficulty, and technology stack

### 🎯 Builder Kits
- **Complete Branding Kit**: Logo design, brand guidelines, and marketing materials
- **Technical Starter Templates**: Boilerplate code and architecture patterns
- **Business Planning Tools**: Market research templates and go-to-market strategies
- **Legal & Compliance Guides**: Regulatory frameworks and best practices

### 🏆 Hackathon Platform
- **Event Discovery**: Curated list of Web3 hackathons and competitions
- **Team Formation**: Connect with like-minded builders and developers
- **Resource Sharing**: Access to hackathon-specific tools and guides
- **Success Stories**: Learn from previous winners and participants

### 📱 Progressive Web App
- **Offline Access**: Browse ideas and resources without internet
- **Mobile Optimized**: Seamless experience across all devices
- **Push Notifications**: Stay updated on new ideas and events
- **Install to Home Screen**: Native app-like experience

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first styling
- **[Radix UI](https://www.radix-ui.com)** - Accessible component primitives
- **[Lucide Icons](https://lucide.dev)** - Beautiful icon library

### Backend & Data
- **[Airtable](https://airtable.com)** - Flexible database and CMS
- **Server Actions** - Type-safe server-side operations
- **Edge Runtime** - Fast, globally distributed functions

### Performance & SEO
- **Image Optimization** - WebP/AVIF formats with lazy loading
- **Code Splitting** - Optimized bundle sizes
- **Structured Data** - Rich snippets and search optimization
- **Core Web Vitals** - Optimized for Google's performance metrics

### Deployment & Infrastructure
- **[Vercel](https://vercel.com)** - Serverless deployment platform
- **Edge Functions** - Global content delivery
- **Analytics** - Performance and user behavior tracking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Airtable account with API access
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cf-springboard.git
   cd cf-springboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   AIRTABLE_API_KEY=your_airtable_api_key
   AIRTABLE_BASE_ID=your_airtable_base_id
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NODE_ENV=development
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📊 Project Structure

```
cf-springboard/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── search/           # Search functionality
│   └── seo/              # SEO components
├── lib/                  # Utility functions
├── docs/                 # Documentation
├── public/               # Static assets
└── types/                # TypeScript definitions
```

## 🗄️ Database Schema

Springboard uses Airtable as a headless CMS with the following structure:

### Core Tables
- **`ideas`** - Project ideas with PRDs and metadata
- **`categories`** - Project categories and classifications
- **`builder_kits`** - Resource packages and guides
- **`hackathons`** - Event information and details

### Resource Tables
- **`resource_tool_guides`** - Technical tool documentation
- **`resource_how_to_guides`** - Step-by-step tutorials
- **`resource_existing_docs_pocs`** - External resources and POCs

For detailed schema information, see [Airtable Schema Documentation](./docs/airtable-schema.md).

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - Automatic deployments on every push

For detailed deployment instructions, see:
- [Vercel Environment Setup](./docs/vercel-environment-setup.md)
- [Custom Domain & SSL Setup](./docs/custom-domain-ssl-setup.md)

### Other Platforms

Springboard can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Performance & SEO

Springboard is optimized for performance and search engine visibility:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google's ranking factors
- **SEO**: Structured data, meta tags, and sitemap
- **Accessibility**: WCAG 2.1 AA compliant

See [Performance & SEO Guide](./docs/performance-seo-optimization.md) for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Style

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Conventional Commits** for commit messages

## 📝 Documentation

- [📋 Project Status Report](./docs/project-status-report.md)
- [🎨 Style Guide](./docs/style-guide.md)
- [🗄️ Airtable Setup](./docs/airtable-table-creation-guide.md)
- [🚀 Performance Optimization](./docs/performance-seo-optimization.md)
- [🔧 Migration Checklist](./docs/migration-checklist.md)

## 🆘 Support

- **Documentation**: Check our [docs folder](./docs)
- **Issues**: [GitHub Issues](https://github.com/your-username/cf-springboard/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/cf-springboard/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for seamless deployment
- **Airtable** for flexible data management
- **Open Source Community** for inspiration and tools

---

<div align="center">
  <strong>Built with ❤️ for the Web3 community</strong>
  
  [🌐 Live Demo](https://springboard-web3.vercel.app) • [📚 Documentation](./docs) • [🐛 Report Bug](https://github.com/your-username/cf-springboard/issues)
</div>
