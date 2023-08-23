<script setup>
useSeoMeta({
  title: "A simple Nuxt app listing popular web development frameworks",
  description: "A simple Nuxt app that lists items from a Turso database",
});
</script>

<template>
  <nav class="py-2 px-4 flex space-x-2">
    <NuxtLink to="/" class="font-semibold" title="home page">Home</NuxtLink>
    <NuxtLink to="/add-new" class="font-semibold" title="add-new page"
      >Add New</NuxtLink
    >
    <NuxtLink to="/about" class="font-semibold" title="about page"
      >About</NuxtLink
    >
    <NuxtLink to="/Login" class="font-semibold" title="about page"
      >Login</NuxtLink
    >
    <NuxtLink to="/register" class="font-semibold" title="about page"
      >Sign Up</NuxtLink
    >
  </nav>
  <main class="p-4 flex flex-col space-y-6">
    <NuxtPage />
  </main>
</template>

<style lang="postcss">
a {
  @apply text-blue-600 hover:text-blue-700;
}
h1 {
  @apply text-2xl font-bold text-center text-gray-700;
}
</style>
