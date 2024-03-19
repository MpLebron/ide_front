<template>
  <div>
    <button class="button">
      <div class="text">{{ props.Type }}</div>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
  Type: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.button {
  background-color: #ffffff00;
  color: #000000;
  width: auto;
  white-space: nowrap;
  height: 2.9em;
  border: #3654ff 0.2em solid;
  border-radius: 11px;
  text-align: right;
  transition: all 0.35s ease;
}

.button:hover {
  background-color: #3654ff;
  cursor: pointer;
  color: #ffffff;
}

.text {
  margin: 0 1.5em;
}
</style>
