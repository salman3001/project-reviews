<script setup lang="ts">
import { Icon } from "#components";

const searchIcon = h(Icon, {
  name: "ic:sharp-search",
});
</script>

<template>
  <v-text-field
    name="search"
    label="Search"
    variant="outlined"
    density="compact"
    :hide-details="true"
    :prepend-inner-icon="searchIcon"
    style="min-width: 20rem"
    class="hidden-md-and-down"
    bg-color="secondary"
    rounded="lg"
  >
  </v-text-field>
</template>
