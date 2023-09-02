<template>
  <div class="dropdown dropdown-end relative">
    <span
      class="absolute badge badge-sm rounded-full badge-secondary w-4 h-4 z-10 top-0 right-0 p-1 text-xs"
      >12</span
    >
    <label tabindex="0" class="btn btn-sm btn-ghost btn-circle avatar">
      <div class="w-6 rounded-full">
        <Icon
          name="material-symbols:notifications-outline-sharp"
          class="text-primary"
          size="20"
        />
      </div>
    </label>
    <ul
      tabindex="0"
      class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    >
      <li>
        <a class="justify-between">
          Notification 1
          <span class="badge badge-sm badge-secondary">New</span>
        </a>
      </li>
      <li><a>Notification 2</a></li>
      <li><a>Notification 3</a></li>
    </ul>
  </div>
</template>
