<template>
  <div class="wrap-box">
    <div
      class="text-center"
      style="display: flex; flex-direction: column; gap: 10px"
    >
      <pageTitle page-title="智能环境"></pageTitle>
      <div class="mb-1 style_textGradient__2y5Fj text-3xl font-semibold">
        探索 OpenGMS 的智能地理建模环境
      </div>
      <div class="text-gray-500 text-m">
        您可以使用这些代理进行智能建模，或根据模板自定义您自己的智能代理。
      </div>
    </div>

    <el-divider />
    <div style="display: flex; justify-content: space-between; font-size: 0">
      <el-radio-group v-model="agentType" size="large">
        <el-radio-button label="模拟方案制定" />
        <el-radio-button label="模型数据处理" />
        <el-radio-button label="模型构建" />
        <!-- <el-radio-button label="模型参数配置" /> -->
        <el-radio-button label="模拟结果分析" />
        <el-radio-button label="模型优化" />
      </el-radio-group>

      <a
        class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-medium text-slate-50 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
        href="/createAgent"
        >创建智能体</a
      >
    </div>
    <div class="AgentGroup">
      <AgentItem
        v-for="(data, index) in nowAgentList"
        :key="index"
        :agent="data"
      ></AgentItem>
    </div>
    <dataPagination :page-num="nowAgentList.length"></dataPagination>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import pageTitle from '@/components/pageTitle.vue';
import AgentItem from '@/components/AgentItem.vue';
import dataPagination from '@/components/dataPagination.vue';

