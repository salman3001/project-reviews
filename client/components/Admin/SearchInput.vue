<script setup lang="ts">
import { Icon } from "#components";

defineProps<{
  name: string;
  placeholder: string;
}>();

const magnifyIcon = h(Icon, {
  name: "material-symbols:search",
});

const searchHandler = () => {
  console.log("searching....");
};
</script>

<template>
  <v-text-field
    variant="outlined"
    density="compact"
    :hide-details="true"
    :name="name"
    :placeholder="placeholder"
    :append-inner-icon="magnifyIcon"
    :on-click:append-inner="searchHandler"
    rounded="lg"
    style="min-width: 15rem"
  >
  </v-text-field>
</template>
