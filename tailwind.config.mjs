/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f9',
          100: '#d6dff0',
          200: '#aec0e2',
          300: '#7e99ca',
          400: '#4f72ad',
          500: '#2f528e',
          600: '#23406f',
          700: '#1b3258',
          800: '#152644',
          900: '#0f1c33',
          950: '#0a1324',
        },
        gold: {
          50: '#fdf9ec',
          100: '#faf0c7',
          200: '#f4e08a',
          300: '#edc74f',
          400: '#e2b033',
          500: '#c99220',
          600: '#a8721a',
          700: '#85561a',
          800: '#6c451d',
          900: '#5a3a1d',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
