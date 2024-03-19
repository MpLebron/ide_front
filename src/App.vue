<template>
  <div>
    <page-header />
    <RouterView></RouterView>
    <pageFooter />
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import pageHeader from '@/components/pageHeader.vue';
import pageFooter from './components/pageFooter.vue';
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}

.el-input {
  all: unset !important;
}

.el-input__inner {
  all: unset !important;
}

.el-input__wrapper {
  all: unset !important;
}

.el-input__inner {
  border: 1px solid rgba(203, 213, 225, 1) !important;
  --tw-bg-opacity: 1 !important;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity)) !important;
  padding: 0.75rem /* 12px */ !important;
  padding-right: 2.5rem /* 40px */ !important;
  font-size: 0.875rem /* 14px */ !important;
  line-height: 1.25rem /* 20px */ !important;
  --tw-text-opacity: 1 !important;
  color: rgb(30 41 59 / var(--tw-text-opacity)) !important;
  border-radius: 0.5rem /* 8px */ !important;
}

.el-input__inner:focus {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000) !important;
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity)) !important;
}
</style>
