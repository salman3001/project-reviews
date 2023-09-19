<script setup lang="ts">
import { adminUserIndexQuery } from "~/queries/adminUsers";

definePageMeta({
  layout: "admin-dashboard-layout",
});

const itemsPerPage = useState("itemsPerPage", () => 10);
const page = useState("page", () => 1);
const perPage = useState("perPage", () => 10);
const search = useState<null | string>("search", () => null);
const roleId = useState<null | number>("roleId", () => null);
const sortBy = useState<null | string>("null", () => null);

const variable = () => ({
  page: page.value,
  perPage: perPage.value,
  roleId: roleId.value,
  search: search.value,
  sortBy: sortBy.value,
});

const { result, loading, refetch } = useQuery(adminUserIndexQuery, variable);
</script>

<template>
  <div
    class="d-flex flex-colomn align-start justify-start w-screen ma-4 ma-sm-8 ma-md-16"
  >
    <div class="d-flex justify-space-between" style="width: 100%">
      <div>
        <AdminSearchInput name="search" v-model="search" />
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

    sdsdsdsd
    {{ result }}
    <!-- <v-data-table-server
      v-model:items-per-page="perPage"
      :headers="headers"
      :items-length="result.totalItems"
      :items="result.Items"
      :loading="loading"
      :search="search"
      class="elevation-1"
      item-value="name"
      @update:options="refresh"
    ></v-data-table-server> -->
  </div>
</template>
