<script setup lang="ts">
import { Icon } from "#components";
import { object, string } from "yup";
import useAuthStore from "~/store/useAuthStroe";
const visible = useState("visible", () => false);

const confirmVisible = useState("confirmVisible", () => false);

const EyeOpenIcon = h(Icon, {
  name: "material-symbols:visibility-outline-rounded",
});
const EyeCloseIcon = h(Icon, {
  name: "material-symbols:visibility-off-outline",
});

const { handleSubmit, handleReset } = useForm({
  validationSchema: toTypedSchema(
    object({
      email: string()
        .trim()
        .email("Must be an email ")
        .transform((v: string) => v.toLowerCase())
        .required("required"),
    })
  ),
});

const { sendForgotPasswordEmail, loading } =
  useAuthStore().sendForgotPasswordEmail();

const sendEmail = handleSubmit(async (value) => {
  sendForgotPasswordEmail(value.email);
});

const email = useField("email");
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
    @submit.prevent="sendEmail()"
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
        v-model="email.value.value"
        :error="email.errorMessage.value ? true : false"
        :error-messages="email.errorMessage.value"
      ></v-text-field>

      <v-btn
        type="submit"
        block
        class="mb-8"
        size="large"
        color="primary"
        :disabled="loading"
      >
        <v-progress-circular indeterminate v-if="loading" />
        Send Link
      </v-btn>
    </v-card>
  </form>
</template>
