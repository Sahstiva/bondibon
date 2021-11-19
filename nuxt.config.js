/* eslint-disable quotes */
export default {
  target: 'static',
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
      {
        name: 'yandex-verification',
        content: '237f96a2f87aba73',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        // eslint-disable-next-line max-len,vue/max-len
        innerHTML: `"undefined"==typeof __GetI&&(__GetI=[]),function(){__GetI.push({type:"CONVERSION",site_id:"7414",product_id:"",product_price:"",category_id:"",pixel_id:"10"});var t="undefined"==typeof __GetI_domain?"px.adhigh.net":__GetI_domain,e=("https:"==document.location.protocol?"https://":"http://")+t+"/p.js",p=document.createElement("script");p.type="text/javascript",p.src=e;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(p,i)}();`,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
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
    '@nuxtjs/yandex-metrika',
    '@nuxtjs/firebase',
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID,
    enabled: true,
  },
  yandexMetrika:
      {
        id: process.env.YANDEX_METRIKA_ID,
        webvisor: true,
      },
  firebase:
      {
        config: {
          apiKey: 'AIzaSyACS5R9i9bFW7PBq3sXFK5k_hNW_t1MZns',
          authDomain: 'bondibon-promo.firebaseapp.com',
          databaseURL: 'https://bondibon-promo-default-rtdb.europe-west1.firebasedatabase.app',
          projectId: 'bondibon-promo',
          storageBucket: 'bondibon-promo.appspot.com',
          messagingSenderId: '1078879388246',
          appId: '1:1078879388246:web:0e9392d7ec34345c14b1f7',
          measurementId: 'G-T2Z097GDWJ',
        },
        services: {
          database: true,
          auth: {
            ssr: {
              serverLogin: true,
              credential: '~/assets/serviceAccount.json',
            },
          },
        },
      },
  build: {
    parallel: false,
    extend(config, { loaders: { vue } }) {
      vue.transformAssetUrls.img = ['data-src', 'src']; // eslint-disable-line no-param-reassign
      vue.transformAssetUrls.source = ['data-srcset', 'srcset']; // eslint-disable-line no-param-reassign
    },
  },
  responsiveLoader: {
    name: 'img/[hash:7]-[width].[ext]',
    quality: 50,
  },
  optimizedImages: {
    inlineImageLimit: 1000,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: false,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80,
    },
    webp: {
      preset: 'default',
      quality: 80,
    },
  },
};
