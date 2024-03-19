<template>
  <div class="main">
    <VuePdfApp
      style="height: 100vh"
      pdf="https://arxiv.org/pdf/2212.10496.pdf"
    ></VuePdfApp>
    <iframe
      src="https://udify.app/chatbot/GoizMmX5TZhRMq0H"
      style="width: 100%; height: 100%; min-height: 700px"
      frameborder="0"
      allow="microphone"
    >
    </iframe>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import VuePdfApp from 'vue3-pdf-app';
// import this to use default icons for buttons
import 'vue3-pdf-app/dist/icons/main.css';
</script>
<style scoped></style>
