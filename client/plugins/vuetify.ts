import { ThemeDefinition, createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    defaults: {
      global: {
        ripple: false,
      },
      VTextField: {
        variant: "outlined",
      },
    },
    theme: {
      themes: {
        light: {
          colors: {
            primary: "#000",
            secondary: "#F5F0EA",
          },
        } as ThemeDefinition,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
