export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/datavis-project-2022-shazam/'
  },

  generate: {
    dir: '../docs'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dataviz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      // {
      //   src: "https://unpkg.com/flowbite@1.4.7/dist/flowbite.js",
      //   body: true,
      // },
      {
        src: "https://code.highcharts.com/highcharts.js",
        body: true,
      }, {
        src: "https://code.highcharts.com/highcharts-more.js",
        body: true,
      }, {
        src: "https://code.highcharts.com/modules/data.js",
        body: true,
      }, {
        src: "https://code.highcharts.com/modules/exporting.js",
        body: true,
      }, {
        src: "https://code.highcharts.com/modules/parallel-coordinates.js",
        body: true,
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { 
        //     rel: 'stylesheet', 
        //     href: 'https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css' 
        // }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/plugins/highcharts.js", mode: "client" },
  ],

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
    'bootstrap-vue/nuxt',
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true, // https://github.com/nuxt/nuxt.js/issues/9223
  }
}
