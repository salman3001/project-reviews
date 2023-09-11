<script setup lang="ts">
import { Icon } from "#components";
const visible = useState("visible", () => false);
const confirmVisible = useState("confirmVisible", () => false);
const EyeOpenIcon = h(Icon, {
  name: "material-symbols:visibility-outline-rounded",
});
const EyeCloseIcon = h(Icon, {
  name: "material-symbols:visibility-off-outline",
});
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
      <v-card-text class="text-h5 text-center">Reset your password</v-card-text>
      <v-card-text class="text-caption">
        Please choose a new password
      </v-card-text>
      <div class="text-subtitle-1 text-medium-emphasis">New Password</div>
      <v-text-field
        :append-inner-icon="visible ? EyeOpenIcon : EyeCloseIcon"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter new password"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Confirm New Password
      </div>

      <v-text-field
        :append-inner-icon="confirmVisible ? EyeOpenIcon : EyeCloseIcon"
        :type="confirmVisible ? 'text' : 'password'"
        density="compact"
        placeholder="Confirm new password"
        variant="outlined"
        @click:append-inner="confirmVisible = !confirmVisible"
      ></v-text-field>

      <v-btn block class="mb-8" size="large" color="primary">
        Reset Password
      </v-btn>
    </v-card>
  </div>
</template>
