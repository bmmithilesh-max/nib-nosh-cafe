/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#EEF5FD',
          100: '#D9E9FA',
          200: '#B3D2F5',
          300: '#7DB4EC',
          400: '#4A90E2',
          500: '#1E6FD9',
          600: '#1558B0',
          700: '#0C3B82',
          800: '#082A60',
          900: '#051840',
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
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
