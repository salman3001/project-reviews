<script setup lang="ts">
import useAuthStore from "~/store/useAuthStroe";

definePageMeta({
  layout: "admin-dashboard-layout",
  // middleware: ["auth"],
});
</script>
<template>
  <div class="flex flex-col">
    main content
    <button class="btn btn-primary">query</button>
    page content here
  </div>
</template>
