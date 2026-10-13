/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        /* Paleta provisional neutra inspirada en el descanso. Fácil de reemplazar */
        brand: {
          light: '#f5f5f4', // stone-100
          DEFAULT: '#a8a29e', // stone-400 (acento suave)
          dark: '#020241', // stone-800 (textos principales)
        }
      },
      fontFamily: {
        // Tipografía serif para títulos (elegancia) y sans para lectura
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}