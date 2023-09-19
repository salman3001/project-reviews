// import {
//   VDataTable,
//   VDataTableServer,
//   VDataTableVirtual,
// } from "vuetify/labs/VDataTable";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/apollo",
    "@invictus.codes/nuxt-vuetify",
    "@vee-validate/nuxt",
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:3001/graphql",
      },
    },
  },
  vuetify: {
    vuetifyOptions: {
      // components: {
      //   VDataTable,
      //   VDataTableServer,
      //   VDataTableVirtual,
      // },
    },
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: true,
      autoImport: true,
      useVuetifyLabs: true,
    },
  },
  runtimeConfig: {
    baseApi: "http://localhost:3000/graphql",
    public: {
      GQL_HOST: "http://127.0.0.1:3001/graphql",
    },
  },
  css: ["~/assets/css/main.css"],
});
