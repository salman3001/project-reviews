// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo",
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:3001/graphql",
      },
    },
  },

  runtimeConfig: {
    baseApi: "http://localhost:3000/graphql",
    public: {
      GQL_HOST: "http://127.0.0.1:3001/graphql",
    },
  },
});
