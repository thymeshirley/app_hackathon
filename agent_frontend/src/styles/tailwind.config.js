module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'neobrutalism': {
          DEFAULT: '#A9A9A9',
          '50': '#FFFFFF',
          '100': '#F2F2F2',
          '200': '#DBDBDB',
          '300': '#C4C4C4',
          '400': '#ADADAD',
          '500': '#969696',
          '600': '#7F7F7F',
          '700': '#686868',
          '800': '#515151',
          '900': '#3A3A3A'
        },
      },
      fontFamily: {
        'beautiful': ['"Lucida Sans Unicode"', 'Lucida Grande', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}