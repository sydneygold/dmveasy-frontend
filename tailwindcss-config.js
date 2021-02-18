module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "Josefin Slab": ["Josefin Slab", 'sans']
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
