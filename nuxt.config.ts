// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    modules: [
        '@pinia/nuxt',
        '@nuxt/image',
        '@invictus.codes/nuxt-vuetify'
    ],
    css: ['~/assets/css/main.css', 'vuetify/styles/main.sass'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            // { src: '~/plugins/swiper.client.js', mode: 'client' }
        },
    },

    plugins: [
        { src: '~/plugins/swiper.client.js', mode: 'client' }
    ],
    
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
            // @TODO: list all vuetify options
        },

        moduleOptions: {
            /* nuxt-vuetify module options */
            styles: true,
            autoImport: true
        }
    }
})
