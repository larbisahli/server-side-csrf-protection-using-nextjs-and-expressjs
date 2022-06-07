module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './containers/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        base: 'rgba(0, 0, 0, 0.16) 0px 4px 16px'
      }
    }
  }
};
