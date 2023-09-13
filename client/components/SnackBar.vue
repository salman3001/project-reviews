<script setup lang="ts">
import useTostStore from "~/store/useTostStore";
const tost = useTostStore();
</script>

<template>
  <div class="text-center">
    <v-snackbar
      v-model="tost.open"
      timeout="3000"
      location="right top"
      color="transparent"
      min-width="300"
      min-height="60"
      class="pa-0 ma-0 elevation-0"
      variant="flat"
    >
      <v-alert
        :type="tost.variant"
        class="pa-2 d-flex items-center justify-space-between"
      >
        <template v-slot:title>
          <div class="w-full text-start">{{ tost.text }}</div>
        </template>
        <template v-slot:append>
          <v-btn variant="text" @click="tost.closeTost()">
            <Icon name="ci:close-sm" size="30" />
          </v-btn>
        </template>
      </v-alert>
    </v-snackbar>
  </div>
</template>
