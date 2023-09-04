<script setup lang="ts">
const { theme } = useTheme();
</script>

<template>
  <div class="drawer lg:drawer-open" :data-theme="theme">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div
      class="drawer-content min-h-screen flex flex-col items-center justify-between"
    >
      <!-- Page content here -->
      <div class="navbar bg-base-100 space-x-1">
        <div class="flex-1">
          <label
            for="my-drawer-2"
            class="btn btn-sm px-1 drawer-button lg:hidden"
          >
            <Icon name="ep:expand" size="25" class="text-primary" />
          </label>
          <NuxtLink
            to="/admin"
            class="btn btn-ghost btn-sm normal-case text-xl hidden md:flex justify-center items-center"
          >
            Brand
          </NuxtLink>
        </div>
        <div class="w-full flex justify-end gap-2 relative shadow">
          <div class="form-control w-full relative">
            <Icon
              name="material-symbols:search"
              class="text-gray-400 absolute left-2 top-1/2 -translate-y-1/2"
              size="20"
            />
            <input
              type="text"
              placeholder="Search"
              class="input input-sm input-bordered w-full md:w-auto pl-8"
            />
          </div>
          <div class="flex gap-0.5 absolute justify-center items-center">
            <AdminTogelTheme theme="dark" />
            <AdminNotificationMenu />
            <AdminProfileMenu />
          </div>
        </div>
      </div>
      <div>
        <slot />
      </div>
      <AdminFooter />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay" />
      <ul
        class="menu p-4 w-52 min-h-full bg-base-200 text-base-content overflow-y-scroll"
      >
        <NuxtLink
          to="/admin"
          class="btn btn-ghost btn-sm normal-case text-xl hidden md:flex justify-center items-center"
        >
          Brand
        </NuxtLink>
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
