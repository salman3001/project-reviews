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

    <v-app-bar
      class="elevation-0"
      style="border-bottom: solid rgba(128, 128, 128, 0.15) 1px"
    >
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
      <v-app-bar-title> </v-app-bar-title>
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
    <v-app-bar
      class="px-4 px-sm-8 px-md-16 elevation-0"
      style="border-bottom: solid rgba(128, 128, 128, 0.15) 1px"
    >
      <template v-slot:prepend>
        <AdminNavMenu title="Admin User">
          <v-list-item>
            <NuxtLink href="/admin/users">Users</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink href="/admin/roles">Roles & Permissions</NuxtLink>
          </v-list-item>
        </AdminNavMenu>
        <AdminNavMenu title="Help Center">
          <v-list-item>
            <v-menu location="right">
              <template v-slot:activator="{ props }">
                <a v-bind="props" @click.prevent="" style="cursor: pointer"
                  >Knowledge Base ></a
                >
              </template>

              <v-list class="ml-4" style="border-top: solid black 4px">
                <v-list-item>
                  <v-list-item-title>
                    <NuxtLink href="/admin/helpcenter/knowledgebase/content">
                      Content
                    </NuxtLink>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <NuxtLink href="/admin/helpcenter/knowledgebase/categories">
                      Categories
                    </NuxtLink>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
          <v-list-item>
            <NuxtLink href="/admin/support-tickets">Support Ticket</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink href="/admin/contact-messages">Contact Messages</NuxtLink>
          </v-list-item>
        </AdminNavMenu>
        <AdminNavMenu title="Blogs">
          <v-list-item>
            <NuxtLink href="/admin/blogs">Blog Posts</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink href="/admin/blog-categories">Categories</NuxtLink>
          </v-list-item>
        </AdminNavMenu>
      </template>
      <v-app-bar-title> </v-app-bar-title>
    </v-app-bar>

    <v-main style="min-height: 300px">
      <slot />
    </v-main>
  </v-layout>
</template>
