<template>
  <div>
    <el-page-header :icon="ArrowLeft" @back="onBack">
      <template #content>
        <el-check-tag checked style="margin-right: 8px">{{
          props.pageTitle
        }}</el-check-tag>
      </template>
    </el-page-header>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 定义props属性
const props = defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
});

const onBack = () => {
  router.go(-1);
};
</script>
<style scoped></style>
