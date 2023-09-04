// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
