<script setup lang="ts">
import { Icon } from "#components";

defineProps<{ title: string }>();
const arrowUpIcon = h(Icon, {
  name: "material-symbols:keyboard-arrow-up",
});
</script>
<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        color="secondary"
        :density="'comfortable'"
        style="text-transform: capitalize; font-weight: 600"
        v-bind="props"
        :append-icon="arrowUpIcon"
      >
        {{ title }}
      </v-btn>
    </template>
    <v-list class="rounded-lg" style="border-top: solid black 4px">
      <slot />
    </v-list>
  </v-menu>
</template>
