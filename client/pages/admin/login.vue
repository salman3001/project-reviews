<script setup lang="ts">
import { Icon } from "#components";
import useAuthStore from "~/store/useAuthStroe";

const query = gql`
  query {
    adminUsers {
      firstName
    }
  }
`;

// const { mutate } = useMutation(query);

definePageMeta({
  // middleware: ["guest"],
});

const authStore = useAuthStore();
const visible = useState("visible", () => false);

const EyeOpenIcon = h(Icon, {
  name: "material-symbols:visibility-outline-rounded",
});
const MailIcon = h(Icon, {
  name: "mdi-email-outline",
});
const EyeCloseIcon = h(Icon, {
  name: "material-symbols:visibility-off-outline",
});

const LockIcon = h(Icon, {
  name: "mdi-lock-outline",
});

const email = useState("email", () => "");
const password = useState("password", () => "");

const login = async () => {
  console.log("ran");
  const { result, refetch } = useQuery(query);
  console.log(result);
  refetch();
};
</script>

<template>
  <div
    class="flex flex-col md:flex-row h-screen p-10 text-slate bg-secondary bg-opacity-10"
  >
    <div class="w-full flex justify-center items-center p-16">
      <form
        class="text-start space-y-2 max-w-lg border-2 bg-white rounded-lg p-8 shadow-2xl"
        @submit.prevent="login"
      >
        <!-- <Brand /> -->
        <h1 class="text-xl font-bold text-center">Welcome back!</h1>
        <p class="text-slate-600">
          Please sign in to your account and start the adventure
        </p>
        <div class="form-control w-full">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <div class="form-control w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <span class="text-red-500"> </span>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer flex justify-start gap-3">
            <input
              type="checkbox"
              class="checkbox checkbox-primary"
              name="remember_me"
            />
            <span class="label-text">Remember me</span>
          </label>
        </div>
        <button type="submit" class="btn btn-primary w-full">Sign in</button>
      </form>
    </div>
  </div>
</template>
