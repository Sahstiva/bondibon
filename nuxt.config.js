export default {
  target: 'static',
  components: true,
  build: {
    vendor: ['vue-yandex-maps'],
  },
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
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  plugins: [
    '~/plugins/fontawesome.js',
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
