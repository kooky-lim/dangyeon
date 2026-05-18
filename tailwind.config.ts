import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#1EC9AF',
          deep:    '#0FA18F',
          light:   '#E8FAF6',
          pale:    '#F0FDFB',
        },
        charcoal: '#1A1A1A',
        'gray-section': '#F7F8F8',
        dark: '#111111',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      keyframes: {
        marqueeScroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marqueeScroll 20s linear infinite',
      },
      maxWidth: {
        content: '1160px',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
}

export default config
