import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          light: '#FFFDF9',
          DEFAULT: '#FCF5E9',
          dark: '#F4ECE0',
          muted: '#EDE2D2',
        },
        gold: {
          light: '#E8D3A2',
          DEFAULT: '#C9A45C',
          dark: '#997836',
          deep: '#735923',
          muted: '#B89B66',
        },
        burgundy: {
          light: '#8F3E48',
          DEFAULT: '#722F37',
          dark: '#4E1F25',
          deep: '#381419',
        },
        rose: {
          light: '#F5D7D9',
          DEFAULT: '#E8B4B8',
          dark: '#C48D93',
        },
        darkbrown: {
          light: '#4A372E',
          DEFAULT: '#30221C',
          dark: '#1F1511',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'var(--font-cinzel)', 'Georgia', 'serif'],
        tamil: ['var(--font-noto-tamil)', 'Mukta Malar', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        handwriting: ['var(--font-caveat)', 'cursive'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #E8D3A2 0%, #C9A45C 50%, #997836 100%)',
        'burgundy-shimmer': 'linear-gradient(135deg, #8F3E48 0%, #722F37 50%, #4E1F25 100%)',
      },
      boxShadow: {
        'gold-soft': '0 10px 30px -10px rgba(201, 164, 92, 0.3)',
        'burgundy-soft': '0 10px 35px -10px rgba(114, 47, 55, 0.35)',
        'vintage-card': '0 15px 35px -5px rgba(48, 34, 28, 0.15), 0 5px 15px -3px rgba(48, 34, 28, 0.08)',
        'polaroid': '0 12px 28px rgba(0, 0, 0, 0.18), 0 2px 4px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
