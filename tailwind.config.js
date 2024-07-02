/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        'blue': '#005EEF',
        'glassBlue': '#77DDF5',
        'red': '#C73637',
        'green': '#44B162',
        'black': '#000000',
        'darkBlue': '#001F82',
        'bgLightGray': '#ccc',
        'bgGray': '#D6D6D6',
        'darkGray': '#b6b6b6',
        'textGray': '#8B8B8B',
        'white': '#FFFFFF',
        'yellow': '#FFC000'


      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
