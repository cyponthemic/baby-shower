/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        warm: {
          bg: '#f9f4ec',
          text: '#26221c',
        },
      },
      borderRadius: {
        'card': '1.5rem',
      },
    },
  },
  plugins: [],
}

