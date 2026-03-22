import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0b1120',
        panel: '#10182b',
        border: 'rgba(148,163,184,0.14)',
        accent: '#7c8cff',
        accent2: '#51d4ff',
        accent3: '#8b5cf6',
        success: '#2dd4bf',
        warning: '#fbbf24'
      },
      boxShadow: {
        panel: '0 18px 60px rgba(2, 6, 23, 0.45)',
        glow: '0 24px 80px rgba(124, 140, 255, 0.22)'
      },
      backgroundImage: {
        shell: 'radial-gradient(circle at 10% 10%, rgba(124,140,255,0.18), transparent 26%), radial-gradient(circle at 85% 12%, rgba(81,212,255,0.14), transparent 24%), linear-gradient(180deg, #050816 0%, #060a16 50%, #04060d 100%)'
      }
    }
  },
  plugins: []
} satisfies Config;
