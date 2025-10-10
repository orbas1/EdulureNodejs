/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        brand: {
          DEFAULT: '#1E2743',
          dark: '#141B2E',
          light: '#2F3D63',
          accent: '#FE615A'
        }
      },
      boxShadow: {
        card: '0 20px 45px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
}
