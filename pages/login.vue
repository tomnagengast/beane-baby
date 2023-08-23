<script setup>
const form = reactive({
  email: "",
  password: "",
});
const loading = ref(false);
const status = reactive({
  message: "",
  type: "",
});

async function handleLogin() {
  if (!form.email.value || !form.password.value) return;
  console.log(form.email.value, form.password.value);
  //   const data = await $fetch("/api/login", {
  //     method: "POST",
  //     body: {
  //       email: email.value,
  //       password: password.value,
  //     },
  //   });

  //   if (data) {
  //     toast.add({ title: data.error });
  //     return;
  //   }

  //   navigateTo("/");
}
</script>
<template>
  <div v-text="form"></div>
  <div class="min-h-screen flex flex-col justify-center items-center space-y-3">
    <div>Login</div>
    <input
      v-model="form.email"
      class="rounded-md"
      type="text"
      placeholder="email"
      icon="i-heroicons-envelope"
    />
    <input
      id="password"
      v-model="form.password"
      class="rounded-md"
      type="password"
      name="password"
      placeholder="password"
      icon="i-heroicons-lock-closed"
    />
    <button
      class="rounded bg-slate-500 text-white px-4 py-2"
      @click="handleLogin"
    >
      Login
    </button>
    <span class="text-sm">or <a href="/register">Sign up</a></span>
  </div>
</template>
