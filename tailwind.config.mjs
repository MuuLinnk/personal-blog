/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        github: {
          bg: '#0d1117',
          card: '#161b22',
          border: '#30363d',
          text: '#c9d1d9',
          heading: '#f0f6fc',
          accent: '#58a6ff',
          green: '#3fb950',
          red: '#ff7b72',
          string: '#a5d6ff',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
