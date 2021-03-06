module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cadence Avocats',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cadence Avocats est né du désir de mettre en commun des compétences complémentaires, au service des entreprises.' },
      { property: 'og:title', content: 'Cadence Avocats' },
      { property: 'og:description', content: 'Cadence Avocats est né du désir de mettre en commun des compétences complémentaires, au service des entreprises.' },
      { property: 'og:url', content: 'http://cadenceavocats.com/' },
      { property: 'og:image', content: 'http://cadenceavocats.com/_nuxt/img/Logo-VA.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans' }
    ]
  },
  css: [
    'assets/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vue-i18n']
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['./plugins/i18n.js'],
  generate: {
    routes: [
      '/', '/en',
      '/cabinet', '/en/cabinet',
      '/equipe', '/en/equipe',
      '/savoir-faire', '/en/savoir-faire',
      '/valeurs', '/en/valeurs',
      '/contact', '/en/contact',
    ]
  }
}
