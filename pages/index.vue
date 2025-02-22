<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8">每日猫咪</h1>
    <div v-if="pending" class="text-center">
      加载中...
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      {{ error }}
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="photo in photos" :key="photo.id" class="rounded-lg overflow-hidden shadow-lg">
        <img :src="photo.src.large" :alt="photo.alt" class="w-full h-64 object-cover">
        <div class="p-4">
          <p class="text-sm text-gray-600">摄影师: {{ photo.photographer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Photo {
  id: number;
  photographer: string;
  src: {
    large: string;
  };
  alt: string;
}

const config = useRuntimeConfig();
const { data: photos, pending, error } = await useFetch<{ photos: Photo[] }>('/api/photos');
</script> 