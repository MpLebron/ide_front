<template>
  <div class="flex flex-wrap justify-between" style="margin: 40px 80px">
    <promptHistory style="width: 20%"></promptHistory>
    <PromptContainer style="width: 78%" />
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import promptHistory from '@/components/promptHistory.vue';
import PromptContainer from '@/components/PromptContainer.vue';
</script>
<style scoped></style>
