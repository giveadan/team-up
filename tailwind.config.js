const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ['Work Sans', 'sans-serif'],
      body: ['Work Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.5xl') },
        'h2': { fontSize: config('theme.fontSize.3xl') },
        'h3': { fontSize: config('theme.fontSize.xl') },
      })
    })
  ],
}
