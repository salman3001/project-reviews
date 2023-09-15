<script setup lang="ts">
const drawer = useState("drawer", () => false);
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer temporary v-model="drawer">
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="elevation-1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="hidden-sm-and-up">
          <v-btn color="primary" @click.stop="drawer = !drawer">
            <Icon name="material-symbols:lists" size="30"
          /></v-btn>
        </v-app-bar-nav-icon>
        <div class="pl-6">
          <BrandLogo />
        </div>
      </template>
      <v-app-bar-title>
        <AdminNavMenu
          :items="[
            { title: 'Users', href: '/admin/users' },
            { title: 'Roles & Permissions', href: '/admin/roles' },
          ]"
        />
      </v-app-bar-title>
      <template v-slot:append>
        <v-container>
          <v-row align="center">
            <v-col>
              <AdminSearchBar />
            </v-col>
            <v-col>
              <AdminNotificationMenu />
            </v-col>
            <v-col>
              <AdminAvatar />
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <slot />
    </v-main>
  </v-layout>
</template>
