<template>
  <header class="container mx-auto text-purplecms-100 p-4">
    <nav class="flex justify-between items-center gap-4">
      <NuxtLink to="/"><img class="" src="/public/img/svg/img_logo-brand.svg" alt="kumparan logo"></NuxtLink>
      <div class="flex gap-[60px]">
        <div class="flex items-center gap-4">
          <!-- <NuxtLink to="/program">Program</NuxtLink> -->
          <!-- Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center">
              Program
              <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <ul
              class="absolute top-full left-0 bg-yellowcms-100 shadow rounded mt-2 w-48 p-2 hidden group-hover:block"
            >
              <li><NuxtLink to="/program" class="dropdown-link">Semua Program</NuxtLink></li>
              <li><NuxtLink to="/program" class="dropdown-link">Kategori A</NuxtLink></li>
              <li><NuxtLink to="/program" class="dropdown-link">Kategori B</NuxtLink></li>
            </ul>
          </div>
          <NuxtLink to="/rundown">Rundown</NuxtLink>
          <NuxtLink to="/permainan">Permainan</NuxtLink>
          <NuxtLink to="/galeri">Galeri</NuxtLink>
          <NuxtLink to="/kontak">Kontak</NuxtLink>
        </div>
        <NuxtLink to="/">
          <div class="relative inline-block text-white font-bold text-sm px-6 py-2 rounded-full bg-[#F5821F] shadow-[0_6px_0_0_#7533A5] hover:brightness-110 transition">
            DAPATKAN TIKET
          </div>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
<script setup>

</script>