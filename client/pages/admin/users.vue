<script setup lang="ts">
definePageMeta({
  layout: "admin-dashboard-layout",
});

const itemsPerPage = useState("itemsPerPage", () => 10);

const headers = [
  {
    title: "Dessert (100g serving)",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Calories", key: "calories", align: "end" },
  { title: "Fat (g)", key: "fat", align: "end" },
  { title: "Carbs (g)", key: "carbs", align: "end" },
  { title: "Protein (g)", key: "protein", align: "end" },
  { title: "Iron (%)", key: "iron", align: "end" },
];

const { load, loading, onError, onResult, result } = useLazyQuery(query);

const search = "";
</script>

<template>
  <div
    class="d-flex flex-colomn align-start justify-start w-screen ma-4 ma-sm-8 ma-md-16"
  >
    <div class="d-flex justify-space-between" style="width: 100%">
      <div>
        <AdminSearchInput />
      </div>
      <div class="d-flex" style="gap: 20px">
        <v-select
          density="compact"
          :hide-details="true"
          variant="outlined"
          :items="['filter 1', 'fliter-2']"
          label="Role"
          style="min-width: 8rem"
        ></v-select>
        <v-select
          density="compact"
          :hide-details="true"
          variant="outlined"
          :items="['filter 1', 'fliter-2']"
          label="Status"
          style="min-width: 8rem"
        ></v-select>
        <NuxtLink href="/admin/add-user" class="d-flex">
          <v-btn color="primary" size="lg" class="px-2 w-full h-full">
            + Add User
          </v-btn>
        </NuxtLink>
      </div>
    </div>
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items-length="result.totalItems"
      :items="result.Items"
      :loading="loading"
      :search="search"
      class="elevation-1"
      item-value="name"
      @update:options="load"
    ></v-data-table-server>
  </div>
</template>
