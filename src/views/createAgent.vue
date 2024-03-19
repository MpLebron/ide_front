<template>
  <div>
    <el-tabs
      style="margin: 40px; border-radius: 6px; overflow: hidden"
      type="border-card"
      class="demo-tabs"
    >
      <el-tab-pane label="基本信息"> <step1Com /> </el-tab-pane>
      <el-tab-pane label="功能配置">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import step1Com from '../components/createAgentComponent/step1Com.vue';
</script>
<style scoped></style>
