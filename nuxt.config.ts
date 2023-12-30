// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({

// })
import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  app: {
    head: {
       script: [
      {src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' }
    //  { src: "https://cdn.jsdelivr.net/npm/another-script@latest/dist/another-script.min.js" },
    ],
        htmlAttrs: {
            dir: "rtl",
            lang: "fa",
        },

    },
},

  buildModules: ['@nuxt/typescript-build'],
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],

  modules: ['@pinia/nuxt']
}

export default config
