<script setup lang="ts">
import { Icon } from "#components";
const visible = useState("visible", () => false);
const EyeOpenIcon = h(Icon, {
  name: "material-symbols:visibility-outline-rounded",
});
const EyeCloseIcon = h(Icon, {
  name: "material-symbols:visibility-off-outline",
});
// import useAuthStore from "~/store/useAuthStroe";
// definePageMeta({
//   middleware: ["guest"],
// });

// const email = useState("email", () => "");
// const password = useState("password", () => "");
// const authStore = useAuthStore();

// const query = gql`
//   mutation ($input: AdminSininInput!) {
//     adminSignIn(adminSigninInput: $input) {
//       token
//       user {
//         firstName
//       }
//     }
//   }
// `;

// const variables = {
//   input: {
//     email: email.value,
//     password: password.value,
//   },
// };

// const login = async () => {
//   const { data, error } = await useAsyncQuery({ query, variables });
//   if ((data.value as any)?.adminSignIn?.token) {
//     authStore.setUser(data.value);
//     navigateTo("/admin");
//   }
//   if (error) {
//     alert("invalid credential");
//   }
// };
</script>

<template>
  <div
    class="p-2 centered"
    color="secondary"
    style="
      background-image: url('/images/login-bg.png');
      background-position: center;
      background-color: #f5f0ea;
      position: relative;
      height: 100vh;
    "
  >
    <v-card
      class="mx-auto pa-6 pb-8"
      elevation="2"
      max-width="448"
      max-height="600"
      rounded="lg"
      style="top: 50%; transform: translateY(-50%)"
    >
      <BrandLogo />
      <v-card-text class="text-h5 text-center">Welcome Back!</v-card-text>
      <v-card-text class="text-caption text-center">
        Please enter your credentials to login.
      </v-card-text>
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>
      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? EyeOpenIcon : EyeCloseIcon"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>
      <div class="text-sm-right pb-2">
        <NuxtLink
          class="text-caption text-decoration-none text-primary"
          href="/admin/reset-password"
        >
          Forgot login password?</NuxtLink
        >
      </div>

      <v-btn block class="mb-8" size="large" color="primary"> Log In </v-btn>
    </v-card>
  </div>
</template>
