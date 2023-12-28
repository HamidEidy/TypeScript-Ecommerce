// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
 
// })
import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build'],
  devtools: { enabled: true },
css: ["~/assets/scss/main.scss"],
  
  modules: ['@pinia/nuxt']
}

 export default config
