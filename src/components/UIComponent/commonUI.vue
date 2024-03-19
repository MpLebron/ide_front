<template>
  <div style="margin: 50px 20px" class="space-y-8">
    <div id="button" class="space-x-4">
      <el-button
        class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-medium text-slate-50 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
        >Default</el-button
      >
    </div>

    <div id="input" class="space-x-4">
      <el-input v-model="input" />
    </div>

    <div id="switch">
      <div class="px-2 py-4">
        <label class="relative flex cursor-pointer items-center">
          <input type="checkbox" v-model="value1" class="peer sr-only" />
          <div
            class="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-blue-800"
          ></div>
          <span
            class="ml-3 text-sm font-medium text-slate-800 dark:text-slate-200"
            >{{ value1 }}</span
          >
        </label>
      </div>
    </div>

    <div id="超链接">
      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
        >下载</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('');
const value1 = ref(false);
</script>
<style></style>
