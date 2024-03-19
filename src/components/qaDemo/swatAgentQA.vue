<template>
  <div id="bg">
    <div id="toolbox">我是SWAT模型专家</div>
    <iframe src="https://udify.app/chatbot/qqMS4wqMSgt07UEP" allow="microphone">
    </iframe>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
</script>
<style scoped>
#bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(187, 187, 187, 0.3);
}

#toolbox {
  margin: 30px;
  width: 20%;
}

iframe {
  width: 80%;
  height: 100%;
  min-height: 800px;
  margin: 30px;
  border-radius: 20px;
}
</style>
