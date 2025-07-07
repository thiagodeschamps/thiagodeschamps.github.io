/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./index.html"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          accent: '#19bf7d',
          accentHover: '#15a367',
          bgDark: '#0a0a0f',
          bgDarkSecondary: '#1a1a2e',
          bgLight: '#f7f9fc',
          bgLightSecondary: '#ffffff',
          textDark: '#e2e8f0',
          textDarkSecondary: '#94a3b8',
          textLight: '#1e293b',
          textLightSecondary: '#64748b',
          borderDark: '#2d3748',
          borderLight: '#e2e8f0',
          cardDark: '#1e1e2e',
          cardLight: '#ffffff',
          gradientDark: {
            from: '#0f0f23',
            via: '#1a1a2e',
            to: '#16213e'
          },
          gradientLight: {
            from: '#f8fafc',
            via: '#e2e8f0',
            to: '#ffffff'
          },
          // Additional dark theme colors
          dark: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617'
          }
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui']
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.6s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        backdropBlur: {
          xs: '2px',
        }
      }
    },
    plugins: [],
  }
  