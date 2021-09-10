export default {
  publicRuntimeConfig: {
    LINKS_URL:
        process.env.NODE_ENV === 'production' ? process.env.LINKS_URL : 'http://localhost:3000/data/links.json',
    ADDRESS_URL:
        process.env.NODE_ENV === 'production' ? process.env.ADDRESS_URL : 'http://localhost:3000/data/address.json',
  },
  target: 'server',
  components: true,
  router: {
    base: '/',
  },
  server: {
    port: 8000,
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
    '~/plugins/vue-lazysizes.client.js',
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
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/device',
  ],
  build: {
    extend(config, { loaders: { vue } }) {
      vue.transformAssetUrls.img = ['data-src', 'src']; // eslint-disable-line no-param-reassign
      vue.transformAssetUrls.source = ['data-srcset', 'srcset']; // eslint-disable-line no-param-reassign
    },
  },
  optimizedImages: {
    inlineImageLimit: 1000,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8],
    },
    webp: {
      preset: 'default',
      quality: 80,
    },
  },
};
