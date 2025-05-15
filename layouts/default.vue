<template>
  <div>
    <header class="bg-sky-600 text-white p-4">
      <nav class="flex gap-4">
        <NuxtLink to="/">Beranda</NuxtLink>
        <NuxtLink to="/program">Program</NuxtLink>
        <NuxtLink to="/rundown">Rundown</NuxtLink>
        <NuxtLink to="/permainan">Permainan</NuxtLink>
        <NuxtLink to="/galeri">Galeri</NuxtLink>
        <NuxtLink to="/kontak">Kontak</NuxtLink>
      </nav>
    </header>
    <main class="p-6">
      <slot />
    </main>
    <footer class="bg-sky-100 p-4 text-center">
      &copy; 2025 Festival Hari Anak
    </footer>
  </div>
</template>
