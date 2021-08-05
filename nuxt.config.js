export default {
    target: 'static',
    router: {
        base: '/'
    },
    head: {
        title: 'BONDIBON',
        titleTemplate: 'Игрушки, развивающие и развлекательные игры | %s',
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
                content: 'Bondibon - игрушки, развивающие и развлекательные игры'
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