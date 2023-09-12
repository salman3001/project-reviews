// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxtjs/apollo",
    "nuxt-graphql-server",
    "@pinia/nuxt",
    "@invictus.codes/nuxt-vuetify",
  ],
  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: "http://localhost:3000/graphql",
      },
    },
  },
  graphqlServer: {
    // config
    url: "/api/graphql",
    schema: "./server/**/*.graphql",
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: false,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      useVuetifyLabs: true,
    },
  },
  runtimeConfig: {
    baseApi: "http://localhost:3000/graphql",
  },
  css: ["~/assets/css/main.css"],
});
