<template>
  <div class="flex flex-col md:flex-row h-screen p-10 bg-base-300 text-slate">
    <div class="flex justify-center items-center w-full">
      <img
        src="~/assets/images/login.png"
        alt="login-image"
        class="object-contain h-full"
      />
    </div>
    <div class="w-full flex justify-center items-center p-10">
      <form class="text-start space-y-2 max-w-sm" @submit.prevent="">
        <BrandName />
        <h1 class="text-slate-600 text-4xl font-semibold">
          Welcome to Admin Dashboard! 👋
        </h1>
        <p class="text-slate-600">
          Please sign in to your account and start the adventure
        </p>
        <div class="form-control w-full">
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <div class="form-control w-full">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start gap-3">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              name="remember_me"
            />
            <span className="label-text">Remember me</span>
          </label>
        </div>
        <button type="submit" class="btn btn-primary w-full">Sign in</button>
      </form>
    </div>
  </div>
</template>
