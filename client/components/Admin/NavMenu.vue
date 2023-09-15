<script setup lang="ts">
import { Icon } from "#components";

defineProps<{ items: { title: string; href: string }[] }>();
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
        Admin Users
      </v-btn>
    </template>
    <v-list class="rounded-lg">
      <v-list-item v-for="(item, index) in items" :key="index" :value="index">
        <v-list-item-title>
          <NuxtLink :href="item.href">
            {{ item.title }}
          </NuxtLink>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
