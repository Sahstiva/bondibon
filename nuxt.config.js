export default {
  publicRuntimeConfig: {
    LINKS_URL:
        process.env.NODE_ENV === 'production' ? process.env.LINKS_URL : 'http://localhost:3000/data/links.json',
    ADDRESS_URL:
        process.env.NODE_ENV === 'production' ? process.env.ADDRESS_URL : 'http://localhost:3000/data/address.json',
  },
  target: 'static',
  components: true,
  router: {
    base: '/',
  },
  head: {
    title: 'BONDIBON',
    titleTemplate: 'Игрушки, развивающие и развлекательные игры | %s',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Bondibon - игрушки, развивающие и развлекательные игры',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  plugins: [
    '~/plugins/fontawesome.js',
    {
      src: '~plugins/vue-js-modal.js',
      mode: 'client',
    },
    {
      src: '~/plugins/ymapPlugin.js',
      mode: 'client',
    },
  ],
  modules: [
    '@nuxtjs/axios',
  ],
};
