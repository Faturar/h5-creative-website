import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6f62ff',
        dark: '#0a0533',
        soft: '#f3f5f9'
      },
      boxShadow: {
        soft: '0 20px 50px rgba(111, 98, 255, 0.18)',
        card: '0 10px 30px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(110deg, #f2f5ff 0%, #efe7ff 40%, #fbe9f5 100%)',
        'cta-gradient': 'linear-gradient(110deg, #7b66ff 0%, #7f66ec 40%, #9488ff 100%)',
        'footer-gradient': 'linear-gradient(180deg, #0f0a3d 0%, #080326 100%)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
