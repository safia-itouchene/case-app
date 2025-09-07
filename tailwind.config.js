/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          white: '#FFFFFF',      // Pure luxury white
          charcoal: '#1E1E1E',   // Deep elegant grey
          black: '#0A0A0A',      // True rich black
        },
        accent: {
          gold: '#BFA14A',       // Antique muted gold (luxury metals)
          hotpink: '#1c3228',    // Deep raspberry magenta (luxury pink)
          orange: '#D2691E',     // Cognac / burnt amber (Hermès vibe)
          lightpink: '#E8B4BC',  // Dusty rose (romantic, high-end)
          lavender: '#9A8FBF',   // Muted lavender-grey (classy tone)
          palegreen: '#7CA982',  // Sage green (luxury spa tone)
        },
        seasonal: {
          coral: '#C65D55',      // Muted coral red (expensive, not neon)
          mint: '#9FC9B3',       // Soft desaturated mint
          skyblue: '#5F7CA3',    // Smoky steel-blue (sophisticated)
          burgundy: '#4A1C2F',   // Deep luxury wine red
          forestgreen: '#1B3528',// Dark emerald green
          burntorange: '#8B3E1F',// Rich terracotta leather
        }
      },
      fontFamily: {
        primary: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        accent: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'premium': '0 10px 40px rgba(0, 0, 0, 0.15)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
};
