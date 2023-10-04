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
        'plainBlue': '#00b4d8',
        'darkPlainBlue': '#0077b6',
        'JSYellow': '#ffd60a',
        'darkJSYellow': '#ffc300',
        'reactBlue': '#00bbf9',
        'darkReactBlue': '#00a5cf',
        'carmesi': '#c52233',
        'darkCarmesi': '#a51c30',
        'nodeGreen': '#70e000',
        'darkNodeGreen': '#38b000',
        'purple': '#5a189a',
        'darkPurple': '#3c096c'
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
