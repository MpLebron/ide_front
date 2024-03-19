<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#4171f6"
    >
      <el-menu-item index="0">
        <img
          style="width: 200px"
          src="@/assets/OpenGMS.png"
          alt="Element logo"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img
          style="width: 62px"
          src="@/assets/IME_logo.png"
          alt="Element logo"
        />
      </el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu index="5">
        <template #title>建模资源</template>
        <el-menu-item index="5-1">模型资源 </el-menu-item>
        <el-menu-item index="5-2">数据资源</el-menu-item>
        <el-menu-item index="5-3">工具资源</el-menu-item>
        <el-menu-item index="5-4">平台资源</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1">
        <template #title>智能引擎</template>
        <el-menu-item index="1-1">智能代理 </el-menu-item>
        <el-menu-item index="1-2">建模场景</el-menu-item>
        <el-menu-item index="1-3">工具集</el-menu-item>
        <el-menu-item index="1-4">思维链</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>知识数据</template>
        <el-menu-item index="2-1">知识图谱</el-menu-item>
        <el-menu-item index="2-2">领域数据</el-menu-item>
        <el-menu-item index="2-3">其他资源</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>应用案例</template>
        <el-menu-item index="3-1">建模案例</el-menu-item>
        <el-menu-item index="3-2">问答案例</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>个人中心</template>
        <el-menu-item index="4-1">个人信息</el-menu-item>
        <el-menu-item index="4-2">账户设置</el-menu-item>
        <el-menu-item index="4-3">退出登录</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const activeIndex = ref('1');
const handleSelect = (key: string) => {
  switch (key) {
    case '0':
      router.push('/');
      break;
    case '1-1':
      router.push('/GeoAgent');
      break;
    case '1-2':
      activeIndex.value = '1';
      break;
    case '1-3':
      activeIndex.value = '1';
      break;
    case '1-4':
      activeIndex.value = '1';
      break;
    case '2-1':
      activeIndex.value = '2';
      break;
    case '2-2':
      activeIndex.value = '2';
      break;
    case '2-3':
      activeIndex.value = '2';
      break;
    case '3-1':
      router.push('/demoSpace');
      break;
    case '3-2':
      activeIndex.value = '3';
      break;
    case '4-1':
      activeIndex.value = '4';
      break;
    case '4-2':
      activeIndex.value = '4';
      break;
    case '4-3':
      activeIndex.value = '4';
      break;
    case '5-1':
      activeIndex.value = '5';
      window.location.href =
        'https://geomodeling.njnu.edu.cn/modelItem/repository';
      break;
    case '5-2':
      activeIndex.value = '5';
      window.location.href = 'https://geomodeling.njnu.edu.cn/dataItem/hubs';
      break;
    case '5-3':
      activeIndex.value = '5';
      window.location.href = 'https://geomodeling.njnu.edu.cn/dataItem/methods';
      break;
    case '5-4':
      activeIndex.value = '5';
      break;
  }
};
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
.el-sub-menu el-menu-item {
  background-color: #ffffff !important;
}

.el-popper.is-light {
  border: 1px solid #000000;
}

.el-menu--horizontal.el-menu {
  --el-menu-border-color: #000000;
}
.el-menu--horizontal {
  height: auto !important;
}
</style>
