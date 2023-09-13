<script setup lang="ts">
import { Icon } from "#components";
import useAuthStore from "~/store/useAuthStroe";
import BrandLogo from "~/components/BrandLogo.vue";

definePageMeta({
  // middleware: ["guest"],
});

const email = useState("email", () => "");
const password = useState("password", () => "");
const auth = useAuthStore();
const visible = useState("visible", () => false);

const EyeOpenIcon = h(Icon, {
  name: "material-symbols:visibility-outline-rounded",
});
const EyeCloseIcon = h(Icon, {
  name: "material-symbols:visibility-off-outline",
});

const MailIcon = h(Icon, {
  name: "mdi-email-outline",
});

const LockIcon = h(Icon, {
  name: "mdi-lock-outline",
});

const variables = () => ({
  input: {
    email: email.value,
    password: password.value,
  },
});
</script>

<template>
  <form
    class="p-2 centered"
    color="secondary"
    style="
      background-image: url('/images/login-bg.png');
      background-position: center;
      background-color: #f5f0ea;
      position: relative;
      height: 100vh;
    "
    @submit.prevent="auth.login(variables)"
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
        :prepend-inner-icon="MailIcon"
        variant="outlined"
        v-model="email"
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
        :prepend-inner-icon="LockIcon"
        variant="outlined"
        @click:append-inner="visible = !visible"
        v-model="password"
      ></v-text-field>
      <div class="text-sm-right pb-2">
        <NuxtLink
          class="text-caption text-decoration-none text-primary"
          href="/admin/reset-password"
        >
          Forgot login password?</NuxtLink
        >
      </div>

      <v-btn type="submit" block class="mb-8" size="large" color="primary">
        <v-progress-circular indeterminate v-if="auth.loading" />
        Log In
      </v-btn>
      {{ auth.user?.firstName }}
      <br />
    </v-card>
  </form>
</template>
