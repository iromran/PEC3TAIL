const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        '2': 'repeat(2, 42vw)',
        '7': 'repeat(7, 12vw)',
      },
      gridTemplateRows: {
        '7': 'repeat(7, 10vw)',
        '10': 'repeat(10, 5vw)',
      },
      gridRow: {
        'span-r5': '5 / 5',
        'span-r6': '6 / 8',
        'span-r8': '8 / 8',
        'span-r9': '9 / 11',
      },
      gridColumn: {
        'span-c1': '1 / 4',
        'span-c5': '5 / 9',
      },
      margin: {
        p10: '10%',
      },
      colors: {
        'iron-grey': '#747474',
        'iron-silver': '#c0c0c0',
        'black-light': '#00000039'
      },
      backgroundImage: theme => ({
        'iron-image': "url('../images/iron.jpg')",
      }),
    },
  },
  purge: ["./src/**/*.html"],
  variants: {},
  plugins: [],
}
