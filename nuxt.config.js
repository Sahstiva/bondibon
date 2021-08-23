export default {
  publicRuntimeConfig: {
    BASE_URL: process.env.NODE_ENV === 'production' ? 'https://promo.vitshas.dev/data/' : 'http://localhost:3000/data/',
    LINKS_URL: '${BASE_URL}links.json',
    ADDRESS_URL: '${BASE_URL}address.json'
  },
  privateRuntimeConfig: {
    API_YMAP: process.env.API_YMAP
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
      lang: 'en',
      amp: true,
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
    ['vue-scrollto/nuxt', {
      container: 'body',
      duration: 500,
      easing: 'ease-in',
      force: true,
      cancelable: false,
      offset: 1,
    }],
  ],
};
