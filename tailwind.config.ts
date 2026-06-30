import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#E5001A', dark: '#B30015', light: '#FF1A35' },
        'dark-bg': '#0D0D0D',
        'dark-secondary': '#1A1A1A',
        'dark-card': '#212121',
        'gray-card': '#2D2D2D',
        'gray-light': '#F5F5F5',
        'gray-medium': '#9CA3AF',
        accent: '#FF6B35',
      },
      fontFamily: {
        display: ['var(--font-bebas-neue)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
