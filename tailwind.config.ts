/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mona Sans', 'sans-serif'],
        heading: ['Hubot Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
