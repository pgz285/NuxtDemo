export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    API:process.env.API,
    IMG: process.env.IMG,
    WS:process.env.WS,
  },
  head: {
    title: 'NuxtDemo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "assets/css/default.css", 'swiper/css/swiper.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/i18n.js', '@/plugins/bus','@/plugins/swiper'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  router: {
    //应用到每个页面
    middleware: 'i18n',
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //添加vue-i18n模块，减少应用 bundle 的体积
    vendor: ['vue-i18n'],
  },
  loading: {
    color: '#1bbfb4',
    height: '3px'
  }
}
