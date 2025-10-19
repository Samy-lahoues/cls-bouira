# Bouira Science Entertainment Center

<div align="center">

<img src="./public/placeholder-logo.png" alt="Bouira Science Entertainment Center" width="200"/>

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38b2ac)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-ff0055)](https://www.framer.com/motion/)

</div>

## 📋 Project Overview

The Bouira Science Entertainment Center is a modern digital platform aimed at promoting scientific and technological education in the region. The center offers diverse services including training, interactive activities, and scientific events for children, youth, and families.

## ✨ Features

- 🎯 **Modern responsive interface**
- 🌐 **Full Arabic language support** (RTL)
- 🎨 **Interactive animated design** with Framer Motion
- 📱 **Compatible with all devices**
- ⚡ **High-performance** with Next.js Turbo
- 🔍 **SEO optimized**
- 🎭 **Smooth animations** and transitions
- 📧 **Advanced contact system**

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 18.17 or newer
npm or yarn or pnpm
```

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/cls-app.git
cd cls-app
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser:**

```
http://localhost:3000
```

## 📁 Project Structure

```
cls-app/
├── app/                    # Next.js App Router
│   ├── (root)/            # Main pages
│   │   ├── page.tsx       # Home page
│   │   └── register/      # Registration page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Site icon
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Navbar.tsx    # Navigation bar
│   │   └── Footer.tsx    # Footer
│   └── sections/         # Page sections
│       ├── Hero.tsx      # Hero section
│       ├── ClubServices.tsx  # Club services
│       ├── Employment.tsx    # Employment
│       └── Contact.tsx   # Contact section
├── constants/            # Constants and data
│   ├── index.ts         # Main data
│   └── images.ts        # Image management
├── public/              # Public files
│   ├── *.jpg, *.png     # Images
│   └── *.svg           # Icons
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.5.4 | Production React Framework |
| React | 19.1.0 | UI Library |
| TypeScript | 5.x | Enhanced Programming Language |
| Tailwind CSS | 4.x | CSS Framework |
| Framer Motion | 12.23.22 | Animation Library |
| Lucide React | 0.544.0 | Icon Library |

## 🎨 Customization

### Fonts

The project uses Google Fonts optimized for Arabic:
- **Cairo**: For general text
- **Tajawal**: For headings and special text

### Colors & Design

Customize colors and design through `tailwind.config.js`:

```javascript
// Add custom colors
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

## 📝 Scripts

```bash
# Development with Turbo
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🔧 Advanced Configuration

### Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@cls-bouira.dz
```

### Performance Optimization

- ✅ Automatic image optimization
- ✅ Code splitting
- ✅ Lazy loading components
- ✅ Turbo pipeline

## 🌍 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Options

- **Netlify**: Drag and drop
- **GitHub Pages**: For static sites
- **Railway**: For dynamic apps

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:**
```bash
   git checkout -b feature/amazing-feature
```
3. **Commit your changes:**
```bash
   git commit -m 'Add amazing feature'
```
4. **Push to the branch:**
```bash
   git push origin feature/amazing-feature
```
5. **Open a Pull Request**

## 📞 Contact & Support

- 🌐 **Official Website**: [cls-bouira.dz](https://cls-bouira.dz)
- 📧 **Email**: info@cls-bouira.dz
- 📱 **Phone**: +213 xxx xxx xxx
- 📍 **Address**: Bouira, Algeria

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Special thanks to the Next.js team for the amazing framework
- Gratitude to the Arabic React community
- Appreciation to all project contributors

---

## 👨‍💻 Author

**Created by [SamyDev](https://bio.link/samydev)**

This application was developed to serve the Bouira Science Entertainment Center, providing a modern digital platform for science education and community engagement in Algeria.

---

<div align="center">

<p>Made with ❤️ in Algeria</p>

<p>© 2025 Bouira Science Entertainment Center</p>

</div>
