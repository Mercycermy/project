/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#Fffffff',
          100: '#02080dff',
          200: '#B18461',
          300: '#8F5742',
          400: '#6E3029',
          500: '#4C1619',
          600: '#380b04ff',
          700: '#FFC107' ,
          800: '#FFB300',
        },
        secondary: '#D3B486',
        accent: '#B18461',
        surface: '#F5E4B1',
        dark: '#2A0810',
        light: '#F5E4B1',
        // You can add more semantic names if needed
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        5: '#fff078',
        10: '#ffd25b',
        20: '#f8b13d',
      }
    },
    borderRadius: {
      'custom-left': '9999px 0 0 9999px',
    },
  },
},

    },
  },
  plugins: [],
};
