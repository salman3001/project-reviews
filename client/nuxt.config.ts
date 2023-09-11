// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-icon", "@nuxtjs/apollo", "@pinia/nuxt"],
  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: "http://localhost:3000/graphql",
      },
    },
  },
  runtimeConfig: {
    baseApi: "http://localhost:3000/graphql",
  },
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
});
