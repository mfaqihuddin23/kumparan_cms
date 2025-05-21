<template>
  <!-- <div class="bg-yellow-100 p-8 rounded-2xl shadow-md text-center">
    <h1 class="text-4xl font-bold mb-4 text-sky-700">Festival Hari Anak 2025</h1>
    <p class="text-xl mb-6">24–25 Juli 2025 · Ex Taman Anggrek, Gelora Bung Karno</p>
    <NuxtLink to="/program" class="bg-sky-500 text-white px-6 py-2 rounded-xl hover:bg-sky-600 transition">
      Lihat Program
    </NuxtLink>
  </div> -->
  <div class="bg-yellow-100 p-8 rounded-2xl shadow-md text-center">
    <h1 class="text-xl font-bold">Event Info</h1>
    <div v-if="error" class="text-red-500">Gagal memuat data</div>
    <div v-else-if="!events">Loading...</div>
    <ul v-else>
      <li v-for="event in events" :key="event.id">
        <h1 class="text-4xl font-bold mb-4 text-sky-700">{{ event.title }}</h1>
        <p>{{ event.location }}</p>
        <p>{{ formatDateRange(event.date_start, event.date_end) }}</p>
      </li>
    </ul>
    <NuxtLink to="/program" class="bg-sky-500 text-white px-6 py-2 rounded-xl hover:bg-sky-600 transition mt-10">
      Lihat Program
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
import { formatDateRange } from '~/utils/formatDateRange';
import { useEventInfo } from '~/composables/useEventInfo';

const { data: events, error } = await useEventInfo();
</script>