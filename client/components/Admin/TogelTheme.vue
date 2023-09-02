<script setup lang="ts">
const { theme, setTheme } = useTheme()
</script>

<template>
  <label tabindex="0" class="btn btn-sm btn-ghost btn-circle avatar">
    <div class="w-6 rounded-full">
      <Icon v-if="theme === 'dark'" name="material-symbols:mode-night" size="20" class="text-gray-200"
        @click="setTheme('light')" />
      <Icon v-if="theme === 'light'" name="material-symbols:wb-sunny-outline" size="20" class="text-primary"
        @click="setTheme('dark')" />
    </div>
  </label>
</template>
