/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        metro: {
          red: '#E52532',
          navy: '#172D78',
          'navy-secondary': '#243E91',
          white: '#FFFFFF',
          light: '#F4F6FA',
          charcoal: '#20242C',
          muted: '#747C89',
        },
      },
      fontFamily: {
        display: ['Oswald', 'Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Manrope', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      animation: {
        'slow-zoom': 'slowZoom 25s ease-in-out infinite alternate',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
