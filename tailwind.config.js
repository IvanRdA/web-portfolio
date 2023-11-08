/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        MontserratBlack: ['MontserratBlack', 'sans-serif'],
        MontserratRegular: ['MontserratRegular', 'sans-serif'],
        MontserratItalic: ['MontserratItalic', 'sans-serif']
      },
      colors: {
        'reactBlue': '#00bbf9',
        'darkReactBlue': '#00a5cf',
        'carmesi': '#c52233',
        'darkCarmesi': '#a51c30',
        'beige': {
          '50': '#f9f9ed',
          '100': '#f5f5dc',
          '200': '#e5e3a3',
          '300': '#d6cf6e',
          '400': '#c9ba46',
          '500': '#baa538',
          '600': '#a0852e',
          '700': '#806328',
          '800': '#6c5227',
          '900': '#5d4526',
          '950': '#352513'
        },
        'purple': {
          '50': '#fbf4ff',
          '100': '#f6e6ff',
          '200': '#efd2ff',
          '300': '#e2aeff',
          '400': '#d07bff',
          '500': '#bf49ff',
          '600': '#ae25f8',
          '700': '#9815db',
          '800': '#7f17b2',
          '900': '#68148f',
          '950': '#500075'
        }
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' }
        }
      },
      animation: {
        appear: 'appear 1s ease-in-out'
      }
    }
  },
  plugins: []
}