const agentList = {
  模型数据处理: [
    {
      id: 1,
      name: '遥感数据采集推理引导',
      provider: 'OpenGMS',
      description:
        '遥感数据推理引导是一种高度自动化的技术，利用遥感传感器和人工智能，实时收集、解释和分析地球数据。它在环境监测、资源管理和紧急响应中发挥关键作用，提供精确的地理信息，促进科学研究和可持续发展。',
      img: 'RSData.jpeg',
    },
    {
      id: 2,
      name: '气象数据采集推理引导',
      provider: 'OpenGMS',
      description:
        '遥感数据推理引导是一种高度自动化的技术，利用遥感传感器和人工智能，实时收集、解释和分析地球数据。它在环境监测、资源管理和紧急响应中发挥关键作用，提供精确的地理信息，促进科学研究和可持续发展。',
      img: 'MetroData.jpeg',
    },
    {
      id: 3,
      name: '数据预处理推理引导',
      provider: 'OpenGMS',
      description:
        '遥感数据智能推理引导是一种高度自动化的技术，利用遥感传感器和人工智能，实时收集、解释和分析地球数据。它在环境监测、资源管理和紧急响应中发挥关键作用，提供精确的地理信息，促进科学研究和可持续发展。',
      img: 'dataProcessor.jpeg',
    },
    {
      id: 4,
      name: '空间分析推理引导',
      provider: 'OpenGMS',
      description:
        '空间分析推理引导：负责对空间数据进行分析，包括空间插值、空间聚类、空间关联分析等。这个智能体可以利用地理信息系统（GIS）工具和空间分析算法来辅助空间分析。',
      img: '空间分析.png',
    },
    {
      id: 5,
      name: '数据挖掘推理引导',
      provider: 'OpenGMS',
      description:
        '数据挖掘智能体：负责对数据进行挖掘，包括数据预处理、数据分析、数据建模等。这个智能体可以利用数据挖掘工具来辅助数据挖掘。',
      img: '数据挖掘.png',
    },
  ],
  模拟方案制定: [
    {
      id: 1,
      name: '地理信息推理引导',
      provider: 'OpenGMS',
      description:
        '地理信息推理引导：负责获取研究区域的地理信息，包括地形地貌、气候、水文等。这个智能体可以利用地理信息系统（GIS）数据集、遥感影像数据集等来提供地理信息。',
      img: 'geographicInfo.jpeg',
    },
    {
      id: 2,
      name: '地形地貌推理引导',
      provider: 'OpenGMS',
      description:
        '地形地貌推理引导：负责分析研究区域的地形地貌特征，如高程、坡度、坡向等。这个智能体可以利用地形地貌分析工具、遥感影像处理工具等来提供地形地貌分析结果。',
      img: '地形地貌.jpeg',
    },
    {
      id: 3,
      name: '气候推理引导',
      provider: 'OpenGMS',
      description:
        '气候推理引导：负责分析研究区域的气候特征，如温度、降水、风速等。这个智能体可以利用气象数据集、气候模型等来提供气候分析结果。',
      img: '气候.png',
    },
    {
      id: 4,
      name: '水文推理引导',
      provider: 'OpenGMS',
      description:
        '水文专家推理引导：负责分析研究区域的水文特征，如河流、湖泊、地下水等。这个智能体可以利用水文数据集、水文模型等来提供水文分析结果。',
      img: '水文.jpeg',
    },
  ],
  模型构建: [
    {
      id: 1,
      name: '模型构建推理引导',
      provider: 'OpenGMS',
      description:
        '模型构建推理引导：负责构建研究区域的模型，包括地形地貌模型、气候模型、水文模型等。这个智能体可以利用地形地貌数据集、气象数据集、水文数据集等来构建模型。',
      img: '模型构建.png',
    },
    {
      id: 2,
      name: 'SWAT模型推理引导',
      provider: 'OpenGMS',
      description:
        'SWAT模型推理引导：负责构建研究区域的SWAT模型。这个智能体可以利用地形地貌数据集、气象数据集、水文数据集等来构建SWAT模型。',
      img: 'swat.png',
    },
  ],
  模型参数配置: [
    {
      id: 1,
      name: '模型参数配置推理引导',
      provider: 'OpenGMS',
      description:
        '模型参数配置推理引导：负责配置研究区域的模型参数，包括地形地貌模型参数、气候模型参数、水文模型参数等。这个智能体可以利用地形地貌数据集、气象数据集、水文数据集等来配置模型参数。',
      img: '参数配置.jpeg',
    },
  ],
  模拟结果分析: [
    {
      id: 1,
      name: '结果分析推理引导',
      provider: 'OpenGMS',
      description:
        '模拟结果分析推理引导：负责分析研究区域的模拟结果，包括地形地貌模拟结果、气候模拟结果、水文模拟结果等。这个智能体可以利用地形地貌模拟结果、气象模拟结果、水文模拟结果等来分析模拟结果。',
      img: '模拟结果分析.jpeg',
    },
  ],
  模型优化: [
    {
      id: 1,
      name: '模型优化推理引导',
      provider: 'OpenGMS',
      description:
        '模型优化推理引导：负责优化研究区域的模型，包括地形地貌模型优化、气候模型优化、水文模型优化等。这个智能体可以利用地形地貌模拟结果、气象模拟结果、水文模拟结果等来优化模型。',
      img: '参数优化.jpeg',
    },
    {
      id: 2,
      name: '敏感性分析推理引导',
      provider: 'OpenGMS',
      description:
        '敏感性分析推理引导：负责分析研究区域的模型敏感性，包括地形地貌模型敏感性、气候模型敏感性、水文模型敏感性等。这个智能体可以利用地形地貌模拟结果、气象模拟结果、水文模拟结果等来分析模型敏感性。',
      img: 'sensityvityAnalysis.jpeg',
    },
  ],
};

type AgentType =
  | '模型数据处理'
  | '模拟方案制定'
  | '模型构建'
  | '模型参数配置'
  | '模拟结果分析'
  | '模型优化';

const agentType = ref('模拟方案制定' as AgentType); // 创建一个响应式的引用
const nowAgentList = ref(agentList[agentType.value]); // 使用 .value 属性来访问引用的值

watch(agentType, (newVal) => {
  nowAgentList.value = agentList[newVal];
});
</script>
<style scoped>
.wrap-box {
  width: 80%;
  margin: 40px auto;
}
.style_textGradient__2y5Fj {
  background: linear-gradient(90deg, #104ae1 0, #0098ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.font-semibold {
  font-weight: 600;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-gray-500 {
  color: rgb(107 114 128/1);
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.AgentGroup {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
