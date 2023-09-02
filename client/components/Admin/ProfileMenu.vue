<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-sm btn-ghost btn-circle avatar">
      <div class="w-6 rounded-full">
        <img src="~/assets/images/dp.jpg" />
      </div>
    </label>
    <ul
      tabindex="0"
      class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    >
      <li>
        <a class="justify-between">
          Profile
          <span class="badge badge-secondary">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
  </div>
</template>
