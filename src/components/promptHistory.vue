<template>
  <div>
    <!-- Prompt history panel -->
    <div
      class="rounded-lg border border-slate-300 bg-slate-50 dark:border-slate-200/10 dark:bg-slate-900"
      style="width: 100%; height: 800px"
    >
      <div class="mx-2 mt-8">
        <button
          class="flex w-full gap-x-4 rounded-lg border border-slate-300 p-4 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 5l0 14"></path>
            <path d="M5 12l14 0"></path>
          </svg>
          创建新问答
        </button>
      </div>
      <!-- Give the following container a height to make it scrollable such as: h-80 -->
      <div class="my-4 h-800 space-y-4 overflow-y-auto px-2">
        <button
          class="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800"
        >
          <h1
            class="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
          >
            问答主题1
          </h1>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            2023年10月27日
          </p>
        </button>
        <button
          class="flex w-full flex-col gap-y-2 rounded-lg bg-slate-200 px-3 py-2 text-left transition-colors duration-200 focus:outline-none dark:bg-slate-800"
        >
          <h1
            class="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
          >
            问答主题2
          </h1>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            2023年10月28日
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
</script>
<style scoped></style>
