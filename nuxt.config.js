export default {
    target: 'static',
    router: {
        base: '/'
    },
    head: {
        title: 'Nuxt',
        titleTemplate: 'My amazing Nuxt application | %s',
        htmlAttrs: {
            lang: 'en',
            amp: true
        },
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'The amazing Nuxt application that teaches me all the cool features of Nuxt'
            }
        ],
    },
    css: [
        '~/assets/style/variables.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    plugins: [
        '~/plugins/animateOnScroll.client.js',
        '~/plugins/fontawesome.js'
    ],
    modules: [
        ['vue-scrollto/nuxt', { container: "body", duration: 500, easing: "ease-in", force: true,
            cancelable: false, offset: 50 }],
    ]
}