export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IHS Photography',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Irvington High School Photography' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/bulldog.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/i18n', {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'es',
          messages: {
            en: {
              title: 'Photography',
              pickalanguage: 'Pick a language',
              about: 'Where artists create their future. Start sharing your creativity with others around you. Let the world know who you are.',
              meet: 'Meet our artists',
              artists: 'Artists',
              language: 'Language',
              support: 'Support',
              login: 'Login',
              signup: 'Sign up',
            },
            es: {
              title: 'Fotografia',
              pickalanguage: 'Elige un idioma',
              about: 'Donde los artistas crean su futuro. Comienza a compartir tu creatividad con otros alrededor de ti. Haste conocer en este mundo.',
              meet: 'Conoce a nuestros artistas',
              artists: 'Artistas',
              language: 'Idioma',
              support: 'Apoyo',
              login: 'Iniciar sesión',
              signup: 'Registrarse',
            }
          }
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
