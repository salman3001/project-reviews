<script setup lang="ts">
import useAuthStore from "~/store/useAuthStroe";

const auth = useAuthStore();
</script>
<template>
  <v-menu min-width="200px" rounded>
    <template v-slot:activator="{ props }">
      <v-badge content="2" color="primary">
        <Icon
          v-bind="props"
          name="ic:outline-email"
          size="30"
          style="cursor: pointer"
        />
      </v-badge>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <p class="text-caption mt-1">Message 1</p>
          <v-divider class="my-3"></v-divider>
          <p class="text-caption mt-1">Message 2</p>
          <v-divider class="my-3"></v-divider>
          <p class="text-caption mt-1">Message 2</p>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
