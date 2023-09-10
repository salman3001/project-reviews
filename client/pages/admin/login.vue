<script setup lang="ts">
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
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail>
        <v-text-field label="User Name"></v-text-field>

        <v-text-field label="password"></v-text-field>
        <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

        <v-btn
          type="submit"
          color="transparent"
          block
          class="mt-2 elevation-19 light-green display-1"
          >Sign in</v-btn
        >
      </v-form>
      <div class="mt-2">
        <p class="text-body-2 tit">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </v-sheet>
  </div>
</template>
