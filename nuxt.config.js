export default {
    target: 'static',
    router: {
        base: '/bondibon/'
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
        '~/plugins/fontawesome.js'
    ],
    modules: [
        ['vue-scrollto/nuxt', { duration: 500, easing: "ease-in" }],
    ]
}