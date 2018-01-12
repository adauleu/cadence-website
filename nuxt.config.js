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
      { name: 'og:title', content: 'Cadence Avocats' },
      { name: 'og:description', content: 'Cadence Avocats est né du désir de mettre en commun des compétences complémentaires, au service des entreprises.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'http://cadenceavocats.com/' },
      { name: 'og:image', content: 'http://cadenceavocats.com/_nuxt/img/Logo-Header.png' }
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
  }
}
