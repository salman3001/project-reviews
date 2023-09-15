<script setup lang="ts">
import useAuthStore from "~/store/useAuthStroe";

const auth = useAuthStore();
</script>
<template>
  <v-menu min-width="200px" rounded>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar color="brown" size="large" image="/images/adminDp.jpg">
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <h3>John Smith</h3>
          <p class="text-caption mt-1">John@gmail.com</p>
          <v-divider class="my-3"></v-divider>
          <v-btn
            rounded
            variant="text"
            :style="{ textTransform: 'capitalize' }"
            @click="auth.logout()"
          >
            Log out
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
