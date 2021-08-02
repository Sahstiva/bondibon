export default {
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