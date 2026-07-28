/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#EAF8FF',
          100: '#D3F0FF',
          200: '#A8E2FF',
          300: '#6FCFFF',
          400: '#3DBDFF',
          500: '#00ADEF',
          600: '#0090C7',
          700: '#00719D',
          800: '#045577',
          900: '#0A3B54',
        },
        cream: {
          50: '#FDFCF8',
          100: '#F8F5EC',
          200: '#F0EAD8',
        },
        amber: {
          400: '#FBBF24',
          500: '#F5A820',
          600: '#D97706',
        },
      },
      fontFamily: {
        serif: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
