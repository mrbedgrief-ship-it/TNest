import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#060816',
        surface: '#0d1326',
        panel: '#121a31',
        border: 'rgba(148, 163, 184, 0.14)',
        muted: '#9ca3af',
        accent: '#7c8cff',
        accent2: '#4fd1ff',
        success: '#26c281',
        warning: '#f2b45a'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(83, 113, 255, 0.18)',
        panel: '0 10px 40px rgba(2, 8, 23, 0.4)'
      },
      backgroundImage: {
        aurora: 'radial-gradient(circle at top left, rgba(124, 140, 255, 0.22), transparent 28%), radial-gradient(circle at top right, rgba(79, 209, 255, 0.18), transparent 24%), linear-gradient(180deg, #060816 0%, #070b16 45%, #05070f 100%)'
      }
    }
  },
  plugins: []
};

export default config;
