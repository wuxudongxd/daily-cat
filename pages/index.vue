<template>
  <div class="container mx-auto px-4 py-4 sm:py-8 min-h-screen flex flex-col">
    <h1 class="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">今日猫猫</h1>

    <div class="flex-1 flex items-start sm:items-center justify-center">
      <div class="w-full max-w-2xl mx-auto px-4">
        <div class="rounded-lg overflow-hidden shadow-lg">
          <div class="relative h-64 sm:h-96 bg-gray-200">
            <img :src="photo?.src.medium" :alt="photo?.alt || '今日猫猫'"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              :class="{ 'opacity-0': !imageLoaded || pending }" @load="handleImageLoad" loading="eager"
              decoding="async">
          </div>
          <div class="p-3 sm:p-4 flex justify-between items-center">
            <p class="text-xs sm:text-sm text-gray-600">
              {{ pending ? '加载中...' : `摄影师: ${photo?.photographer}` }}
            </p>
            <button @click="refreshPhoto"
              class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg inline-flex items-center gap-2 disabled:opacity-50 text-sm sm:text-base"
              :disabled="pending">
              <svg v-if="pending" class="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>{{ pending ? '加载中...' : '换一张' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <footer class="mt-4 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
      Photos provided by <a href="https://www.pexels.com" target="_blank" class="underline">Pexels</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFetch } from 'nuxt/app'

interface Photo {
  id: number;
  photographer: string;
  src: {
    medium: string;
    large: string;
    original: string;
  };
  alt: string;
}

interface ApiResponse {
  photo: Photo;
}

// 添加一个变量来控制图片过渡
const imageLoaded = ref(false)

const { data, pending, error, refresh } = await useFetch<ApiResponse>('/api/photos', {
  key: `photos-${Date.now()}`
})

const photo = computed(() => data.value?.photo)

const refreshPhoto = () => {
  imageLoaded.value = false
  refresh()
}

// 图片加载完成的处理函数
const handleImageLoad = () => {
  imageLoaded.value = true
}
</script>