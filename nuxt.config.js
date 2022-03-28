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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/bulldog.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  serverMiddleware: [
    "~/api/index"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n', {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'es',
          messages: {
            en: {
              title: 'Photography',
              pick_a_language: 'Pick a language',
              about:
                'Where artists create their future. Start sharing your creativity with others around you. Let the world know who you are.',
              meet: 'Meet our artists',
              artists: 'Artists',
              language: 'Language',
              support: 'Support',
              login: 'Login',
              logout: 'Log out',
              signup: 'Register',
              sign_in: 'Sign in',
              create_account: 'Create account',
              forgot: 'Forgot your password?',
              go_back: 'Go back',
              email: 'Email',
              password: 'Password',
              display_name: 'Display name',
              sign_header: 'Sign in to IHS Photography',
              register_header: 'Register to IHS Photography',
            },
            es: {
              title: 'Fotografia',
              pick_a_language: 'Elige un idioma',
              about:
                'Donde los artistas crean su futuro. Comienza a compartir tu creatividad con otros alrededor de ti. Haste conocer en este mundo.',
              meet: 'Conoce a nuestros artistas',
              artists: 'Artistas',
              language: 'Idioma',
              support: 'Apoyo',
              login: 'Iniciar sesión',
              logout: 'Cerra sesion',
              signup: 'Registrarse',
              sign_in: 'Iniciar',
              create_account: 'Crear cuenta',
              forgot: '¿Olvidaste tu contraseña?',
              go_back: 'Volver',
              email: 'Correo electrónico',
              password: 'Contraseña',
              display_name: 'Nombre de usuario',
              sign_header: 'Iniciar sesión en IHS Fotografia',
              register_header: 'Registrarse en IHS Fotografia',
            },
          },
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
