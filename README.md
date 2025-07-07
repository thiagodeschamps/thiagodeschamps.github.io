# Thiago Deschamps - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a beautiful dark/light theme with smooth animations and a professional design.

## ✨ Features

- 🌙 **Dark/Light Theme** - Automatic theme detection with manual toggle
- 📱 **Responsive Design** - Optimized for all devices
- 🎨 **Modern UI** - Glass morphism effects and smooth animations
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎯 **Accessible** - WCAG compliant design
- 📊 **Interactive Components** - Animated sections with Framer Motion

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/thiagodeschamps/thiagodeschamps.github.io.git
cd thiagodeschamps.github.io
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Build

To build for production:
```bash
npm run build
```

## 🚀 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages. The deployment happens automatically when you push to the `main` branch.

#### Manual Deployment Steps:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Select "GitHub Actions" as the source

2. **Push your changes**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

3. **Monitor deployment**:
   - Go to the "Actions" tab in your repository
   - You'll see the deployment progress
   - Once complete, your site will be available at `https://thiagodeschamps.github.io`

#### Local Testing:
```bash
npm run build
npm run preview
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  accent: '#19bf7d',
  bgDark: '#0a0a0f',
  bgLight: '#f7f9fc',
  // ... more colors
}
```

### Content
Update the content in the component files:
- `src/components/Hero.jsx` - Personal information
- `src/components/Skills.jsx` - Skills and technologies
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Projects showcase
- `src/components/Education.jsx` - Education background

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Theme System

The dark/light theme system includes:
- Automatic system preference detection
- Manual toggle with smooth transitions
- Persistent theme preference (localStorage)
- Optimized colors for both themes

## 🎭 Animations

Built with Framer Motion for smooth, performant animations:
- Page transitions
- Component entrance animations
- Interactive hover effects
- Scroll-triggered animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.