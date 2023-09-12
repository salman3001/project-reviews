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
      <v-card-text class="text-h5 text-center">Forgot Password?</v-card-text>
      <v-card-text class="text-caption">
        Please enter your email id to recieve a password reset link
      </v-card-text>
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>
      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <v-btn block class="mb-8" size="large" color="primary"
        ><NuxtLink
          href="/admin/forgot-password"
          class="text-white text-decoration-none"
          >Send Link</NuxtLink
        >
      </v-btn>
    </v-card>
  </div>
</template>
